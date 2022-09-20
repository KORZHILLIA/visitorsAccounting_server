const { Schema, model } = require("mongoose");
const Joi = require("joi");

const visitorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addVisitorSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const updateVisitorSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
});

const Visitor = model("visitor", visitorSchema);
const schemas = { addVisitorSchema, updateVisitorSchema };

module.exports = { Visitor, schemas };
