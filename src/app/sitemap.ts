
export default async function sitemap() {
    const baseUrl = "https://learnhqhome.vercel.app";

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() }, 
    ];
}