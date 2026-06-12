let grettings=["Good Morning","Good Afternoon","Good Evening","Good Night"];
let num=0;

function greet_afternoon(){
    let text=document.getElementById("greet");
    text.innerText=greetings[num];
    num+=1;
    if(num>3){num=0;}
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="/Java-script/images/light_on.jpeg";
}

function turn_on(){
   let light=document.getElementById("on");
   light.src="/Java-script/images/light_off.jpeg";
   light.style.height="400px";
}

function change_color(){
   let colour=document.getElementById("cap");
   colour.style.backgroundColor="black";
   let txt1=document.getElementById("Data");
   txt1.style.color="yellow";
   let txt2=document.getElementById("greet");
   txt2.style.color="yellow";

}