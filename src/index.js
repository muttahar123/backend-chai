
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env"
})
connectDB()




















/*
const app = express()
(async ()=>{
  try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on("error", (error)=>{
    console.log("ERROR:", error);
    throw error;
  }) 
  app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
} catch(error){
    console.error("Error: ", error)
    throw error
  }
})()

const port = 3000

app.get('/', (req, res) => {
  res.send('backend is running fine')
})
app.get('/login', (req , res) => {
    res.send('this is login page')
})

*/
