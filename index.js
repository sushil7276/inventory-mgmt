import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

const server = express();

// Parsing from data
server.use(express.urlencoded({ extended: true }));

// Setup view engin settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

// Create an instance of ProductController
const productController = new ProductController();
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", productController.addNewProduct);

server.use(express.static("src/views"));

server.listen(3400, () => {
  console.log(`server is started on 3400`);
});
