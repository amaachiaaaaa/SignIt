import { courseModel } from "../models/coursemodel.js";
import { courseSchema } from "../schema/courseschema.js";

// Create/add a new content
export const addCourses = async (req, res) => {
  try {
    const { error, value } = courseSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const newCourses = await courseModel({

    });
    const id = req.session?.course?.id || req?.course?.id
    if (!newCourses) {
      // console.log(`Level not found for ID: ${levelId}`);
      return res.status(404).send('Level not found');
    }

    // Create level with the value
    const courses = await courseModel.create({ ...value, user: id });

    // Return the course
    res.status(201).json({ courses, message: "course Added Sucessfully" });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).send(error.message);
  }
};

// Get all course
export const allCourses = async (req, res) => {
  try {
    // Get query params
    const {
      filter = "{}",
      sort = "{}"
    } = req.query;
    //    Get all courses fron Database
    const allCourses = await courseModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))

    // return all courses as response
    res.status(200).json(allCourses);
  } catch (error) {
    next(error);
  }

};

// Get a single course by ID
export const getCourse = async (req, res) => {
  try {
    const courseId = req.session?.course?.id || req?.course?.id;
    if (!courseId) {
      return res.status(401).send('Unauthorized: No course ID found in session or token');
    }
    const Course = await courseModel.findById({ _id: req.params.id, course: courseId });
    if (!Course) {
      return res.status(404).send('Course not found');
    }
    res.status(200).json({ Course });
  } catch (error) {
    console.error('Error fetching Course:', error);
    res.status(500).send(error.message);
  }
};

// Update a Course
export const updateCourse = async (req, res) => {
  try {
    const { error, value } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const updatedCourse = await courseModel.findByIdAndUpdate(
      req.params.levelId,
      value,
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).send('Course not found');
    }

    res.status(200).json({ Course: updatedCourse, message: "Course Updated Sucessfully" });
  } catch (error) {

    console.error('Error updating course:', error);
    res.status(500).send(error.message);
  }
};

// Delete a Course
export const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await courseModel.findByIdAndDelete(req.params.courseId);

    if (!deletedBeginnerLevel) {
      return res.status(404).send('course not found');
    }


    res.status(200).json({ course: deletedCourse, message: "course Deleted Sucessfully" });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).send(error.message);
  }
};
