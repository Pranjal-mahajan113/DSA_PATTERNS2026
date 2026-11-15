function maximumSubarraySum(arr,k){
 let n=arr.length;
 let left=0   
 let high=k-1;
  let sum=0;
  let maxsum=-Infinity;
  for(let i=left;i<=high;i++){
    sum+=arr[i]
  }
   maxsum=sum;
   
} 
console.log