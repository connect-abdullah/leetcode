/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let write = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== write) {
                nums[write] = nums[i];
                nums[i] = 0;
            }
            write++;
        }
    }
};