const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UnitPriceService {
  constructor() {
    this.unitPrices = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.unitPrices.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newUnitPrice = await models.UnitPrice.create(data);
    return newUnitPrice;
  }

  async find() {
    const options = {
      include: [
        {
          model: models.Product,
          as: 'product',
          where: {},
        },
      ],
      where: {},
    };
    const unitPrices = await models.UnitPrice.findAll(options);
    return unitPrices;
  }

  async findOne(id) {
    const unitPrice = await models.UnitPrice.findByPk(id, {
      include: ['product'],
    });
    if (!unitPrice) {
      throw boom.notFound('Unit price not found');
    }
    return unitPrice;
  }

  async update(id, updatedData) {
    const unitPrice = await models.UnitPrice.findByPk(id);
    if (!unitPrice) {
      throw boom.notFound('Unit price not found');
    }

    await models.UnitPrice.update(updatedData, {
      where: { id },
    });

    const updatedUnitPrice = await models.UnitPrice.findByPk(id);

    return updatedUnitPrice;
  }

  async delete(id) {
    const unitPrice = await models.UnitPrice.findByPk(id);
    if (!unitPrice) {
      throw boom.notFound('Unit price not found');
    }
    await models.UnitPrice.destroy({
      where: { id },
    });
    return { id };
  }
}

module.exports = UnitPriceService;
