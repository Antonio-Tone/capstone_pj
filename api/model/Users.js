const db = require("../config");
const { hash, compare, hashSync } = require("bcryptjs");
const { createToken } = require("../middleware/AuthenticateUser");
class Users {
  fetchUsers(req, res) {
    const query = `
    SELECT userID, userName, lastName, gender,age,emailAdd,userRole FROM users
    `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
    SELECT userID, userName, lastName, gender,age,emailAdd,userRole FROM users WHERE userID = ${req.params.id}
    `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async login(req, res) {
    const { emailAdd, userPass } = req.body;
    // query
    const query = `
      SELECT userID ,userName, lastName, gender, age, emailAdd, userPass, userRole FROM
         users WHERE emailAdd = ?
    `;

    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email",
        });
      } else {
        await compare(userPass, result[0].userPass, (cerr, cresult) => {
          if (cerr) throw cerr;
          // Create a token
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cresult) {
            res.json({
              msg: "Logged in!",
              token,
              cresult: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid login",
            });
          }
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 10);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
  
    const checkQuery = `
      SELECT COUNT(*) AS count FROM users WHERE emailAdd = ${user.emailAdd}
    `;
  
    db.query(checkQuery, [data.emailAdd], (checkErr, checkResults) => {
      if (checkErr) {
        throw checkErr;
      }
  
      if (checkResults[0].count > 0) {
        // Email address is already in use
        res.status(400).json({
          status: 400,
          msg: "Email address is already in use.",
        });
      } else {
        const insertQuery = `
          INSERT INTO users SET ?
        `;
  
        db.query(insertQuery, [data], (insertErr) => {
          if (insertErr) {
            throw insertErr;
          }
          // Create token
          let token = createToken(user);
          res.cookie("LegitUser", token, {
            expires: new Date(Date.now() + 259200000),
            httpOnly: true,
          });
          res.json({
            status: res.statusCode,
            msg: "User registered successfully!",
          });
        });
      }
    });
  }
  
  deleteUser(req, res) {
    const query = `
        DELETE FROM users WHERE userID = ${req.params.id}
    `;

    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was deleted successfully",
      });
    });
  }
  updateUser(req, res) {
    const query = `
        UPDATE users SET ? where userID = ${req.params.id}
    `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User details were updated successfully",
      });
    });
  }
}

module.exports = Users;
