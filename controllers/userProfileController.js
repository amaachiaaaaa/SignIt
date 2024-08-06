import { userProfileModel } from "../models/userProfilemodel.js";
import { userModel } from "../models/usermodel.js";
import { userProfileSchema } from "../schema/userprofileschema.js";

// Create or update user profile
export const addUserProfile = async (req, res) => {
    try {
        const { error, value } = userProfileSchema.validate({
            ...req.body,
            profilePicture: req.files?.profilePicture[0].filename,

        });

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Find the user with the ID that you passed when creating/updating the user profile
        const id = req.session?.user?.id || req?.user?.id // Assuming the schema includes a user field
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        const userProfile = await userProfileModel.create(
            { ...value, user: id });

        // Associate the user profile with the user
        user.userProfile = userProfile._id;
        await user.save();

        // Return the user profile
        res.status(201).json({ userProfile });

    } catch (error) {
        console.error('Error adding/updating user profile:', error);
        res.status(500).send(error.message);
    }
};


// Get user profiles
export const getUserProfile = async (req, res) => {
    try {

        const id = req.session?.user?.id || req?.user?.id;

        const profile = await userProfileModel.findOne({ user: id }).populate({
            path: 'user',
            select: '-password'
        });
        if (!profile) {
            return res.status(404).send("No profile added");
        }
        res.status(200).json({ profile });
    } catch (error) {
        return res.json({ error })
    }
};



// Update a user profile
export const updateUserProfile = async (req, res) => {
    try {
        const { error, value } = userProfileSchema.validate({
            ...req.body,
            profilePicture: req.files.profilePicture[0].filename,
        });
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const updatedUserProfile = await userProfileModel.findByIdAndUpdate(
            req.params.userProfileId,
            value,
            { new: true }
        );

        if (!updatedUserProfile) {
            return res.status(404).send('User profile not found');
        }

        res.status(200).json({ userProfile: updatedUserProfile });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send(error.message);
    }
};
