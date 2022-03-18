const mongoose = require("mongoose");
const compra_schema = mongoose.Schema({
    fecha:{
        type: String,
        require: true
    },
    DocNum:{
        type: String,
        require: true
    },
    client:{
        name:{
            type: String,
            require: true
        },
        direction:[
            ciudad=String
        ]
        
    },
    product:{
        details:{
            nameP:{
                type:String,
                require:true
            },
            
            amount:{
                type:Number,
                require: true

            }
        }
    }  
})

module.exports = mongoose.model('compra_document', compra_schema)
