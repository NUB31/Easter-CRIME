//menu toggle code start
const navbar = document.getElementById("navbar");
const btn = document.getElementById("toggle-btn");
const menuTxt = document.getElementById("text-lol");
const stone = document.getElementById("emo");
const main = document.getElementById("main");
const gae = document.getElementById("gae");
const ignore = document.getElementById("ignore");

function toggle() {
    if(window.innerWidth <= 1600) {
        navbar.classList.toggle("yes");
        menuTxt.classList.toggle("yes-txt");
        document.body.style.overflow = 'hidden';
        ignore.style.zIndex = "9";
        if(!navbar.classList.contains("anim")) {
            navbar.classList.add("anim");
            navbar.classList.remove("anim2");
            menuTxt.classList.add("anim");
            btn.src = "./img/arr-ico.png";
            main.classList.add("blur");
            gae.classList.add("blur");
        } else {
            document.body.style.overflow = 'visible';
            navbar.classList.remove("anim");
            navbar.classList.add("anim2");
            menuTxt.classList.remove("anim");
            btn.src = "./img/hamb-ico.png";
            main.classList.remove("blur");
            gae.classList.remove("blur");
        }
    }
}

//menu toggle code end

// modal shit
const m_one = document.getElementById("mistenkt1");
const m_two = document.getElementById("mistenkt2");
const m_three = document.getElementById("mistenkt3");
const m_four = document.getElementById("mistenkt4");
const m_five = document.getElementById("mistenkt5");
const modalVar = document.getElementById("myModal");
const closeBtn = document.getElementById("close");
var person = 0;

function modal() {
    if(person == 1) {
        modalVar.style.display = "flex";
        modalVar.style.animation = "reveal 0.3s";
        m_one.style.display = "flex";
        m_two.style.display = "none";
        m_three.style.display = "none";
        m_four.style.display = "none";
        m_five.style.display = "none";
    } else if (person == 2) {
        modalVar.style.display = "flex";
        modalVar.style.animation = "reveal 0.3s";
        m_one.style.display = "none";
        m_two.style.display = "flex";
        m_three.style.display = "none";
        m_four.style.display = "none";
        m_five.style.display = "none";
    } else if (person == 3) {
        modalVar.style.display = "flex";
        modalVar.style.animation = "reveal 0.3s";
        m_one.style.display = "none";
        m_two.style.display = "none";
        m_three.style.display = "flex";
        m_four.style.display = "none";
        m_five.style.display = "none";
    } else if (person == 4) {
        modalVar.style.display = "flex";
        modalVar.style.animation = "reveal 0.3s";
        m_one.style.display = "none";
        m_two.style.display = "none";
        m_three.style.display = "none";
        m_four.style.display = "flex";
        m_five.style.display = "none";
    } else if (person == 5) {
        modalVar.style.display = "flex";
        modalVar.style.animation = "reveal 0.3s";
        m_one.style.display = "none";
        m_two.style.display = "none";
        m_three.style.display = "none";
        m_four.style.display = "none";
        m_five.style.display = "flex";
    }
}

function closeModal() {
    modalVar.style.animation = "";
    modalVar.style.animation = "hide 0.3s";
    modalVar.style.display = "none";
    m_one.style.display = "none";
    m_two.style.display = "none";
    m_three.style.display = "none";
    m_four.style.display = "none";
    m_five.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalVar) {
        modalVar.style.animation = "";
        modalVar.style.animation = "hide 0.3s";
        modalVar.style.display = "none";
        m_one.style.display = "none";
        m_two.style.display = "none";
        m_three.style.display = "none";
        m_four.style.display = "none";
        m_five.style.display = "none";
    }
} 

// /modal shit

// Questions
var person_name = "";

const send_btn = document.getElementById("send-btn");
var box = document.getElementById("box");
var number = 0;
//const dd = document.getElementById("spm-dd");
// var i = 0;
var questions_arr = ["Hvor var du kl.15:30, da Ann Helen ble drept?", "Hvorfor har du lånt de bøkene som står på lånelisten?", "Hvem tror du har et motiv for å drepe Ann Helen.", "What do you do for a living?", "When did you last see the deceased?", "Where were you at the time of the murder?", "Can you expand on a piece of evidence?", "Do you know anyone who wanted to kill the deceased?"];


