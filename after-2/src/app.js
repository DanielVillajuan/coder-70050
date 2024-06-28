import express from 'express';
import ProductManager from './class/productManager.js';
import { __dirname } from './utils.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager(__dirname + '/data/product.json');

app.post('/', async (req, res) => {
    // console.log('Entro en el post!')
    // sacar los datos del producto desde el objeto REQUEST ( req )
    const newProduct = req.body 
    // agregar validaciones en caso de que un producto no tenga todos los campos
    await productManager.addProduct(newProduct);
    // console.log('ya se creo el archivo product.json o deberia')
    res.status(201).json({ message: 'Añadido!' })
})

app.get('/', async (req, res) => {
    const productList = await productManager.getProductList();
    
    res.status(201).json({ resultado: productList })
})

app.listen(8080, () => {
    console.log("servidor ON")
})
