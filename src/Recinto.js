import { Animal } from "./Animal.js";

export class Recinto {
    #id;
    #biome;
    #totalSize;
    #exitingAnimals = new Array(Animal)

    constructor(id, biome, totalSize, animal) {
        this.#id = id;
        this.#biome = biome;
        this.#totalSize = totalSize;
        if(animal != null){
           this.#exitingAnimals.push(animal);
        }
    }

    get id(){
        return this.#id;
    }

    get biome(){
        return this.#biome;
    }

    get totalSize(){
        return this.#totalSize;
    }

    get existingAnimals(){
        return this.#exitingAnimals;
    }

    set existingAnimals(animal){
        this.#exitingAnimals.push(animal);
    }
}