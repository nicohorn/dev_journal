// Fetch data from a public API and explore the Response object
function fetchDataAndExploreResponse() {
  // Fetch data from the JSONPlaceholder API
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Log various properties of the Response object
      console.log("Response.body:", response.body);
      console.log("Response.bodyUsed:", response.bodyUsed);
      console.log("Response.headers:", response.headers);
      console.log("Response.ok:", response.ok);
      console.log("Response.redirected:", response.redirected);
      console.log("Response.status:", response.status);
      console.log("Response.statusText:", response.statusText);
      console.log("Response.type:", response.type);
      console.log("Response.url:", response.url);

      // Clone the response to use it twice
      const clonedResponse = response.clone();

      // Parse the JSON data
      return clonedResponse.json().then((data) => {
        console.log("Parsed data:", data);

        // After parsing, bodyUsed will be true
        console.log(
          "Response.bodyUsed after parsing:",
          clonedResponse.bodyUsed
        );

        return response;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function and handle the returned promise
fetchDataAndExploreResponse().then((response) => {
  if (response) {
    console.log("Response object:", response);
  }
});
