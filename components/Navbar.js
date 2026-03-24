import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #eee',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo / Brand Name */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ 
            fontSize: '1.4rem', 
            fontWeight: '800', 
            color: 'var(--primary-blue)',
            letterSpacing: '-0.5px'
          }}>
            SEO <span style={{ color: 'var(--secondary-blue)' }}>EXPERT</span>
          </span>
        </Link>

        {/* Menu Links */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link href="/" style={{ 
            textDecoration: 'none', 
            color: 'var(--text-dark)', 
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            หน้าแรก
          </Link>
          <Link href="/blog" style={{ 
            textDecoration: 'none', 
            color: 'var(--text-dark)', 
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            บทความ SEO
          </Link>
          <a href="https://line.me/ti/p/@450dglwo" target="_blank" rel="noopener noreferrer">
            <button style={{ 
              padding: '8px 20px', 
              fontSize: '0.9rem', 
              borderRadius: '8px',
              boxShadow: 'none'
            }}>
              ติดต่อสอบถาม
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}