const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        console.log('Shop.js: ', products);
        res.render('shop/product-list', { 
            pageTitle: 'All Products', 
            prods: products, 
            path: '/products' });
    });
};

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll(products => {
        console.log('Shop.js: ', products);
        res.render('shop/index', { 
            pageTitle: 'Shop', 
            prods: products, 
            path: '/' });
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}