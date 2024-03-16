const express=require('express');
const app=express();
const connectDB=require('./config/db');
const path=require('path')
const cors=require('cors')
connectDB();

// cors setup
// const corsOptions={
//     origin:process.env.ALLOWED_CLIENTS.split(',')
// }
// app.use(cors(corsOptions))
app.set('views',path.join(__dirname,'/views')) // ye to views wala handle krne ke liye h 
app.set('view engine','ejs');/// ye bhi 

app.use(express.static('public'))  // ye public folder ko access karne ke liye h
app.use(express.json());// ye response ko json mei convert krne ke liye h 

app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'))
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
    
})