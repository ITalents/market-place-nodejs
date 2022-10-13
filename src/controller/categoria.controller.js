const categoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findAllCategoriaService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createCategoriaController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            createdAt: new Date(),
        }
        res.status(201).send(await categoriaService.createCategoriaService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updateCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }
    catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const deleteCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}