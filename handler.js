"use strict";

const createProduct = require("./src/create");
const viewProduct = require("./src/view");
const listProducts = require("./src/list");
const removeProduct = require("./src/remove");

const create = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await createProduct(data);
  const response = { body: JSON.stringify(result) };
  return response;
};

const list = async (event, context) => {
  const result = await listProducts();
  const response = { body: JSON.stringify(result) };
  return response;
};

const view = async (event, context) => {
  const result = await viewProduct(event.pathParameters.id);
  const response = { body: JSON.stringify(result) };
  return response;
};

const remove = async (event, context) => {
  const result = await removeProduct(event.pathParameters.id);
  const response = {
    body: JSON.stringify({
      message: "product removed",
      product: result
    })
  };
  return response;
};

module.exports = {
  create,
  view,
  list,
  remove
};
