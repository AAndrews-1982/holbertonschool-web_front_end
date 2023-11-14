function createElement(data) {
    // Create a paragraph element
    const paragraph = document.createElement('p');
    
    // Set the content of the paragraph to the provided data
    paragraph.textContent = data;
    
    // Append the paragraph to the document body
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    return new Promise((resolve, reject) => {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        
        // Define the URL for the Wikipedia API request
        const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

        // Set up the request
        xhr.open('GET', url, true);

        // Define the onload callback
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Parse the JSON response
                const response = JSON.parse(xhr.responseText);

                // Get the extract from the API response
                const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;

                // Resolve the Promise with the extract
                resolve(extract);
            } else {
                // Reject the Promise with an error message
                reject('Error fetching data from Wikipedia API');
            }
        };

        // Send the request
        xhr.send();
    })
    .then((extract) => {
        // Call the provided callback function with the extract
        callback(extract);
    });
}

// Call queryWikipedia and handle the data using createElement
queryWikipedia(createElement)
    .catch((error) => {
        console.error(error);
    });
