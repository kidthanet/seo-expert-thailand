// app/blog/[slug]/page.js
import { getPostData, getAllPosts } from '../../../lib/posts';
import Link from 'next/link';

// 1. แก้ไข Metadata ให้รองรับ Async Params
export async function generateMetadata({ params }) {
  const { slug } = await params; // ต้อง await params ก่อน
  const post = await getPostData(slug);
  if (!post) return { title: 'ไม่พบเนื้อหาบทความ' };

  return {
    title: `${post.title} | SEO Expert Thailand`,
    description: post.description,
    alternates: {
      canonical: `https://www.yourdomain.com/blog/${slug}`,
    },
  };
}

// 2. กำหนด Static Params (ไม่ต้องแก้ส่วนนี้)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  // --- จุดสำคัญ: ต้อง await params ก่อนดึง slug มาใช้ ---
  const { slug } = await params; 
  const postData = await getPostData(slug);
  const allPosts = getAllPosts();

  // กรองบทความปัจจุบันออกเพื่อหาบทความอื่นๆ มาแสดง
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 2);

  if (!postData) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-blue)' }}>ไม่พบเนื้อหาบทความ (Slug: {slug})</h2>
        <p>กรุณาตรวจสอบชื่อไฟล์ในโฟลเดอร์ content ครับ</p>
        <Link href="/blog">กลับไปหน้าบทความ</Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.description,
    "datePublished": postData.date,
    "author": {
      "@type": "Person",
      "name": "เอ๋ ชี้ชะตาจร"
    }
  };

  return (
    <article style={{ padding: '120px 20px 80px', maxWidth: '850px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav style={{ fontSize: '0.9rem', marginBottom: '20px', color: '#666' }}>
        <Link href="/" style={{ color: 'var(--secondary-blue)' }}>หน้าแรก</Link> &raquo; 
        <Link href="/blog" style={{ color: 'var(--secondary-blue)', marginLeft: '5px' }}>บทความ</Link> &raquo; 
        <span style={{ marginLeft: '5px' }}>{postData.title}</span>
      </nav>

      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-blue)', lineHeight: '1.2', marginBottom: '15px' }}>
          {postData.title}
        </h1>
        <div style={{ color: '#888', display: 'flex', gap: '20px', fontSize: '0.95rem' }}>
          <span>📅 เผยแพร่เมื่อ: {postData.date}</span>
          <span>✍️ โดย: เอ๋ ชี้ชะตาจร</span>
        </div>
      </header>

      {/* เนื้อหาบทความ: ใส่ minHeight กันหน้ายุบ และเช็คสีตัวอักษร */}
      <section 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        style={{ 
          lineHeight: '1.8', 
          fontSize: '1.15rem', 
          color: '#333',
          borderBottom: '1px solid #eee',
          paddingBottom: '50px',
          minHeight: '300px'
        }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={{ marginTop: '60px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: 'var(--primary-blue)' }}>
            บทความที่คุณอาจสนใจ
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '12px', border: '1px solid #eee' }}>
                  <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 10px 0' }}>{post.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>อ่านต่อเพิ่มเติม &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Box */}
      <div style={{ marginTop: '80px', padding: '40px', backgroundColor: 'var(--primary-blue)', color: '#fff', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>สนใจเจาะลึกเทคนิค SEO แบบตัวต่อตัว?</h3>
        <a href="https://line.me/ti/p/@450dglwo" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--primary-blue)', border: 'none', padding: '15px 40px', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer' }}>
            ทักสอบถามอาจารย์เอ๋ผ่าน Line
          </button>
        </a>
      </div>
    </article>
  );
}