function fruitBasket(fruits) {
  let low = 0;
  let high = 0;
  let n = fruits.length;
  let res = 0;
  let freq = new Map();

  for (high = 0; high < n; high++) {
    let fruit = fruits[high];
    freq.set(fruit, (freq.get(fruit) || 0) + 1);
    while(freq.size>2){
        let leftfruit=fruits[low];
        freq.set(leftfruit,freq.get(leftfruit)-1);
        if(freq.get(leftfruit)==0){
            freq.delete(leftfruit);
        }
        low++;
    }
    let len=high-low+1;
    res=Math.max(res,len)
  }
  return res;
}
fruits=[1,2,3,2]
console.log(fruitBasket(fruits))
