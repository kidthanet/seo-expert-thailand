// app/blog/page.js
import { getAllPosts } from '../../lib/posts'; // ใช้ Relative Path เพื่อป้องกัน Error
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'บทความ SEO และเทคนิคทำเว็บไซต์ WordPress | คลังความรู้โดยผู้เชี่ยวชาญ',
  description: 'รวมบทความสอนเทคนิคการทำ SEO สายขาว วิธีปรับแต่ง WordPress และอัปเดตอัลกอริทึม Google ล่าสุด เพื่อให้ธุรกิจของคุณเติบโตอย่างยั่งยืน โดยอาจารย์ประสบการณ์ 15 ปี',
};

export default function BlogPage() {
  const posts = getAllPosts();

  // เรียงลำดับบทความตามวันที่ (ใหม่สุดขึ้นก่อน)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-light" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      
      {/* Header ของหน้า Blog */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: 'var(--primary-blue)', color: '#fff' }}>
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '10px' }}>คลังความรู้ SEO & WordPress</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>อัปเดตเทคนิคการทำเว็บไซต์และการดันอันดับ Google ให้ยั่งยืน</p>
          <div style={{ marginTop: '20px' }}>
            <Link href="/">
              <button style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--primary-blue)', padding: '10px 25px', fontSize: '0.9rem' }}>
                กลับหน้าหลัก / ดูคอร์สเรียน
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* รายการบทความ */}
      <main className="container" style={{ padding: '60px 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <article 
                key={post.slug} 
                className="service-card" 
                style={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '15px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* ถ้ามีรูป Thumbnail ใน Markdown จะแสดงผลตรงนี้ (Optional) */}
                <div style={{ padding: '25px', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '10px' }}>
                    📅 {post.date}
                  </p>
                  <h2 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`} style={{ 
                    color: 'var(--secondary-blue)', 
                    fontWeight: 'bold', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    อ่านบทความต่อ ➔
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>ยังไม่มีบทความในขณะนี้...</p>
          )}
        </div>
      </main>

      {/* Footer เล็กๆ สำหรับหน้า Blog */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
          © 2026 SEO Expert Thailand - สอน SEO ตัวต่อตัว และ รับทำเว็บไซต์ WordPress
        </p>
      </footer>
    </div>
  );
}