var ans_arr1 = ["Jeg skulle vel egentlig til Latinskolen, og møte Kai Åge. Han og noen elever skal lage en musikkvideo med drone-flygning – og da må Kai passes litt ekstra på slik at ikke tusener av kroner deiser i bakken. Ja, hvor var jeg ja … Jeg ventet på en pakke som skulle komme på fredagen, også endte jeg opp med å bli sittende alene på kontoret og arbeide. Setter en på noe god musikk så flyr tiden helt fra en.", 'Det må definitivt være Tore Thoresen på grunn av at han alltid kommer seint til timene sine. Jeg vet ikke, det er bare noe med den mannen.'];
var ans_arr2 = ["Jeg stakk opp i 6.etg kl.15 for å møte Vidar."];
var ans_arr3 = ["Er det bare ett mord? - Jeg ville nå tatt flere i slengen om jeg først skulle drepe noen. Vet ikke helt hvor jeg var. Husker ikke alltid hva jeg gjør. Bare så det er sagt, jeg er uskyldig altså. Jeg er bare en vanlig mann som spiser sin pølse i vaffel og lar andre gjøre sitt.", "Trengte eksempel til oppgave om bokomslag i MK.", 'Kanskje Berit for sjalusien hennes er større enn min kjærlighet for pølse i vaffel.'];
var ans_arr4 = ["Satt og arbeidet på kontoret i 5.etg.", 'Egentlig når jeg tenker over det så kunne egentlig hvem som helst ha drept Ann Helen. Om jeg spesifikt skal si en person så ville jeg ha sagt Jørn, fordi han er helt gal!'];
var ans_arr5 = ["Ja, det var Ann Helen som ble drept ja. Det ble et kortlevd forfatter-eventyr. Jeg møtte på Ann Helen like før det, kanskje kl.15.. Vi pratet bare litt om bøker, også boken hennes da. Ikke så mye spennende. Etterpå gikk jeg bort I kantinen med Iwona for å hente fredags-rundstykkene.", 'Kai Åge Janson er en slik stille mann som holder seg i skyggen. Kan hende han hadde noe med det her.'];

