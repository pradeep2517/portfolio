import { SkillGroup, ExperienceItem, EducationItem } from "@/types/portfolio";

export const PROFILE_DATA = {
  name: "Pradeep Rajalu",
  role: "ML / AI Engineer & Data Scientist",
  tagline: "Building production-ready AI systems with Python, deep learning, and data science",
  bio: "Motivated AI/ML practitioner and Data Science with hands-on expertise in building end-to-end machine learning pipelines, preprocessing complex datasets, and designing predictive models using Python, SQL, Scikit-Learn, and Power BI. Well-versed in modern AI architectures, exploratory data analysis, and automation workflows. Eager to leverage technical rigor and practical engineering experience to build scalable, high-impact intelligent systems.",
  location: "India (Open to Remote & Global Relocation)",
  email: "pradeeprajalu5@gmail.com",
  phone: "7010327639",
  linkedin: "https://linkedin.com/in/raju25",
  github: "https://github.com/pradeep2517",
  availability: "Available for Machine Learning & AI Roles",
  yearsExperience: "Hands-on ML & Data Science Pipeline Engineering",
  stats: [
    { label: "End-to-End Projects", value: "6+", subtext: "ML & Computer Vision" },
    { label: "Face Identification", value: "95%", subtext: "IBM Security Access" },
    { label: "Data Prep Efficiency", value: "40%", subtext: "Automated ETL Pipelines" },
    { label: "Customer Churn Reduction", value: "12%", subtext: "Scikit-Learn Predictive Model" }
  ],
  coreValues: [
    {
      title: "Production-First Mindset",
      desc: "Models don't deliver value in Jupyter notebooks. I design with latency budgets, Dockerized containers, and CI/CD pipelines in mind from day one."
    },
    {
      title: "Rigorous Evaluation & Explainability",
      desc: "Beyond high test accuracy, I validate models with cross-validation, stress-testing under edge cases, and SHAP/LIME explainability tools."
    },
    {
      title: "Continuous Optimization",
      desc: "From FP16 TensorRT quantization to ONNX runtime acceleration, I push inference speed and resource efficiency to their operational limits."
    }
  ]
};

export const SKILLS_DATA: SkillGroup[] = [
  {
    title: "Deep Learning & Neural Networks",
    icon: "Brain",
    description: "Core architectures, neural networks, loss functions, and statistical modeling",
    skills: [
      { name: "Scikit-Learn", level: "Advanced", popular: true },
      { name: "PyTorch", level: "Advanced", popular: true },
      { name: "TensorFlow Basics", level: "Proficient", popular: true },
      { name: "Convolutional Neural Nets (CNNs)", level: "Advanced", popular: true },
      { name: "Classification & Regression", level: "Advanced", popular: true },
      { name: "Model Optimization & Metrics", level: "Advanced" }
    ]
  },
  {
    title: "Computer Vision & Biometrics",
    icon: "Eye",
    description: "Image processing, spatial features, face alignment, and biometric verification",
    skills: [
      { name: "OpenCV", level: "Advanced", popular: true },
      { name: "Face Detection (Haar Cascades)", level: "Advanced", popular: true },
      { name: "face_recognition Library", level: "Advanced", popular: true },
      { name: "Emotion Recognition (88% Accuracy)", level: "Advanced", popular: true },
      { name: "Dataset Augmentation (35,000+ faces)", level: "Advanced" }
    ]
  },
  {
    title: "LLMs & Generative AI",
    icon: "Sparkles",
    description: "Modern generative architectures, fine-tuning techniques, and agentic workflows",
    skills: [
      { name: "GPT / LLaMA-Family Fine-Tuning", level: "Advanced", popular: true },
      { name: "LoRA & QLoRA", level: "Advanced", popular: true },
      { name: "RLHF & Prompt Engineering", level: "Advanced", popular: true },
      { name: "RAG & LangChain", level: "Advanced", popular: true },
      { name: "Hugging Face Transformers", level: "Advanced", popular: true }
    ]
  },
  {
    title: "Natural Language Processing",
    icon: "Layers",
    description: "Domain-specific fine-tuning, tokenizers, semantic embeddings, and abstract synthesis",
    skills: [
      { name: "GPT-2 & T5 Fine-Tuning", level: "Advanced", popular: true },
      { name: "Academic Abstract Synthesis", level: "Proficient" },
      { name: "NLP Tokenization & Inference", level: "Advanced" },
      { name: "Vector DBs (Pinecone, FAISS, Weaviate)", level: "Proficient", popular: true },
      { name: "Semantic Similarity & Search", level: "Advanced" }
    ]
  },
  {
    title: "MLOps & Cloud Infrastructure",
    icon: "Cpu",
    description: "Containerization, pipeline orchestration, model registries, and drift monitoring",
    skills: [
      { name: "Docker & Kubernetes", level: "Proficient", popular: true },
      { name: "MLflow, Kubeflow & Airflow", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced", popular: true },
      { name: "Customer Churn Predictive Modeling", level: "Advanced" },
      { name: "Hadoop & Spark Basics / AWS", level: "Working Knowledge" }
    ]
  },
  {
    title: "Analytics, Query & Visualization",
    icon: "Code",
    description: "Columnar analytics, business intelligence, query engines, and executive telemetry",
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib)", level: "Advanced", popular: true },
      { name: "SQL & Relational Databases", level: "Advanced", popular: true },
      { name: "Power BI & Dashboards", level: "Advanced", popular: true },
      { name: "Streamlit Real-Time KPIs", level: "Advanced", popular: true },
      { name: "R Programming", level: "Proficient" },
      { name: "Tableau (Basic)", level: "Working Knowledge" }
    ]
  }
];

