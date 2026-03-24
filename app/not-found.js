import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      {/* ส่วนหัวแสดง Error ด้วยภาษาที่เป็นกันเอง */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--primary-blue)', opacity: 0.1 }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginTop: '-40px', color: 'var(--primary-blue)' }}>
          ขออภัยครับ... ดูเหมือนจะมาผิดทาง
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '500px', margin: '15px auto' }}>
          หน้าที่คุณกำลังตามหาอาจถูกย้าย หรือถูกลบไปแล้ว 
          แต่ไม่ต้องกังวลครับ ผมมีทางลัดให้คุณไปต่อได้ทันที
        </p>
      </div>

      {/* ทางเลือกให้ลูกค้า (Navigation Options) */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        marginBottom: '40px' 
      }}>
        <Link href="/">
          <button style={{ 
            padding: '12px 30px', 
            borderRadius: '12px', 
            backgroundColor: 'var(--primary-blue)',
            cursor: 'pointer' 
          }}>
            กลับหน้าหลัก (คอร์สเรียน)
          </button>
        </Link>
        <Link href="/blog">
          <button style={{ 
            padding: '12px 30px', 
            borderRadius: '12px', 
            backgroundColor: '#fff', 
            color: 'var(--primary-blue)',
            border: '2px solid var(--primary-blue)',
            cursor: 'pointer' 
          }}>
            อ่านบทความ SEO ล่าสุด
          </button>
        </Link>
      </div>

      {/* เพิ่มความเป็นกันเองด้วย Call to Action เล็กๆ */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'var(--bg-light)', 
        borderRadius: '15px',
        maxWidth: '400px'
      }}>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          หาอะไรไม่เจอ หรืออยากปรึกษาเรื่อง SEO โดยตรง? <br/>
          <a href="https://line.me/ti/p/@450dglwo" target="_blank" style={{ color: '#28a745', fontWeight: 'bold', textDecoration: 'none' }}>
            ทักสอบถามอาจารย์เอ๋ได้ที่นี่ครับ
          </a>
        </p>
      </div>

      {/* ตกแต่งด้วยภาพเล็กน้อย (ถ้ามีรูปโลโก้หรือ Mascot สามารถใส่ตรงนี้ได้) */}
      <div style={{ marginTop: '50px', opacity: 0.5 }}>
        <p style={{ fontSize: '0.85rem' }}>SEO EXPERT THAILAND - ประสบการณ์ 15 ปีที่คุณวางใจได้</p>
      </div>
    </div>
  );
}