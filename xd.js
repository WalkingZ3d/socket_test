const fs = require('fs');

// // create a JSON object
// const user = {
//     "id": 1,
//     "name": "John Doe",
//     "age": 22
// };

// // convert JSON object to string
// const data = JSON.stringify(user);

// for (let i = 0; i < 5; i++) {
//     // write JSON string to a file
//     fs.appendFile('user.json', data + ",", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });
    
// }

fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    
    // parse JSON object
    const user = JSON.parse(data.toString());
    
    
    // print JSON object
    for (let i = 0; i < user.length; i++) {
        console.log(user[i])        
    }
});
