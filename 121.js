var maxProfit = function(prices) {
    let maxProfit = 0
    initialPrice = prices[0]
    for(let i = 0;i<prices.length;i++){
        if(prices[i]<initialPrice) initialPrice=prices[i];
        maxProfit = Math.max(maxProfit,prices[i]-initialPrice)
    }
    return maxProfit 
};