function answer() {
    // i++;
    // console.log(i);
    var dd1 = document.getElementById("spm-dd1");
    var dd2 = document.getElementById("spm-dd2");
    var dd3 = document.getElementById("spm-dd3");
    var dd4 = document.getElementById("spm-dd4");
    var dd5 = document.getElementById("spm-dd5");


    var index = 0;

    if (person == 1) {
        index = dd1.value;
        box = document.getElementById("box1");
    } else if (person == 2){
        index = dd2.value;
        box = document.getElementById("box2");
    } else if (person == 3){
        index = dd3.value;
        box = document.getElementById("box3");
    } else if (person == 4){
        index = dd4.value;
        box = document.getElementById("box4");
    } else if (person == 5){
        index = dd5.value;
        box = document.getElementById("box5");
    }

    var question_string = "";
    var answer_string = "";

    if(index == 1) {
        question_string = questions_arr[0];
        console.log(question_string);
    } else if(index == 2) {
        question_string = questions_arr[1];
        console.log(question_string);
    } else if(index == 3) {
        question_string = questions_arr[2];
        console.log(question_string);
    } else if(index == 4) {
        question_string = questions_arr[3];
        console.log(question_string);
    } else if(index == 5) {
        question_string = questions_arr[4];
        console.log(question_string);
    } else if(index == 6) {
        question_string = questions_arr[5];
        console.log(question_string);
    } else if(index == 7) {
        question_string = questions_arr[6];
        console.log(question_string);
    } else if(index == 8) {
        question_string = questions_arr[7];
        console.log(question_string);
    }

    if(index == 1 && person == 1) {
        answer_string = ans_arr1[0];
    } else if(index == 2 && person == 1) {
        answer_string = ans_arr1[1];
    } else if(index == 3 && person == 1) {
        answer_string = ans_arr1[2];
    } else if(index == 4 && person == 1) {
        answer_string = ans_arr1[3];
    } else if(index == 5 && person == 1) {
        answer_string = ans_arr1[4];
    } else if(index == 6 && person == 1) {
        answer_string = ans_arr1[5];
    } else if(index == 7 && person == 1) {
        answer_string = ans_arr1[6];
    } else if(index == 8 && person == 1) {
        answer_string = ans_arr1[7];
    }

    else if(index == 1 && person == 2) {
        answer_string = ans_arr2[0];
    } else if(index == 2 && person == 2) {
        answer_string = ans_arr2[1];
    } else if(index == 3 && person == 2) {
        answer_string = ans_arr2[2];
    } else if(index == 4 && person == 2) {
        answer_string = ans_arr2[3];
    } else if(index == 5 && person == 2) {
        answer_string = ans_arr2[4];
    } else if(index == 6 && person == 2) {
        answer_string = ans_arr2[5];
    } else if(index == 7 && person == 2) {
        answer_string = ans_arr2[6];
    } else if(index == 8 && person == 2) {
        answer_string = ans_arr2[7];
    }

    else if(index == 1 && person == 3) {
        answer_string = ans_arr3[0];
    } else if(index == 2 && person == 3) {
        answer_string = ans_arr3[1];
    } else if(index == 3 && person == 3) {
        answer_string = ans_arr3[2];
    } else if(index == 4 && person == 3) {
        answer_string = ans_arr3[3];
    } else if(index == 5 && person == 3) {
        answer_string = ans_arr3[4];
    } else if(index == 6 && person == 3) {
        answer_string = ans_arr3[5];
    } else if(index == 7 && person == 3) {
        answer_string = ans_arr3[6];
    } else if(index == 8 && person == 3) {
        answer_string = ans_arr3[7];
    }

    else if(index == 1 && person == 4) {
        answer_string = ans_arr4[0];
    } else if(index == 2 && person == 4) {
        answer_string = ans_arr4[1];
    } else if(index == 3 && person == 4) {
        answer_string = ans_arr4[2];
    } else if(index == 4 && person == 4) {
        answer_string = ans_arr4[3];
    } else if(index == 5 && person == 4) {
        answer_string = ans_arr4[4];
    } else if(index == 6 && person == 4) {
        answer_string = ans_arr4[5];
    } else if(index == 7 && person == 4) {
        answer_string = ans_arr4[6];
    } else if(index == 8 && person == 4) {
        answer_string = ans_arr4[7];
    }

    else if(index == 1 && person == 5) {
        answer_string = ans_arr5[0];
    } else if(index == 2 && person == 5) {
        answer_string = ans_arr5[1];
    } else if(index == 3 && person == 5) {
        answer_string = ans_arr5[2];
    } else if(index == 4 && person == 5) {
        answer_string = ans_arr5[3];
    } else if(index == 5 && person == 5) {
        answer_string = ans_arr5[4];
    } else if(index == 6 && person == 5) {
        answer_string = ans_arr5[5];
    } else if(index == 7 && person == 5) {
        answer_string = ans_arr5[6];
    } else if(index == 8 && person == 5) {
        answer_string = ans_arr5[7];
    }


    if (person == 1) {
        person_name = "OLE REINLUND";
    } else if (person == 2) {
        person_name = "TORE THORESEN";
    } else if (person == 3) {
        person_name = "JØRN TORE";
    } else if (person == 4) {
        person_name = "ANNA KNISENKO";
    } else if (person == 5) {
        person_name = "BERIT FISKERGÅRD";
    }

    
    number++;
    newline = document.createElement('div');
    newline.id = 'line' + number;
    newline.classList.add("testLine");
    box.appendChild(newline);
    const line = document.getElementById("line" + number);

    newline2 = document.createElement('div');
    newline2.id = 'answer' + number;
    newline2.classList.add("testLine");
    box.appendChild(newline2);
    const line2 = document.getElementById("answer" + number);

    if(index == 1) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 2) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 3) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 4) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 5) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 6) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 7) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
    if(index == 8) {
        line.innerHTML = "DU: " + question_string;
        line2.innerHTML = person_name + ": " + answer_string;
    }
}


// /Questions

// -----------------------
// add på snap: 'arskobel'
// -----------------------