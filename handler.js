"use strict";

const createProduct = require("./src/create");
const getProduct = require("./src/getOne");
const getAllProducts = require("./src/getAll");
const deleteProduct = require("./src/delete");

const create = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await createProduct(data);
  const response = { body: JSON.stringify(result) };
  return response;
};

const getAll = async (event, context) => {
  const result = await listProducts();
  const response = { body: JSON.stringify(result) };
  return response;
};

const getOne = async (event, context) => {
  const result = await getProduct(event.pathParameters.id);
  const response = { body: JSON.stringify(result) };
  return response;
};

const remove = async (event, context) => {
  const result = await deleteProduct(event.pathParameters.id);
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
  getOne,
  getAll,
  remove
};
