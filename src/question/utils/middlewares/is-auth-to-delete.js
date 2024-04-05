const quizService = require('../../../quiz/quiz.service');

const isAuthToDelete = async (req,res,nextٍ)=>{
    const userId = req.user.id;
    const {id} = req.params;

    const quiz = await quizService.findOne(id);
    if(quiz.userId == userId){
        nextٍ();
    }else{
        res.status(401).json({message: 'You are not the owner of this quiz'});
    }
}

module.exports = {
    isAuthToDelete,
};