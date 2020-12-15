var axios = require("axios")
const apiRequest=()=>{
    axios.get('https://api.github.com/users/Pranjal-dev-byte')
    .then((response) => {
      console.log(response.data);
    });
}
console.log(apiRequest())