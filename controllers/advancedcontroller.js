import { advancedModel } from "../models/advancedmodel.js";
import { advancedSchema } from "../schema/advancedschema.js";



// Create/add a new content
export const addAdvancedLevel = async (req, res) => {
  try {
    const { error, value } = advancedSchema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

    const newAdvancedLevel =  await advancedModel({
      title,
      description,
      type,
      module,
      lesson,
      video,
      quiz,
    });
    const id = req.session?.level?.id || req?.level?.id
    if (!newAdvancedLevel) {
        // console.log(`Level not found for ID: ${levelId}`);
        return res.status(404).send('Level not found');
      }

     // Create level with the value
     const advancedLevel = await advancedModel.create({...value,user:id});

   
     advancedLevel.advancedModel.push(advancedLevel); 
     await advancedLevel.save();
 
     // Return the level
     res.status(201).json({ advancedLevel ,message:"Level Added Sucessfully"});
   } catch (error) {
     console.error('Error adding level:', error);
     res.status(500).send(error.message);
   }
 };

// Get all levels
export const allAdvancedLevel = async (req, res) => { 
    try {
      const levelId = req.session?.level?.id || req?.level?.id;
      if (!levelId) {
          return res.status(401).send('Unauthorized: advancedLevel ID is missing');
      }
      const allAdvancedLevel = await advancedModel.find({ user: userId });
      
      res.status(200).json({ advancedLevel: allAdvancedLevel });
    } catch (error) {
      console.error('Error fetching advancedLevels:', error);
      res.status(500).send(error.message);
    }
  };
  
  // Get a single level by ID
  export const getAdvancedLevel = async (req, res) => {
    try {
      const levelId = req.session?.level?.id || req?.level?.id;
          if (!levelId) {
              return res.status(401).send('Unauthorized: No level ID found in session or token');
          }
      const advancedLevel = await advancedModel.findOne({ _id: req.params.id,advancedLevel : levelId });
      if (!advancedLevel) {
        return res.status(404).send('AdvancedLevel not found');
      }
      res.status(200).json({ AdvancedLevel });
    } catch (error) {
      console.error('Error fetching advancedLevel:', error);
      res.status(500).send(error.message);
    }
  };
  
  // Update a level
  export const updateAdvancedLevel = async (req, res) => {
    try {
      const { error, value } = advancedSchema.validate(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const updatedAdvancedLevel = await advancedModel.findByIdAndUpdate(
        req.params.levelId,
        value,
        { new: true }
      );
  
      if (!updatedAdvancedLevel) {
        return res.status(404).send('Advanced Level not found');
      }
  
      res.status(200).json({ advancedLevel: updatedAdvancedLevel , message:"Level Updated Sucessfully" });
    } catch (error) {
      
        console.error('Error updating level:', error);
      res.status(500).send(error.message);
    }
  };
  
  // Delete a level
  export const deleteAdvanceLevel = async (req, res) => { 
    try {
      const deletedAdvanceLevel = await advancedModel.findByIdAndDelete(req.params.levelId);
  
      if (!deletedAdvanceLevel) {
        return res.status(404).send('level not found');
      }
  
    
      res.status(200).json({ advancedLevel: deletedAdvanceLevel, message:"level Deleted Sucessfully" });
    } catch (error) {
      console.error('Error deleting level:', error);
      res.status(500).send(error.message);
    }
  };
  