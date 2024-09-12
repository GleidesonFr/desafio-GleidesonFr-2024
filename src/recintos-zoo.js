import { RecintoRpository } from "./repository/RecintoRepository.js";
import { AnimalRepository } from "./repository/AnimalRepository.js";
import { Animal } from "./Animal.js";

class RecintosZoo {

    #animalRepository = new AnimalRepository();
    #enclosureRepository = new RecintoRpository();

    analisaRecintos(animal, quantidade) {
        if(quantidade > 0){
            this.#animalRepository.create();
            this.#enclosureRepository.create();
            let result = this.#animalRepository.searchAnimal(animal);
            
            if(result instanceof Animal){
                let enclosures = this.#enclosureRepository.add(result, quantidade);

                if(enclosures instanceof Array){
                    return this.resultado(result);
                }else{
                    return{
                        erro: enclosures.erro,
                        recintosViaveis: enclosures.recintosViaveis
                    };
                }
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

    resultado(enclosures){
        let print = [];
        let freeSpaceCalc;
        let index = 0;

        Array.from(enclosures).forEach(enclosure => {
            freeSpaceCalc = this.#enclosureRepository.count(0, enclosure);

            print.push("Recinto " + enclosure.id + " (espaço livre: " + freeSpaceCalc + " total: " + enclosure.totalsize + ")");
        });

        return print;
    }

}

export { RecintosZoo as RecintosZoo };
