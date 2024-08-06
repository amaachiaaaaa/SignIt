import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from "../models/usermodel.js";
import { userSchema } from "../schema/userschema.js";




// creating a user
export const signup = async (req, res,) => {
    const { error, value } = userSchema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const lastName = value.lastName
    const email = value.email
    // console.log('Welcome', lastName)

    const findIfUserExit = await userModel.findOne({ email })

    // checking if a user exit
    if (findIfUserExit) {
        return res.status(401).send('User has already signed up')
    } else {
        const hashedPassword = await bcrypt.hash(value.password, 12)
        value.password = hashedPassword

    }

    const addUser = await userModel.create(value)
    req.session.user = { id: addUser.id }
    return res.status(201).send({
        message: "user created sucessfully"
    })
}

// get user
export const getUser = async (req, res, next) => {
    try {
        const userName = req.params.userName.toLowerCase();
        console.log('welcome', userName)

        console.log(userDetails)
        if (!userDetails) {
            return res.status(200).json('User not found');
        }

        return res.status(200).json({ user: userDetails });

    } catch (error) {

        next(error)
    }
};


// get all users
export const getUsers = async (req, res) => {


    const email = req.query.email?.toLowerCase()
    const userName = req.query.userName?.toLowerCase();

    const filter = {};
    if (email) {
        filter.email = email;
    }
    if (userName) {
        filter.userName = userName;
    }

    const users = await userModel.find(filter);

    return res.status(200).json({ users });
};

export const login = async (req, res, next) => {
    try {
        const { email, userName, password } = req.body;

        // Ensure at least email or userName and password are provided
        if (!password || (!email && !userName)) {
            return res.status(400).json('Email or userName and password are required');
        }

        // Find the user by email or userName
        const user = await userModel.findOne({
            $or: [
                { email: email },
                { userName: userName },
            ]
        });

        if (!user) {
            return res.status(401).json('No user found');
        } else {
            // Compare provided password with stored hashed password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if (!correctPassword) {
                return res.status(401).json('Invalid credentials');
            }
            // Generate user session
            req.session.user = { id: user.id };
            // Here you can generate and return a token if using JWT, or handle successful login in other ways
            res.status(200).json({ message: 'Login successful' });
        }
    } catch (error) {
        next(error);
    }
};



// token authenticaton

export const token = async (req, res, next) => {
    try {
        const { email, userName, password } = req.body;

        // Ensure at least email or userName and password are provided
        if (!password || (!email && !userName)) {
            return res.status(400).json('Email or userName and password are required');
        }

        // Find the user by email or userName
        const user = await userModel.findOne({
            $or: [
                { email: email },
                { userName: userName },
            ]
        });

        if (!user) {
            return res.status(401).json('No user found');
        } else {
            // Compare provided password with stored hashed password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if (!correctPassword) {
                return res.status(401).json('Invalid credentials');
            }
            // Generate user token
            const token = jwt.sign(
                { id: user.id },
                process.env.JWT_PRIVATE_KEY,
                { expiresIn: '72h' }
            )
            // Here you can generate and return a token if using JWT, or handle successful login in other ways
            res.status(200).json({
                message: 'Login successful',
                accessToken: token,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userName: user.userName
                }
            });
        }
    } catch (error) {
        next(error);
    }
};

// logout

export const logout = async (req, res, next) => {
    try {
        // Destroy user session
        await req.session.destroy();
        // Return response
        res.status(200).json("User logged out");
    } catch (error) {
        next(error);
    }
};