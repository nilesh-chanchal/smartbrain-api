const handleProfile = (req, res, db) => {

    const { id } = req.params;
    db.select('*').from('users').where({
        id: id,
        
      }).then(user => {
        if(user.length === 0){
            res.json('no such user')
        }else{
         res.json(user[0]) 
        }
    }).catch(err => {
        res.status(400).json('Technical error, pls try again')
    })    
    
}

module.exports = {
    handleProfile: handleProfile
}
