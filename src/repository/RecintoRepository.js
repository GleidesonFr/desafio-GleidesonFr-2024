import { Animal } from "../Animal.js";
import { Recinto } from "../Recinto.js";

export class RecintoRpository {

    #enclosures = new Array(Recinto);

    create() {
        //Recintos Existentes
        this.#enclosures.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosures.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosures.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, ['savana', 'floresta'], 'hervivoro')));
        this.#enclosures.push(new Recinto(2, "floresta", 5, null));
        this.#enclosures.push(new Recinto(3, "savana e rio", 7, new Animal("GAZELA", 2, ['savana'], 'herbivoro')));
        this.#enclosures.push(new Recinto(4, "rio", 8, null));
        this.#enclosures.push(new Recinto(5, "savana", 9, new Animal("LEAO", 3, ['savana'], 'carnivoro')));
    }

    add(animal, quantity){
        let biomes = this.searchEnclosure(animal);

        if(biomes.length != 0){
            this.verifyQuantity(animal, quantity, biomes);
        }
        return{
            erro: "Não há recinto viável",
            recintosViaveis: false
        };
    }

    verifyQuantity(animal, quantity, biome){
        
    }

    searchEnclosure(animal){
        let result = new Array(Recinto);
        this.#enclosures.forEach(enclosure =>{
            animal.biome.forEach(biome => {
                if(enclosure.biome.includes(biome)){
                    if(this.isCarnivore(animal, enclosure.existingAnimals.at(0))){
                        if(this.isSameSpecies(animal, enclosure.existingAnimals.at(0))){
                            result.push(enclosure);
                        }
                    }else{
                        if(this.existOnlyOneMonkey(enclosure)){
                            result.push(enclosure);
                        }else{
                            result.push(enclosure);
                        }
                    }
                }
            });
        });

        return result;
    }

    isSameSpecies(animal, inhabitant){
        if(animal.nameAnimal == inhabitant.nameAnimal){
            return true;
        }
        return false;
    }

    isCarnivore(animal, inhabitant){
        if(inhabitant != null){
            if(animal.trofficLevel == 'carnivoro' && inhabitant.trofficLevel == 'carnivoro'){
                return true;
            }            
        }
        return false;
    }

    existOnlyOneMonkey(enclosure){
        let monkey = false;
        let index = 0;

        enclosure.existingAnimals.forEach(animal =>{
            if(animal != null){
                if(animal.nameAnimal == "MACACO"){
                    monkey = true;
                }
                index++;                
            }
        });

        if(index == 1 && monkey == true){
            return true;
        }
        return false;
    }
}