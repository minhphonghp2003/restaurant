const {users,sequelize} = require('./models')
let main = async() =>{
    try {
        await users.sync({ alter: true })
        let cus = await users.findAll()
        console.log("custoner: ",cus);
    } catch (error) {
       console.log(error); 
    }
}

main()