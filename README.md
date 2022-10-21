# market-place-nodejs

O codigo do mais novo market place

## Instalação

1. baixe todo o codigo
2. abra o terminal do VS Code
3. execute: npm i
4. rode usando: npm run dev

## Endpoints

Todos os endopoins da nossa aplicação serão listados abaixo

### Usuario

Todos os endpoints de usuário listado abaixo

#### /findById


| Codigo | resposta                                                      |
| :------- | --------------------------------------------------------------- |
| 200    | retorna um usuário válido                                   |
| 400    | retorna uma mensagem informando o erro                        |
| 401    | retorna o erro de autenticacao                                |
| 404    | retorna uma mensagem informando que não encontrou o usuário |


````javascript
const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuario nao encontrado, tente novamente"});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
            return res.status(400).send({ message: `ID informado, esta incorreto, tente novamente!`}); 
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};


````

### Produto

Todos os endpoints de produto listado abaixo
