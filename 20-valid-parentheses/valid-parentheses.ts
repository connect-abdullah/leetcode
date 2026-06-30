function isValid(s: string): boolean {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if ("([{".includes(char)) {
            // If it is an opening bracket, push to stack
            stack.push(char);
        } else {
            // If stack is empty OR top of stack doesn't match, it is invalid
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;

};