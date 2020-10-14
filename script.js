//JS for burgermenu starter her


// const erklære en variabel med værdien burger, nav-links, nav-links li///
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links (forEach går i gennem hvert link/Element)
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            //(hvis der allerede er en animation så fjernes den)
            link.style.animation = ''
        } else {
            //(hvis der ikke er en animation, så tilføjes den
            link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 6)+.4}s`;
        }
    });
    //Burger Animation (her fjernes eller påsættes toggle-klassen fra css)
    burger.classList.toggle('toggle');

});

//JS for burgermenu slutter her

//JS for diagrammaer starter her

const svar = 178;
const values1 = [47, 128, 82];
const values2 = [63, 15, 64, 36];
const values3 = [126, 33, 19];
const values4 = [73, 105];




function vis1(value) {
    document.querySelector("#holder1").textContent = value + '%';
}


function vis2(value) {
    document.querySelector("#holder2").textContent = value + '%';
}


function vis3(value) {
    document.querySelector("#holder3").textContent = value + '%';
}

function vis4(value) {
    document.querySelector("#holder4").textContent = value + '%';
}




document.querySelectorAll("#graf1 .bars line").forEach((bar, i) => {
    let value1 = Math.floor(values1[i] / svar * 100);
    bar.setAttribute("y1", 100 - value1);
    bar.setAttribute("data-value", 100 - value1);
    bar.addEventListener("mouseover", e => vis1(value1));
});


document.querySelectorAll("#graf2 .bars line").forEach((bar, i) => {
    let value2 = Math.floor(values2[i] / svar * 100);
    bar.setAttribute("y1", 100 - value2);
    bar.setAttribute("data-value", 100 - value2);
    bar.addEventListener("mouseover", e => vis2(value2));

});


document.querySelectorAll("#graf3 .bars line").forEach((bar, i) => {
    let value3 = Math.floor(values3[i] / svar * 100);
    bar.setAttribute("y1", 100 - value3);
    bar.setAttribute("data-value", 100 - value3);
    bar.addEventListener("mouseover", e => vis3(value3));
});


document.querySelectorAll("#graf4 .bars line").forEach((bar, i) => {
    let value4 = Math.floor(values4[i] / svar * 100);
    bar.setAttribute("y1", 100 - value4);
    bar.setAttribute("data-value", 100 - value4);
    bar.addEventListener("mouseover", e => vis4(value4));
});
//JS for diagrammaer slutter her
