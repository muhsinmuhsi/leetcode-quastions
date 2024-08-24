function addTwoNumbers(l1, l2) {
  let l1r = l1.reverse();
  let l2r = l2.reverse();
  let val = '';
  let val2 = '';
  
  for (let i = 0; i < l1r.length; i++) {
    val += l1r[i];
  }

  for (let i = 0; i < l2r.length; i++) {
    val2 += l2r[i];
  }
  
 
  let sum = parseInt(val) + parseInt(val2);
  
  
  return sum
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));


