import { Animal } from "../Animal.js";
import { Recinto } from "../Recinto.js";

export class RecintoRpository {

    #enclosures = new Array(Recinto);

    create() {
        //Recintos Existentes
        this.#enclosures.push(new Recinto(1, "savana", 10, new Animal("MACACO", 1, new Array("savana", "floresta"), 'hervivoro')));
        this.#enclosures[0].existingAnimals = new Animal("MACACO", 1, new Array("savana", "floresta"), 'hervivoro');
        this.#enclosures[0].existingAnimals = new Animal("MACACO", 1, new Array("savana", "floresta"), 'hervivoro');
        this.#enclosures.push(new Recinto(2, "floresta", 5, null));
        this.#enclosures.push(new Recinto(3, "savana e rio", 7, new Animal("GAZELA", 2, new Array("savana"), 'herbivoro')));
        this.#enclosures.push(new Recinto(4, "rio", 8, null));
        this.#enclosures.push(new Recinto(5, "savana", 9, new Animal("LEAO", 3, new Array("savana"), 'carnivoro')));
    }

    add(animal, quantity){
        let enclosuresResult = this.searchEnclosure(animal);

        if(enclosuresResult.length != 0){
            let indexResult = this.verifyQuantity(animal, quantity, enclosuresResult);
            if(indexResult != -1){
                for (let i = 0; i < quantity; i++) {
                   enclosuresResult[indexResult].existingAnimals = animal;
                }

                return enclosuresResult;
            }
        }
        return{
            erro: "Não há recinto viável",
            recintosViaveis: false
        };
    }

    verifyQuantity(animal, quantity, enclosures){
        let total = animal.size * quantity;
        let index = 0, sum = 0;

        enclosures.forEach(enclosure =>{
            if(this.isCarnivore(animal, enclosure.animals?.at(0))){
                if(this.isSameSpecies(animal, enclosure.existingAnimals.at(0))){
                    sum = this.count(total, enclosure);
                    if(sum != -1){
                        return index;
                    }
                }else if(enclosure.animals.length == 0){
                    if(enclosure.totalSize <= total){
                        return index;
                    }
                }
                index++;
            }else{
                if(index == 0){
                    enclosures.forEach(e =>{
                        if(this.existOnlyOneMonkey(e)){
                            sum = this.count(animal, e);
                            if(sum != -1){
                                return index;
                            }
                        }
                    });

                    index++;
                }else{
                    sum = this.count(animal, enclosure);
                    if(sum != -1){
                        return index;
                    }
                }
                index++;
            }
        });

        console.log(index);

        return sum;
    }

    count(sum, enclosure){
        let previousAnimal;
        let total = sum;

        if(enclosure.existingAnimals.length != 0){
            enclosure.existingAnimals.forEach(animal =>{
                if(previousAnimal != null){
                    if(previousAnimal.nameAnimal == animal.nameAnimal){
                        total += animal.size;
                        previousAnimal = animal;
                    }else{
                        total += animal.size + 1;
                        previousAnimal = animal;
                    }
                }
            });            
        }

        if(total <= enclosure.totalSize){
            return total;
        }else{
            return -1;
        }
    }

    searchEnclosure(animal){
        let result = new Array(Recinto);
        this.#enclosures.forEach(enclosure =>{
            animal.biome.forEach(biome => {
                if(enclosure.biome?.includes(biome)){
                    if(this.isCarnivore(animal, enclosure.existingAnimals.at(0))){
                        if(this.isSameSpecies(animal, enclosure.existingAnimals.at(0)) && this.verifyEnclosure(result, enclosure)){
                            result.push(enclosure);
                            console.log(enclosure.id);
                        }else if(enclosure.existingAnimals.length == 0 && this.verifyEnclosure(result, enclosure)){
                            result.push(enclosure);
                            console.log(enclosure.id);
                        }
                    }else {
                        if(animal.nameAnimal == "HIPOPOTAMO"){
                            if(enclosure.existingAnimals.length == 0 && this.verifyEnclosure(result, enclosure)){
                                result.push(enclosure);
                                console.log(enclosure.id);
                            }else if(enclosure.biome == "savana e rio"){
                                result.push(enclosure);
                                console.log(enclosure.id);
                            }
                        }else{
                            result.push(enclosure);
                            console.log(enclosure.id);
                        }
                    }
                }
            });
        });

        return result;
    }

    verifyEnclosure(result, enclosure){
        result.forEach(r =>{
            if(r.id == enclosure.id){
                return false;
            }
        });

        return true;
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

        enclosure.animals?.forEach(animal =>{
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