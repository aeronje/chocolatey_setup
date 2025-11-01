// Ron Penones | November 1st 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!
// Ang index.js na ito ay subtly rewrote sa address bar ng browser kaya merong nakabukod na rewrite rule script na vercel.json.
// Ang vercel.json ay nasa root directory ng repository kumbaga main repo folder.
// Ang problema kasi dito ay may halong /api ang nalabas sa address bar kaya nagsulat ako ng rewrite rule para hindi baduy na parang jowa mo.
// Sundan ng maayos ang property structure sa vercel.json especially sa huling array item ay dapat walang comma sa dulo.

export const config = {
  runtime: 'nodejs', // nodejs imbis na mag-specify ng version para si Vercel na bahala sa pag-handle ng fetch API kung saang version ang gagamitin sa environment nila.
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

