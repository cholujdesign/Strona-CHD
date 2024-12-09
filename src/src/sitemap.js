const sitemap = require('sitemap');
const hostname = 'https://cholujdesign.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/Portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/Specjalizacje', changefreq: 'monthly', priority: 0.8 },
  { url: '/Kontakt', changefreq: 'monthly', priority: 0.8 },
];
const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});