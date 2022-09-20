const { Visitor } = require("../models/visitor");

const getAllVisitors = async () => {
  return Visitor.find();
};

const getVisitorById = async (id) => {
  return Visitor.findById(id);
};

const addVisitor = async (body) => {
  return Visitor.create(body);
};

const updateVisitor = async (id, body) => {
  return await Visitor.findByIdAndUpdate(id, body, { new: true });
};

const deleteVisitor = async (id) => {
  return await Visitor.findByIdAndRemove(id);
};

module.exports = {
  getAllVisitors,
  getVisitorById,
  addVisitor,
  updateVisitor,
  deleteVisitor,
};
