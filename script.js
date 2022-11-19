const tabsBox = document.querySelector(".tabs-box"),
allTabs = document.querySelectorAll(".tab")
arrowIcon = document.querySelectorAll(".icon i");

let isDragging = false;

const handelIcons=()=>{
    let scrollval = Math.round(tabsBox.scrollLeft);
    let maxScrollablewidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcon[0].parentElement.style.display = scrollval > 0 ? "flex": "none";
    arrowIcon[1].parentElement.style.display = maxScrollablewidth > scrollval ? "flex": "none";
}

arrowIcon.forEach(icon => {
    icon.addEventListener("click",()=>{
        tabsBox.scrollLeft +=icon.id === "left" ? -350 : 350;
        setTimeout( ()=> handelIcons(),50);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click",()=>{
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e)=>{
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handelIcons();
}

const dragStop=()=>{
    isDragging=false;
    tabsBox.classList.remove("dragging");
}


tabsBox.addEventListener("mousedown",() => isDragging=true);
tabsBox.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);