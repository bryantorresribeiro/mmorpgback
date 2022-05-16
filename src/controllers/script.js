const { json } = require('express/lib/response')
const api = require('../services/api')

let dataBase = [];

class Controllers{

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
       const x = Math.random(1) * (500 - 1) + 1;
       const y = Math.random(1) * (500 - 1) + 1;
       const ramdomX = x.toFixed();
       const ramdomY = y.toFixed();
       dataBase.push({name, x: ramdomX, y: ramdomY}) 
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
module.exports = Controllers;

