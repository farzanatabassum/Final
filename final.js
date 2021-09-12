function start(){
let person =document.getElementById("name").value ;
let pAge=document.getElementById("age").value ;
let Month=document.getElementById("month").value ;
let Year= document.getElementById("year").value ;
let incentive;
function cal(a,y,m){
    let mondev=y/12;
    let yearinter=m*12;
    let total=y+yearinter;
if(a>50 && total>20000){
    incentive=yearinter*0.20;
    return incentive;
}
else if(a>30 && mondev>=250){
   incentive=yearinter*0.15;
   return incentive;
}
else{
    incentive=0;
    return incentive;

}




}
Incen=cal(pAge,Year,Month);
let text=`<b style="background-color: aquamarine;color:black; font-size: 20px;">Hello ${person} , your age is ${pAge} , your Monthly Internet Bill is ${Month} , your yearly device maintenance fees are ${Year} and your Govt.incentive amount ${Incen}</b>`;

document.getElementById("in").innerHTML=text;
document.getElementById("name").value ='';
document.getElementById("age").value='' ;
document.getElementById("month").value='';
document.getElementById("year").value='' ;
}