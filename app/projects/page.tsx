import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Play, Code, Brain } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Real-Time Object Detection API",
    description:
      "A FastAPI-based service for real-time object detection using YOLOv8. Supports multiple input formats and provides confidence scores with bounding box coordinates.",
    image: "/object-detection-dashboard-with-bounding-boxes.jpg",
    technologies: ["Python", "FastAPI", "YOLOv8", "OpenCV", "Docker"],
    category: "Computer Vision",
    githubUrl: "https://github.com/example/object-detection-api",
    demoUrl: "https://detection-demo.vercel.app",
    featured: true,
  },
  {
    title: "Neural Style Transfer Web App",
    description:
      "Interactive web application that applies artistic styles to images using neural style transfer. Built with Streamlit and PyTorch for easy experimentation.",
    image: "/neural-style-transfer-interface-with-artistic-filt.jpg",
    technologies: ["PyTorch", "Streamlit", "PIL", "NumPy"],
    category: "Generative AI",
    githubUrl: "https://github.com/example/style-transfer",
    demoUrl: "https://style-transfer-demo.streamlit.app",
    featured: true,
  },
  {
    title: "Semantic Segmentation Dataset Tool",
    description:
      "A comprehensive tool for creating and managing semantic segmentation datasets. Features polygon annotation, class management, and export to popular formats.",
    image: "/image-annotation-tool-with-polygon-selection-inter.jpg",
    technologies: ["React", "TypeScript", "Canvas API", "Python"],
    category: "Data Tools",
    githubUrl: "https://github.com/example/segmentation-tool",
    demoUrl: null,
    featured: false,
  },
  {
    title: "Vision Transformer Playground",
    description:
      "Educational implementation of Vision Transformer (ViT) with interactive visualizations of attention maps and patch embeddings for better understanding.",
    image: "/vision-transformer-attention-visualization-with-he.jpg",
    technologies: ["PyTorch", "Matplotlib", "Jupyter", "Gradio"],
    category: "Research",
    githubUrl: "https://github.com/example/vit-playground",
    demoUrl: "https://huggingface.co/spaces/example/vit-playground",
    featured: true,
  },
  {
    title: "Edge AI Model Optimizer",
    description:
      "Tool for optimizing deep learning models for edge deployment. Supports quantization, pruning, and ONNX conversion with performance benchmarking.",
    image: "/model-optimization-dashboard-with-performance-metr.jpg",
    technologies: ["ONNX", "TensorRT", "OpenVINO", "Python"],
    category: "MLOps",
    githubUrl: "https://github.com/example/edge-optimizer",
    demoUrl: null,
    featured: false,
  },
  {
    title: "Multi-Modal Search Engine",
    description:
      "Search engine that combines text and image queries using CLIP embeddings. Find images using natural language descriptions or similar image searches.",
    image: "/multimodal-search-interface-with-text-and-image-in.jpg",
    technologies: ["CLIP", "FAISS", "FastAPI", "React"],
    category: "Multi-Modal",
    githubUrl: "https://github.com/example/multimodal-search",
    demoUrl: "https://multimodal-search.vercel.app",
    featured: true,
  },
]

const categories = ["All", "Computer Vision", "Generative AI", "Data Tools", "Research", "MLOps", "Multi-Modal"]

export default function ProjectsPage() {
  return (
    <PixelLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">My Projects</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            A showcase of deep learning projects, tools, and experiments that demonstrate practical applications of
            computer vision research.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground flex items-center">
            <Brain className="mr-3 h-6 w-6 text-primary" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[6px_6px_0px_0px_theme(colors.border)] transition-all duration-200"
                >
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="font-mono text-xs border border-border bg-background/90">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold font-mono text-foreground">{project.title}</h3>
                    <p className="text-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs border border-muted-foreground/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="font-mono border-2 border-primary shadow-[2px_2px_0px_0px_theme(colors.primary)] hover:shadow-[1px_1px_0px_0px_theme(colors.primary)]"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground flex items-center">
            <Code className="mr-3 h-6 w-6 text-accent" />
            All Projects
          </h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[6px_6px_0px_0px_theme(colors.border)] transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 h-32 bg-muted rounded border border-border flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold font-mono text-foreground">{project.title}</h3>
                      <Badge
                        variant="outline"
                        className="font-mono text-xs border border-primary text-primary flex-shrink-0"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs border border-muted-foreground/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="font-mono border-2 border-primary shadow-[2px_2px_0px_0px_theme(colors.primary)] hover:shadow-[1px_1px_0px_0px_theme(colors.primary)]"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PixelLayout>
  )
}
