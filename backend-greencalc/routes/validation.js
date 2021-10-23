const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    phone: Joi.string().min(9).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data)
};

const loginValidation = (data) => {
  const schema = Joi.object({
    phone: Joi.string().min(9).required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data)
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
