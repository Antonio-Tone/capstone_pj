const db = require("../config");
class Vehicles{
    fetchVehicles(req, res) {
        const query = `
            SELECT vehicleID, vehicleName,brand,inventory,rating,speed,year,imageURL,hoveredURL,category,rate 
            FROM vehicles
        `;
        db.query(query, (err, data) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results:data,
          });
        });
      }

      fetchVehicle(req, res) {
        const query = `
        SELECT vehicleID, vehicleName,brand,inventory,rating,speed,year,imageURL,hoveredURL,category,rate 
            FROM vehicles 
            WHERE vehicleID = ${req.params.id}
        `;
        db.query(query, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }
// deleting vehicle
      deleteVehicle(req, res) {
        const query = `
            DELETE FROM vehicles WHERE vehicleID = ${req.params.id}
        `;
    
        db.query(query, [req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "vehicle record was deleted successfully",
          });
        });
      }

      updateVehicle(req, res){
        const query = `
            UPDATE vehicles SET ? WHERE vehicleID = ${req.params.id}
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "vehicle record udpated successfully"
            })
        })
    }

      addVehicle(req, res){
        const query = `
            INSERT INTO vehicles SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "vehicle inserted successfully"
            })
        })
    }
    }


    module.exports = Vehicles;











