export class Device {
    private typ: string;
    mnf: number;

    whtTyp() {
        return this.typ
    }
}

export class Member {

}

export interface Gps {
    rng: number

    lct(): void
}