import { Schema, model } from "mongoose";

const userSchema  = new Schema({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        unique: true
    }
})

export const UserModel = model('usuarios', userSchema);
