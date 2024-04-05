const userModel = require('../models/user')
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


  // without object 
// function register(req,res){
//       res.render('register')
//   }

module.exports = userRegisterController