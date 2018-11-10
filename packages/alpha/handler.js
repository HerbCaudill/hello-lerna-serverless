const {respond} = require('@hello-lerna-serverless/utils')

module.exports.hello = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: respond('alpha')
  }
};
