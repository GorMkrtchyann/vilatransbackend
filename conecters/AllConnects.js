const mongoose = require("mongoose");
require("dotenv").config();

const adminDB = mongoose.createConnection(process.env.MONGODB_ADMIN);
const pagesDB = mongoose.createConnection(process.env.MONGODB_PAGES);

// Check connection status for adminDB
adminDB.on('connected', () => {
    console.log('Admin database is connected');
});

adminDB.on('error', (err) => {
    console.error('Admin database connection error:', err);
});

// Check connection status for pagesDB
pagesDB.on('connected', () => {
    console.log('Pages database is connected');
});

pagesDB.on('error', (err) => {
    console.error('Pages database connection error:', err);
});


// Check connection status for adminDB
adminDB.on('connected', () => {
    console.log('Admin database is connected');
});

adminDB.on('error', (err) => {
    console.error('Admin database connection error:', err);
});

// Check connection status for pagesDB
pagesDB.on('connected', () => {
    console.log('Pages database is connected');
});

pagesDB.on('error', (err) => {
    console.error('Pages database connection error:', err);
});

module.exports = {
    adminDB,
    pagesDB
};
