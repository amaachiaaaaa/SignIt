import { finalAssesmentModel } from "../models/finalassesmentmodel.js";
import { finalAssesmentSchema } from "../schema/finalassesmentschema.js";

// Create/add a quiz
export const addFinalAssesment = async (req, res) => {
    try {
        const { error, value } = finalAssesmentSchema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Finding an assesment
        const id = req.session?.finalAssesment?.id || req?.finalAssesment?.id; 
        
        // Assuming assesment ID is stored in session
        const finalAssesment = await finalAssesmentModel.findById(id); 
        if (!finalAssesment) {
            return res.status(404).send('Final Assesment not found');
        }
        // Create assesment with the validated data
        const newFinalAssesment = await finalAssesmentModel.create({...value,user:user.id});

        // Push the new assesment ID to the level
        level.finalAssesment.push(newFinalAssesment);
        await level.save();
       
        // Return the newly created assesment
        res.status(201).json({ finalAssesment: newFinalAssesment });
    } catch (error) {
        console.error('Error adding Final Assesment:', error);
        res.status(500).send(error.message);
    }
};


// Get all assesment
export const allFinalAssesment = async (req, res) => {
    try {
        const finalAssesmentId = req.session?.finalAssesment?.id || req?.finalAssesment?.id;
      if (!finalAssesmentId) {
          return res.status(401).send('Unauthorized: Final Assesment ID is missing');
      }
        const allFinalAssesment = await finalAssesmentModel.find({ finalAssesment: finalAssesmentId });
       
        res.status(200).json({ finalAssesment: allFinalAssesment ,
            message:"Final Assesment added sucessfully",
        });

        course.finalAssesment.push(finalAssesment.id); 
        await course.save();
        
    } catch (error) {
        console.error('Error fetching final Assesment:', error);
        res.status(500).send(error.message);
    }
};

// Get a single assesment by ID
export const getFinalAssesment = async (req, res) => {
    try {
        const finalAssesmentId = req.session?.finalAssesment?.id || req?.finalAssesment?.id;
        if (!finalAssesmentId) {
            return res.status(401).send('Unauthorized: No Final Assesment ID found in session or token');
        }
        const finalAssesment = await finalAssesmentModel.findById({ _id: req.params.id, finalAssesment: finalAssesmentId })
       
        if (!finalAssesmentId) {
            return res.status(404).send(' Final Assesment not found');
        }
        res.status(200).json({ finalAssesment });
    } catch (error) {
        console.error('Error fetching Final Assesment:', error);
        res.status(500).send(error.message);
    }
};

// updating a final assesment
export const updateFinalAssessment = async (req, res) => {
    try {
        const { error, value } = finalAssesmentSchema.validate(req.body);
  
        if (error) {
            return res.status(400).send(error.details[0].message);
          }
      
          const updatedFinalAssesment = await finalAssesmentModel.findByIdAndUpdate(
            req.params.levelId,
            value,
            { new: true }
          );
      if (!updatedFinalAssesment) {
        return res.status(404).json({ message: 'Final assessment not found' });
      }
  
      await finalAssessment.save();
      res.status(200).json({ finalAssessment });
    } catch (error) {
        console.error('Error fetching Final Assesment:', error);
        res.status(500).send(error.message);
    }
  };


// Delete a final Assesment
export const deleteFinalAssesment = async (req, res) => {
    try {
        const deletedFinalAssesment = await finalAssesmentModel.findByIdAndDelete(req.params.finalAssesmentId);

        if (!deletedFinalAssesment) {
            return res.status(404).send('Final Assesment not found');
        }

        res.status(200).json({ final: deletedFinalAssesment ,
            message:"Final Assesment deleted sucessfully",
        });
    } catch (error) {
        console.error('Error deleting Final Assesment:', error);
        res.status(500).send(error.message);
    }
};
