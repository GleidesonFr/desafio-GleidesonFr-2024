import { Animal } from "../Animal.js";

export class AnimalRepository {

    #animals = new Array(Animal);

    create(){
        //Animais que o zoológico é habilitado a tratar
        this.#animals.push(new Animal("LEAO", 3, ['savana'], 'carnivoro'));
        this.#animals.push(new Animal("LEOPARDO", 2, ['savana'], 'carnivoro'));
        this.#animals.push(new Animal("CROCODILO", 3, ['rio'], 'carnivoro'));
        this.#animals.push(new Animal("MACACO", 1, ['savana', 'floresta'], 'herbivoro'));
        this.#animals.push(new Animal("GAZELA", 2, ['savana'], 'herbivoro'));
        this.#animals.push(new Animal("HIPOPOTAMO", 4, ['savana', 'rio'], 'herbivoro'));
    }

    searchAnimal(name){
        let result;      
        this.#animals.forEach(animal => {
            if(animal.nameAnimal == name){
                result = animal;
            }
        });
        if(result != null){
            return result;
        }else{
            return {
                erro: "Animal inválido",
                recintosViaveis : false
            };
        }       
    }
}