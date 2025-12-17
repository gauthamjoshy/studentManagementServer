// import json server
const JSONServer = require("json-server")

// create server
const studentManagement = JSONServer.create()

// create middleware
const middleware = JSONServer.defaults()

// define router
const router = JSONServer.router("db.json")

// define port
const PORT = 3000 || process.env.PORT

// use middleware and router
studentManagement.use(middleware)
studentManagement.use(router)

// start server
studentManagement.listen(PORT, ()=>{
    console.log(`JSON server started at port number : ${PORT}`);
    
})