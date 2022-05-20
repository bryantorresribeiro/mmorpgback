const api = require('../services/api')

let dataBase = [];

class Chat{

    static synchronize(req, res){
        return res.status(200).json(dataBase);
    }

    static create(req, res){
       const {nick, message} = req.body;
       console.log("opa!")
       dataBase.push({nick, message}) 
       return res.status(201).send("tudo certin!");
    }

}
module.exports = Chat;