
export default async function sitemap() {
    const baseUrl = "https://learnhqhome.vercel.app";

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/faq`, lastModified: new Date() }, 
        { url: `${baseUrl}/about`, lastModified: new Date() }, 
        { url: `${baseUrl}/contact`, lastModified: new Date() }, 
        { url: `${baseUrl}/privacy`, lastModified: new Date() }, 
        { url: `${baseUrl}/conditions`, lastModified: new Date() }, 
    ];
}