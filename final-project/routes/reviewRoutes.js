const router = require('express').Router();
const c = require('../controllers/reviewController');
const auth = require('../middleware/auth');

router.post('/', auth, c.create);
router.get('/course/:id', c.getForCourse);
module.exports = router;