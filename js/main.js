(function(){
  const DOWNLOAD_FILENAME = 'aeronje_style_chocolatey_setup.ps1';
  // Raw URL to the file in your GitHub repo (raw.githubusercontent.com). 
  // Using the main branch path — change branch name if you use another.
  const RAW_URL = 'https://raw.githubusercontent.com/aeronje/chocolatey_setup/main/aeronje_style_chocolatey_setup.ps1';

  // Button
  const btn = document.getElementById('downloadBtn');

  async function downloadFile(){
    try{
      btn.disabled = true;
      btn.classList.add('loading');
      btn.querySelector('.btn-text').textContent = 'Preparing download...';

      // Fetch the file as blob
      const resp = await fetch(RAW_URL, {cache: "no-store"});
      if(!resp.ok) throw new Error('Network response was not ok: ' + resp.status);

      const blob = await resp.blob();

      // Create temporary link and download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = DOWNLOAD_FILENAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      btn.querySelector('.btn-text').textContent = 'Download started ✓';
      setTimeout(()=>{
        btn.querySelector('.btn-text').textContent = 'Download aeronje_style_chocolatey_setup.ps1';
      },1800);
    }catch(err){
      console.error('Download failed', err);
      btn.querySelector('.btn-text').textContent = 'Download failed — try again';
      alert('Could not download file directly. Opening raw file in new tab instead.');
      // Fallback: open raw url
      window.open(RAW_URL, '_blank', 'noopener');
    }finally{
      btn.disabled = false;
      btn.classList.remove('loading');
    }
  }

  // attach
  if(btn){
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadFile();
    });
  }

  // Make the left avatar and name clickable (they already are in HTML via anchor).
  // Center small tag link and other anchors are plain anchors.

})();
