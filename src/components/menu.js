const firstSectionGenerate = (()=>{
        
    let firstSection = document.querySelector('.section-1')
    firstSection.innerHTML = `<img class = "logoImg" src ="${require("../assets/images/logo.png").default}">
                        <div data-aos = "fade-up" class = "head">MENU </div>
                        <div data-aos = "fade-up" class ="subhead">FOOD OF ONLY THE HIGHEST QUALITY</div>`
})


const secondSectionGenerate = (()=>{
    let secondSection = document.querySelector('.section-2')
    secondSection.innerHTML = `<div class = "block" data-aos="fade-up">
                                    <div class = "head" >FOOD</div>
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >MEAT</div>
                                            <div class = "subheadSuper" >S.P Mini Burgers ----- $10</div>
                                            <div class = "subheadSuper" >Grilled Lamb Meatballs ----- $15</div>
                                            <div class = "subheadSuper" >Slow Smoked Crispy Pork Belly ----- $20   </div>
                                            <div class = "subheadSuper" >BBQ'D Bone Marrow ----- $16</div>
                                    </div>
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >SEAFOOD</div>
                                            <div class = "subheadSuper" >Shrimp Wontons ----- $10</div>
                                            <div class = "subheadSuper" >Smoked Wild Black Cod ----- $14</div>
                                            <div class = "subheadSuper" >BBQ'D Octopus ----- $12</div>
                                            <div class = "subheadSuper" >Fried Oyster Wrap ----- $8</div>
                                    </div> 
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >POULTRY</div>
                                            <div class = "subheadSuper" >Crispy Chicken Skin Cracklings ----- $6</div>
                                            <div class = "subheadSuper" >Fried Chicken Sliders ----- $15</div>
                                            <div class = "subheadSuper" >Chicken Liver Mousse ----- $12   </div>
                                            <div class = "subheadSuper" >Korean BBQ'D Half Chicken ----- $22</div>
                                    </div> 
                                        
                                <div class = "block" data-aos="fade-up">
                                    <div class = "head" >WINE</div>
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >SPARKLINGS</div>
                                            <div class = "subheadSuper" >Roederer Estate Brut ----- $14</div>
                                            <div class = "subheadSuper" >Schramsberg Blanc De Blancs ----- $17</div>
                                            <div class = "subheadSuper" >J Vineyards Brut Rose  ----- $14</div>
                                    </div> 
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >REDS</div>
                                            <div class = "subheadSuper" >Martinelli Bella Vigna Pinot Noir  ----- $37</div>
                                            <div class = "subheadSuper" >Freeman Keefer Ranch Pinot Noir ----- $40</div>
                                            <div class = "subheadSuper" >Novy Zinfandel  ----- $35</div>
                                    </div> 
                                    
                                    <div class = "subBlock" data-aos="fade-up">
                                        <div class = "subhead" >WHITES</div>
                                            <div class = "subheadSuper" >Tablas Creek Patelin de Tablas Blanc Rhone Blend ----- $34.5</div>
                                            <div class = "subheadSuper" >Brundlmayer Guner Veltliner  ----- $25</div>
                                            <div class = "subheadSuper" >Gros Ventre Vermentino ----- $30.5 </div>
                                            <div class = "subheadSuper" >Zilliken Feinherb Riesling  ----- $22</div>
                                    </div> 
                                </div> 
                                
                                <div  class = "block" data-aos="fade-up">
                                    <div class = "head" >DRINKS</div>
                                <div class = "subBlock" data-aos="fade-up">
                                    <div class = "subhead" >CLASSIC COCKTAILS</div>
                                        <div class = "subheadSuper" >Pancho's Pride ----- $13</div>
                                        <div class = "subheadSuper" >Macho Pisco ----- $16</div>
                                        <div class = "subheadSuper" >Shiso Pretty  ----- $12</div>
                                </div> 
                                <div class = "subBlock" data-aos="fade-up">    
                                    <div class = "subhead" >CANS & BOTTLES</div>
                                        <div class = "subheadSuper" >Montucky Cold Snack  ----- $4</div>
                                        <div class = "subheadSuper" >Tecate Mexican Lager ----- $4</div>
                                </div> 
                                
                                <div class = "subBlock" data-aos="fade-up">
                                    <div class = "subhead" >BEVERAGES</div>
                                        <div class = "subheadSuper" >Garnet Story ----- $14.5</div>
                                        <div class = "subheadSuper" >Bella Rosa French Press Coffee  ----- $5</div>
                                        <div class = "subheadSuper" >The Giving Tree ----- $10.5 </div>
                                        <div class = "subheadSuper" >Lemonade  ----- $3</div>
                                </div> 
                                </div>
                                `
})

const thirdSectionGenerate = (()=>{
    let thirdSection = document.querySelector('.section-3')
    let url = [require("../assets/images/feed (1).jpg").default,require("../assets/images/feed (2).jpg").default,
    require("../assets/images/feed (3).jpg").default,require("../assets/images/feed (4).jpg").default,
    require("../assets/images/feed (5).jpg").default,require("../assets/images/feed (6).jpg").default,
    require("../assets/images/feed (7).jpg").default,require("../assets/images/feed (8).jpg").default,
    require("../assets/images/feed (9).jpg").default]
    thirdSection.innerHTML = `<div data-aos = "fade-up" class = "head">THE FEED</div>`
    const imgFeed = document.createElement('div')
    imgFeed.className = "imgFeed"
    let imgRow = document.createElement('div')
    imgRow.className = "imgRow"
    for(let i =0; i<url.length;i++)
    {
     
        const img = document.createElement('img')
        img.src = url[i]
        img.className = "imgTile"
        img.dataset.aos = "fade-up"
        imgRow.appendChild(img)
        if(i==2||i==5||i==8) 
        {
            imgFeed.appendChild(imgRow)
            imgRow = document.createElement('div')
            imgRow.className = "imgRow"
        }
       
    }
    thirdSection.appendChild(imgFeed)
})


const menu = ()=>{
    firstSectionGenerate()
    secondSectionGenerate()
    thirdSectionGenerate()
    return
}

export {menu}