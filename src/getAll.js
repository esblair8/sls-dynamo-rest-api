const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async () => dynamoDb.scan({ TableName: "products" }).promise();
