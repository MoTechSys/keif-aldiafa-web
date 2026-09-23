import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // D172: سماح صريح لمكشّطات محركات الإجابة بالذكاء الاصطناعي (تعريف الكيان في
      // ChatGPT/Claude/Perplexity/Gemini). Google-Extended يخصّ تدريب Gemini فقط ولا يؤثر على البحث.
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Amazonbot", "Bytespider", "CCBot"], allow: "/", disallow: ["/api/", "/admin/", "/private/"] },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/image-sitemap.xml`,
      `${SITE_URL}/sitemap_index.xml`,
    ],
  };
}
