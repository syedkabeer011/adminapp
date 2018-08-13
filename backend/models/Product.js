import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Product = new Schema ({
    name : {
        type: String
    },
    image : {
        type: String
    },
    price_1 : {
        type: Number
    },
    price_2 : {
        type: Number
    },
    price_3 : {
        type: Number
    },
    size_1 : {
        type: String
    },
    size_2 : {
        type: String
    },
    size_3 : {
        type: String
    },
    category : {
        type: String
    },
    tags : {
        type: String
    },
    status : {
        type: Boolean
    },
    description : {
        type: String
    }

});

export default mongoose.model('Product', Product);