export class Animal {
    #name;
    #size;
    #biome = new Array(String);
    #troficLevel

    constructor(name, size, biome, troficLevel) {
        this.#name = name;
        this.#size = size;
        this.#biome.push(biome);
        this.#troficLevel = troficLevel;
    }

    get nameAnimal(){
        return this.#name;
    }

    get size(){
        return this.#size;
    }

    get biome(){
        return this.#biome;
    }

    get troficLevel(){
        return this.#troficLevel;
    }
}