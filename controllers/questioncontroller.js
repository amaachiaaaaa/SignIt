import { questionModel} from "../models/questionModel.js";
import { questionSchema } from "../schema/questionschema.js";
import { quizModel } from "../models/quizmodel.js";


// adding a question to a quiz
export const addQuestion = async (req, res) => {
    try {
      const { error, value } = questionSchema.validate(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const id = req.session?.quiz?.id || req?.quiz?.id; 
      
      const quiz = await quizModel.findById(id);
      if (!quiz) {
        return res.status(404).send('Quiz not found');
      }
      // create question with the validated data
  
      const newQuestion = await questionModel.create({...value, user:user.id});
  
    //   add and save new question
      user.question.push(newQuestion); 
      await user.save(); // Save the updated question
  
      res.status(201).json({ education: newEducation ,
        message:"Question added sucessfully",
      });
    } catch (error) {
      console.error('Error adding question:', error);
      res.status(500).send(error.message);
    }
  };

// Delete a question from a quiz
export const deleteQuestion = async (req, res) => {
    try {
      const deletedQuestion = await questionModel.findByIdAndDelete(req.params.questionId);
  
      if (!deletedQuestion) {
        return res.status(404).send('Question not found');
      }
  
      // Remove question reference from quiz
      const quiz = await quizModel.findById(deletedEducation.user);
      if (quiz) {
        quiz.question = quiz.question.splice(questionId => questionId.toString() !== req.params.questionId);
        await quiz.save();
      }
  
      res.status(200).json({ message: 'Question deleted successfully', question: deletedQuestion });
    
    } catch (error) {
      console.error('Error deleting question:', error);
      res.status(500).send(error.message);
    }
  };
