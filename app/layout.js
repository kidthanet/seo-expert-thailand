import "./globals.css";
import Navbar from "../components/Navbar";
import LineButton from "../components/LineButton";

// 1. กำหนด Metadata สำหรับ SEO (แบบ Global)
export const metadata = {
  title: {
    default: "สอน SEO ตัวต่อตัว เรียน SEO แบบจับมือทำ ติดหน้า 1 Google",
    template: "%s | SEO Expert Thailand",
  },
  description: "รับสอน SEO ตัวต่อตัว เจาะลึกเทคนิคดันเว็บไซต์ติดหน้า 1 Google สอนโดยผู้เชี่ยวชาญประสบการณ์ 15 ปี เน้นผลลัพธ์และการทำจริง",
  keywords: ["สอน SEO ตัวต่อตัว", "สอน SEO", "เรียน SEO", "รับทำ SEO", "สอน WordPress"],
  metadataBase: new URL("https://seo-expert-thailand.vercel.app"), // แก้ไข: เอา / ตัวสุดท้ายออกเพื่อป้องกัน Double Slash
  alternates: {
    canonical: "/",
  },
  // --- เพิ่มส่วนการยืนยัน Google Search Console ตรงนี้ครับ ---
  verification: {
    google: "7BBssFYpU5x6v1w7W65eSgZF6l8pQNNa9Kv7QHry1Nw",
  },
  // ---------------------------------------------------
  openGraph: {
    title: "สอน SEO ตัวต่อตัว เรียน SEO แบบจับมือทำ",
    description: "คอร์สเรียน SEO คุณภาพ เน้นพื้นฐานจนถึงระดับสูง โดย อาจารย์เอ๋ (พงษ์พิชญ)",
    url: "https://seo-expert-thailand.vercel.app/",
    siteName: "SEO Expert Thailand",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "สอน SEO ตัวต่อตัว",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  // 2. ข้อมูล JSON-LD สำหรับ Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "สอน SEO ตัวต่อตัว",
    "serviceType": "SEO Training",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SEO Expert Thailand (เอ๋ ชี้ชะตาจร)",
      "image": "https://seo-expert-thailand.vercel.app/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangkok",
        "addressCountry": "TH"
      }
    },
    "description": "บริการสอน SEO ตัวต่อตัว แบบเจาะลึกทุกขั้นตอน ตั้งแต่พื้นฐานจนถึงเทคนิคขั้นสูง เพื่อให้เว็บไซต์ติดอันดับหน้าแรก Google",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "THB",
      "price": "5000",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "24"
    }
  };

  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <LineButton />
        <footer style={{ 
          padding: '60px 20px', 
          textAlign: 'center', 
          backgroundColor: 'var(--primary-blue)', 
          color: '#fff',
          marginTop: '0' 
        }}>
          <div className="container">
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '1.2rem' }}>
              SEO EXPERT THAILAND
            </p>
            <p style={{ fontSize: '0.9rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 20px' }}>
              ศูนย์รวมความรู้ด้าน SEO และการพัฒนาเว็บไซต์ WordPress โดยอาจารย์ผู้เชี่ยวชาญที่มีประสบการณ์ทำจริง เจ็บจริง และสำเร็จจริงมามากกว่า 15 ปี
            </p>
            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              paddingTop: '20px', 
              fontSize: '0.8rem', 
              color: '#aaa' 
            }}>
              © 2026 สงวนลิขสิทธิ์เนื้อหาทั้งหมดโดย อาจารย์เอ๋ (พงษ์พิชญ)
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
