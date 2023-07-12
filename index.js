const inputEl = document.getElementById("input")
const planetsEl = document.getElementById("planets")

const solarSystem = [{planetName:"Mercury", relativeGravity:0.38}, 
                     {planetName:"Venus", relativeGravity:0.91}, 
                     {planetName:"Earth", relativeGravity:1}, 
                     {planetName:"Mars", relativeGravity:0.38}, 
                     {planetName:"Jupiter", relativeGravity:2.34}, 
                     {planetName:"Saturn", relativeGravity:1.06}, 
                     {planetName:"Uranus", relativeGravity:1.19},
                     {planetName:"Neptune", relativeGravity:0.38}
                    ];

inputEl.onchange = (event) => {
    solarSystem.forEach(planet => {
        planetsEl.innerHTML+= ` 
        <div class="planet">
            <img id="planetImage" src="images/${planet.planetName}.png" alt="image of mercury">
            <h3>${planet.planetName}: ${(Number(inputEl.value) * planet.relativeGravity).toFixed(2)}Kg </h3>
        </div>
        `
    });
}