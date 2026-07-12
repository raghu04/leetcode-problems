var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let customer of accounts) {
        const wealth = customer.reduce((sum, money) => sum + money, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};