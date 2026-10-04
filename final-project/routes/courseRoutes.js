const router = require('express').Router();
const c = require('../controllers/courseController');
const auth = require('../middleware/auth');

router.get('/search', c.search); 
router.get('/', c.getAll);
router.get('/:id', c.getOne);
router.post('/', auth, c.create);
router.put('/:id', auth, c.update);
router.delete('/:id', auth, c.remove);
module.exports = router;