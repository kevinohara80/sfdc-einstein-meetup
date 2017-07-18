# Einstein Demo

## Setup

1. Clone this repo
2. Visit [https://einstein.ai/](https://einstein.ai/)
3. Log in with your Salesforce credentials
4. Download your certificate
5. Put your certificate into the root of this project (einstein_platform.pem)
6. Install node modules with `npm install`

## Generating a Token

Once the setup steps have been completed, you can run the token script to 
generate a signed JWT assertion that you will use to get an access token.
You must supply your username to the script.

```bash
$ USER=kevinohara80@gmail.com node token.js
```