import express from 'express'
import { DBConnection } from './DB/Connection.js';
const app = express();

app.use(express.json()) 
DBConnection()
app.listen(3000,()=>{
    console.log("----------------Server is running on port 3000----------------------");
})



