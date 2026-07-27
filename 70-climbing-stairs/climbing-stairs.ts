// Fibonacchi Pattern
function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }

    let oneStepBefore = 1;
    let twoStepBefore = 2;
    for(let i = 3; i <= n; i++){ 
        let current = oneStepBefore + twoStepBefore
        
        // Move the values forward
        oneStepBefore = twoStepBefore;
        twoStepBefore = current;
    }

    return twoStepBefore;
};

// Recursive Way

// function climbStairs(n: number): number {
//     if (n <= 2) {
//         return n;
//     }

//     return climbStairs(n-1) + climbStairs(n-2);
// };
