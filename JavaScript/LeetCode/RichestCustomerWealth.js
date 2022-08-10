/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money
the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.
 */

function maximumWealth(accounts) {
    var maxWealth = 0;

    for (var i = 0; i < accounts.length; i++){
        var customerWealth = 0;

        for (var j = 0; j < accounts[i].length; j++){
            customerWealth += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, customerWealth);
    }
    return maxWealth;
}

maximumWealth([[1,2,3], [3,2,1]]);