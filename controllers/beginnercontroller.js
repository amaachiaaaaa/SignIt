import { beginnerModel } from "../models/beginnermodel.js";
import { beginnerSchema } from "../schema/beginnerschema.js";

// Create/add a new content
export const addBeginnerLevel = async (req, res) => {
    try {
      const { error, value } = beginnerSchema.validate(req.body);
  
          if (error) {
              return res.status(400).send(error.details[0].message);
          }
  
      const newBeginnerLevel =  await beginnerModel({
        title,
        description,
        type,
        module,
        lesson,
        video,
        quiz,
      });
      const id = req.session?.level?.id || req?.level?.id
      if (!newBeginnerLevel) {
          // console.log(`Level not found for ID: ${levelId}`);
          return res.status(404).send('Level not found');
        }
  
       // Create level with the value
       const BeginnerLevel = await beginnerModel.create({...value,user:id});
  
     
       BeginnerLevel.beginnerModel.push(BeginnerLevel); 
       await BeginnerLevel.save();
   
       // Return the level
       res.status(201).json({ BeginnerLevel ,message:"Level Added Sucessfully"});
     } catch (error) {
       console.error('Error adding level:', error);
       res.status(500).send(error.message);
     }
   };
  
  // Get all levels
  export const allBeginnerLevel = async (req, res) => { 
      try {
        const levelId = req.session?.level?.id || req?.level?.id;
        if (!levelId) {
            return res.status(401).send('Unauthorized: BeginnerLevel ID is missing');
        }
        const allBeginnerLevel = await beginnerModel.find({ user: userId });
        
        res.status(200).json({ BeginnerLevel: allBeginnerLevel });
      } catch (error) {
        console.error('Error fetching BeginnerLevels:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Get a single level by ID
    export const getBeginnerLevel = async (req, res) => {
      try {
        const levelId = req.session?.level?.id || req?.level?.id;
            if (!levelId) {
                return res.status(401).send('Unauthorized: No level ID found in session or token');
            }
        const BeginnerLevel = await beginnerModel.findOne({ _id: req.params.id,BeginnerLevel : levelId });
        if (!BeginnerLevel) {
          return res.status(404).send('BeginnerLevel not found');
        }
        res.status(200).json({ BeginnerLevel });
      } catch (error) {
        console.error('Error fetching BeginnerLevel:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Update a level
    export const updateBeginnerLevel = async (req, res) => {
      try {
        const { error, value } = beginnerSchema.validate(req.body);
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const updatedBeginnerLevel = await beginnerModel.findByIdAndUpdate(
          req.params.levelId,
          value,
          { new: true }
        );
    
        if (!updatedBeginnerLevel) {
          return res.status(404).send('Beginner Level not found');
        }
    
        res.status(200).json({ BeginnerLevel: updatedBeginnerLevel , message:"Level Updated Sucessfully" });
      } catch (error) {
        
          console.error('Error updating level:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Delete a level
    export const deleteBeginnerLevel = async (req, res) => { 
      try {
        const deletedBeginnerLevel = await beginnerModel.findByIdAndDelete(req.params.levelId);
    
        if (!deletedBeginnerLevel) {
          return res.status(404).send('level not found');
        }
    
      
        res.status(200).json({ BeginnerLevel: deletedBeginnerLevel, message:"level Deleted Sucessfully" });
      } catch (error) {
        console.error('Error deleting level:', error);
        res.status(500).send(error.message);
      }
    };
    