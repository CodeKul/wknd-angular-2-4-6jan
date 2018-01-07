
function mostOuter() {
    return function () {
        return function () {
            return `most inner`;
        }
    }
}

let fsFn = mostOuter()
let sdFn = fsFn();
let thdFn = sdFn();
console.log(`The third would be ${thdFn}`)
console.log(`In Line ${mostOuter()()()}`)

let prmFn = (clBk) => clBk()

prmFn(() => console.log(`function sent as parameter`));

let mobs = [
    `Htc`, `Dell`, `Windows`, 'Rim', `PalmOs`
]
mobs.forEach(mob => console.log(mob))

setTimeout(
    () => console.log(`printed after 1500ms`),
    1500
)