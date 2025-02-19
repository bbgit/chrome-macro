// background.js
const shortcuts = {
  '`rr': 'site:reddit.com',
  '`hn': 'site:news.ycombinator.com'
};

// Listen for when a new search is initiated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes('google.com/search')) {
    const url = new URL(changeInfo.url);
    const searchQuery = url.searchParams.get('q');
    
    if (searchQuery) {
      let modifiedQuery = searchQuery;
      
      // Process all shortcuts
      for (const [shortcut, replacement] of Object.entries(shortcuts)) {
        if (searchQuery.includes(shortcut)) {
          // Remove the shortcut and add the replacement at the end
          modifiedQuery = modifiedQuery.replace(shortcut, '').trim() + ' ' + replacement;
        }
      }
      
      // If the query was modified, update the search
      if (modifiedQuery !== searchQuery) {
        const newUrl = new URL(changeInfo.url);
        newUrl.searchParams.set('q', modifiedQuery);
        chrome.tabs.update(tabId, { url: newUrl.toString() });
      }
    }
  }
});

