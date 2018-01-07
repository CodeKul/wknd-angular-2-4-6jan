import { Device, Member, Gps } from './device';

class Mouse extends Device implements Gps {
    whls : number;

    rng: number;

    lct(): void {

    }
}

let ms = new Mouse()
ms.mnf = 96
ms.whtTyp()

let gpsPro: Gps = {
    rng: 56,
    lct: () => {

    }
}

//gpsPro = new Device()