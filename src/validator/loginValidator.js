const Joi = require("joi");

const validateLogin = (user) => {
  const result = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(30).presence("required"),
  })
    .required()
    .validate(user, { abortEarly: false }).error;
  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));
    return { errorCount: result.details.length, errorMessages };
  }
  return false;
};

module.exports = validateLogin;
