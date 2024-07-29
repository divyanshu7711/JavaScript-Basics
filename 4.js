// stack memory and heap memory 

// Stack memory : copy of the value is send and all is given at just before the compile timee . less then heap 

// Heap memory : copy of refrence is given it means if change is done then it is done at original value ;

let a=50;
let b=a;
b=45;
console.log(a);
console.log(b);

let arr1={
            Name:"divyanshu",
            Rollno:"756",
            SEC:"G-1"

}
console.log(arr1);

let arr2=arr1;
arr2.Name="ram"
console.log(arr1);
console.log(arr2);
