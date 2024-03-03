# Sliding Window

Main resource: [Sliding Window Technique](https://github.com/labuladong/fucking-algorithm/blob/english/think_like_computer/SlidingWindowTechnique.md)

### Problem

![min window substring](https://raw.githubusercontent.com/labuladong/fucking-algorithm/english/pictures/Sliding_window/title1.jpg)

```
for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let substring = s.substring(i, j);
        if (containsAllLetters(substring, t)) {
            // Update answer
        }
    }
}
```

**The sliding window algorithm idea is like this**:
1. We start with two pointers, left and right initially pointing to the first element of the string S.
2. We use the right pointer to expand the window [left, right] until we get a desirable window that contains all of the characters of T.
3. Once we have a window with all the characters, we can move the left pointer ahead one by one. If the window is still a desirable one we keep on updating the minimum window size.
4. If the window is not desirable any more, we repeat step 2 onwards.

**Summary**: Move right pointer to find a valid window. When a valid window is found, move left pointer to find a smaller window (optimal solution).

Initial State:
![0](https://raw.githubusercontent.com/labuladong/fucking-algorithm/english/pictures/Sliding_window/0.png)
Moving the right pointer until the window has all the elements from string T.
![1](https://raw.githubusercontent.com/labuladong/fucking-algorithm/english/pictures/Sliding_window/1.png)
Now move the left pointer. Notice the window is still desirable and smaller than the previous window.
![2](https://raw.githubusercontent.com/labuladong/fucking-algorithm/english/pictures/Sliding_window/2.png)
After moving left pointer again, the window is no more desirable.
![3](https://raw.githubusercontent.com/labuladong/fucking-algorithm/english/pictures/Sliding_window/3.png)

We need to increment the right pointer and left pointer to look for another desirable window until the right pointer reaches the end of the string S (the algorithm ends).

Solution:

```
function minWindow(string, target) {
    let start = 0, minLen = Infinity;
    let L = 0, R = 0;

    let window = {};
    let needs = {};

    for (let char of target) {
        needs[char] = (needs[char] || 0) + 1;
    }

    let match = 0;

    while (R < string.length) {
        let char1 = string[R];
        if (needs[char1] !== undefined) {
            window[char1] = (window[char1] || 0) + 1;
            if (window[char1] === needs[char1]) {
                match++;
            }
        }
        R++;

        while (match === Object.keys(needs).length) {
            if (R - L < minLen) {
                start = L;
                minLen = R - L;
            }
            let char2 = string[L];
            if (needs[char2] !== undefined) {
                window[char2]--;
                if (window[char2] < needs[char2]) {
                    match--;
                }
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : string.substring(start, start + minLen);
}
```