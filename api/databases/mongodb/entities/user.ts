import mongoose, { Document, Schema } from 'mongoose';
const bcrypt = require('bcrypt');

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


export const User = mongoose.model<IUser>('User', userSchema);

export default User;