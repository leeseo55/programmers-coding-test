// 나의 풀이
function solution(n) {
   return [...String(n)].reverse().map(el => +el)
}

/**********************************************************
[풀이 후기]
 
배열을 단순히 뒤집고 싶은 경우 sort() 보다 reverse()를 사용!
 
***********************************************************/
