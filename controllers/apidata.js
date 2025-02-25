const userModel = require('../models/user')

function apiUsers()
{
    return {
               // for select all user from db
              async users(req,res)
              {
              
                  const a = await userModel.find(req.query);
                  res.send(a)
                  // res.send(a)
                   
              },
        // select only one persone using their name 
              async userOne(req,res)
              {
                const pa = req.params.name;
               const user =  await userModel.find({name: pa})
                     if(user == "")
                     {
                        res.send(`no data`)
                     }else{
                        res.send(`All data ${user}`)
        
                     }
               },
              // delete user using their name 
             async deleteOne(req,res)
              {
                 const userName = req.params.name;
                 const userdeleted =  await userModel.deleteOne({name: userName})
                 res.send(`deletde ${userdeleted}`)

              },
        // update user name using their old name 
              async updateOne(req,res)
              {
               try{
                  const oldName = req.query.oldname;
                  const newName = req.query.newname;
                const result =  await userModel.updateOne(
                       {name:oldName},
                       {$set : {name:newName}}
                    
                )
                res.send(result)
               }catch(error){
                  res.send(error)
               }
                
                 
               
              }
    
}
}


module.exports = apiUsers;
