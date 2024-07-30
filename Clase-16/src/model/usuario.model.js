import mongoose, { Schema, model } from "mongoose";

const userSchema  = new Schema({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        unique: true,
    },
    dni: Number,
    roles: {
        default: [],
        type: [{
            rol: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'roles'
            },
        }]
    },
})

export const UserModel = model('usuarios', userSchema);
