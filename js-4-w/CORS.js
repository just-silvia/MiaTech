// 22 Comprendere un errore CORS
fetch("https://api.coindesk.com/v1/bpi/currentprice.json") 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    // errore trovato
    /*TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  [cause]: Error: getaddrinfo ENOTFOUND api.coindesk.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'api.coindesk.com'
  }
}*/
// 23 Utilizzare un proxy per bypassare CORS
// 24 Utilizzare un API che supporta CORS