# Einstein Demo

## Setup

1. Clone this repo
2. Visit [https://einstein.ai/](https://einstein.ai/)
3. Log in with your Salesforce credentials
4. Download your certificate
5. Put your certificate into the root of this project (einstein_platform.pem)
6. Install node modules with `npm install`

## Generating an Access Token

Once the setup steps have been completed, you can run the token script to 
generate a signed JWT assertion that you will use to get an access token.
You must supply your username to the script.

```bash
$ USER=kevinohara80@gmail.com node token.js
```

When the script completes, you will have an access token. It will be output
to you console as well as output to a json file (`./access_token.json`). You
can use this token for making future requests.

## Testing the API from Postman

If you use Postman, there is a Postman collection json config in this repo
that you can import into Postman. You just need to set an `access_token` global
variable to make all of the requests. See the previous section for generating
an access token.

## Trying the Vision API in Salesforce

In the src folder, you'll find the required src files to set up the vision API. 
The example data is similar to what's found in the Apex Quickstart guide on the
Metamind docs site. There is a `Predict.page` file that drives a Visualforce page that allows you to test images against their prediction model. Note that you will
need to change the username in `VisionController.cls` and also [install the certificate](https://metamind.readme.io/docs/upload-your-key) into Files 
according to the setup guide.

## Other Resources

* [Einstein Home](https://einstein.ai/)
* [Einstein Docs](https://metamind.readme.io/v2/docs)
* [Einstein Platform Developer Forum](https://developer.salesforce.com/forums?communityId=09aF00000004HMGIA2#!/feedtype=RECENT&dc=Predictive_Services&criteria=ALLQUESTIONS)
* [Apex JWT Project on Github](https://github.com/salesforceidentity/jwt)
* [MetaMind Apex Utils Project on Github](https://github.com/MetaMind/apex-utils)