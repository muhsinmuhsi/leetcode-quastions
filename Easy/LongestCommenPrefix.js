function findcommonprefix(array){
    if(array.length===0){
        return '';
    }
    let prefix=array[0];

    for(let word of array){
        while(word.indexOf(prefix)!==0){
             prefix=prefix.slice(0,-1)
             if(prefix==''){
                return '';
             }
           
        }
    }
    return prefix;
}

const arr=["aer","bbw","ccght"]
console.log(findcommonprefix(arr));

