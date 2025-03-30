// 19 Eseguire una richiesta GET semplice
fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error);
})