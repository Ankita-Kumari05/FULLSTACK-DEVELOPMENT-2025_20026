let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data fetched successfully");
    }, 2000);
});

promise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });