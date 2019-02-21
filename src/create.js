"use strict";

const AWS = require("aws-sdk");
const uuid = require("uuid");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async data => {
  const params = {
    TableName: "products",
    Item: {
      name: data.name,
      quantity: data.quantity,
      id: uuid.v1(),
      addedAt: Date.now()
    }
  };

  await dynamoDb
    .put(params)
    .promise();

  return params.Item;
};
