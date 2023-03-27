const refs = {
    cards: document.getElementsByClassName("slider-list-element"),
    btns: document.getElementsByClassName("slider-btn"),
    slider: document.getElementsByClassName("slider-list")
};
for (let i = 4; i < refs.cards.length; i++) {
    refs.cards[i].style.opacity = 0;
    refs.cards[i].style.pointerEvents = 'none';
}
const move = -294;
let current_btn = 0;
for (let i = 0; i < refs.btns.length; i++) {
    refs.btns[i].addEventListener("click", function() {
        current_btn = i;
        main();
    })
}


function main() {

    switch (current_btn) {
        case 0:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(0px)`;
                if (i > 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }

            break;
        case 1:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }

            break;
        case 2:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
            break;
        case 3:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
            break;
        case 4:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
            break;
        case 5:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
            break;
        case 6:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }
            break;
        case 7:
            for (let i = 0; i < refs.cards.length; i++) {
                refs.cards[i].style.opacity = 1;
                refs.cards[i].style.pointerEvents = 'auto';
                refs.cards[i].style.transform = `translateX(${current_btn * move}px)`;
                if (i < current_btn || i > current_btn + 3) {
                    refs.cards[i].style.opacity = 0;
                    refs.cards[i].style.pointerEvents = 'none';
                }
            }

            break;
    }
    for (let i = 0; i < refs.btns.length; i++) {
        refs.btns[i].classList.remove("active-slider-btn");
    }
    refs.btns[current_btn].classList.add("active-slider-btn");

}
console.log(document.documentElement.clientWidth);
