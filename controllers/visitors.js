const services = require("../services/visitors");
const { reqErrorMaker } = require("../helpers");

const getVisitors = async (_, res) => {
  const visitors = await services.getAllVisitors();
  res.json({ visitors, message: "Success" });
};

const getVisitorById = async (req, res) => {
  const { visitorId } = req.params;
  const visitor = await services.getVisitorById(visitorId);
  if (!visitor) {
    throw reqErrorMaker(404, `Visitor with id ${visitorId} not found`);
  }
  res.json({ visitor, message: "Success" });
};

const addVisitor = async (req, res) => {
  const { body } = req;
  const visitor = await services.addVisitor(body);

  res.status(201).json({ visitor: [visitor], message: "Success" });
};

const updateVisitor = async (req, res) => {
  const { body } = req;
  const { visitorId } = req.params;
  const visitor = await services.updateVisitor(visitorId, body);
  if (!visitor) {
    throw reqErrorMaker(404, `Visitor with id ${visitorId} not found`);
  }
  res.json({ visitor: [visitor], message: "Visitor successfully updated" });
};

const deleteVisitor = async (req, res) => {
  const { visitorId } = req.params;
  const visitor = await services.deleteVisitor(visitorId);
  if (!visitor) {
    throw reqErrorMaker(404, `Visitor with id ${visitorId} not found`);
  }
  res.json({ message: "Visitor successfully deleted" });
};

module.exports = {
  getVisitors,
  getVisitorById,
  addVisitor,
  updateVisitor,
  deleteVisitor,
};
