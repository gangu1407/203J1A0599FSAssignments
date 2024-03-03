//1st task

let n:number=1;
var s:string='gangotri';
var b:boolean=false;
let arr:number[]=[1,2,3,4];
let t:[string,number]=["gangotri",20]
enum cars{"BMW","BENZ","AUDI","THAR"}

//3rd task

interface Person
{
    name:string;
    age:number;
    email:string;

}
const user:Person =
{
 name:"gangotri",
 age: 20,
 email:"203j1a0599@raghuinstech.com"
}

//2nd task 
var num1:number;
var num2:number;
function add2(num1:number,num2:number)
   {
    return num1+num2;
   }
function capital(s:string)
{
    return s.charAt(0).toUpperCase()+s.slice(1);
}

//4th task

class Car
{
   make:string="BMW";
   model: string="B29";
   year:number=2024;
    displayInfo()
    {
        console.log("make:"+this.make);
        console.log("model:"+this.model);
        console.log("year:"+this.year)
    }
}

//5th task

 function reversearray(arr)
 {
     var arr1:number[]=[];
     for(var i=arr.length-1;i>=0;i--)
     {
       arr1.push(arr[i]);  
     }  
    return arr1;
 }

 var displayinfo= new Car();
 displayinfo.displayInfo();
 var p:number=add2(1,2)
 var q:string=capital("gangotri")
 var r:number[]=reversearray([1,3,4,5,7])
 console.log(p)
 console.log(q)
 console.log(r)


OUTPUT:
make:BMW
model:B29
year:2024
3
Gangotri
[ 7, 5, 4, 3, 1 ]
