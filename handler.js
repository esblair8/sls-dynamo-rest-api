"use strict";

const addProduct = require("./src/create");

const create = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await addProduct(data);
  const response = {
    body: JSON.stringify(result)
  };
  return response;
};

module.exports = {
  create
};
