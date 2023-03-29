const refs = {
    cards: document.getElementsByClassName("rewiews-list-item"),
    btns: document.getElementsByClassName("rewiew-slider-btn")
};
for (let i = 4; i < refs.cards.length; i++) {
    refs.cards[i].style.opacity = 0;
    refs.cards[i].style.pointerEvents = 'none';
}
let move = 0;
let current_btn = 0;
for (let i = 0; i < refs.btns.length; i++) {
    refs.btns[i].addEventListener("click", function() {
        current_btn = i;
        main();
    })
}




function defaultPosition(){
     for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(0px)`;
                if (i > 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
}



function moveTo() {
        for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
}

// window.onresize = function () {
//     defaultPosition();
// }



function main() {
    if (document.documentElement.clientWidth < 768) {
        move = -351;
    }
    else if (document.documentElement.clientWidth >= 768
        && document.documentElement.clientWidth < 1200) {
        move = -360;
    }
    else {
        move = -388;
    }
    switch (current_btn) {
        case 0:
            defaultPosition();
            break;
        default:
            moveTo();
    }
    for (let i = 0; i < refs.btns.length; i++) {
        refs.btns[i].classList.remove("active-slider-btn");
    }
    refs.btns[current_btn].classList.add("active-slider-btn");

}

