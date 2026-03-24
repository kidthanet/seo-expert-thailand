"use client"; // <--- เพิ่มบรรทัดนี้เพื่อบอก Next.js ว่านี่คือ Client Component

export default function LineButton() {
  const lineLink = "https://line.me/ti/p/@450dglwo";

  return (
    <a 
      href={lineLink} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#06C755',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        textDecoration: 'none'
      }}
      // ตอนนี้จะใช้ Event Handler เหล่านี้ได้แล้วครับ
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = '#05b34c';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#06C755';
      }}
    >
      <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 10.304c0-4.579-4.82-8.304-10.75-8.304-5.93 0-10.75 3.725-10.75 8.304 0 4.1 3.821 7.52 9.006 8.177.351.075.827.231.948.531.108.267.071.685.035 0.954-.035.268-.17 1.072-.207 1.3c-.063.38-.289 1.487 1.246.81 1.535-.678 8.288-4.881 11.309-8.354 2.113-2.427 3.163-4.148 3.163-5.418zm-15.545 3.328h-1.572c-.149 0-.27-.121-.27-.27v-3.774c0-.149.121-.27.27-.27h1.572c.149 0 .27.121.27.27v3.774c0 .149-.121.27-.27.27zm2.527 0h-1.572c-.149 0-.27-.121-.27-.27v-3.774c0-.149.121-.27.27-.27h1.572c.149 0 .27.121.27.27v3.774c0 .149-.121.27-.27.27zm3.125-2.046h-1.127v2.046h-1.572c-.149 0-.27-.121-.27-.27v-3.774c0-.149.121-.27.27-.27h1.572v1.728h1.127v-1.728h1.127v3.774c0 .149-.121.27-.27.27h-1.572v-2.046zm3.945 2.046h-2.699c-.149 0-.27-.121-.27-.27v-3.774c0-.149.121-.27.27-.27h2.699c.149 0 .27.121.27.27v.643c0 .149-.121.27-.27.27h-1.127v.43h1.127c.149 0 .27.121.27.27v.643c0 .149-.121.27-.27.27h-1.127v.43h1.127c.149 0 .27.121.27.27v.643c0 .149-.121.27-.27.27z"/>
      </svg>
    </a>
  );
}