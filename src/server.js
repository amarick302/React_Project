const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// const bodyParser=require('body-parser')
const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyParser.urlencoded({extended:false}))
const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "atanu1996",
    database: "online_consumer"
});

app.get('/',(req,res)=>{
    res.send('This is the Home Page');
})
app.post('/registration', (req, res) => {
    // console.log('hello')
    conn.getConnection((err,connection) => {
        if (err) {
            res.send(err)
        }
        else {
            let sql = "insert into customer values(?,?,?,?,?)";
            connection.query(sql, [req.body.email,req.body.fName,req.body.lName,req.body.password,req.body.contact], (err, result) => {
                connection.release();
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result);
                }
            })
        }
    })
})
app.post('/login',(req,res)=>{
    conn.getConnection((err,connection)=>{
        if(err){
            res.send(err);
        }
        else{
            let sql="select * from customer where email=? and password=?";
            connection.query(sql,[req.body.email,req.body.password],(err,result)=>{
                connection.release()
                if(err){
                    res.send(err);
                }
                else{
                    res.send(result);
                }
            })
        }
    })
})

app.listen(3000, () => console.log('server is listen at the port: 3000'));