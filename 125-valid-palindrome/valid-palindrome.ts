// using two-pointers approach

function isPalindrome(s: string): boolean {
    // converts string into lowercase and remove spaces/punctuations
    let cleanString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    let left = 0;
    let right = cleanString.length - 1;

    while(left <= right) {
        if(cleanString[left] !== cleanString[right]){
            return false
        }
        left++;
        right--;
    }
    return true
};