export const WORK_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Scientist",
    organization: "iStudio Technologies",
    period: "June 2024 - Present",
    location: "Pune, India",
    type: "Full-Time",
    responsibilities: [
      "Developed and implemented end-to-end data science and machine learning pipelines using Python, leveraging libraries such as Pandas, NumPy, Scikit-Learn, and Matplotlib.",
      "Cleaned, preprocessed, and transformed large, unstructured datasets to ensure high data quality for modeling and exploratory data analysis (EDA).",
      "Built and optimized predictive models and classification/regression algorithms, evaluating performance metrics to improve model accuracy.",
      "Designed interactive data visualizations and dashboards using Power BI and SQL to communicate insights effectively to stakeholders.",
      "Collaborated with team members to solve complex business problems using data-driven approaches and modern data analytics workflows."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Power BI", "SQL"]
  }
];

export const INTERNSHIP_DATA: ExperienceItem[] = [
  {
    id: "intern-1",
    role: "AI Analyst Intern",
    organization: "IBM",
    period: "August 2025",
    location: "India",
    type: "Internship",
    responsibilities: [
      "Engineered a real-time face detection and recognition system using Python, OpenCV, and deep learning models, achieving 95% identification accuracy and deploying via a user-friendly dashboard for security access control.",
      "Developed and tested predictive machine learning models (e.g., logistic regression, random forest) with scikit-learn to analyze customer churn patterns, directly informing retention strategies that reduced churn by 12%.",
      "Built modular Python scripts to automate data cleaning and feature engineering, cutting data preparation time by 40% for the analytics team.",
      "Created interactive Streamlit dashboards for real-time KPI visualization, enabling cross-functional stakeholders to self-serve insights without SQL or coding support."
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "Scikit-Learn", "Streamlit", "SQL"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  ...WORK_EXPERIENCE_DATA,
  ...INTERNSHIP_DATA
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Arunai Engineering College",
    period: "2021 - 2025",
    location: "Tiruvannamalai, India",
    gradeOrSpecialization: "CGPA: 7.56 / 10.0",
    highlights: [
      "Undergraduate curriculum emphasizing Machine Learning, Deep Neural Architectures, and Automated Data Systems",
      "Developed hands-on intelligent robotics & computer vision systems including wireless Raspberry Pi ICU rover and emotion classification CNNs",
      "Coursework in Artificial Intelligence, Python Programming, Database Management, and Cloud Infrastructures"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Prompt Engineering",
    issuer: "Infosys",
    date: "2025",
    focus: "Prompt design, in-context learning, and LLM orchestration"
  },
  {
    title: "Data Visualization using Python",
    issuer: "GUVI",
    date: "2025",
    focus: "Python, Pandas, Matplotlib, Seaborn, interactive charting"
  },
  {
    title: "AWS AI Partition",
    issuer: "AWS",
    date: "2025",
    focus: "Cloud AI services, model partitioning, and distributed workloads"
  },
  {
    title: "Generative AI",
    issuer: "Google",
    date: "2025",
    focus: "Transformer foundations, generative text/vision models, and ethical AI"
  }
];

export const RESUME_PROJECTS_DATA = [
  {
    title: "Ai Based journal paper writer",
    period: "May 2026 - May 2026",
    bullets: [
      "Used Python and a pre-trained language model (e.g., GPT-2 or T5) to generate short academic paragraphs from user-provided titles and keywords.",
      "Preprocessed a small dataset of 50–100 sample abstracts to fine-tune the model, improving relevance of generated text.",
      "Built a simple command-line or Jupyter Notebook interface to test and compare generated outputs manually.",
      "Documented the process and learned basic NLP techniques (tokenization, model inference, text cleanup)."
    ]
  },
  {
    title: "face detection and face recognisation using python",
    period: "March 2026 - May 2026",
    bullets: [
      "Built a real-time face detection system using OpenCV Haar cascades, processing 15–20 frames per second on a laptop webcam.",
      "Used a pre-trained face_recognition library to identify up to 3 known individuals from a small photo dataset (5 images per person).",
      "Achieved ~80% accuracy in varied lighting conditions during a live demo with 10 test frames."
    ]
  },
  {
    title: "ICU rover ward",
    period: "September 2025 - November 2025",
    bullets: [
      "Assembled a Raspberry Pi-based rover with two DC motors and a webcam, controlled wirelessly via a Python script using keyboard commands.",
      "Achieved reliable movement and live video streaming within a 3-meter range during indoor tests on tile flooring.",
      "Tested basic obstacle avoidance (manual stop within 30 cm) using an ultrasonic sensor, demonstrating safe operation in narrow spaces."
    ]
  },
  {
    title: "Emotion recognisation using python",
    period: "September 2025 - September 2025",
    bullets: [
      "Built a real-time emotion recognition system using Python, OpenCV, and deep learning (CNN) to classify facial expressions into seven emotion categories (e.g., happy, sad, angry) with 88% accuracy.",
      "Preprocessed and augmented a dataset of over 35,000 facial images to improve model robustness across varying lighting conditions and angles.",
      "Deployed the model via a Flask web application, enabling live webcam-based emotion detection for user interaction testing.",
      "Optimized inference time by 30% through model quantization and batch processing, ensuring smooth real-time performance."
    ]
  }
];

export const RESUME_SKILLS_DATA = [
  { category: "Programming & Scripting", items: "Python, R, SQL" },
  { category: "Machine Learning & AI", items: "scikit-learn, PyTorch, TensorFlow basics" },
  { category: "Data Science Tools", items: "Pandas, NumPy, Matplotlib, Seaborn" },
  { category: "Deployment & Visualization", items: "Streamlit, Power BI, Tableau (basic)" },
  { category: "Version Control & Collaboration", items: "Git/GitHub" },
  { category: "Big Data & Cloud", items: "Hadoop/Spark basics, Google Colab, AWS (beginner exposure)" },
  { category: "Languages", items: "English, Tamil, Japanese" },
  {
    category: "LLMs & Generative AI",
    items: "GPT/LLaMA-family fine-tuning, LoRA, QLoRA, RLHF, Prompt Engineering, RAG, LangChain, Hugging Face Transformers, Vector Databases (Pinecone, FAISS, Weaviate)"
  },
  {
    category: "MLOps & Deployment",
    items: "Docker, Kubernetes, MLflow, Kubeflow, Airflow, Model Monitoring & Drift Detection"
  }
];
