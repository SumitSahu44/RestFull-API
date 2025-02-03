const userModel = require('../models/user')
// method for controll user registration 
function userRegisterController(){
      return {
         index(req, res){
            res.render('register');
         },
        async register(req, res){
         
          const name = req.body.name;
          const email = req.body.email;
          const password = req.body.password;
        //  registration code 
         const usercreated = await userModel.create({
            name:name,
            email:email,
            password,password
          })
          res.send(`data inserted ${usercreated}`)

         
         }
      }
    
  }



module.exports = userRegisterController
