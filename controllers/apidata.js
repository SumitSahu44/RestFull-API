const userModel = require('../models/user')

function apiUsers()
{
    return {
              async users(req,res)
              {
              
                  const a = await userModel.find(req.query);
                  res.send(a)
                  // res.send(a)
                   
              },
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

             async deleteOne(req,res)
              {
                 const userName = req.params.name;
                 const userdeleted =  await userModel.deleteOne({name: userName})
                 res.send(`deletde ${userdeleted}`)

              },
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