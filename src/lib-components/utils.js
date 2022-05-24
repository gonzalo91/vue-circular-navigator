const initEvents = (nav, toggleBtn) => {
    let localDrag = ({ movementY }) => {
        const navStyle = window.getComputedStyle(nav),
            navTop = parseInt(navStyle.top),
            navHeight = parseInt(navStyle.height),
            windHeight = window.innerHeight;

        nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
        if (navStyle > windHeight - navHeight) {
            nav.style.top = `${windHeight - navHeight}px`
        }
    }

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle('open')
    })

    /*
    nav.addEventListener("mousedown", () => {
        console.log('mousedown');
        nav.addEventListener("mousemove", localDrag, true)
    })

    nav.addEventListener("mouseup", () => {
        console.log("mouseup");
        nav.removeEventListener("mousemove", localDrag, true)
    })
    */
}

const ACTION_TYPE = 'type';
const SWITCH_TYPE = 'switch'

export { initEvents, ACTION_TYPE, SWITCH_TYPE }