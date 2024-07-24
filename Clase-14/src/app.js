import express from 'express';
import UserRouter from './routes/usuario.router.js'
import mongoose from 'mongoose';

const app = express();
const PORT = 8080 || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user/', UserRouter);

app.listen(PORT , () => {
    console.log('Listo server')
})

mongoose.connect(
    'mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback',
    { dbName: 'usuarios' })
    .then(() => {
        console.log('Listo la base de datos')
    })
