function calculate(){
    let billamt = document.getElementById("billamt").value;
    let service = document.getElementById("serviceQuality").value;
    let numberOfProple = document.getElementById("peopleamt");
    let tip = billamt*service/numberOfProple;
    tip = tip.toFixed(2);
    document.getElementById("tip").style.display = block;
    document.getElementById("tip").innerHTML = tip;
}
document.getElementById("tip").style.display = none;
document.getElementById("calculate").onclick = function(){
    calculate();
}