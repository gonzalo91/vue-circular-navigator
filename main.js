const nav = document.querySelector('nav'),
    toogleBtn = document.querySelector(".toggle-btn")


nav.addEventListener('dblclick', () => {
    console.log('dblclick');
    nav.classList.toggle('open')
})

toogleBtn.addEventListener("click", () => {
    nav.classList.toggle('open')
})



let onDrag = ({ movementY }) => {
    const navStyle = window.getComputedStyle(nav),
        navTop = parseInt(navStyle.top),
        navHeight = parseInt(navStyle.height);
    windHeight = window.innerHeight;

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if (navStyle > windHeight - navHeight) {
        nav.style.top = `${windHeight - navHeight}px`
    }
}


nav.addEventListener("mousedown", () => {
    console.log('mousedown');
    nav.addEventListener("mousemove", onDrag, true)
})

nav.addEventListener("mouseup", () => {
    console.log("mouseup");
    nav.removeEventListener("mousemove", onDrag, true)
})