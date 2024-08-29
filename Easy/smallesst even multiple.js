var smallestEvenMultiple = function(n) {
    var nmultiple=n*2;
    if(n%2==0){
        return n;
    }else if(nmultiple%2==0){
        return nmultiple;
    }else{
        return 0;
    }


    // for(let i=1;i<=100;i++){
        
    //     if(n*i==(n*i%2==0)){
    //         console.log('jjjj');
    //         return n*i;
    //     }
    // }
};

console.log(smallestEvenMultiple(6));
