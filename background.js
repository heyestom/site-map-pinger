chrome.action.onClicked.addListener(async (tab) => {
    const googleSiteMapURL = "https://www.google.com/ping?sitemap="

    const pageURL = new URL(tab.url)

    const siteMap = "/sitemap.xml"
    
    chrome.tabs.create({ url: googleSiteMapURL + pageURL.origin + siteMap });
});
