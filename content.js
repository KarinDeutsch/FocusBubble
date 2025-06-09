chrome.storage.local.get(['blockedSites'], function(result) {
    const blockedSites = result.blockedSites || [];

    const hostname = window.location.hostname;

    const isBlocked = blockedSites.some(site => hostname.includes(site));

    if (isBlocked) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        overlay.style.color = 'white';
        overlay.style.zIndex = 999999;
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.fontSize = '20px';
        overlay.innerHTML = `
            <div>
                <p>🚫 This site is blocked by FocusBubble.</p>
                <p>Real blocking coming soon.</p>
                <button id="closeOverlay" style="margin-top:20px;">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById('closeOverlay').addEventListener('click', () => {
            overlay.remove();
        });
    }
});
