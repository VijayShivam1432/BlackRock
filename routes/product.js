import express from 'express';
import { addCategory, addProductImage, createProduct, deleteCategory, deleteProduct, deleteProductImage, getAllCategories, getAllProducts, getProductDetails, updateProduct } from '../controllers/product.js';
import { isAdmin, isAuthenticated } from '../middlewares/auth.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.get("/all", getAllProducts)
router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, isAdmin , updateProduct)
  .delete(isAuthenticated,isAdmin, deleteProduct);
router.post("/new", isAuthenticated,isAdmin, singleUpload, createProduct)

router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated,isAdmin,  deleteProductImage);

  router.post("/category", isAuthenticated, isAdmin, addCategory);

router.get("/categories", getAllCategories);

router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);



 export default router;