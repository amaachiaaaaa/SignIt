import { intermediateModel } from "../models/intermediatemodel.js";
import { intermediateSchema } from "../schema/intermediateschema.js";

// Create/add a new content
export const addIntermediateLevel = async (req, res) => {
    try {
      const { error, value } = intermediateSchema.validate(req.body);
  
          if (error) {
              return res.status(400).send(error.details[0].message);
          }
  
      const newIntermediateLevel
       =  await intermediateModel({
        title,
        description,
        type,
        module,
        lesson,
        video,
        quiz,
      });
      const id = req.session?.level?.id || req?.level?.id
      if (!newIntermediateLevel

      ) {
          // console.log(`Level not found for ID: ${levelId}`);
          return res.status(404).send('Level not found');
        }
  
       // Create level with the value
       const IntermediateLevel = await intermediateModel.create({...value,user:id});
  
     
       IntermediateLevel.intermediateModel.push(intermediateLevel); 
       await intermediateLevel.save();
   
       // Return the level
       res.status(201).json({intermediateLevel ,message:"Level Added Sucessfully"});
     } catch (error) {
       console.error('Error adding level:', error);
       res.status(500).send(error.message);
     }
   };
  
  // Get all levels
  export const allIntermediateLevel = async (req, res) => { 
      try {
        const levelId = req.session?.level?.id || req?.level?.id;
        if (!levelId) {
            return res.status(401).send('Unauthorized IntermediateLevel ID is missing');
        }
        const allIntermediateLevel = await intermediateModel.find({ user: userId });
        
        res.status(200).json({intermediateLevel: allIntermediateLevel });
      } catch (error) {
        console.error('Error fetching advancedLevels:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Get a single level by ID
    export const getIntermediateLevel = async (req, res) => {
      try {
        const levelId = req.session?.level?.id || req?.level?.id;
            if (!levelId) {
                return res.status(401).send('Unauthorized: No level ID found in session or token');
            }
        consintermediateLevel = await intermediateModel.findOne({ _id: req.params.id,intermediateLevel : levelId });
        if (intermediateLevel) {
          return res.status(404).send('Intermediate Level not found');
        }
        res.status(200).json({ intermediateLevel });
      } catch (error) {
        console.error('Error fetching intermediateLevel:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Update a level
    export const updateIntermediateLevel = async (req, res) => {
      try {
        const { error, value } = intermediateSchema.validate(req.body);
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const updatedIntermediateLevel = await intermediateModel.findByIdAndUpdate(
          req.params.levelId,
          value,
          { new: true }
        );
    
        if (!updatedIntermediateLevel) {
          return res.status(404).send('Intermediate Level not found');
        }
    
        res.status(200).json({intermediateLevel: updatedIntermediateLevel , message:"Level Updated Sucessfully" });
      } catch (error) {
        
          console.error('Error updating level:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Delete a level
    export const deleteIntermediateLevel = async (req, res) => { 
      try {
        const deletedIntermediateLevel = await intermediateModel.findByIdAndDelete(req.params.levelId);
    
        if (! deletedIntermediateLevell) {
          return res.status(404).send('level not found');
        }
    
      
        res.status(200).json({intermediateLevel: deletedIntermediateLevel, message:"level Deleted Sucessfully" });
      } catch (error) {
        console.error('Error deleting level:', error);
        res.status(500).send(error.message);
      }
    };
    