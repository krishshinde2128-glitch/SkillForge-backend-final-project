const mongoose = require('mongoose');

module.exports = mongoose.model('Course', new mongoose.Schema({ 
    title: String, 
    videoUrl: String,
    lessons: [{ title: String, content: String }],
    quizzes: [{ question: String, answer: String }]
}));