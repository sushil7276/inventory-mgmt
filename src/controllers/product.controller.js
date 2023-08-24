import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.ejs")
    // );

    res.render("products", { products: products });
  }

  getAddForm(req, res) {
    return res.render("new-product");
  }
}
