function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i=1; i<nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]); 
        // Math.max(startNew, continue with the existing subarray)

        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum
};