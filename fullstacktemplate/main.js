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
  axios
    .post("http://localhost:5000/api/post", {
      data: "test123",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

testGet();
testPost();
