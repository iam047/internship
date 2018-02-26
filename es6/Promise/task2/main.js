const json = (response) =>{
    return response.json()
};

fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(json)
    .then((data) => {
        if(data.getUsersData === false){
            console.log('error');
        }else {
            console.log('get', 'true');
        }
    })
    .then(() =>{
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
            .then(json)
            .then(function(dating) {
               let output = '<h2>Users</h2>';
               dating.forEach((user) => {
                   output += `
                   <ul>
                      <li>username: ${user.username}</li>
                      <li>city: ${user.city}</li>
                      <li>email: ${user.email}</li>
                      <li>country: ${user.country}</li>
                     
                   </ul>
                  `;
               });
               document.getElementById('output').innerHTML = output;
            })

    }).catch((error) => {
    console.log('error', error);

});

