(function () {
  const DOWNLOAD_FILENAME = 'aeronje_style_chocolatey_setup.ps1';
  const RAW_URL = 'https://raw.githubusercontent.com/aeronje/chocolatey_setup/main/aeronje_style_chocolatey_setup.ps1';

  // Make sure the script only runs once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadBtn');
    if (!btn) {
      console.error('Download button not found in DOM.');
      return;
    }

    async function downloadFile() {
      try {
        btn.disabled = true;
        btn.classList.add('loading');

        const textEl = btn.querySelector('.btn-text');
        if (textEl) textEl.textContent = 'Preparing download...';

        // Fetch the file directly from GitHub raw content
        const resp = await fetch(RAW_URL, { cache: 'no-store' });
        if (!resp.ok) throw new Error('Network response was not ok: ' + resp.status);

        const blob = await resp.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = DOWNLOAD_FILENAME;
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(url);

        if (textEl) textEl.textContent = 'Download started ✓';
        setTimeout(() => {
          if (textEl) textEl.textContent = 'Download aeronje_style_chocolatey_setup.ps1';
        }, 1800);
      } catch (err) {
        console.error('Download failed:', err);
        const textEl = btn.querySelector('.btn-text');
        if (textEl) textEl.textContent = 'Download failed — try again';
        alert('Could not download file directly. Opening raw file in new tab instead.');
        window.open(RAW_URL, '_blank', 'noopener');
      } finally {
        btn.disabled = false;
        btn.classList.remove('loading');
      }
    }

    // Attach event listener safely
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadFile();
    });
  });
})();
