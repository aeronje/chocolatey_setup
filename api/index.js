// Ron Penones | November 1st 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

let cachedHTML = null;
let lastFetched = 0;

export default async function handler(req, res) {
  try {
    const now = Date.now();
    const cacheDuration = 5 * 60 * 1000; // 5 minutes cache para hindi masyado bugbog si Vercel at jsDelivr tutal landing page lang naman.

    if (!cachedHTML || now - lastFetched > cacheDuration) {
      const htmlURL = 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/chocolatey_setup/index.html'; // Dito naka-map iyong index.html via jsDelivr.
      const response = await fetch(htmlURL);

      if (!response.ok) {
        throw new Error(`Failed to fetch HTML: ${response.status}`);
      }

      cachedHTML = await response.text();
      lastFetched = now;
      console.log('Fetched fresh HTML from jsDelivr');
    } else {
      console.log('Served HTML from cache');
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.status(200).send(cachedHTML);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h1>Server Error</h1><p>Unable to load HTML content.</p>');
  }
}

