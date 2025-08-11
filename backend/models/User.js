// Entity / model class
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: {type: Array , default: [] },
    storeCartItems: {type: Object , default: {} },
}, { minimize: false })  //minimize: false allows to  create empty models i.e user with empty data

const User = mongoose.models.user || mongoose.model('user', userSchema)
export default User

// mongoose.models.user --> uses the existing model
// mongoose.model('user', userSchema) --> creates a new model
// cart: { type: Object, default: {} },