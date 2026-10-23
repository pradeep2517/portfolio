import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pradeep Rajalu | Machine Learning & Applied AI Engineer",
  description:
    "Portfolio of Pradeep Rajalu — ML/AI Engineer specializing in Computer Vision, NLP, and production MLOps pipelines. Discover 6 end-to-end production AI projects with real benchmarks and code.",
  keywords: [
    "Machine Learning Engineer",
    "AI Engineer",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "MLOps",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Transformers",
    "Pradeep Rajalu",
    "India AI Engineer"
  ],
  authors: [{ name: "Pradeep Rajalu" }],
  creator: "Pradeep Rajalu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkedin.com/in/raju25",
    title: "Pradeep Rajalu | ML & Applied AI Engineer Portfolio",
    description:
      "Building production-ready AI systems with Python, deep learning, and data science. Featuring 6 production ML projects.",
    siteName: "Pradeep Rajalu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Rajalu | ML & Applied AI Engineer",
    description:
      "Building production-ready AI systems with Python, deep learning, and data science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pradeep Rajalu",
    jobTitle: "Machine Learning / AI Engineer",
    url: "https://linkedin.com/in/raju25",
    email: "pradeeprajalu5@gmail.com",
    telephone: "+91-7010-327639",
    sameAs: [
      "https://linkedin.com/in/raju25",
      "https://github.com/pradeep2517"
    ],
    knowsAbout: [
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "MLOps",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "FastAPI"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
