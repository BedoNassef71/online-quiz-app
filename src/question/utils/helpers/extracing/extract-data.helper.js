// Helper function to extract question data from request body
const extractDataHelper = (req) => ({
  text: req.body.text,
  options: req.body.options,
  correctAnswer: req.body.correctAnswer,
  quizId: req.body.quizId,
});

module.exports = { extractQuestionData: extractDataHelper };
