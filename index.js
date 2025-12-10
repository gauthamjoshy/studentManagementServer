const JSONServer = require("json-server");
const path = require("path");

// create server
const studentManagement = JSONServer.create();

// middleware
const middleware = JSONServer.defaults();

// router (absolute path)
const router = JSONServer.router(path.join(__dirname, "db.json"));

// correct port
const PORT = process.env.PORT || 3000;

// use middleware and router
studentManagement.use(middleware);
studentManagement.use(router);

// start server
studentManagement.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
