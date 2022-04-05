const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');

let arr = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        let obj = {
            message: msg
        }        
        const data = JSON.stringify(obj);        
        //console.log(data)
        arr.push(obj);
        let arr2 = JSON.stringify(arr);
        console.log(arr2);
       
        if (arr.length === 2) {
            fs.appendFile('messages.json', arr2, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });
        }
    });
    
    
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     let intoFile = JSON.stringify(arr[i]); 
//     console.log(intoFile);
//     fs.appendFile('messages.json', intoFile, (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("JSON data is saved.");
//     });
    
// }
