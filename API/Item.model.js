const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    ten: {
        type: String
    },
    hinh: {
        type: String
    },
    mota: {
        type: String
    },
    gia: {
        type: Number
    },
    hang: {
        type: String
    },
    trangthai: {
        type: Number
    }
}, {
    collection: 'items'
});

module.exports = mongoose.model('items', Item);