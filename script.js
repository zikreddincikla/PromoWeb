const up_arrow = document.querySelector("#page-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        up_arrow.classList.add("page-up-block")
    }
    else {
        up_arrow.classList.remove("page-up-block")
    }
})
up_arrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});