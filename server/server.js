const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const mycoon = require('express-myconnection');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());

const dbOptions = {
    host: process.env.host_db,
    user: process.env.user_db,
    password: process.env.password_db,
    port: process.env.port_db,
    database: process.env.database_db
};

try {
    app.use(mycoon(mysql, dbOptions, 'single'));
    console.log("Conectado a la base de datos");
} catch (error) {
    console.log('------------------- ERROR -------------------');
    console.log(error);
    console.log('---------------------------------------------');
}

app.get('/login', async (req, res) => {
    console.log(req.body);
    console.log("---------------------------------------------------------");
    let correo = req.body.correo;
    let password = req.body.password;
    req.getConnection((err, conn) => {
        if (err) {
            console.log('------------------- ERROR -------------------');
            console.log(err);
            console.log('---------------------------------------------');
        } else {
            conn.query('SELECT passwords FROM usuarios WHERE correo=correo', [
                correo
            ], (err, rows) => {
                if (err) {
                    console.log('------------------- ERROR -------------------');
                    console.log(err);
                    console.log('---------------------------------------------');
                } else {
                    console.log(rows);
                    console.log('usuario encontrado');
                }
            })
        }

    })

})


app.post('/registro', async (req, res) => {
    let nombre = req.body.nombre + ' ' + req.body.apellido;
    let email = req.body.correo;
    let password = req.body.contrasena1;
    let id = req.body.id;
    let telefono = req.body.telefono;
    let direccion = req.body.direccion;


    req.getConnection((err, conn) => {
        if (err) {
            console.log('------------------- ERROR -------------------');
            console.log(err);
            console.log('---------------------------------------------');
        } else {
            conn.query('INSERT INTO usuarios (nombre, correo, passwords, checkPassword,telefono,direccion, id_cliente) VALUES(?,?,?,?,?,?,?)', [
                nombre, email, password, password, telefono, direccion, id
            ], (err) => {
                if (err) {
                    console.log('------------------- ERROR -------------------');
                    console.log(err);
                    console.log('---------------------------------------------');
                } else {
                    console.log('Usuario registrado');
                }
            })
        }

    })
})

app.listen(app.set('port'), () => {
    console.log('Server on port', app.set('port'));
});