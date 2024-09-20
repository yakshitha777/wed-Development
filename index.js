let person={
    name:"jack",
    mark:700,
    name:"boy",
};
//console.log(person)
//person.mark=800
// person["name"]="rose"
// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.entries(person))
// let colors=["red","blue"];
// colors[1]="yellow"
// console.log(colors)
// colors.push("green");
// console.log(colors);
// colors.pop()
// console.log(colors)
// colors.shift()
// console.log(colors)
// colors.unshift("purple")
// console.log(colors)
// console.log(colors.length);

// function greet(params){
    // console.log('function greet')
// }
// function add(p0,p2){
    // return p0+p2;
// }
// greet()
// let a=add(1,2)
// console.log(a);
// let input = prompt("enter input");
// input=parseInt(input)
// alert(typeof(input));

// function add(a,b){
            //   
    // alert(a+b)
// }
// function sub(a,b){
      
    //   alert(a-b)
//   }
//   function mul(a,b){
      
    //   alert(a*b)
//   }
//   function div(a,b){
    //       alert(a/b)
//   }
//   function mod(a,b){
      
    //   alert(a%b)
//   }
//  let a=prompt('enter first number')
//  let b=prompt('enter second number')
//  let c=prompt('enter operator')
//  a=parseInt(a)
//  b=parseInt(b)
//  if(c=='+')
//  {
    // add(a,b);
//  }
//  if(c=='-')
//  {
    // sub(a,b);
//  }
//  if(c=='*')
//  {
    // mul(a,b);
//  }
//  if(c=='/')
//  {
    // div(a,b);
//  }
//  if(c=='%')
//  {
    // mod(a,b);
//  }
let numbers=[1,2,3,4,5];
// array.forEach((element,index)=>{
// })
let colors=["purple","red","pink","gold","green","black"];
colors.forEach((element,index)=>{
    console.log(element)
})
let new_x=numbers.forEach((ele,i)=>{
    return ele*2;
})
let new_y=numbers.filter((ele,i)=>{
    return ele%2==0;
})
let new_z=numbers.map((ele,i)=>{
    return ele*2;
})
console.log(new_x)
console.log(new_y)
console.log(new_z)