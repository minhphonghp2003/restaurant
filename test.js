const {Customer,sequelize} = require('./models')
let main = async() =>{
    try {

        await sequelize.authenticate()
        let cus = await Customer.findAll()
        console.log("custoner: ",cus);
    } catch (error) {
       console.log(error); 
    }
}