(async function() {
  const link = document.getElementById('leesmeer-link');
  if (!link) 
    return;

  // Get current page path (without trailing slash)
  const currentPath = window.location.pathname.replace(/\/$/, '');

  // Get visited pages from sessionStorage
  let visited = JSON.parse(sessionStorage.getItem('visitedSchets') || '[]');

  // Fetch the list of schets URLs
  let allSchets = [];
  try {
    const response = await fetch('/schets-list.json');
    if (!response.ok) 
      throw new Error('Failed to fetch schets list');
    allSchets = await response.json();
    if (!Array.isArray(allSchets)) 
      throw new Error('schets-list.json is not an array');
  } catch (e) {
    // If fetch fails, hide the link
    link.style.display = 'none';
    return;
  }

  // Filter out current and visited pages
  let candidates = allSchets.filter(url => {
    const cleanUrl = url.replace(/\/$/, '');
    return cleanUrl !== currentPath && !visited.includes(cleanUrl);
  });

  // If all schetsjes have been visited (except current), 
  // allow repeats (reset visited list except current)
  if (candidates.length === 0) {
    visited = [];
    candidates = allSchets.filter(url => url.replace(/\/$/, '') !== currentPath);
  }

  // If still no candidates (e.g. only one schets exists), just use allSchets
  if (candidates.length === 0) {
    candidates = allSchets;
  }

  // Pick a random schets
  const randomUrl = candidates[Math.floor(Math.random() * candidates.length)];
  link.href = randomUrl;

  // On click, add to visited (avoid duplicates)
  link.addEventListener('click', () => {
    const cleanUrl = randomUrl.replace(/\/$/, '');
    if (!visited.includes(cleanUrl)) {
      visited.push(cleanUrl);
      sessionStorage.setItem('visitedSchets', JSON.stringify(visited));
    }
  });
})();