import express from "express";
import { dbconnection } from "./config/db.js";
import 'dotenv/config';
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { restartServer } from "./restart_server.js";
import { userRouter } from "./routes/user-route.js";
import { questionRouter } from "./routes/questionRoute.js";
import { quizRouter } from "./routes/quizRoute.js";
import { moduleRouter } from "./routes/moduleRoute.js";
import { courseRouter } from "./routes/courseroute.js";
import { passwordRouter } from "./routes/resetPassword.js";
import { finalAssesmentRouter } from "./routes/finalassesmentroute.js";
import expressOasGenerator from '@mickeymond/express-oas-generator';
import userProfileRouter from "./routes/userProfileRoute.js"





// Creating an Express App
const app = express();

expressOasGenerator.handleResponses(app, {
  alwaysServeDocs: true,
  tags: ['auth', 'Courses', 'FinalAssesment', 'Question', 'Quiz', 'Profile','Module'],

  mongooseModels: mongoose.modelNames(),

});


// middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: '*' }));
app.use(express.static('uploads'));



app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
  store: MongoStore.create({
    mongoUrl: process.env.Mongo_uri
  })
}));

app.get("/api/v1/health", (req, res) => {
  res.json({ status: "UP" });
});

//   using routes
app.use('/api/v1', userRouter);
app.use('/api/v1', userProfileRouter);
app.use('/api/v1', questionRouter);
app.use('/api/v1', quizRouter);
app.use('/api/v1', courseRouter);
app.use('/api/v1', passwordRouter);
app.use('/api/v1', finalAssesmentRouter);
app.use('/api/v1', moduleRouter);

expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

const reboot = async () => {
  setInterval(restartServer, process.env.INTERVAL)
}


//Listening to Port & Connecting to database
dbconnection()
  .then(() => {
    const PORT = 6060
    app.listen(PORT, () => {
      reboot().then(() => {
        console.log(`Server Restarted`);
      });
      console.log(`Server is connected to Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });