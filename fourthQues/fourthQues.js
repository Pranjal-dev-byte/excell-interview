var axios = require("axios")
// Made an API request to Github api to get user data of my Github profile
const apiRequest=()=>{
    axios.get('https://api.github.com/users/Pranjal-dev-byte')
    .then((response) => {
      console.log(response.data);
    });
}
console.log(apiRequest())