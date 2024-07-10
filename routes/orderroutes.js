const { Router } = require('express');
const {authenticateUser} = require('../middlewares/auth.js');
const {postOrder, getRecentOrders} = require('../controllers/ordercontroller');

const router = Router();

router.post('/postorder',authenticateUser, postOrder);
router.get('/recentorders', getRecentOrders);

module.exports = router;
