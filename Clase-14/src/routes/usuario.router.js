import { Router } from "express";
import { UserModel } from "../model/usuario.model.js";

const app = Router();

app.get('/', async (req, res) => {
    const usuarios = await UserModel.find();
    res.json({ message: 'Todo oka', payload: usuarios })
})

app.post('/', async (req, res) => {
    const { nombre, apellido, email } = req.body // me llega la info desde la peticion
    const result = await UserModel.create({
        nombre,
        apellido,
        email,
    })

    res.status(201).json({ message: 'usuario agregado ', payload: result })
})

app.put('/:id', async (req, res) => {
    const usuarioModificado = req.body;
    const { id } = req.params

    const userUpdated = await UserModel.findByIdAndUpdate(id, {
        ...usuarioModificado // por que un spread?
    }, { new: true })

    res.json({message: 'se modifico fulanido ' + id, payload: userUpdated })
})

// Metodo delete tarea para el hogar.


export default app;
