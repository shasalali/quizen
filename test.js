
class Quiz{
    constructor(poäng,antal){
        this.poäng = poäng;
        this.antal = antal;
        var jsonfrågor = {
            "fråga1": "Vem är Sveriges kung?",
            "fråga2": "Var ligger Nackademin?",
            "fråga3": "I vilken stad finns Eiffel Tornet?",
            "fråga4": "Vilka är med i Beatles? Två är rätt",
            "fråga5": "Vem är USAs president?"
        }
        document.getElementById('ques1').innerHTML = jsonfrågor.fråga1;
        document.getElementById('ques2').innerHTML = jsonfrågor.fråga2;
        document.getElementById('ques3').innerHTML = jsonfrågor.fråga3;
        document.getElementById('ques4').innerHTML = jsonfrågor.fråga4;
        document.getElementById('ques5').innerHTML = jsonfrågor.fråga5;
    }
    
    klick(fråga){
        document.getElementById(fråga).addEventListener("click",()=>{
            antal = antal + 1;
            document.getElementById('svarat').innerHTML = antal
            if(antal < 5){
           this.check(this.fråga,this.svar);}
            else{
                poäng = poäng + 1;
                console.log(poäng)
                document.getElementById('quiz').style.display = 'none';
                document.getElementById('namn2').innerHTML = document.getElementById('namn').value + ' fick ' + poäng + ' poäng';
            }
        }
        )
    }
}

class Question extends Quiz{
    constructor(fråga,svar){
        super(0,0);
        this.fråga = fråga;
        this.svar = svar;
    }

check = (fråga,svar) =>{
        var x =document.getElementById(svar).checked;
        var z = document.getElementById('doublecheck').checked;
        var y = document.getElementById('checked9').checked
        if(x == true && z !==true){
         poäng = poäng + 1;
         document.getElementById(fråga).style.display = 'none';
        }
        else if(z == true && x !== true){
            poäng = poäng + 1;
            document.getElementById(fråga).style.display = 'none';
        }
        else if(z == true && x == true && y !== true){
            poäng = poäng + 2;
            document.getElementById(fråga).style.display = 'none';
        }
        else if(z ==true && x == true && y == true){
            poäng = poäng + 0;
        }
        else{
        poäng = poäng + 0;
        document.getElementById(fråga).style.display = 'none';

        }
    }
}

let fråga1 = new Question('första','checked1');
fråga1.klick('första');
let fråga2 = new Question('andra','checked2');
fråga2.klick('andra');
let fråga3 = new Question('tredje','checked3');
fråga3.klick('tredje');
let fråga4 = new Question('fjärde','checked4');
fråga4.klick('fjärde');
let fråga5 = new Question('femte','checked5');
fråga5.klick('femte');

antal = 0;
poäng = 0;
document.getElementById('svarat').innerHTML = antal;
