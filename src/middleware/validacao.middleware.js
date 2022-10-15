const validaUsuario = (req, res, next) => {
    //testa um erro por vez e toma apenas uma decisao por vez
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }
    if(req.body.nome){
        console.log(typeof(req.body.nome));
    }
    if(!req.body.email){
        return res.status(400).send({ message: `O campo 'email' precisa ser preenchido!`});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido!`});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido!`});
    }
    if(!req.body.admin){
        return res.status(400).send({ message: `O campo 'admin' precisa ser preenchido!`});
    }

    return next();
}

const validaProduto = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.descricao){
        erros.push("descricao");
    }
    if(!req.body.precoUnitario){
        erros.push("precoUnitario");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }
    if(!req.body.codigoBarra){
        erros.push("codigoBarra");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }

}

const validaCategoria = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }

    return next();
}

const validaPedido = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.frete){
        erros.push("frete");
    }

    if(req.body.concluido == undefined){
        erros.push("concluido");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.frete){
        erros.push("frete");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}
module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho
}