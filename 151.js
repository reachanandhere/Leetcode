/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let n = s.length - 1
    let str = ""
    let k = ""
    let isWord = false
    while (n >= 0) {
        if (s[n] == " " && isWord == false) {
            n--
            continue
        }
        else if (s[n] != " " && isWord == false) {
            isWord = true
            k = k + s[n]
        } else if (s[n] !== " " && isWord == true) k = s[n] + k

        else if (s[n] == " " && isWord == true) {
            str = str + k + " "
            k = ""
            isWord = false
        }

        if (s[n] !== " " && isWord == true && n == 0) str = str + k 
        n--
    }

    return str.trim()
};