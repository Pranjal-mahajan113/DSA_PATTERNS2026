// function longestKSubstr(s, k) {
//     let low = 0;
//     let res = -1;
//     let freq = new Map();

//     for (let high = 0; high < s.length; high++) {

//         // 1. Naya character map mein add karo
//         let ch = s[high];
//         freq.set(ch, (freq.get(ch) || 0) + 1);

//         // 2. Agar unique characters k se zyada hain
//         // toh left side se characters hatao
//         while (freq.size > k) {
//             let leftChar = s[low];

//             freq.set(leftChar, freq.get(leftChar) - 1);

//             if (freq.get(leftChar) === 0) {
//                 freq.delete(leftChar);
//             }

//             low++;
//         }

//         // 3. Agar exactly k unique hain
//         // toh length calculate karo
//         if (freq.size === k) {
//             let len = high - low + 1;
//             res = Math.max(res, len);
//         }
//     }

//     return res;
// }
/// let freq = new Map();
// for (let i = 0; i < s.length; i++) {
//   let ch = s[i];
//   freq.set(ch, (freq.get(ch) || 0) + 1);
// }
// console.log(freq.size)

function longestKSubstr(k, s) {
  let low = 0;
  let high = 0;
  let res = -1;
  let n = s.length;
  let freq = new Map();
  for (high = 0; high < n; high++) {
    let ch = s[high];
    freq.set(ch, (freq.get(ch) || 0) + 1);
    while (freq.size > k) {
      let leftchar = s[low];
      freq.set(leftchar, freq.get(leftchar) - 1);
      if(freq.get(leftchar)===0){
        freq.delete(leftchar)
      }
      low++;

    }
    if(freq.size===k){
        let len=high-low+1;
        res=Math.max(res,len)
    }

  }
  return res;
}
