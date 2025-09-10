import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, Star } from "lucide-react"

const papers = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit"],
    year: "2017",
    venue: "NeurIPS",
    category: "Transformers",
    description:
      "The paper that introduced the Transformer architecture, revolutionizing NLP and later computer vision.",
    link: "https://arxiv.org/abs/1706.03762",
    favorite: true,
  },
  {
    title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors: ["Alexey Dosovitskiy", "Lucas Beyer", "Alexander Kolesnikov"],
    year: "2021",
    venue: "ICLR",
    category: "Computer Vision",
    description: "Vision Transformer (ViT) that applies transformers directly to image patches for classification.",
    link: "https://arxiv.org/abs/2010.11929",
    favorite: true,
  },
  {
    title: "YOLO: Real-Time Object Detection",
    authors: ["Joseph Redmon", "Santosh Divvala", "Ross Girshick", "Ali Farhadi"],
    year: "2016",
    venue: "CVPR",
    category: "Object Detection",
    description: "A unified approach to object detection that frames detection as a regression problem.",
    link: "https://arxiv.org/abs/1506.02640",
    favorite: false,
  },
  {
    title: "Denoising Diffusion Probabilistic Models",
    authors: ["Jonathan Ho", "Ajay Jain", "Pieter Abbeel"],
    year: "2020",
    venue: "NeurIPS",
    category: "Generative Models",
    description: "Introduced diffusion models for high-quality image synthesis with impressive results.",
    link: "https://arxiv.org/abs/2006.11239",
    favorite: true,
  },
  {
    title: "Segment Anything",
    authors: ["Alexander Kirillov", "Eric Mintun", "Nikhila Ravi"],
    year: "2023",
    venue: "ICCV",
    category: "Segmentation",
    description: "SAM: A foundation model for image segmentation with zero-shot generalization capabilities.",
    link: "https://arxiv.org/abs/2304.02643",
    favorite: true,
  },
  {
    title: "ResNet: Deep Residual Learning for Image Recognition",
    authors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
    year: "2016",
    venue: "CVPR",
    category: "Architecture",
    description: "Introduced residual connections that enabled training of very deep neural networks.",
    link: "https://arxiv.org/abs/1512.03385",
    favorite: false,
  },
]

const categories = [
  "All",
  "Transformers",
  "Computer Vision",
  "Object Detection",
  "Generative Models",
  "Segmentation",
  "Architecture",
]

export default function PapersPage() {
  return (
    <PixelLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">Research Papers I Love</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            A curated collection of influential papers that have shaped my understanding of deep learning and computer
            vision.
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

        {/* Papers Grid */}
        <div className="grid gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[6px_6px_0px_0px_theme(colors.border)] transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <h3 className="text-xl font-bold font-mono text-foreground leading-tight">{paper.title}</h3>
                    {paper.favorite && <Star className="h-5 w-5 text-accent fill-accent flex-shrink-0 mt-1" />}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="font-mono">{paper.authors.slice(0, 2).join(", ")}</span>
                      {paper.authors.length > 2 && <span className="font-mono">et al.</span>}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{paper.year}</span>
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs border border-border">
                      {paper.venue}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs border border-primary text-primary">
                      {paper.category}
                    </Badge>
                  </div>

                  <p className="text-foreground leading-relaxed">{paper.description}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] bg-transparent flex-shrink-0"
                  asChild
                >
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Paper
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PixelLayout>
  )
}
