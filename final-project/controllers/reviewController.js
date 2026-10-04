const Review = require('../models/Review');

exports.create = async (req, res) => res.json(await Review.create(req.body));
exports.getForCourse = async (req, res) => res.json(await Review.find({ courseId: req.params.id }));