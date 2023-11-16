// User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the schema
const userSchema = new Schema({
  username: String,
  email: String,
  password : String
  // Add more fields as needed
});

// Define the interface for the document (optional but recommended)
interface IUser extends Document {
  username: string;
  email: string;
  password : string
  // Add more fields as needed
}

// Create the model
const user = mongoose.model('Users', userSchema);

export default user;
