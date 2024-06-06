const Budget = require('../models/Budget');
const Spending = require('../models/Spending');

async function calculateWeeklyBudget(userId) {
    try {
        const weeklyIncome = await Budget.aggregate([
            { $match: { userId } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);

        const weeklyExpenses = await Spending.aggregate([
            { $match: { userId } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);

        const weeklyBudget = weeklyIncome - weeklyExpenses;

        return weeklyBudget;
    } catch (error) {
        console.error('Error calculating weekly budget:', error);
        throw new Error('Error calculating weekly budget');
    }
}

module.exports = {calculateWeeklyBudget};
