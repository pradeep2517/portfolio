"use client";

import React from "react";
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  FileText,
  ArrowUpRight,
  Briefcase,
  Building2,
  FolderGit2,
  GraduationCap,
  Award,
  Wrench
} from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0d0d0d] rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-left">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-black">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              Pradeep Rajalu &mdash; Resume / Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            {/* Primary Download Resume Pill Button */}
            <a
              href="/resume.pdf"
              download="Pradeep_Rajalu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold bg-white text-black hover:bg-neutral-200 transition-colors shadow-md border border-neutral-300"
            >
              <span>DOWNLOAD RESUME (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handlePrint}
              title="Print directly or save as PDF"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-200 dark:border-neutral-800 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif uppercase">
              PRADEEP RAJALU
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-neutral-400 font-mono">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>India</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3 h-3 text-neutral-500" />
                <a href="mailto:pradeeprajalu5@gmail.com" className="hover:underline text-slate-800 dark:text-neutral-200">
                  pradeeprajalu5@gmail.com
                </a>
              </span>
              <span>&bull;</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3 h-3 text-neutral-500" />
                <span>7010327639</span>
              </span>
              <span>&bull;</span>
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400 font-semibold"
              >
                linkedin.com/in/raju25
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono border-b border-slate-200 dark:border-neutral-800 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed text-justify">
              Motivated AI/ML practitioner and Data Science with hands-on expertise in building end-to-end machine learning pipelines, preprocessing complex datasets, and designing predictive models using Python, SQL, Scikit-Learn, and Power BI. Well-versed in modern AI architectures, exploratory data analysis, and automation workflows. Eager to leverage technical rigor and practical engineering experience to build scalable, high-impact intelligent systems.
            </p>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono border-b border-slate-200 dark:border-neutral-800 pb-1 flex items-center space-x-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>WORK EXPERIENCE</span>
            </h2>

            {/* DataScience - iStudio */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <span className="font-extrabold text-slate-900 dark:text-white">DataScience</span>
                  <span className="text-neutral-500 mx-1.5">&mdash;</span>
                  <span className="font-bold text-slate-800 dark:text-neutral-200">iStudio</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  June 2026 &ndash; Present, pune,
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Developed and implemented end-to-end data science and machine learning pipelines using Python, leveraging libraries such as Pandas, NumPy, Scikit-Learn, and Matplotlib.
                </li>
                <li>
                  Cleaned, preprocessed, and transformed large, unstructured datasets to ensure high data quality for modeling and exploratory data analysis (EDA).
                </li>
                <li>
                  Built and optimized predictive models and classification/regression algorithms, evaluating performance metrics to improve model accuracy.
                </li>
                <li>
                  Designed interactive data visualizations and dashboards using Power BI and SQL to communicate insights effectively to stakeholders.
                </li>
                <li>
                  Collaborated with team members to solve complex business problems using data-driven approaches and modern data analytics workflows.
                </li>
              </ul>
            </div>
          </div>

          {/* INTERNSHIP */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono border-b border-slate-200 dark:border-neutral-800 pb-1 flex items-center space-x-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>INTERNSHIP</span>
            </h2>

            {/* AI Analyst Intern - IBM */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <span className="font-extrabold text-slate-900 dark:text-white">AI Analyst Intern</span>
                  <span className="text-neutral-500 mx-1.5">&mdash;</span>
                  <span className="font-bold text-slate-800 dark:text-neutral-200">IBM</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  August 2025 &ndash; August 2025, India
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Engineered a real-time face detection and recognition system using Python, OpenCV, and deep learning models, achieving 95% identification accuracy and deploying via a user-friendly dashboard for security access control.
                </li>
                <li>
                  Developed and tested predictive machine learning models (e.g., logistic regression, random forest) with scikit-learn to analyze customer churn patterns, directly informing retention strategies that reduced churn by 12%.
                </li>
                <li>
                  Built modular Python scripts to automate data cleaning and feature engineering, cutting data preparation time by 40% for the analytics team.
                </li>
                <li>
                  Created interactive Streamlit dashboards for real-time KPI visualization, enabling cross-functional stakeholders to self-serve insights without SQL or coding support.
                </li>
              </ul>
            </div>
          </div>

          {/* PROJECT */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono border-b border-slate-200 dark:border-neutral-800 pb-1 flex items-center space-x-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECT</span>
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900 dark:text-white">
                  Ai Based journal paper writer
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  May 2026 &ndash; May 2026
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Used Python and a pre-trained language model (e.g., GPT-2 or T5) to generate short academic paragraphs from user-provided titles and keywords.
                </li>
                <li>
                  Preprocessed a small dataset of 50&ndash;100 sample abstracts to fine-tune the model, improving relevance of generated text.
                </li>
                <li>
                  Built a simple command-line or Jupyter Notebook interface to test and compare generated outputs manually.
                </li>
                <li>
                  Documented the process and learned basic NLP techniques (tokenization, model inference, text cleanup).
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900 dark:text-white">
                  face detection and face recognisation using python
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  March 2026 &ndash; May 2026
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Built a real-time face detection system using OpenCV Haar cascades, processing 15&ndash;20 frames per second on a laptop webcam.
                </li>
                <li>
                  Used a pre-trained face_recognition library to identify up to 3 known individuals from a small photo dataset (5 images per person).
                </li>
                <li>
                  Achieved ~80% accuracy in varied lighting conditions during a live demo with 10 test frames.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900 dark:text-white">
                  ICU rover ward
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  September 2025 &ndash; November 2025
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Assembled a Raspberry Pi-based rover with two DC motors and a webcam, controlled wirelessly via a Python script using keyboard commands.
                </li>
                <li>
                  Achieved reliable movement and live video streaming within a 3-meter range during indoor tests on tile flooring.
                </li>
                <li>
                  Tested basic obstacle avoidance (manual stop within 30 cm) using an ultrasonic sensor, demonstrating safe operation in narrow spaces.
                </li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900 dark:text-white">
                  Emotion recognisation using python
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  September 2025 &ndash; September 2025
                </span>
              </div>
              <ul className="list-disc list-outside text-xs text-slate-700 dark:text-neutral-300 space-y-1 pl-4">
                <li>
                  Built a real-time emotion recognition system using Python, OpenCV, and deep learning (CNN) to classify facial expressions into seven emotion categories (e.g., happy, sad, angry) with 88% accuracy.
                </li>
                <li>
                  Preprocessed and augmented a dataset of over 35,000 facial images to improve model robustness across varying lighting conditions and angles.
                </li>
                <li>
                  Deployed the model via a Flask web application, enabling live webcam-based emotion detection for user interaction testing.
                </li>
                <li>
                  Optimized inference time by 30% through model quantization and batch processing, ensuring smooth real-time performance.
                </li>
              </ul>
            </div>
          </div>

          {/* EDUCATION & COURSEWORK GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 border-t border-slate-200 dark:border-neutral-800">
            {/* EDUCATION */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono flex items-center space-x-2 border-b border-slate-200 dark:border-neutral-800 pb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EDUCATION</span>
              </h2>
              <div className="space-y-0.5">
                <div className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
                  BTech
                </div>
                <div className="text-xs text-slate-700 dark:text-neutral-300">
                  Arunai engineering college &bull; INDIA, Tiruvannamalai
                </div>
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  2021 &ndash; Now &bull; <strong className="text-emerald-600 dark:text-emerald-400 font-bold">CGPA: 7.56</strong>
                </div>
              </div>
            </div>

            {/* COURSEWORK */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono flex items-center space-x-2 border-b border-slate-200 dark:border-neutral-800 pb-1">
                <Award className="w-3.5 h-3.5" />
                <span>COURSEWORK</span>
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-neutral-300">
                <div>
                  <strong className="text-slate-900 dark:text-white">Prompt engineering</strong>
                  <span className="text-neutral-400 block text-[11px] font-mono">Infosys &bull; 2025</span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Data visualization using python</strong>
                  <span className="text-neutral-400 block text-[11px] font-mono">GUVI &bull; 2025 &bull; Python</span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">AWS AI Partition</strong>
                  <span className="text-neutral-400 block text-[11px] font-mono">AWS &bull; 2025</span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Generative AI</strong>
                  <span className="text-neutral-400 block text-[11px] font-mono">GOOGLE &bull; 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-2.5 pt-1 border-t border-slate-200 dark:border-neutral-800">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono flex items-center space-x-2 border-b border-slate-200 dark:border-neutral-800 pb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>SKILLS</span>
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-neutral-300">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Programming & Scripting:</strong>{" "}
                Python, R, SQL
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Machine Learning & AI:</strong>{" "}
                scikit-learn, PyTorch, TensorFlow basics
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Data Science Tools:</strong>{" "}
                Pandas, NumPy, Matplotlib, Seaborn
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Deployment & Visualization:</strong>{" "}
                Streamlit, Power BI, Tableau (basic)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Version Control & Collaboration:</strong>{" "}
                Git/GitHub
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Big Data & Cloud:</strong>{" "}
                Hadoop/Spark basics, Google Colab, AWS (beginner exposure)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Languages:</strong>{" "}
                English, Tamil, Japanese
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">LLMs & Generative AI:</strong>{" "}
                GPT/LLaMA-family fine-tuning, LoRA, QLoRA, RLHF, Prompt Engineering, RAG, LangChain, Hugging Face Transformers, Vector Databases (Pinecone, FAISS, Weaviate)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">MLOps & Deployment:</strong>{" "}
                Docker, Kubernetes, MLflow, Kubeflow, Airflow, Model Monitoring & Drift Detection
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-black flex flex-wrap items-center justify-between gap-3">
          <a
            href="/resume.pdf"
            download="Pradeep_Rajalu_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold bg-white text-black hover:bg-neutral-200 transition-colors shadow-md border border-neutral-300"
          >
            <span>DOWNLOAD RESUME (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-neutral-400 hover:bg-slate-200 dark:hover:bg-neutral-900 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
