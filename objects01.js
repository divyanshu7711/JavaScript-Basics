

//  declaration of objects 
let sym=Symbol("di");
let object={
    // key:value
    // key is automatically considerd as a string in each case exept symbol 
    name:"divyanshu ",
    roll:756,
    email:"divyanshu.7711@gmail.com",
    // to use symbol as a key we use [] to keep it in symbol 
    [sym]: "it is just a symbol ",
    "branch":"B.tech Cse"


}

// console.log(object);
// console.log(sym);

//                                       ye to hua object declaration 



//                                        now how to acess the key and its values in a objects 
// console.log(object.name);
// console.log(object["branch"])
// console.log(object[sym]);


//                                            to update any key in this 
// object.email="ram@mail.com";
// object["branch"]="motii"
// console.log(object);


//                                           to frezze all update possible in any object 
// Object.freeze(object);
// object.email="ram@mail.com";
// console.log(object);

//                                now how can we add aobject in any function & use its attributes 

// object.funname=function(){
//     console.log("ram ram bhai")
// }
// console.log(object.funname());
// jb bhi aise add krte h & print krwat h too keval function ke andr ki cheez hi print hoogi '

//                                  agr object kii kisi bhi key ko acess krna h too this keyword ka use krna hota h 

// object.funname2=function(){
//     console.log("ram ram bhai")
//     console.log(this.email);
//     console.log(this.branch);
// }
// console.log(object.funname2());





