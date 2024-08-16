import { moduleModel } from "../models/module-model.js";
import { moduleSchema } from "../schema/moduleSchema.js";


// Create/add a new module
export const addModule = async (req, res) => {
    try {

      // Only admin can create a module
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
      const { error, value } = moduleSchema.validate(req.body);
  
          if (error) {
              return res.status(400).send(error.details[0].message);
          }
  
      const newModule =  await moduleModel({
        title,
        description,
        lesson,
        video,
        quiz,
      });
      const id = req.session?.module?.id || req?.module?.id
      if (!newModule) {
          // console.log(`Level not found for ID: ${levelId}`);
          return res.status(404).send('Module not found');
        }
  
       // Create module with the value
       const module = await moduleModel.create({...value,user:id});
  
     
       module.moduleModel.push(module); 
       await module.save();
   
       // Return the module
       res.status(201).json({ module ,message:"Module Added"});
     } catch (error) {
       console.error('Error adding module:', error);
       res.status(500).send(error.message);
     }
   };
  
  // Get all modules
  export const allModules = async (req, res) => { 
      try {
        const moduleId = req.session?.module?.id || req?.module?.id;
        if (!moduleId) {
            return res.status(401).send('Unauthorized: module ID is cannot be found');
        }
        const allModules = await moduleModel.find({ user: userId });
        
        res.status(200).json({ module: allModules });
      } catch (error) {
        console.error('Error fetching modules:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Get a single module by ID
    export const getModule = async (req, res) => {
      try {
        const moduleId = req.session?.module?.id || req?.module?.id;
            if (!moduleId) {
                return res.status(401).send('Unauthorized: No module ID found in session or token');
            }
        const module = await moduleModel.findById({ _id: req.params.id,module : moduleId });
        if (!module) {
          return res.status(404).send('module not found');
        }
        res.status(200).json({ module });
      } catch (error) {
        console.error('Error fetching module:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Update a level
    export const updateModule = async (req, res) => {
      try {
        const { error, value } = moduleSchema.validate(req.body);
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const updatedModule = await moduleModel.findByIdAndUpdate(
          req.params.moduleId,
          value,
          { new: true }
        );
    
        if (!updatedModule) {
          return res.status(404).send('Module not found');
        }
    
        res.status(200).json({ module: updatedModule , message:"Module Updated" });
      } catch (error) {
        
          console.error('Error updating module:', error);
        res.status(500).send(error.message);
      }
    };
    
    // Delete a module
    export const deleteModule = async (req, res) => { 
      try {
        const deletedModule = await moduleModel.findByIdAndDelete(req.params.moduleId);
    
        if (!deletedModule) {
          return res.status(404).send('module not found');
        }
    
      
        res.status(200).json({ module: deletedModule, message:"Module Deleted" });
      } catch (error) {
        console.error('Error deleting module:', error);
        res.status(500).send(error.message);
      }
    };
    