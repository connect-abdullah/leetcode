function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for(const string of strs) {
        let sortedString = string.split("").sort().join(""); // sort the string, for consistancy
        let value = map.get(sortedString); // get teh value of the sorted string, hash(aet:[eat])
        // if value exists, it means array exists for sortedString, then just simply push the new word
        if(value){
            value.push(string);
        } else {
        // if value doesn't exist, it means array doesn't exist for sortedString -> means its a new word
        // so initiate the new value for sortedString(key) as array of current word.
            map.set(sortedString, [string]);
        }
    }

    // At last, return the only the values, in the array format, because values will always be in array.
    // In this way, answer will become 2d Array, string[][].
    return Array.from(map.values());
};