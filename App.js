const m_icons = document.querySelector(".icons");

const m_navbar = document.querySelector(".header");

m_icons.addEventListener("click",()=>{
    m_navbar.classList.toggle("m-header");
})