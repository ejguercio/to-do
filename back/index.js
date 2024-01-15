const server = require("./src/app");
require("dotenv").config();

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`)
})
