fetch('data.txt')
            .then(response => response.text())
            .then(data => 
            {
                console.log(data); // Display the content to the console
                // Display content on the page in the HTML element with id output
                document.getElementById('output').textContent = data; // Display content on the page
            })
            .catch(error => console.error('Error reading file:', error));