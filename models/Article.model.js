// Require dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Article schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
 
 // Export the model
module.exports = mongoose.model('Article', ArticleSchema);
