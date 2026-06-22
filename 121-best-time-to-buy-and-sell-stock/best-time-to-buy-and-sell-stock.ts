function maxProfit(prices: number[]): number {
    let lowestPriceSoFar : number = Infinity;
    let maxProfitSoFar : number = 0
    for(let i=0; i<prices.length; i++){
        if(prices[i] < lowestPriceSoFar){
            lowestPriceSoFar = prices[i];
        }
        let newProfit = prices[i] - lowestPriceSoFar;
        if( newProfit > maxProfitSoFar){
            maxProfitSoFar = newProfit;
        }
    }
    return maxProfitSoFar;
};