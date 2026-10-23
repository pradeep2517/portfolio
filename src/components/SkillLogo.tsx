"use client";

import React from "react";

interface SkillLogoProps {
  name: string;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase();

  // PyTorch
  if (normalized.includes("pytorch")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M13.2 2.5a.8.8 0 0 0-1.1.2L10.3 5a5.5 5.5 0 0 0-.8 3.8l1.4-1.3a4.2 4.2 0 0 1 1-2.6l1.2-2.1a.8.8 0 0 0-.2-1l-.7-.3z"
          fill="#EE4C2C"
        />
        <path
          d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"
          fill="#EE4C2C"
        />
        <circle cx="16.5" cy="5.5" r="1.2" fill="#EE4C2C" />
      </svg>
    );
  }

  // TensorFlow / Keras
  if (normalized.includes("tensorflow") || normalized.includes("keras")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L3 7.5v9l4-2.4v-4.8l5 3v8.7l4-2.4V9.6l5-3v4.8l4 2.4v-9L12 2z" fill="#FF6F00" />
        <path d="M12 2v19l4-2.4V9.6l5-3v4.8l4 2.4v-9L12 2z" fill="#FFA800" opacity="0.8" />
      </svg>
    );
  }

  // Scikit-Learn
  if (normalized.includes("scikit")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="9" cy="8" r="4.5" fill="#3499CD" />
        <circle cx="15" cy="15" r="5" fill="#F89939" />
        <path d="M11.5 5.5l5 9-4 2-5-9 4-2z" fill="#186A9E" opacity="0.4" />
        <circle cx="15" cy="7" r="2" fill="#4BA3E3" />
      </svg>
    );
  }

  // CNNs (Convolutional Neural Networks)
  if (normalized.includes("convolutional") || normalized.includes("cnn")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <rect x="2" y="3" width="6" height="6" rx="1" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="10" y="8" width="6" height="6" rx="1" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="16" y="14" width="6" height="6" rx="1" fill="#EC4899" fillOpacity="0.2" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M8 6l2 4m6 1l2 4" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // Transformers & Attention Mechanisms
  if (normalized.includes("transformer") && !normalized.includes("hugging")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <circle cx="5" cy="6" r="2.5" fill="#6366F1" fillOpacity="0.3" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="5" cy="18" r="2.5" fill="#6366F1" fillOpacity="0.3" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="10" y="4" width="4" height="16" rx="1.5" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2.5" fill="#A855F7" fillOpacity="0.3" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M7.5 6h2.5m-2.5 12h2.5M14 12h2.5" stroke="#CBD5E1" strokeWidth="1.2" />
      </svg>
    );
  }

  // XGBoost & LightGBM
  if (normalized.includes("xgboost") || normalized.includes("lightgbm")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13 2L3 14h8l-2 8 11-13h-8l3-7z" fill="#10B981" />
        <path d="M11 14h8l-3 7 3-7h-8z" fill="#059669" opacity="0.4" />
      </svg>
    );
  }

  // Model Explainability (SHAP / LIME)
  if (normalized.includes("explainability") || normalized.includes("shap")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M3 12h4l3 7 4-14 3 7h4" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="5" r="2" fill="#EC4899" />
      </svg>
    );
  }

  // Hyperparameter Tuning (Optuna)
  if (normalized.includes("optuna") || normalized.includes("tuning")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <circle cx="12" cy="12" r="9" stroke="#06B6D4" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="#06B6D4" strokeWidth="1.5" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#22D3EE" />
      </svg>
    );
  }

  // OpenCV
  if (normalized.includes("opencv")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="6" r="3.2" fill="#EF4444" />
        <circle cx="6.5" cy="16.5" r="3.2" fill="#22C55E" />
        <circle cx="17.5" cy="16.5" r="3.2" fill="#3B82F6" />
        <path d="M10 7.5L8 14m6-6.5l2 6.5M8.5 17h7" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="1 1" />
      </svg>
    );
  }

  // Face Detection (MTCNN / Haar / SSD)
  if (normalized.includes("face detection") || normalized.includes("mtcnn")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M3 8V5a2 2 0 0 1 2-2h3m11 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="10" r="1.2" fill="#10B981" />
        <circle cx="15" cy="10" r="1.2" fill="#10B981" />
        <path d="M9.5 15c1 1 4 1 5 0" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // FaceNet / Biometric Embeddings
  if (normalized.includes("facenet") || normalized.includes("biometric")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M12 3a9 9 0 0 0-9 9c0 3.2 1.6 6 4 7.7" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6a6 6 0 0 0-6 6c0 2 1 3.8 2.5 4.9" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9a3 3 0 0 0-3 3c0 1.2.6 2.2 1.5 2.7" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="15" r="3" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="1.5" />
      </svg>
    );
  }

  // Hugging Face Transformers
  if (normalized.includes("hugging face")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="8" cy="10" r="1.4" fill="#000000" />
        <circle cx="16" cy="10" r="1.4" fill="#000000" />
        <path d="M8 14.5c1.2 2 6.8 2 8 0" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5 12c.5-1.5 2-2 3-1.5M19.5 12c-.5-1.5-2-2-3-1.5" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // GPT-2 / T5 Fine-Tuning
  if (normalized.includes("gpt") || normalized.includes("t5")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#3B82F6" fillOpacity="0.25" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M9 11h6m-3-3v6" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // PEFT / LoRA & QLoRA
  if (normalized.includes("peft") || normalized.includes("lora")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <rect x="3" y="4" width="8" height="16" rx="2" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="13" y="8" width="8" height="8" rx="2" fill="#EC4899" fillOpacity="0.3" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M11 12h2" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // OCR & Document AI (Tesseract / PyMuPDF)
  if (normalized.includes("ocr") || normalized.includes("document")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M14 2v6h6M8 13h8M8 17h5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="17" r="1" fill="#38BDF8" />
      </svg>
    );
  }

  // ROUGE / BLEU / Precision-Recall
  if (normalized.includes("rouge") || normalized.includes("bleu") || normalized.includes("eval")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="7" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M12 12l3-3" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // FastAPI / Flask APIs
  if (normalized.includes("fastapi") || normalized.includes("flask")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M13 5L7 13h5l-1 6 6-8h-5l1-6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker & Containerization
  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M22 12.5c-.5-.4-1.4-.4-2-.2-.2-.8-.8-1.5-1.6-1.8l-.5-.2-.3.5c-.3.7-.3 1.5 0 2.2-.8.5-1.8.8-3 .8H2.5c-.3 1.2.2 2.5 1.2 3.3 2 1.6 5.2 2.2 8.3 2.2 6.5 0 10.3-3.4 11.2-6.5.1-.1.1-.2.1-.3H22v0z"
          fill="#2496ED"
        />
        <rect x="5" y="10" width="2" height="1.8" rx=".2" fill="#2496ED" />
        <rect x="7.5" y="10" width="2" height="1.8" rx=".2" fill="#2496ED" />
        <rect x="10" y="10" width="2" height="1.8" rx=".2" fill="#2496ED" />
        <rect x="7.5" y="7.8" width="2" height="1.8" rx=".2" fill="#2496ED" />
        <rect x="10" y="7.8" width="2" height="1.8" rx=".2" fill="#2496ED" />
        <rect x="12.5" y="10" width="2" height="1.8" rx=".2" fill="#2496ED" />
      </svg>
    );
  }

  // Prefect / Workflow Orchestration
  if (normalized.includes("prefect") || normalized.includes("orchestration")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L3 12l9 10 9-10L12 2z" fill="#024DFD" fillOpacity="0.2" stroke="#024DFD" strokeWidth="2" />
        <path d="M12 6l-5 6 5 6 5-6-5-6z" fill="#024DFD" />
      </svg>
    );
  }

  // Great Expectations / Data Validation
  if (normalized.includes("expectations") || normalized.includes("data validation")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF5964" />
        <path d="M8 12l3 3 5-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // TensorRT & ONNX Runtime
  if (normalized.includes("tensorrt") || normalized.includes("onnx")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#76B900" strokeWidth="1.8" />
        <path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5" stroke="#76B900" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="12" cy="12" r="2.5" fill="#76B900" />
      </svg>
    );
  }

  // Git & GitHub Actions
  if (normalized.includes("git") || normalized.includes("ci/cd")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0L8.8 4.2l3.2 3.2a2.1 2.1 0 0 1 2.7 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.3l-2.9-2.9v4.3a2.1 2.1 0 1 1-1.8 0V11a2.1 2.1 0 0 1-1.1-2.8L7.6 5.1 2.4 10.3a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.2z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // Model Monitoring & Data Drift
  if (normalized.includes("monitoring") || normalized.includes("drift")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M3 17l6-6 4 4 8-8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h7v7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="17" r="4" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // PostgreSQL & Vector Databases (FAISS)
  if (normalized.includes("postgresql") || normalized.includes("vector")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#336791" />
        <path
          d="M16 11c-.5-2-2-3-4-3s-3.5 1-4 3c-.5 2 0 4 1 5 .5.5 1.5 1 3 1s2.5-.5 3-1c1-1 1.5-3 1-5z"
          fill="#FFFFFF"
          fillOpacity="0.85"
        />
        <circle cx="10" cy="11" r="1" fill="#336791" />
        <circle cx="14" cy="11" r="1" fill="#336791" />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M11.9 2c-5 0-4.7 2.2-4.7 2.2l.1 2.3h4.8v.7H5.2S2 6.8 2 11.9c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.7s2.7 0 2.7-2.7V4.7S17 2 11.9 2zm-1.4 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c5 0 4.7-2.2 4.7-2.2l-.1-2.3H11.9v-.7h6.9s3.2.4 3.2-4.7c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8h-4.7s-2.7 0-2.7 2.7v4.2S7 22 12.1 22zm1.4-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // SQL (PostgreSQL, SQLite)
  if (normalized.includes("sql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#F59E0B" strokeWidth="1.5" />
      </svg>
    );
  }

  // Streamlit
  if (normalized.includes("streamlit")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M7 17l5-12 5 12-5-3-5 3z" fill="#FF4B4B" />
        <path d="M3 19l4-9 3 7-7 2z" fill="#FF4B4B" opacity="0.6" />
        <path d="M21 19l-4-9-3 7 7 2z" fill="#FF4B4B" opacity="0.8" />
      </svg>
    );
  }

  // Power BI
  if (normalized.includes("power bi")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="4" y="13" width="3.5" height="8" rx="1" fill="#F2C811" />
        <rect x="10.25" y="8" width="3.5" height="13" rx="1" fill="#F2C811" />
        <rect x="16.5" y="3" width="3.5" height="18" rx="1" fill="#F2C811" />
      </svg>
    );
  }

  // TypeScript & Next.js
  if (normalized.includes("typescript") || normalized.includes("next.js")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path d="M7 9h6m-3 0v9M15 13.5c.5-.4 1.2-.6 2-.6 1.3 0 2 .7 2 1.6 0 1.4-2.2 1.6-2.2 2.6 0 .5.4.9 1.1.9.7 0 1.3-.3 1.8-.7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Linux / Bash Shell
  if (normalized.includes("linux") || normalized.includes("bash")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        <path d="M6 9l3 3-3 3M12 15h6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // PyTest & Automated Testing
  if (normalized.includes("pytest") || normalized.includes("testing")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path d="M9 3v6l-4 7a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-4-7V3h-6z" stroke="#0A9EDC" strokeWidth="1.8" fill="#0A9EDC" fillOpacity="0.15" />
        <path d="M9 14l2 2 4-4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // RESTful & WebSockets
  if (normalized.includes("rest") || normalized.includes("websocket")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <circle cx="6" cy="12" r="3" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="18" cy="12" r="3" fill="#EC4899" fillOpacity="0.3" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M9 10h6m-1-2l2 2-2 2M15 14H9m1 2l-2-2 2-2" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default fallback code/tech logo
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
