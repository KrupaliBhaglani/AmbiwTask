// velidation
import Joi from "joi";

function checkAccountSchema(req, res, next) {
  const schema = Joi.object({
    FirstName: Joi.string().required(),
    Email: Joi.string().email().required(),
    LastName: Joi.string().required(),
    Mobile: Joi.number().required(),
    Password: Joi.string().required(),
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

// module.exports = checkAccountSchema;
export { checkAccountSchema };
