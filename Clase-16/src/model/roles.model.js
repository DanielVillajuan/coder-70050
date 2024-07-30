import { Schema, model } from "mongoose";

const rolesSchema  = new Schema({
   description: String,
   permisos: Boolean
})

export const RolesModel = model('roles', rolesSchema);
