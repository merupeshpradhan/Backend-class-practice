import ApiError from "../utils/api-error.js";

const validate = (Dtoclass) => {
  return (req, res, next) => {
    const { errors, valu } = Dtoclass.validate(req.body);

    if (errors) {
      throw ApiError.badRequest(errors.join(";"));
    }
    req.body = valu;
    next();
  };
};

export default validate;