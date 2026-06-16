function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for(let i=0; i<nums.length; i++) {

        let currentNumber = nums[i];
        let neededNumber = target - currentNumber;
        
        if(map.has(neededNumber)) {
            return [map.get(neededNumber), i];
        }
        map.set(currentNumber, i)
    }
};