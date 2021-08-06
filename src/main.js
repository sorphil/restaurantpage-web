
const changeTab = (tab)=> {
    document.querySelectorAll('.navTabs a').forEach((link)=>{
        if(link.id!=tab.id && link.classList.contains('active'))
        {
            link.classList.remove('active')
        }
    })
    if(tab.id == "home" && !tab.classList.contains('active'))
    {
        getComponent(tab.id)
        tab.classList.add('active')
    }
    if(tab.id == "about" && !tab.classList.contains('active'))
    {
        getComponent(tab.id)
        tab.classList.add('active')
    }
    if(tab.id == "menu" && !tab.classList.contains('active'))
    {
        getComponent(tab.id)
        tab.classList.add('active')
    }

}

import './styles/styles.scss'
import * as AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';
AOS.init() 


const getComponent = (component)=>{
    import (`./components/${component}`)
    .then((imported)=>imported[component]())
}



const navbarDiv = ()=>{
    let navbar = document.createElement('div')
    navbar.className = "navbar"
    navbar.innerHTML = `<div class = "logoNav">SPINNING DOVE & CO.</div>
                        <div class = "navTabs">
                            <a id = "home">HOME</a>
                            <a id = "about">ABOUT US</a>
                            <a id = "menu">MENU</a>
                        </div>`
    return navbar
}


const mainContentDiv = () =>{
    let mainContent = document.createElement('div')
    mainContent.className = "mainContent"
    mainContent.innerHTML = `<div class = "section-1 section"></div>
                            <div class = "section-2 section"></div>
                            <div class = "section-3 section"></div>`
    return mainContent
}
const footerDiv = ()=>{
    let footer = document.createElement('div')
    footer.className = "footer"
    footer.innerHTML = `<div class = "footerLinks">
                            <div class = "footerColumn">
                                <div class = "footerHead link">ABOUT</div>
                                <a>Awards</a>
                                <a>Careers</a>
                                <a>Press</a>
                                <a>Media Center</a>
                            </div>
                            <div class = "footerColumn">
                                <div class = "footerHead">OUR RESTAURANTS</div>
                                <a>Spinning Dove</a>
                                <a>Glorious Flash Eatery</a>
                                <a>Hearty Acorn Provisions</a>
                                <a>Captain's Dahlia Bar and Grille</a>
                                <a>Evergreen Lotus Kitchen</a>
                                <a>Hickory Hen Café</a>
                                <a>Le Era Kitchen</a>
                            </div>
                            <div class = "footerColumn">
                                <a class = "footerHead">GIFT CARDS</a>
                            </div>
                            <div class = "footerColumn">
                                <a class = "footerHead">NEWS & EVENTS</a>
                            </div>
                            <div class = "footerColumn">
                                <a class = "footerHead">CONTACTS</a>
                            </div>
                        </div>
                        <div class ="footerCredits">
                            <div>By:- <a class = "credits" href = "https://github.com/sorphil">@sorphil</a></div>
                            <div>Visual inspiration:- <a  class = "credits" href = "https://www.birdandthebottle.com/" target = "_blank">Bird & The Bottle</a></div>
                            <div>Images from:- <a  class = "credits" href = "https://unsplash.com/" target = "_blank">Unsplash</a></div>
                        </div>
                       
                        `
    return footer
}

document.addEventListener('DOMContentLoaded', ()=>{
    const content = document.querySelector('.content')
    content.appendChild(navbarDiv())
    content.appendChild(mainContentDiv())
    content.appendChild(footerDiv())
    document.querySelectorAll('.navTabs a').forEach((link)=>{
        link.addEventListener('click', function(){changeTab(this)})
    })
    changeTab(document.querySelector('#home'))
})