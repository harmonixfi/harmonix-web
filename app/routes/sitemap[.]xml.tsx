export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
  <loc>https://harmonix.fi</loc>
  <lastmod>2024-08-31T13:49:37.014Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>1</priority>
  </url>
  <url>
  <loc>https://harmonix.fi/about-us</loc>
  <lastmod>2024-08-31T13:49:37.014Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.5</priority>
  </url>
  </urlset>
    `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
