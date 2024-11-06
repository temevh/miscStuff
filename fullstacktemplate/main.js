const axios = require("axios");

function testGet() {
  axios
    .get("http://localhost:5000/api/get")
    .then(function (response) {
      // handle success
      console.log(response.data); // Access the data from the response object
    })
    .catch(function (error) {
      // handle error
      console.error("There was an error!", error);
    });
}

function testPost() {
  const rand = Math.random();

  axios
    .post("http://localhost:5000/api/post", {
      randNum: rand,
    })
    .then(function (response) {
      console.log(response);
      console.log("posted", rand, "to database");
    })
    .catch(function (error) {
      console.log(error);
    });
}

testGet();
testPost();
