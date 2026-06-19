function containsDuplicate(nums: number[]): boolean {
    const a = new Set(nums);
    if(a.size !== nums.length) {
        return true
    } 
    return false
};