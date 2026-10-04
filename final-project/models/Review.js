const mongoose = require('mongoose');
module.exports = mongoose.model('Review', new mongoose.Schema({ courseId: String, comment: String, rating: Number }));