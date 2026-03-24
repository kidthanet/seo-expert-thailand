import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

// 1. ฟังก์ชันดึงบทความทั้งหมดและเรียงลำดับตามวันที่ (สำหรับหน้าสารบัญและ Sitemap)
export function getAllPosts() {
  // ตรวจสอบว่ามีโฟลเดอร์ content หรือไม่ ถ้าไม่มีให้สร้างเพื่อป้องกัน Error
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // ดึงเฉพาะไฟล์ .md
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    });

  // เรียงลำดับบทความตามวันที่ (ใหม่ไปเก่า)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 2. ฟังก์ชันดึงเนื้อหาบทความแบบละเอียด (สำหรับหน้าเนื้อหาบทความ)
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // แปลง Markdown เป็น HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}