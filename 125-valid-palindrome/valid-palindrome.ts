// using pre-built properties in typescript

function isPalindrome(s: string): boolean {
    // converts string into lowercase and remove spaces/punctuations, then reverse it
    let modifiedString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").reverse().join("");

    // converts string into lowercase and remove spaces/punctuations
    let normalString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // return true if both are equal, otherwise false
    return modifiedString === normalString;
};