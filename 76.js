var minWindow = function (s, t) {
    if (!t.length || !s.length) return "";
    if(s==t) return s

    let countT = {}
    let countS = {}

    //populated countT with values of T
    for (let i = 0; i < t.length; i++) countT[t[i]] = (countT[t[i]] || 0) + 1
    

    let have = 0, need = Object.keys(countT).length
    
    let result = [-1, -1]
    
    let resultLen = Infinity
    
    let left = 0
    
    for (let right = 0; right < s.length; right++) {
        let current = s[right]
        //populating count S with values from s
        countS[current] = (countS[current] || 0) + 1
        //Now checking if the current right element is already present in countT
        if (countT[current] && countS[current] == countT[current]) have++
       
        while (have == need) {
            if (right - left + 1 < resultLen) {
                result = [left, right]         
                resultLen = right - left + 1
            }

            //pop from left
            countS[s[left]]--
            if (countT[s[left]] && countS[s[left]] < countT[s[left]]) have--
            left++
        }
    }

    let [l, r] = result
    return resultLen != Infinity ? s.slice(l, r + 1) : ""

};