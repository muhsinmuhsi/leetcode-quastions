const symols={
   "I" : 1, 
   "V" : 5,
   "X" : 10, 
   "L" : 50 ,
   "C" : 100 ,
   "D" : 500 ,
   "M" : 1000
  };

const RomanIntoInt=(s)=>{
   let ans=0;
   for(let i=0;i<s.length;i++){
       symols[s[i]] < symols[s[i+1]]? ans -= symols[s[i]]: ans += symols[s[i]]
   }

   return ans;
}

console.log(RomanIntoInt('IV'));
 

