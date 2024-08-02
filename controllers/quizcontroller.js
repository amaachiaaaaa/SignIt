import { quizModel } from "../models/quizmodel.js";
import { quizSchema } from "../schema/quizschema.js";

// Create/add a quiz
export const addQuiz = async (req, res) => {
    try {
        const { error, value } = quizSchema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        
        // Create quiz with the validated data
        const newQuiz = await quizModel.create({...value,user:user.id});

        // Push the new quizzes ID to the quiz
        user.quizzes.push(newQuiz);
        await user.save();
       
        // Return the newly created quiz
        res.status(201).json({ quiz: newQuiz });
    } catch (error) {
        console.error('Error adding Quiz:', error);
        res.status(500).send(error.message);
    }
};


// Get all quizzes
export const allQuizzes = async (req, res) => {
    try {
        const quizId = req.session?.quiz?.id || req?.quiz?.id;
      if (!quizId) {
          return res.status(401).send('Unauthorized: Quiz ID is missing');
      }
        const allQuizzes = await quizModel.find({ quiz: quizId });
       
        res.status(200).json({ quizzes: allQuizzes ,
            message:"Quiz added sucessfully",
        });
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).send(error.message);
    }
};

// Get a single quiz by ID
export const getQuiz = async (req, res) => {
    try {
        const quizId = req.session?.quiz?.id || req?.quiz?.id;
        if (!quizId) {
            return res.status(401).send('Unauthorized: No Quiz ID found in session or token');
        }
        const quiz = await quizModel.findOne({ _id: req.params.id, quiz: quizId })
        if (!quiz) {
            return res.status(404).send('Quiz not found');
        }
        res.status(200).json({ quiz });
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).send(error.message);
    }
};


// Delete a quiz
export const deleteQuiz = async (req, res) => {
    try {
        const deletedQuiz = await quizModel.findByIdAndDelete(req.params.quizId);

        if (!deletedQuiz) {
            return res.status(404).send('Quiz not found');
        }

        res.status(200).json({ quiz: deletedQuiz ,
            message:"Quiz deleted sucessfully",
        });
    } catch (error) {
        console.error('Error deleting Quiz:', error);
        res.status(500).send(error.message);
    }
};
