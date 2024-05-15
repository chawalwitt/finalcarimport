//const { query } = require('express');//
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'chawalwitt',
    database: 'car-db',
});

async function getAll() {
    const query = 'SELECT * FROM Cars';
    const [data] = await connection.promise().query(query);
    return data;
}

async function remove(id) {
    const query = 'DELETE FROM Cars WHERE id =?';
    await connection.promise().query(query,[id]);
    return;
}

async function insert(car) {
    const query = 'INSERT INTO Cars (brand,model,price,carstocks) VALUES (?, ?, ?, ?)';
    const [result] = await connection.promise().query(query,[car.brand,car.model,car.price,car.carstocks]);
    return { ...car,id: result.insertId};
}

async function update(car) {
    const query = 'UPDATE Cars SET brand = ?,model = ?,price = ?,carstocks = ? WHERE id = ?';
    await connection.promise().query(query,[car.brand,car.model,car.price,car.carstocks,car.id]);
    return car;
}

async function get(id) {
    const query = 'SELECT * FROM Cars WHERE id = ?';
    const [data] = await connection.promise().query(query, [id]);
    return data.pop();
}

function save(car) {
    if (!car.id) {
        return insert(car);
    } else {
        return update(car)
    }
}

module.exports = {getAll,remove,get,save}
