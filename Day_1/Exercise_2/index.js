import * as http from 'http';
import * as fs from 'fs';




const requestListener = (req, res)=>{
    fs.readFile('./users.json', function(err, data) {
        if (err){
            console.log('error')
        }
        else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data)
        }
    })
    
}
const server = http.createServer(requestListener);
server.listen(3000)