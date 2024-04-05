const { query, param, body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/middlewares/validation-utils.middleware");
const { checkQuizPassword } = require("../helpers/check-quiz-password.helper");

const deleteQuestionValidator = [
 param("id")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID"),

 body("password")
    .notEmpty().withMessage("quiz password is required")
    .custom(checkQuizPassword),

 handleValidationErrors,
];

module.exports = deleteQuestionValidator;