import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Play, Code } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Tattoo Search Engine",
    description:
      "AI-powered tattoo similarity search using multiple embedding models (CLIP, DINOv2, SigLIP). Features advanced patch attention analysis and visual correspondence mapping for finding similar tattoo designs.",
    image: "/tattoo-search-engine-landing.jpg",
    technologies: ["CLIP", "DINOv2", "SigLIP", "Next.js", "FastAPI", "TypeScript", "Docker"],
    category: "Computer Vision",
    githubUrl: "https://huggingface.co/spaces/onurcopur/tattoo_search_engine/tree/main",
    demoUrl: "https://tattoo-search-engine-frontend.vercel.app/",
  },
  {
    title: "Engagement Detection with Multi-Task Training",
    description:
      "Deep learning system for detecting student engagement levels in e-learning environments using multi-task training with MSE and triplet loss. Uses OpenFace and Bi-LSTM to analyze non-verbal communication. Published at ICIAP 2021.",
    image: "/ed-mtt-landing.png",
    technologies: ["Python", "PyTorch Lightning", "OpenFace", "Bi-LSTM", "Weights & Biases"],
    category: "Computer Vision",
    githubUrl: "https://github.com/CopurOnur/ED-MTT",
  },
  {
    title: "Stock Advisor",
    description:
      "Intelligent stock analysis tool combining machine learning, technical analysis (RSI, MACD, Bollinger Bands), and news sentiment analysis. Features reinforcement learning models, ensemble predictions, and multi-day price forecasting with trading recommendations.",
    image: "/AI4Finance.jpeg",
    technologies: ["Python", "PyTorch", "Scikit-learn", "Streamlit", "Reinforcement Learning", "NLP"],
    category: "Reinforcement Learning",
    githubUrl: "https://github.com/CopurOnur/stock-advisor",
  },
  {
    title: "Therapist Website (CopeWell)",
    description:
      "A professional therapist website built with a clean, calming design to showcase services, background, and contact information. Features structured navigation, responsive design, and integrated forms for client outreach.",
    image: "/copewell-landing.jpg",
    technologies: ["Node.js", "Next.js", "CSS", "HTML"],
    category: "Web Development",
    demoUrl: "https://www.cope-well.com/",
  }
]

const categories = ["All", "Computer Vision", "Reinforcement Learning", "Web Development"]

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
                  <div className="w-full md:w-80 h-48 md:h-80 bg-muted rounded border border-border flex-shrink-0 relative overflow-hidden">
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
