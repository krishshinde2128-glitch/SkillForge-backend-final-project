const Enrollment = require('../models/Enrollment');

exports.enroll = async (req, res) => res.json(await Enrollment.create(req.body));
exports.getUserEnrollments = async (req, res) => res.json(await Enrollment.find({ studentId: req.params.id }));
exports.updateProgress = async (req, res) => res.json(await Enrollment.findByIdAndUpdate(req.params.id, { completed: true }));