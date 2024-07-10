const orderQueries = require('../queries/orderQueries');
const multer = require ('../middlewares/multer');

const postOrder = async (req,res) =>{
    try {
        const user_id = req.user.user;
        const {order_type, product_name, price, description, location, contact} = req.body;
        var img_src = req.file;
        console.log(img_src);

        if (!order_type || !product_name || !price || !description || !location || !contact || !img_src)
            throw new httpError('Please provide all data', 400);
        const product_status = 'used';
        try{
        await pool.query(orderQueries.postorder, order_type, user_id, product_name, price, product_status, description, location, contact);
        }
        catch (err){
            throw new httpError('something went wrong', 500);
        }

    }
    catch(httpError){
        res.status(httpError.status).send(httpError.msg);
    }
}

const getRecentOrders = async (req,res) =>{
    try {
        
        await pool.query(orderQueries.getRecentOrders)
        res.status(200).send(orders.rows)
    }
    catch(err){
        res.status(500).send('something went wrong');
    }
}

module.exports = {
    postOrder,
    getRecentOrders,
}
