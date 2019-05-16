var express = require('express');//加载模块
var router = express.Router();//引用router
var mongoose = require('mongoose');
var Goods = require('../models/goods')
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true })
mongoose.connection.on('connected', function () {

    console.log("连接成功");
    
    })
mongoose.connection.on('error', function () {

        console.log("连接失败");
        
        })
mongoose.connection.on('disconnected', function () {

            console.log("断开连接");
            
            })
    //路由获取
router.get('/', function (req, res, next) {
    // //查询mongoDB的goods数据
    
    Goods.find({}, function (err, doc) {
      
    if (err) {
    
    res.json({
    
    status: '1',
    
    msg: err.message
    
    })
    
    } else {
    
    res.json({
    
    list:doc,
    count:doc.length
    
    })
    
    }
    
    })
    
    });
    
    module.exports = router;//暴露路由