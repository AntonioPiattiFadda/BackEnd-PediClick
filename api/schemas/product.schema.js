const Joi = require('joi');
const { createUnitPriceSchemaWithProducts } = require('./unit-price.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();
const unitPrices = Joi.array().items(createUnitPriceSchemaWithProducts);

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const product = Joi.object({
  name: name.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const createProductSchema = Joi.object({
  product: product,
  unitPrices: unitPrices.min(1).required(),
});

const updateProductSchema = Joi.object({
  name: name,
  image: image,
  description: description,
  categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price_min,
  price_max: Joi.when('price_min', {
    is: Joi.exist(),
    then: price_max.required(),
  }),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};
