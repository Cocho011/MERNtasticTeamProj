const db = require('../config/connection');
const {Budget} = require('../models');
const cleanDB = require('./cleanDB');

const budgetData = require('./budgetData.json');

db.once('open', async () => {
    await cleanDB('Budget');

    await Budget.insertMany(budgetData);

    console.log('Budget is seeded!');
    process.exit(0);
});
