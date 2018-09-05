import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Product from './models/Product';
import Order from './models/Order';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/products');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/products').get((req, res) => {
    Product.find((err, products) => {
        if (err)
            console.log(err);
        else
            res.json(products);
    });
});

router.route('/orders').get((req, res) => {
    Order.find((err, orders) => {
        if (err)
            console.log(err);
        else
            res.json(orders);
    });
});


router.route('/products/:id').get((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            console.log(err);
        else
            res.json(product);
    });
});

router.route('/products/add').post((req, res) => {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});



router.route('/products/update/:id').post((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(!product)
        return next(new Error('could not load document'));
 else {
        product.name = req.body.name;
        product.image = req.body.image;
        product.price_1 = req.body.price_1;
        product.price_2 = req.body.price_2;
        product.price_3 = req.body.price_3;
        product.size_1 = req.body.size_1;
        product.size_2 = req.body.size_2;
        product.size_3 = req.body.size_3;
        product.category = req.body.category;
        product.tags = req.body.tags;
        product.status = req.body.status;
        product.description = req.body.description;

        product.save().then(product => {
          res.json('update done');
        }).catch(err => {
            res.status(400).send('update failed');
        });
      }

    });
});

router.route('/products/delete/:id').get((req, res)=> {
    Product.findByIdAndRemove({_id: req.params.id}, (err, product)=> {
        if (err)
        res.json(err);
        else 
        res.json('removed successfully');
    })
})


app.use('/', router);
app.listen('4000', ()=> console.log('express server running on port 4000'));