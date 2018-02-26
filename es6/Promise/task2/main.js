function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(status)
    .then(json)
    .then(function(data) {
        if(data.getUsersData === false){
            console.log('error');
        }else {
            console.log('get', 'true');
        }
    })
    .then(function(){
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
            .then(status)
            .then(json)
            .then(function(dating) {
               let output = '<h2>Users</h2>';
               dating.forEach(function (user) {
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
    }).catch(function(error) {
    console.log('Error', error);
});