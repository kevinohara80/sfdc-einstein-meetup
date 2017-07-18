const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const request = require('sync-request');
const qs = require('querystring');

if(!fs.existsSync('./einstein_platform.pem')) {
  throw new Error('missing einstein_platform.pem file');
}

const cert = fs.readFileSync('./einstein_platform.pem', 'utf-8');

const SFDC_USER = process.env.SFDC_USER;

if (!SFDC_USER) throw new Error('You must supply a SFDC_USER environment variable');

console.log('obtaining token for user: ' + SFDC_USER);

const payload = {
  "sub": SFDC_USER,
  "aud": 'https://api.einstein.ai/v2/oauth2/token'
}

const options = {
  header: {
    "alg": "RS256",
    "typ": "JWT"
  },
  expiresIn: '25h'
}

const token = jwt.sign(payload, cert, options);

const encodedToken = encodeURIComponent(token);

const res = request('POST', 'https://api.einstein.ai/v2/oauth2/token', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: qs.stringify({
    'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion': encodedToken
  })
});

const body = JSON.parse(res.body.toString());

if (!body.access_token) {
  throw new Error('unable to obtain access token: ' + body.message);
}

const file = path.resolve(__dirname, 'access_token.json')

console.log('access token: ' + body.access_token);
console.log('writing access token to file: ' + file);

fs.writeFileSync(file, JSON.stringify(body, null, '  '), { encoding: 'utf8' });