// velidation
import Joi from "joi";

function checkTaskSchema(req, res, next) {
  const schema = Joi.object({
    Title: Joi.string().required(),
    Description: Joi.string().required(),
    isActive: Joi.boolean(),
    Status: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function validateRequest(req, next, schema) {
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}

// module.exports = checkTaskSchema;
export { checkTaskSchema };
