import mongoose from "mongoose";
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

// user model
const userSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  isVerify: {
    type: Boolean,
    default: true,
  },
});

userSchema.statics.checkUserVerification = async (query) => {
  return await User.findOne(query);
};

const User = mongoose.model("User", userSchema);

// module.exports = User;
export { User };
