// Ron Penones | November 1st 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

export const config = {
  runtime: 'nodejs22.x', // Nilapat ko ito kasi most common issue iyong fetch failures sa Vercel.
};

let cachedHTML = null;
let lastFetched = 0;

export default async function handler(req, res) {
  try {
    const now = Date.now();
    const cacheDuration = 5 * 60 * 1000; // 5 minutes cache para hindi masyado bugbog si Vercel at jsDelivr tutal landing page lang naman.

    if (!cachedHTML || now - lastFetched > cacheDuration) {
      const htmlURL = 'https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/chocolatey_setup/index.html'; // Dito naka-map iyong index.html via jsDelivr.
      console.log('Fetching from:', htmlURL);

      const response = await fetch(htmlURL);
      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Failed to fetch HTML: ${response.status}`);
      }

      const html = await response.text();
      console.log('HTML length:', html.length);

      cachedHTML = html;
      lastFetched = now;
    } else {
      console.log('Served HTML from cache');
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.status(200).send(cachedHTML);

  } catch (error) {
    console.error('Error caught:', error);
    res.status(500).send('<h1>Server Error</h1><p>Unable to load HTML content.</p>');
  }
}

