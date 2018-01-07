function calcMb() {

}

var gb = function () {

    console.log(` 
        This is Gb ${10 + 20}  ${calcMb()} 
        this is multiline 
    `)
}

gb()

let pb = () => console.log(`this is lambda`)
pb()

let tb = () => {
    let emp = 10;
    console.log(emp)
}