const postorder = 'insert into Orders (order_type, user_id, product_name, category, price, product_status, description, location, contact, img_src) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
const recentorders = 'select * from orders order by date asc limit 10';

module.exports = {
    postorder,
    recentorders,
}