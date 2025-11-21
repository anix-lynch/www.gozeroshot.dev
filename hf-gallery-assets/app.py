import gradio as gr

# Project data with embedded gradient placeholders instead of images
projects_html = """
<div class="header">
    <h1>🤗 Anix Lynch - HuggingFace Portfolio</h1>
    <p>AI Demos & ML Applications built with Gradio, PyTorch, and HuggingFace Transformers</p>
</div>

<div class="gallery">
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
        <div class="project-title">🎨 Multimodal GenAI Studio</div>
        <div class="project-desc">Multi-modal AI application using PyTorch and HuggingFace Transformers for text, image, and audio generation</div>
        <div class="project-tech">PyTorch • Transformers • Gemini • DALL-E • Whisper • Anthropic Claude</div>
        <a href="https://huggingface.co/spaces/anixlynch/multimodal-genai-studio" target="_blank" class="project-link">View Live Demo →</a>
    </div>
    
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
        <div class="project-title">☕ AmericanoVerse</div>
        <div class="project-desc">Coffee knowledge chatbot powered by RAG (Retrieval Augmented Generation)</div>
        <div class="project-tech">LangChain • FAISS • Sentence Transformers • PyTorch • Transformers</div>
        <a href="https://huggingface.co/spaces/anixlynch/AmericanoVerse" target="_blank" class="project-link">View Live Demo →</a>
    </div>
    
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
        <div class="project-title">😊 Boss Baby Emotion Detector</div>
        <div class="project-desc">Detect emotions from images using pre-trained models</div>
        <div class="project-tech">Gradio • HuggingFace Datasets • Pillow</div>
        <a href="https://huggingface.co/spaces/anixlynch/boss-baby-emotion" target="_blank" class="project-link">View Live Demo →</a>
    </div>
    
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"></div>
        <div class="project-title">🎙 Boss Baby Voice Clone</div>
        <div class="project-desc">Audio sample player with voice demonstrations</div>
        <div class="project-tech">Gradio • HuggingFace Datasets • HuggingFace Hub</div>
        <a href="https://huggingface.co/spaces/anixlynch/boss-baby-voice-clone" target="_blank" class="project-link">View Live Demo →</a>
    </div>
    
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);"></div>
        <div class="project-title">🍼 Boss Baby Classifier</div>
        <div class="project-desc">Image classification demo using the bossbaby-decaf model</div>
        <div class="project-tech">Gradio • HuggingFace Datasets • Pillow</div>
        <a href="https://huggingface.co/spaces/anixlynch/bossbaby-decaf-space" target="_blank" class="project-link">View Live Demo →</a>
    </div>
    
    <div class="project-card">
        <div class="project-image" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);"></div>
        <div class="project-title">💰 Financial Modeling Automation</div>
        <div class="project-desc">PE/VC financial modeling with automated Excel generation</div>
        <div class="project-tech">Python • openpyxl • Pandas • Plotly • Gradio</div>
        <a href="https://huggingface.co/spaces/anixlynch/financial-modeling-automation" target="_blank" class="project-link">View Live Demo →</a>
    </div>
</div>

<div class="footer">
    <p><strong>More Projects & Production ML Pipelines:</strong></p>
    <a href="https://www.gozeroshot.dev" target="_blank">🌐 gozeroshot.dev</a>
    <a href="https://github.com/anix-lynch" target="_blank">💻 GitHub @anix-lynch</a>
    <a href="https://huggingface.co/anixlynch" target="_blank">🤗 HuggingFace Profile</a>
</div>
"""

css = """
.project-card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 20px;
    margin: 10px;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.project-title {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2563eb;
}
.project-desc {
    color: #4b5563;
    margin-bottom: 12px;
    line-height: 1.5;
}
.project-tech {
    font-size: 0.85em;
    color: #6b7280;
    margin-bottom: 15px;
    font-family: 'Monaco', 'Courier New', monospace;
}
.project-link {
    display: inline-block;
    padding: 8px 16px;
    background: #2563eb;
    color: white !important;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background 0.2s;
}
.project-link:hover {
    background: #1d4ed8;
}
.project-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 15px;
}
.header {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
    margin-bottom: 30px;
}
.header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}
.header p {
    font-size: 1.1em;
    opacity: 0.9;
}
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    padding: 20px;
}
.footer {
    text-align: center;
    padding: 30px;
    margin-top: 40px;
    border-top: 1px solid #e0e0e0;
}
.footer a {
    margin: 0 15px;
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
}
.footer a:hover {
    text-decoration: underline;
}
"""

with gr.Blocks(css=css, title="Anix Lynch - HuggingFace Portfolio") as demo:
    gr.HTML(projects_html)

demo.launch()
