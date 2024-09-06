import { Animal } from "../Animal.js";
import { Recinto } from "../Recinto.js";

export class RecintoRpository {

    #enclosure = new Array(Recinto);

    create() {
        //Recintos Existentes
        this.#enclosure.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosure.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosure.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosure.push(new Recinto(2, "floresta", 5, null));
        this.#enclosure.push(new Recinto(3, "savana e rio", 7, new Animal("GAZELA", 2, ['savana'], 'herbivoro')));
        this.#enclosure.push(new Recinto(4, "rio", 8, null));
        this.#enclosure.push(new Recinto(5, "savana", 9, new Animal("LEAO", 3, ['savana'], 'carnivoro')));
    }
}