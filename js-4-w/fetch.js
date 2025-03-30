// 19 Eseguire una richiesta GET semplice
/*function getRequest(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
};*/
// 20 Eseguire una richiesta POST
/*function postRequest() {
    const url = "https://catfact.ninja/fact";
    const data = {
        fact: "cats can sleep up to 18 hours a day."
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
};
postRequest();*/
// 21 Gestione degli errori con async e await
async function jokes(){
    const url = "https://official-joke-api.appspot.com/random_joke";
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(`${data.setup} - ${data.punchline}`);
    }catch(error){
        console.error(error);
    }
};
jokes();