import mongoose from "mongoose";
import {User} from './User.js'
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

// user model
const taskSchema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Description: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  Status: {
    type: String,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

});

// taskSchema.statics.checkUserVerification = async (query) => {
//   return await User.findOne(query);
// };

const Task = mongoose.model("Task", taskSchema);

// module.exports = Task;
export { Task };
