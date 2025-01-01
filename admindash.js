function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading page: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
            switch (page) {
                case 'room.html':
                    loadScript('room.js');
                    break;
                case 'review.html':
                    loadScript('review.js');
                    break;
                case 'bookHistory.html':
                    loadScript('bookHistory.js');
                    break;
                default:
                    console.log(`No specific JS logic for ${page}`);
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('content-area').innerHTML = `
                <div style="color: red; font-weight: bold;">Failed to load content. Please try again later.</div>
            `;
        });
}
function loadScript(scriptPath) {
    if (document.querySelector(`script[src="${scriptPath}"]`)) {
        console.log(`${scriptPath} is already loaded.`);
        return;
    }

    const script = document.createElement('script');
    script.src = scriptPath;
    script.defer = true;
    script.onload = () => console.log(`${scriptPath} loaded successfully.`);
    script.onerror = () => console.error(`Failed to load script: ${scriptPath}`);
    document.body.appendChild(script);
}
