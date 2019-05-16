var mongoose = require('mongoose')//加载模块
var Schema =mongoose.Schema;
var produtSchema =new Schema({

    productId:String,
    
    productName:String,
    
    prodcutPrice:String,
    
    prodcutImg:String
    
    })
module.exports =mongoose.model('Good',produtSchema)
