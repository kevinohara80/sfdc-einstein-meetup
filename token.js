const jwt = require('jsonwebtoken');
const fs = require('fs');
const cert = fs.readFileSync('./einstein_platform.pem', 'utf-8');

const payload = {
  "sub": 'kevinohara80@gmail.com',
  "aud": 'https://api.einstein.ai/v2/oauth2/token'
}

const options = {
  header: {
    "alg": "RS256",
    "typ": "JWT"
  },
  expiresIn: '25h'
}

jwt.sign(payload, cert, options, (err, token) => {
  if (err) throw err;
  console.log(encodeURIComponent(token));
});