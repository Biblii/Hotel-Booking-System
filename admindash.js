function loadContent(contentFile) {
    // Fetch the external HTML file and load it into the content-area
    fetch(contentFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load content from ${contentFile}`);
            }
            return response.text();
        })
        .then(data => {
            // Inject the content into the main content area
            document.getElementById('content-area').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('content-area').innerHTML = '<p>There was an error loading the content. Please try again later.</p>';
        });
}
