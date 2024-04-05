const { query, param } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/middlewares/validation-utils.middleware");
const {
  checkIfQuizExists,
} = require("../../../answer/utils/helpers/validation-quiz-activation.helper");

const findOneGradeValidator = [
  param("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(checkIfQuizExists),

  query("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isNumeric()
    .withMessage("userId must be a valid number"),

  handleValidationErrors,
];

module.exports = { findOneGradeValidator };