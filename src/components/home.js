
  
const firstSectionGenerate = (()=>{
        
    let firstSection = document.querySelector('.section-1')
    firstSection.innerHTML = `<img class = "logoImg" src ="${require("../assets/images/logo.png").default}">
                        <div data-aos = "fade-up" class = "head">WE'RE OPEN  </div>
                        <div data-aos = "fade-up" class ="subhead">FOR INDOOR DINING, PATIO DINING & TAKEOUT!</div>`
})


const secondSectionGenerate = (()=>{
    let secondSection = document.querySelector('.section-2')
    secondSection.innerHTML = `<div class = "block" data-aos="fade-up">
                                <div  class = "subhead">RESERVATIONS</div>
                                <div class = "subheadSuper">Dinner for Two Options Available for To Go Service</div>
                                    <button  >RESERVE YOUR TABLE</button>
                                </div> 
                                <div data-aos="fade-up" class = "block">
                                    <div  class = "subhead">TAKEOUT</div>
                                    <div  class = "subheadSuper">Order Online or Call Us (964) 9824-40704</div>
                                    <button >ORDER TAKEOUT</button>
                                </div> 
                                <div data-aos="fade-up" class = "block">
                                    <div  class = "head">HOURS</div>
                                    <div  class = "subhead">MONDAY - SUNDAY</div>
                                    <div  class = "subheadSuper">11:30am - 9:00pm</div>
                                </div>
                                <div class = "block" data-aos="fade-up">
                                    <div  class = "head">VISIT</div>
                                    <div  class = "subheadSuper">7023th 8th St.</div>
                                    <div  class = "subheadSuper">3428 Big Elm, Lenexa 09612</div>
                                    <button >GET DIRECTIONS</button>
                                    <div  class = "subheadSuper">964.9824.40704</div>
                                    <button >GIVE US A CALL</button>
                                </div>

                                `
})

const thirdSectionGenerate = (()=>{
    let thirdSection = document.querySelector('.section-3')
    thirdSection.innerHTML = ` <div class "block" data-aos="fade-up">
                                    <div class = "head">YOUR SAFETY</div>
                                    <div  class = "subheadSuper">We follow FDA’s Best Practices for Retail Food Stores,<br> Restaurants, and Food Pick-Up/Delivery Services During the<br> COVID-19 Pandemic.<br>
                                    We do require masks to enter the restaurant, but don’t worry <br> we've got you covered if you forget yours.</div><br>
                                    <button  target="_blank">MORE INFO</button>
                                </div>` 
})


const home = ()=>{
    firstSectionGenerate()
    secondSectionGenerate()
    thirdSectionGenerate()
}

export {home}