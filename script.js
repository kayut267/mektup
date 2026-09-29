const wrap =
    document.querySelector(".envelope-wrap");

const close =
    document.querySelector(".close");


/* Mektubu aç */

function openLetter() {

    wrap.classList.add("open");

    wrap.setAttribute(
        "aria-label",
        "Mektup açık"
    );
}


/* Mektuba tıklayınca aç */

wrap.addEventListener("click", function (event) {

    if (event.target === close) {
        return;
    }

    openLetter();

});


/* Klavye ile acma */

wrap.addEventListener("keydown", function (event) {

    if (
        (event.key === "Enter" ||
        event.key === " ") &&
        !wrap.classList.contains("open")
    ) {

        event.preventDefault();

        openLetter();
    }

});


/* Mektubu kapat */

close.addEventListener("click", function (event) {

    event.stopPropagation();

    wrap.classList.remove("open");

    wrap.setAttribute(
        "aria-label",
        "Mektubu aç: Tıklayınız Sayın Cemre Aşkım Hazretleri"
    );

    wrap.focus();

});