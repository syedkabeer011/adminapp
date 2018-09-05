import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Order = new Schema({
    
    order_special_id : {
        type : Number,
        unique: true,   
        min: 1000     
    },
    user: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    items: {
        type: Array
    },
    total_items: {
        type: Number
    },
    total_price: {
        type: Number
    },
    mobile: {
        type: String,
    },
    in_waiting : {
        type : Boolean
    },
    delivery_charge : {
        type : Number
    },
    applied_coupon_name_feild : {
        type : String
    },
    applied_coupon_discount : {
        type : String
    },
    final_total_with_tax : {
        type : String
    },
    updated : {
        type : Boolean,
        default: false
    },
    order_cancelled : {
        type : Boolean
    },
    delivered : {
        type : Boolean,
        default: false
    },
    last_updated : {
        type : String,
        default: Date.now()
    },
    cod: {
        type: Boolean,
        default: true
    },
    order_date: {
        type: Date,
        default: Date.now()
    },
    //delivery_address needs to be clearified due to 3 different addresses//
    delivery_address: {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        mobile: {
            type: String
        },
        pincode: {
            type: Number
        },
        locality: {
            type: String
        },
        address: {
            type: String
        },
        address2: {
            type: String
        },
        city: {
            type: String,
        },
        state: {
            type: String
        },
        landmark: {
            type:String
        },
        alt_mobile: {
            type: String
        }
    }
});
module.exports = mongoose.model('Order', Order);