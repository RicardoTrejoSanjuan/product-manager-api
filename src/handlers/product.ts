import { Request, Response } from 'express'
import Product from '../models/Product.model';
import { log } from '../server';

export const getProducts = async (req: Request, resp: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['price', 'ASC']
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
            // limit: 2

        });
        resp.json({ data: products });
    } catch (error) {
        log.error(error);
    }
}

export const getProductsById = async (req: Request, resp: Response) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id, {
            order: [
                ['price', 'ASC']
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
        });
        if (!product) {
            return resp.status(400).json({
                error: 'This product does not exist'
            })
        }
        resp.json({ data: product });
    } catch (error) {
        log.error(error);
    }

}

export const createProduct = async (req: Request, resp: Response) => {

    // validation
    // await check('name')
    //     .notEmpty().withMessage('Name is a field required')
    //     .run(req);
    // await check('price')
    //     .isNumeric().withMessage('Invalid format')
    //     .notEmpty().withMessage('Price is a field required')
    //     .custom((value) => value > 0).withMessage('Invalid Price')
    //     .run(req);

    // let errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return resp.status(400).json({ error: errors.array() })
    // }

    // const product = new Product(req.body);
    // const saveProduct = await product.save();

    try {
        const product = await Product.create(req.body);
        resp.json({ data: product });
    } catch (error) {
        log.error(error);
    }
}

export const updateProduct = async (req: Request, resp: Response) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);
        if (!product) {
            return resp.status(400).json({
                error: 'This product does not exist'
            })
        }

        await product.update(req.body);
        await product.save();
        resp.json({ data: product });
    } catch (error) {
        log.error(error);
    }

}

export const updateAvailability = async (req: Request, resp: Response) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);
        if (!product) {
            return resp.status(400).json({
                error: 'This product does not exist'
            })
        }

        product.availability = !product.dataValues.availability
        await product.save();
        resp.json({ data: product });
    } catch (error) {
        log.error(error);
    }

}

export const deleteProduct = async (req: Request, resp: Response) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);
        if (!product) {
            return resp.status(400).json({
                error: 'This product does not exist'
            })
        }

        await product.destroy();
        resp.json({ data: 'The Product has been deleted' });
    } catch (error) {
        log.error(error);
    }

}