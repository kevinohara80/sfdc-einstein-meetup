const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const cert = fs.readFileSync('./einstein_platform.pem', 'utf-8');

const SFDC_USER = process.env.SFDC_USER;

if (!SFDC_USER) throw new Error('You must supply a SFDC_USER environment variable');

console.log('SFDC_USER: ' + SFDC_USER);

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

console.log('')
console.log('TOKEN START >>>>>>')
console.log(encodeURIComponent(token));
console.log('<<<<<< TOKEN END')
console.log('');

const file = path.resolve(__dirname, './signed_token');

console.log('writing signed token: ' + file)

fs.writeFileSync(file, encodeURIComponent(token), { encoding: 'utf8' });