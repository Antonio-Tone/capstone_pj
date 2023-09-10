const db = require("../config");
class Orders{
    
    fetchOrders(req, res) {
        const query = `
            SELECT orderID,price,userID,vehicleID, orderDate, fromTime, toTime  
            FROM orders
        `;
        db.query(query, (err, data) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results:data,
          });
        });
      }

      fetchOrder(req, res) {
        const query = `
        SELECT orderID,price,userID,vehicleID, orderDate, fromTime, toTime FROM orders 
            WHERE orderID = ${req.params.id}
        `;
        db.query(query, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }
// deleting order
      deleteOrder(req, res) {
        const query = `
            DELETE FROM orders WHERE orderID = ${req.params.id}
        `;
    
        db.query(query, [req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Order record was deleted successfully",
          });
        });
      }

      updateOrder(req, res){
        const query = `
            UPDATE orders SET ? WHERE orderID = ${req.params.id}
        `
        db.query(query, [req.body, req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Order record udpated successfully"
            })
        })
    }

      addOrder(req, res){
        const query = `
            INSERT INTO orders SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Order inserted successfully"
            })
        })
    }
    }


    module.exports = Orders;











