function isAnagram(s: string, t: string): boolean {
    // if length isn't the same, how can frequency be the same. So it becomes false.
    if(s.length !== t.length) {
        return false
    }

    const map = new Map<string, number>() // Initiate the Map

    // Iterate over the string s, if string exists in the map, give its count, otherwise 0
    // Then increase the count for the s string
    for(const char of s){ 
        let count = map.get(char) || 0;
        map.set(char, count + 1);

    }

    // Iterate over the string t, if string exists in the map, give its count, otherwise 0
    // Then decrease the count for the t string
    // If the char doesn't exist in the map, simply return false, because it should have existed after it went through string s. If doesn't exist, it means char in both strings are different, hence frequency is different. So becomes false.
    for(const char of t){
        if(!map.has(char)){
            return false
        }
        let count = map.get(char) || 0;
        map.set(char, count - 1);
    }

    // if after decreasing, count becomes 0, its anagram.
    for(const value of map.values()) {
        if(value !== 0){ // if even one is not 0, return false.
            return false
        }
    }

    return true

};