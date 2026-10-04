const Course = require('../models/Course');

exports.search = async (req, res) => res.json(await Course.find({ title: new RegExp(req.query.keyword, 'i') }));//checks the keyword and finds it in the database 
exports.getAll = async (req, res) => res.json(await Course.find()); // reutrns all the courses in the database
//Express captures that ID using req.params.id
exports.getOne = async (req, res) => res.json(await Course.findById(req.params.id));//takes the couser from the url and finds it from the database and returns it
//safety net
exports.create = async (req, res) => {
    const courseData = req.body || {}; 
    // Attachs the video URL if the file upload middleware didn't already
    if (!courseData.videoUrl) {
        courseData.videoUrl = "https://www.youtube.com/watch?v=_uQrJ0TkZlc";
    }
    // Create the course and send it back
    res.json(await Course.create(courseData));
};
exports.update = async (req, res) => res.json(await Course.findByIdAndUpdate(req.params.id, req.body));
exports.remove = async (req, res) => res.json(await Course.findByIdAndDelete(req.params.id));