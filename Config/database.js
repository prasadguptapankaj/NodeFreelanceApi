import mongoose from 'mongoose';

export const connectDatabase = () => {
    mongoose
    .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((error) => console.log(error.message));
  
};