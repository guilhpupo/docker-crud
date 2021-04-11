const Item = require("../models/Item");

module.exports = {
  async index(req, res) {
    try {
      const items = await Item.findAll();
      return res.status(200).json({ items });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  async store(req, res) {
    try {
      const item = await Item.create(req.body);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  async show(req, res) {
    try {
      const item = await Item.findAll({ where: { id: req.params.id } });
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  async update(req, res) {
    try {
      const item = await Item.update(req.body, {
        where: { id: req.params.id },
      });
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  async destroy(req, res) {
    try {
      await Item.destroy({ where: { id: req.params.id } });
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};
