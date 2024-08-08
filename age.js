var current= new Date();
console.log(current.toLocaleDateString());
document.getElementById('currentdate').innerHTML=current.toLocaleDateString();

function calc(){
var dob=document.getElementById('dob').value;
console.log(dob);
console.log(typeof(dob));
let arr=dob.split('-')
console.log(arr);
age=current.getFullYear()-arr[0];
console.log(age);
document.getElementById('disp').innerHTML=`AGE : ${age}`
}