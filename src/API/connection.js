//Conexão com a API
const connection = axios.create({
    //Production
    baseURL: "https://pim-api.herokuapp.com/api",
    //dev
    //baseURL: "https://localhost:3333/api",
    //headers: {
      //  "Content-Type": "application/json",
    //},
});