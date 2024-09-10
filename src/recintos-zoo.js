import { RecintoRpository } from "./repository/RecintoRepository.js";
import { AnimalRepository } from "./repository/AnimalRepository.js";
import { Animal } from "./Animal.js";

class RecintosZoo {

    #animalRepository = new AnimalRepository();

    analisaRecintos(animal, quantidade) {
        if(quantidade > 0){
            this.#animalRepository.create();
            let result = this.#animalRepository.searchAnimal(animal);
            
            if(result instanceof Animal){
                
            }else{
                return {
                    erro: result.erro,
                    recintosViaveis: result.recintosViaveis
                };
            }
        }else{
            return{
                erro: "Quantidade inválida",
                recintosViaveis: false
            };
        }

    }

}

let r = new RecintosZoo()
r.analisaRecintos('PAPA', 1);


export { RecintosZoo as RecintosZoo };
