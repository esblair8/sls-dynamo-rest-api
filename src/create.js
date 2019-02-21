"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require("uuid");

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
  const result = await dynamoDb.put(params).promise();
  return params.Item;
};
