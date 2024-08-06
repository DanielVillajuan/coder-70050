import { Router } from "express";
import { __dirname, uploader } from "../utils.js";
import { socketServer } from "../app.js";
import { productModel } from "../Dao/models/Product.model.js";

const router = Router();

router.post("/", uploader.single("file"), async (req, res) => {
  if (!req.file) res.status(402).json({ message: "Error en algun campo" });

  const prod = req.body;
  const result = await productModel.create({
    ...prod,
    thumbnail: req.file.path.split('public')[1],
  });

  res.status(201).json({ payload: result });
});

router.get("/", async (req, res) => {
  const { limit = 10, page = 1, sort = '', ...query } = req.query;
  const sortManager = {
    'asc': 1,
    'desc': -1
  }

  const products = await productModel.paginate(
    { ...query }, // le paso el resto de las consultas o filtros (nombre='',precio='',categoria=')
    { 
      limit,
      page,
      ...(sort && { sort: { price: sortManager[sort]} }),
      customLabels: { docs: 'payload' }
    })

  res.json({
    ...products,
    status: 'success'
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const productFinded = await productModel.findById(id);

  const status = productFinded ? 200 : 404;

  res.status(status).json({ payload: productFinded });
});

router.put("/:id", uploader.single("file"), async (req, res) => {
  if (!req.file) res.status(400).json({ message: "Error en algun campo" });

  const { body, params } = req;
  const { id } = params;
  const product = body;
  const productUpdated = await productModel.findByIdAndUpdate(id, {
    ...product,
    thumbnail: req.file.path,
  }, { new: true });
  // socketServer.sockets.emit("onchangeProduct", await productList.getProducts());
  res
    .status(201)
    .json({ message: "Updated successfully", payload: productUpdated });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
   const isDelete = await productModel.findByIdAndDelete(id);
  //   socketServer.sockets.emit("onchangeProduct", await productList.getProducts());
  res.status(isDelete ? 200 : 400).json({ payload: isDelete});
});

export default router;
