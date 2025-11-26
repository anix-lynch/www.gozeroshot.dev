// src/data/projects.js
export const additionalProjects = [
  {
    title: "Mocktailverse: Enterprise GenAI Platform",
    description: "Production-ready GenAI data engineering platform powered by AWS Bedrock. Features RAG pipeline, semantic vector search with Titan Embeddings, and real-time AI reasoning visualization. Serverless architecture with Next.js 14 frontend.",
    image: "/mocktailverse_bedrock.gif",
    badges: [
      { text: "AWS Bedrock", variant: "aws" },
      { text: "RAG Pipeline" },
      { text: "Vector Search" },
      { text: "Lambda" },
      { text: "Next.js 14", variant: "react" },
      { text: "TypeScript" },
      { text: "Titan Embeddings" },
      { text: "Claude 3" }
    ],
    links: {
      live: { url: "https://dgco3hhxo94y8.cloudfront.net", text: "🚀 Live Demo" },
      code: { url: "https://github.com/anix-lynch/mocktailverse-bedrock", text: "💻 Code" }
    }
  },
  {
    title: "AI Text Analyzer",
    description: "Interactive NLP application using transformer models for sentiment analysis, entity recognition, and text summarization.",
    placeholder: {
      icon: "🤗",
      title: "HF Space",
      subtitle: "Replace with GIF/screenshot"
    },
    badges: [
      { text: "Hugging Face", variant: "hf" },
      { text: "Python", variant: "python" },
      { text: "Streamlit" },
      { text: "Transformers" }
    ],
    links: {
      live: { url: "#", text: "🤗 HF Space" },
      code: { url: "#", text: "💻 Code" }
    }
  },
  {
    title: "Marketing Analytics Visualization",
    description: "Professional marketing analytics dashboard with real-time KPIs, campaign performance tracking, and cross-platform attribution insights. Built with modern data visualization techniques.",
    image: "/marketing_etl.gif",
    badges: [
      { text: "Python" },
      { text: "Streamlit" },
      { text: "ECharts" },
      { text: "Pandas" },
      { text: "DuckDB" }
    ],
    links: {
      live: { url: "https://marketing-analytics-etl.streamlit.app/", text: "🚀 Live Demo" },
      code: { url: "https://github.com/anix-lynch/marketing-analytics-etl", text: "💻 Code" }
    }
  },
  {
    title: "Business Intelligence Dashboard",
    description: "Interactive Tableau dashboard analyzing sales performance, customer behavior, and market trends with dynamic filtering.",
    placeholder: {
      icon: "📈",
      title: "Tableau Dashboard",
      subtitle: "Replace with GIF/screenshot"
    },
    badges: [
      { text: "Tableau" },
      { text: "SQL" },
      { text: "Excel" },
      { text: "BI" }
    ],
    links: {
      live: { url: "#", text: "📊 Dashboard" },
      code: { url: "#", text: "💻 Code" }
    }
  }
];