import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Video } from "lucide-react"
import Image from "next/image"
import { vi } from "date-fns/locale"

const industrialProjects = [
  {
    title: "National Postal OCR System",
    description:
      "Developed a transformer-based OCR system for processing millions of postal scans daily across the national postal network. Implemented real-time inference pipeline with sub-second latency requirements and rigorous error handling for production deployment.",
    image: "/ocr.jpg",
    technologies: ["PyTorch", "ONNX", "Azure", "Docker", "FastAPI", "Transformers", "Redis", "Grafana", "Triton Inference Server", "Faiss"],
    industry: "Postal Services",
    year: "2024",
    impact: "Processing 1M+ scans daily with <0.5% error rate",
  },
  {
    title: "Object Detection and shrinkage detection for Retail Analytics",
    description:
      "Built end-to-end computer vision pipeline for objecte detection and shrinkage detection in retail stores. Leveraged object detection models optimized for edge deployment and embedding based matching techniques for object identification between 50k+ SKUs.",
    image: "/ahold.jpeg",
    technologies: ["Jetson Nano", "PostgreSQL", "Docker", "FastAPI", "Redis", "Azure", "Triton Inference Server", "MLflow", "RabbitMQ", "Pytorch"],
    industry: "Retail",
    year: "2023",
    impact: "Deployed across 5 stores in 100+ checkouts, 30% improvement in inventory management",
    videoUrl: "https://www.youtube.com/watch?v=37BhIxIENXA&list=PLDn85ZWWeQ8SDj-vPBK63nGWiDC1HroBi&index=5",
  },
  {
    title: "Luggage tag recognition, reading and matching system for airports",
    description:
      "Modernized the luggage tag recognition and reading systems used in major airports processing thousands of luggage items per day. Developed robust OCR and object detection models to handle diverse tag designs and challenging imaging conditions.",
    image: "/iata.jpg",
    technologies: ["Pytorch", "ONNX", "Multi image inference", "Python", "MQTT", "SQL"],
    industry: "Aviation",
    year: "2025",
  },
  {
    title: "Proof of Sorting in warehouse logistics",
    description:
      "Developed a computer vision system to verify correct sorting of packages in warehouse logistics. Implemented real-time image capture and analysis pipeline using edge devices and optimized deep learning models for object detection, tracking and action recognition.",
    image: "/cagetracking.jpeg",
    technologies: ["VLMs", "object tracking", "Docker","Triton Inference Server", "Pytorch"],
    industry: "Logistics",
    year: "2024",
    videoUrl: "https://www.youtube.com/watch?v=VCPfsU9Fe0A&list=PLDn85ZWWeQ8SDj-vPBK63nGWiDC1HroBi&index=3",
  },
  ,
  {
    title: "Order Fulfillment Validation System",
    description:
      "Developed a template based object detecion system utilizes ideal images of skus to verify correct order fulfillment and counting. Embedding based matching techniques are used to identify products from a large catalog",
    image: "/ofv.jpeg",
    technologies: [ "Docker", "FastAPI", "Triton Inference Server", "MLflow", "Pytorch"],
    industry: "Retail",
    year: "2025",
    videoUrl: "https://www.youtube.com/watch?v=CMlrlIYML7g&list=PLDn85ZWWeQ8SDj-vPBK63nGWiDC1HroBi&index=2",
  }
]

const industries = ["All", "Postal Services", "Retail", "Aviation", "Logistics"]

export default function IndustrialProjectsPage() {
  return (
    <PixelLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">Industrial Projects</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Commercial deep learning and computer vision solutions deployed in production environments,
            serving real-world business needs at scale.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={industry === "All" ? "default" : "outline"}
              size="sm"
              className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] transition-all duration-200"
            >
              {industry}
            </Button>
          ))}
        </div>

        {/* All Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground flex items-center">
            <Building2 className="mr-3 h-6 w-6 text-accent" />
            Commercial Projects
          </h2>
          <div className="grid gap-4">
            {industrialProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[6px_6px_0px_0px_theme(colors.border)] transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-48 md:h-64 bg-muted rounded border border-border flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-xl font-bold font-mono text-foreground">{project.title}</h3>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge
                          variant="outline"
                          className="font-mono text-xs border border-primary text-primary"
                        >
                          {project.industry}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="font-mono text-xs border border-accent text-accent"
                        >
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">{project.description}</p>

                    {project.impact && (
                      <div className="bg-accent/10 border border-accent/30 rounded p-3">
                        <p className="text-sm font-mono text-accent">
                          <strong>Impact:</strong> {project.impact}
                        </p>
                      </div>
                    )}

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

                    {project.videoUrl && (
                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="font-mono border-2 border-primary shadow-[2px_2px_0px_0px_theme(colors.primary)] hover:shadow-[1px_1px_0px_0px_theme(colors.primary)]"
                          asChild
                        >
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Video className="mr-2 h-4 w-4" />
                            Watch Video
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note about confidentiality */}
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground font-mono italic">
            Note: Project details have been generalized to respect client confidentiality agreements.
          </p>
        </div>
      </div>
    </PixelLayout>
  )
}
