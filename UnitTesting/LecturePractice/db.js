
const getUsers= () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve([
                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ])
        }, 5000)
    })
    
}

module.exports={getUsers}