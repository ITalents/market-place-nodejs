
const findUserByIdController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const findAllUsersController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const createUserController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const updateUserController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const addUserAddressController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserAddressController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const addUserFavProductController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserFavProductController = async (req, res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController,
}