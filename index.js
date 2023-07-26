const inputEl = document.getElementById("input")
const planetsEl = document.getElementById("planets")
const noButton = document.getElementById("no");
const enButton = document.getElementById("en");

function language(){
    
}

let solarSystem = document.getElementById('noHeroText').hidden === true ?
                    [{planetName:"Mercury", relativeGravity:0.38}, 
                     {planetName:"Venus", relativeGravity:0.91}, 
                     {planetName:"Earth", relativeGravity:1}, 
                     {planetName:"Mars", relativeGravity:0.38}, 
                     {planetName:"Jupiter", relativeGravity:2.34}, 
                     {planetName:"Saturn", relativeGravity:1.06}, 
                     {planetName:"Uranus", relativeGravity:1.19},
                     {planetName:"Neptune", relativeGravity:0.38}
                    ]:
                    [{planetName:"Merkur", relativeGravity:0.38}, 
                    {planetName:"Venus", relativeGravity:0.91}, 
                    {planetName:"Jorden", relativeGravity:1}, 
                    {planetName:"Mars", relativeGravity:0.38}, 
                    {planetName:"Jupiter", relativeGravity:2.34}, 
                    {planetName:"Saturn", relativeGravity:1.06}, 
                    {planetName:"Uranus", relativeGravity:1.19},
                    {planetName:"Neptun", relativeGravity:0.38}
                   ];

inputEl.oninput = (event) => {
    planetsEl.innerHTML = ""
    solarSystem.forEach(planet => {
        // createElemet
        planetsEl.innerHTML+= ` 
        <div class="planet">
            <img id="planetImage" src="images/${planet.planetName}.webp" alt="Image of ${planet.planetName}">
            <h3>${planet.planetName}: ${(Number(inputEl.value) * planet.relativeGravity).toFixed(2)}Kg </h3>
        </div>
        `
    });
}

enButton.addEventListener("click", function(){
    if(document.getElementById('enHeroText').hidden = true){
        document.getElementById('noHeroText').hidden = true
        document.getElementById('enHeroText').hidden = false
        document.getElementById('noMainText').hidden = true
        document.getElementById('enMainText').hidden = false
    }
    
})
noButton.addEventListener("click", function(){
    if(document.getElementById('noHeroText').hidden = true){
        document.getElementById('enHeroText').hidden = true
        document.getElementById('noHeroText').hidden = false
        document.getElementById('enMainText').hidden = true
        document.getElementById('noMainText').hidden = false
    }
})

// let hasScrolled = false
// let isOnHeader = true

// if(window.innerWidth < 1200 && isOnHeader){
//     isOnHeader = false
//     while (!hasScrolled) {
//         onscroll = (event) => {
//             hasScrolled = true;
//             console.log("Element scroll event fired!");
//             const element = document.querySelector("main");
//             element.scrollIntoView({
//               block: "start",
//               behavior: "smooth",
//               inline: "start",
//             });
           
//             // setTimeout(() => {
//             //   }, 1000);
//         }
//     } 
// }