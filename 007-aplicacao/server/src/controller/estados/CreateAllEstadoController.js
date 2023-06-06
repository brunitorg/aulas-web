import {prisma} from "../../database/client.js"

export class CreateAllEstadoController{
    async handle(request, response) {

        const { nome, sigla } = request.body;
        // validacoes

        if ( nome === "" ) {
            return response.status(400).json ({
                message: "Dados imcompletos. Informe o nome e a sigla."
            });

        }

        //sanitizacao
        const estado = await prisma.estado.create ({
            
            data: {
                nome,
                sigla
            }

        });
        console.log(estado);
        return response.json(estado);
    }

}

