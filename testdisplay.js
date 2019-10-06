document.getElementById("fråga1").style.display = "none";
document.getElementById("fråga2").style.display = "none";
document.getElementById("fråga3").style.display = "none";
document.getElementById("fråga4").style.display = "none";
document.getElementById("fråga5").style.display = "none";

document.getElementById('enfråga').addEventListener('click',()=>{
    document.getElementById('fråga1').style.display = 'initial';
    document.getElementById("fråga2").style.display = "none";
    document.getElementById("fråga3").style.display = "none";
    document.getElementById("fråga4").style.display = "none";
    document.getElementById("fråga5").style.display = "none";
    document.getElementById('namn2').innerHTML = "";
})
document.getElementById('tvåfrågor').addEventListener('click',()=>{
    document.getElementById('fråga1').style.display = 'initial';
    document.getElementById('fråga2').style.display = 'initial';
    document.getElementById("fråga3").style.display = "none";
    document.getElementById("fråga4").style.display = "none";
    document.getElementById("fråga5").style.display = "none";
    document.getElementById('namn2').innerHTML = "";
})
document.getElementById('trefrågor').addEventListener('click',()=>{
    document.getElementById('fråga1').style.display = 'initial';
    document.getElementById('fråga2').style.display = 'initial';
    document.getElementById('fråga3').style.display = 'initial';
    document.getElementById("fråga4").style.display = "none";
    document.getElementById("fråga5").style.display = "none";
    document.getElementById('namn2').innerHTML = "";
})
document.getElementById('fyrafrågor').addEventListener('click',()=>{
    document.getElementById('fråga1').style.display = 'initial';
    document.getElementById('fråga2').style.display = 'initial';
    document.getElementById('fråga3').style.display = 'initial';
    document.getElementById('fråga4').style.display = 'initial';
    document.getElementById("fråga5").style.display = "none";
    document.getElementById('namn2').innerHTML = "";
})
document.getElementById('femfrågor').addEventListener('click',()=>{
    document.getElementById('fråga1').style.display = 'initial';
    document.getElementById('fråga2').style.display = 'initial';
    document.getElementById('fråga3').style.display = 'initial';
    document.getElementById('fråga4').style.display = 'initial';
    document.getElementById('fråga5').style.display = 'initial';
    document.getElementById('namn2').innerHTML = "";
})
