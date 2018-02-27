

const arrurl = ['http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'];

const arr = (obj) =>{
    const ar = [];
    ar.push(obj);
    console.log(ar);
};
Promise.all(arrurl.map(url => fetch(url)))
    .then(resp => Promise.all( resp.map(r => r.text()) ))
    .then(result => { arr(result); })
    .catch((error) => { console.log('error', error) });

async function fetchURLs() {
         await Promise.all([
            fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS').then((response) => response.json()),
            fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi').then((response) => response.json()),
            fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm').then((response) => response.json()),
            fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS').then((response) => response.json()),
            fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK').then((response) => response.json()),
        ]).then(arr)
          .catch((error) => {
                 console.log('error', error)
             });
}
fetchURLs();