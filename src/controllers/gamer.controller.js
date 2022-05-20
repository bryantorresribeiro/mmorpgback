const api = require('../services/api')

let dataBase = [];

class Gamer{

    static synchronize(req, res){
        return res.status(200).json(dataBase);
    }

    static synchronizePlayer(req, res){
        const {name} = req.params
        const player  = dataBase.find(player => player.name === name)
        return res.status(200).json(player);
    }

    static create(req, res){
       const {name} = req.body;
       if(dataBase.includes(name)){
           return res.status(400).send("tudo errado!")
       }
       dataBase.push({name, x: 255, y: -12}) 
       return res.status(201).send("tudo certin!");
    }

    static update(req, res){
        const {name, x, y} = req.body;
        const updateUser = {name, x, y};
        const newdataBase = dataBase.filter(player => player.name!==name);
        newdataBase.push(updateUser);
        dataBase = newdataBase;
        return res.status(201).send("tudo certin!");
    }

}
module.exports = Gamer;

