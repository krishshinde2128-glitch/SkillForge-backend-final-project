const mongoose = require('mongoose');
module.exports = mongoose.model('Enrollment', new mongoose.Schema({ courseId: String, studentId: String, completed: Boolean }));