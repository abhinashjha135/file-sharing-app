const mongoose=require('mongoose');
require('dotenv').config();
function connectDB(){
     console.log("conect db k ander")
      mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useUnifiedTopology:true,
        // useFindAndModify:true
    })
   
    const connection=mongoose.connection;
    connection.on('error', (err) => {
        console.log("eror a rha ")
        console.error('MongoDB connection error:', err);
    });

    connection.once('open', () => {
        console.log('MongoDB connected successfully');
    });

    console.log("lkfdjfkljsdklfjkl")
    
}
module.exports=connectDB;
