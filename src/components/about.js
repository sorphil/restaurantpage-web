const firstSectionGenerate = ()=>{
    let firstSection = document.querySelector('.section-1')
    firstSection.innerHTML = `<img  class = "logoImg" src ="${require("../assets/images/logo.png").default}">
                        <div data-aos = "fade-up" class = "head">ABOUT US  </div>
                        <div data-aos = "fade-up" class ="subhead">THE PEOPLE BEHIND THE MEAL</div>`
}

const secondSectionGenerate = () => {
    let secondSection = document.querySelector('.section-2')
    secondSection.innerHTML = `<div class = "block" data-aos="fade-up">
                                    <div class = "subhead" >OUR VOICE</div>
                                    <div class = "subheadSuper" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>
                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci. <br>
                                        Aliquam consectetur arcu mauris.  Curabitur vel pharetra nibh.<br>
                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>
                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. 
                                    </div>
                                </div> 
                                <div  class = "block" data-aos="fade-up">
                                    <div  class = "subhead">OUR MISSION</div>
                                    <div  class = "subheadSuper">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>
                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci. <br>
                                        Aliquam consectetur arcu mauris.  Curabitur vel pharetra nibh.<br>
                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>
                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. 
                                     </div>
                                </div>
                                <div class = "block" data-aos="fade-up">
                                    <div  class = "subhead">OUR VISION</div>
                                    <div  class = "subheadSuper">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>
                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci <br>
                                        Aliquam consectetur arcu mauris. Curabitur vel pharetra nibh. <br>
                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>
                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. 
                                    </div>
                                </div>
                             `
}

const thirdSectionGenerate = ()=>{
    let thirdSection = document.querySelector('.section-3')
    let url = [require("../assets/images/about (1).jpg").default,require("../assets/images/about (2).jpg").default, require("../assets/images/about (3).jpg").default, require("../assets/images/about (4).jpg").default]
    thirdSection.innerHTML = `<div data-aos="fade-up" class = "head">OUR TEAM</div>`
    const imgFeed = document.createElement('div')
    imgFeed.className = "imgFeed"
    let imgRow = document.createElement('div')
    imgRow.className = "imgRow"
    for(let i =0; i<url.length;i++)
    {
     
        const img = document.createElement('img')
        img.src = url[i]
        img.className = "imgRect"
        img.dataset.aos = "fade-up"
        imgRow.appendChild(img)
        if(i==1||i==3) 
        {
            imgFeed.appendChild(imgRow)
            imgRow = document.createElement('div')
            imgRow.className = "imgRow"
        }
       
    }
    thirdSection.appendChild(imgFeed)
}

const about = ()=>{
    firstSectionGenerate()
    secondSectionGenerate()
    thirdSectionGenerate()
    return
}

export {about}