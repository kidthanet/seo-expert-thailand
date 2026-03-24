// app/sitemap.js
import { getAllPosts } from '../lib/posts'; // แก้จาก getSortedPostsData เป็น getAllPosts

export default async function sitemap() {
  // 1. กำหนดชื่อโดเมนหลักของคุณ
  const baseUrl = "https://seo-expert-thailand.vercel.app/"; 

  // 2. ดึงข้อมูลบทความโดยใช้ฟังก์ชัน getAllPosts ที่อยู่ใน lib/posts.js
  const posts = getAllPosts();

  // 3. สร้างรายการ URL สำหรับบทความ (Blog Posts)
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`, // ใช้ post.slug ตามโครงสร้างใน lib/posts.js
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 4. กำหนดหน้าหลัก (Static Pages)
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 5. รวม URL ทั้งหมดส่งให้ Next.js
  return [...staticUrls, ...blogUrls];
}
