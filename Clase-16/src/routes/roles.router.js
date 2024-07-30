import { Router } from "express";
import { RolesModel } from "../model/roles.model.js";

const app = Router();

app.post('/', async (req, res) => {
    const { description, permisos = false } = req.body;

    await RolesModel.create({
        description,
        permisos
    })

    res.status(201).json({
        message: 'se creo el rol nuevo'
    })

})

export default app
