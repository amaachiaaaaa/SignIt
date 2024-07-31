import express from "express";
import { dbconnection } from "./config/db.js";


// Creating an Express App
const app = express();
app.use(express.json());


 //Listening to Port & Connecting to database
 dbconnection();

const port = 6060

app.listen(port, () =>{
console.log(`Listening on port: ${port}`);
});