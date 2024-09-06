import { RecintoRpository } from "./repository/RecintoRepository.js";
import { AnimalRepository } from "./repository/AnimalRepository.js";

class RecintosZoo {

    #animalRepository = new AnimalRepository();

    analisaRecintos(animal, quantidade) {
        if(quantidade > 0){
            this.#animalRepository.create();
            let result = this.#animalRepository.searchAnimal(animal);
            
            if(!(result.erro instanceof String)){
                //continuar a implementação aqui
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
r.analisaRecintos('LEAO', 1);


export { RecintosZoo as RecintosZoo };
