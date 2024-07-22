// name start
let t=document.getElementById("t-in").value="";
let e=document.getElementById("e-in").value="";
let m=document.getElementById("m-in").value="";
let s=document.getElementById("s-in").value="";
let ss=document.getElementById("ss-in").value="";
let fn=document.getElementById("full_name_in").value="";
function fun(){
    
let fn=document.getElementById("full_name_in").value;
let full_name_array=[];
full_name_array.push(fn);
let fna=full_name_array.map(full_name_array=>full_name_array.toUpperCase());


document.getElementById("full_name_out").innerHTML=fna;

//name end

let t=document.getElementById("t-in").value;
let e=document.getElementById("e-in").value;
let m=document.getElementById("m-in").value;
let s=document.getElementById("s-in").value;
let ss=document.getElementById("ss-in").value;

// let tt=t
// let ee=e
// let mm=m
// let si=s
// let ssss=ss
// if(tt >=35 && ee>=35 && mm>=35 && si>=35 && ssss>=35){
//     let pass_fail=document.getElementById("r_out").innerHTML=pass_fail;
// }
let max=35;
    let tt=Number(document.getElementById("t-in").value);
    let ee=Number(document.getElementById("e-in").value);
    let mm=Number(document.getElementById("m-in").value);
    let si=Number(document.getElementById("s-in").value);
    let so=Number(document.getElementById("ss-in").value);

   
    if (tt >=max && ee >=max  && mm >=max  && si >=max  && so>=max ){
        
        document.getElementById("r-out").innerHTML="pass"
    }
    else{
       
        document.getElementById("r-out").innerHTML="fail"
    }

    let kumar =25+ si;
    let to_tal= tt+ee+mm+si+so+25;
document.getElementById("t-out").innerHTML=t;
document.getElementById("e-out").innerHTML=e;
document.getElementById("m-out").innerHTML=m;
document.getElementById("s-out").innerHTML= "("+s+"+ 25) + "+kumar;
document.getElementById("ss-out").innerHTML=ss;
document.getElementById("total-out").innerHTML=to_tal;

let ar=[];
ar.push(t);
ar.push(e);
ar.push(m);
ar.push(s);
ar.push(ss);
console.log(ar);






}
$(document).ready(function(){

$(".btn").click(function(){
    $("#a_div").show();
    $("#q_div").hide();
});

});


