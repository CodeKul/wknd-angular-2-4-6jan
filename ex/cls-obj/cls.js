export default class Animal {

    constructor() {
        this.nm = `android`
        this.ag = 2
    }

    Animal() {

    }

    whatsNm() {
        console.log(`Name is ${this.nm}`)
    }
}
//export default new Animal()
//export { Animal as default }