const inputEl = document.getElementById("inputWeight")
const planetsEl = document.getElementById("planets")
const noRadio = document.getElementById("no");
const enRadio = document.getElementById("en");
const radios = document.querySelectorAll('input[name="language"]')
let textEng = document.querySelectorAll(".eng")
let textNor = document.querySelectorAll(".nor")


function language(){
    
}

let solarSystem = 
                    [{planetName:"Mercury", planetNameNor:"Merkur", relativeGravity:0.38}, 
                     {planetName:"Venus", planetNameNor:"Venus", relativeGravity:0.91}, 
                     {planetName:"Earth", planetNameNor:"Jorden", relativeGravity:1}, 
                     {planetName:"Mars", planetNameNor:"Mars", relativeGravity:0.38}, 
                     {planetName:"Jupiter", planetNameNor:"Jupiter", relativeGravity:2.34}, 
                     {planetName:"Saturn", planetNameNor:"Saturn", relativeGravity:1.06}, 
                     {planetName:"Uranus", planetNameNor:"Uranus", relativeGravity:1.19},
                     {planetName:"Neptune", planetNameNor:"Neptun", relativeGravity:0.38}
                    ]

try {
    inputEl.oninput = (event) => {
        planetsEl.innerHTML = ""
        for(let planet of solarSystem){
            const div = document.createElement("div")
            div.classList="planet"
            const img = document.createElement("img")
            img.id="planetImage"
            img.src=`images/${planet.planetName}BR.webp`
            
    
            const h3 = document.createElement("h3")
            const h3Nor = document.createElement("h3")
            h3.append(`${planet.planetName}: ${(Number(inputEl.value) * planet.relativeGravity).toFixed(2)}Kg`)
            h3.classList.add("eng")
            h3.style = "margin-top: 0px"
            // h3Nor.style = "margin-bottom: 4px"
    
            h3Nor.append(`${planet.planetNameNor}: ${(Number(inputEl.value) * planet.relativeGravity).toFixed(2)}Kg`)
            h3Nor.classList.add("nor")
            h3Nor.style = "margin-top: 0px"
            // h3Nor.style = "margin-bottom: 4px"
    
            div.append(img, h3, h3Nor)
    
            planetsEl.append(div)
            textEng = document.querySelectorAll(".eng")
            textNor = document.querySelectorAll(".nor")
            // planetsEl.innerHTML+= ` 
            // <div class="planet">
            //     <img id="planetImage" src="images/${planet.planetName}.webp" alt="Image of ${planet.planetName}" style="animation:fadeIn 5s, spin 30s cubic-bezier(0, 0, 1, 1) infinite ">
            //     <h3>${enRadio.checked ? planet.planetName:planet.planetNameNor}: ${(Number(inputEl.value) * planet.relativeGravity).toFixed(2)}Kg </h3>
            // </div>
            // `
    
    
        };
    }
} catch (error) {
    console.log("no input yet");
}
   



// const css = document.styleSheets[0];



for(let i = 0; i < radios.length; i++){
    radios[i].addEventListener("change", function(){
        let val = this.value
        console.log(val);
        if(val === "en"){
            for(let item of textNor){
                item.style = "display: none"
            } 
            for(let item of textEng){
                item.style = "display: flex"
            }
        }else if(val === "no"){
            for(let item of textEng){
                item.style = "display: none"
            }
            for(let item of textNor){
                item.style = "display: flex"
            } 
        }
    })
}

// if(enRadio.checked){
//     for(let item of textEng){
//         console.log(item)
//     }
// }else{
//     for(let item of textNor){
//      console.log(item)
//     }
// }


// if(window.innerWidth < 1200){
    
//         window.addEventListener("scroll", function(){
            
//                 hasScrolled = true;
//                 console.log("Element scroll event fired!");
//                 const element = document.querySelector("main");
//                 element.scrollIntoView({
//                   block: "start",
//                   behavior: "smooth",
//                   inline: "start",
//                 }
//                 )
               
//                 // setTimeout(() => {
//                 //   }, 1000);
            
//         }    
// }