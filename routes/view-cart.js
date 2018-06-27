var express = require('express');
var router = express.Router();
var models = require('../models');

var ordersController = require('../controllers/ordersController');
var productsController = require('../controllers/productsController');
var settingsController = require('../controllers/settingsController');

router.get('/', function(req, res){
    page = parseInt(req.query.page);
    status = req.query.orderStatus;
    userId = 1; //TODO: change later
    if (!status) status = 'pending'; //Pending status
    limit = 100;
    products = [];
    totalPrice = {subtotal: 0, total: 0};
    // orders = [];
    // products = [];
    // totalPrice = {subtotal: 0, total: 0};

    ordersController.getAllByUserId(userId, status, function(objects){
      numRows = objects.length;
      if(!page){
          page = 1;
      }
      orders = objects.slice((page-1)*limit, page*limit);
      if(orders.length==0){
          var product = [];
        res.render('view-cart.hbs', {
            userId:userId,
            products: {},
            pageHeader: true,
            cssViewCart: true,
            breadcrumbs: [
                {title: "View Cart", link: "/view-cart"}
            ],
            pagination: { page: page, limit: limit ,totalRows: numRows }
          });
      }
      for (var i = 0; i < orders.length; i++){
          productsController.getProductFromOrder(orders[i], products, totalPrice, function(object){
              if (object.products.length == orders.length) {
		  		  settingsController.getSetting('tax', function (tax) {
					  totalPrice.total = totalPrice.subtotal + totalPrice.subtotal*tax.value/100;
	                  res.render('view-cart.hbs', {
	                    userId:userId,
	                    products: object.products,
	                    totalPrice: object.totalPrice,
	                    nOrders: orders.length,
						tax: tax.value,
	                    pageHeader: true,
	                    cssViewCart: true,
	                    breadcrumbs: [
	                        {title: "View Cart", link: "/view-cart"}
	                    ],
	                    pagination: { page: page, limit: limit ,totalRows: numRows }
	                  });
		  		   });
              }
          });
      }

  });
});

module.exports = router;
