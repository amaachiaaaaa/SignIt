import express from "express";
import { dbconnection } from "./config/db.js";
import 'dotenv/config';
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { userRouter } from "./routes/user-route.js";
import { questionRouter } from "./routes/questionRoute.js";
import { quizRouter } from "./routes/quizRoute.js";
import { beginnerRouter } from "./routes/beginner-route.js";
import { intermediateRouter } from "./routes/intermediateroute.js";
import { advancedRouter } from "./routes/advancedroute.js";
import { passwordRouter } from "./routes/resetPassword.js";
import expressOasGenerator from '@mickeymond/express-oas-generator';
import userProfileRouter from "./routes/userProfileRoute.js"




// Creating an Express App
const app = express();

expressOasGenerator.handleResponses(app, {
  alwaysServeDocs:true,
  tags: [ 'Beginner Level','auth', 'Intermediate Level','Advanced Level','Fiinal Assesment','Question','Quiz','Reset Password', 'Profile',],
 
  mongooseModels: mongoose.modelNames(),

});


// middleware
app.use(express.json());
app.use(express.static('uploads'));



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
    store:MongoStore.create({
        mongoUrl:process.env.Mongo_uri
    })
  }));

//   using routes
app.use('/api/v1',userRouter);
app.use('/api/v1', userProfileRouter);
app.use('api/v1', questionRouter);
app.use('api/v1', quizRouter);
app.use('api/v1', beginnerRouter);
app.use('api/v1', intermediateRouter);
app.use('api/v1', advancedRouter);
app.use('api/v1', passwordRouter)


expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs/'));

 //Listening to Port & Connecting to database
 dbconnection();

const port = 6060

app.listen(port, () =>{
console.log(`Listening on port: ${port}`);
});