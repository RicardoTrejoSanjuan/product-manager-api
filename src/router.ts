import { Router } from "express";
import { createProduct, deleteProduct, getProducts, getProductsById, updateAvailability, updateProduct } from "./handlers/product.js";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware/index.js";

const router = Router();

// Routing

router.get('/', getProducts)
router.get('/:id',
    param('id').isInt().withMessage('Id is invalid'),
    handleInputErrors,
    getProductsById)

router.post('/',
    // Validation
    body('name')
        .notEmpty().withMessage('Name is a field required'),
    body('price')
        .isNumeric().withMessage('Invalid format')
        .notEmpty().withMessage('Price is a field required')
        .custom((value) => value > 0).withMessage('Invalid Price'),
    handleInputErrors,
    createProduct)

router.put('/:id',
    param('id').isInt().withMessage('Id is invalid'),
    body('name')
        .notEmpty().withMessage('Name is a field required'),
    body('price')
        .isNumeric().withMessage('Invalid format')
        .notEmpty().withMessage('Price is a field required')
        .custom((value) => value > 0).withMessage('Invalid Price'),
    body('availability')
        .isBoolean().withMessage('Invalid format'),
    handleInputErrors,
    updateProduct)

router.patch('/:id',
    param('id').isInt().withMessage('Id is invalid'),
    handleInputErrors,
    updateAvailability)

router.delete('/:id',
    param('id').isInt().withMessage('Id is invalid'),
    handleInputErrors,
    deleteProduct
)

export default router;