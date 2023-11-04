let left = document.getElementById("left");
let right = document.getElementById("right");
let left2 = document.getElementById("left2");
let right2 = document.getElementById("right2");
let left3 = document.getElementById("left3");
let right3 = document.getElementById("right3");
let left4 = document.getElementById("left4");
let right4 = document.getElementById("right4");
let left5 = document.getElementById("left5");
let right5 = document.getElementById("right5");
let scrollbar = document.getElementsByClassName("scrollbar")[0];
let s_container = document.getElementsByClassName("s-container")[0];
let shopby_corncern = document.getElementsByClassName("shopby-corncern")[0];
let section_4_container_sub = document.getElementsByClassName("section-4-container-sub")[0];
let s_container_scroll = document.getElementsByClassName("s-container-scroll")[0];
let checkscroll = false;

left.addEventListener("click", () => {
    scrollbar.scrollLeft = scrollbar.scrollLeft - 1360;
})

right.addEventListener("click", () => {
    scrollbar.scrollLeft = scrollbar.scrollLeft + 1360;
})

setInterval(() => {
    if (scrollbar.scrollLeft <= 1360 && checkscroll == false) {
        scrollbar.scrollLeft = scrollbar.scrollLeft + 1360;
        if(scrollbar.scrollLeft == 1360){
            checkscroll = true;
        }
        }
    else{
        scrollbar.scrollLeft = scrollbar.scrollLeft - 1360;
        if(scrollbar.scrollLeft == 0){
            checkscroll = false;
        }
    }
}, 5000);

left2.addEventListener("click", () => {
    s_container.scrollLeft -= 280;
});

right2.addEventListener("click", () => {
    s_container.scrollLeft += 280;
});

left3.addEventListener("click", () => {
    shopby_corncern.scrollLeft -= 1000;
})

right3.addEventListener("click", () => {
    shopby_corncern.scrollLeft += 1000;
})

left4.addEventListener("click",()=>{
    section_4_container_sub.scrollLeft-=1310;
})

right4.addEventListener("click",()=>{
    section_4_container_sub.scrollLeft+=1310;
})

left5.addEventListener("click",()=>{
    s_container_scroll.scrollLeft-=280;
})

right5.addEventListener("click",()=>{
    s_container_scroll.scrollLeft+=280;
})