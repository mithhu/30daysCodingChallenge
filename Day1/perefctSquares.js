/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let dp = Array(n + 1).fill(n);
    dp[0] = 0;

    for (let target = 1; target <= n; target++) {
        for (let num = 1; num <= target; num++) {
            const square = num * num;

            if (target - square >= 0) {
                dp[target] = Math.min(dp[target], 1 + dp[target - square]);
            }
        }
    }

    return dp[n];
    
};