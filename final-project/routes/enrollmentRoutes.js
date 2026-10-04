const router = require('express').Router();
const c = require('../controllers/enrollmentController');
const auth = require('../middleware/auth');

router.post('/', auth, c.enroll);
router.get('/user/:id', auth, c.getUserEnrollments);
router.put('/:id/progress', auth, c.updateProgress);

module.exports = router;