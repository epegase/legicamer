module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Legicamer - Textes de Loi du Cameroun', // Navigation and Site Title
  _titleAlt: 'Legicamer', // Title for JSONLD
  description: 'Tous les textes de loi du Cameroun, dans les deux langues officielles (Français et Anglais).',
  _url: 'https://legicamer.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'fr', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Legicamer', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Duverger PETGA', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@epegase', // Twitter Username
};
