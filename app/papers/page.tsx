import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, BookOpen, GraduationCap } from "lucide-react"

const myPublications = [
  {
    title:
      "Renewable energy management in smart home environment via forecast embedded scheduling based on Recurrent Trend Predictive Neural Network",
    authors: ["O. Copur", "et al."],
    year: "2023",
    venue: "Applied Energy, 340",
    category: "Energy Systems",
    description:
      "Novel neural network approach for renewable energy forecasting and scheduling in smart home environments.",
    link: "https://scholar.google.com/citations?user=o_SPbYQAAAAJ&hl=en",
  },
  {
    title: "Engagement detection with multi-task training in e-learning environments",
    authors: ["O. Copur", "et al."],
    year: "2021",
    venue: "ICIAP",
    category: "Computer Vision",
    description:
      "Multi-task deep learning system for analyzing video data and assessing subject engagement during educational content.",
    link: "https://scholar.google.com/citations?user=o_SPbYQAAAAJ&hl=en",
  },
]

const interestingPapers = [
  {
    title: "Transformer-Squared: Self-adaptive LLMs",
    authors: ["Qi Sun", "Edoardo Cetin", "Yujin Tang"],
    year: "2025",
    venue: "arXiv",
    category: "Large Language Models",
    description:
      "Novel framework for LLMs that can dynamically adapt to different tasks in real-time by selectively adjusting weight matrix components using reinforcement learning.",
    link: "https://arxiv.org/abs/2501.06252",
  },
  {
    title: "Internet Explorer: Targeted Representation Learning on the Open Web",
    authors: ["Alexander C. Li", "Ellis Brown", "Alexei A. Efros"],
    year: "2023",
    venue: "arXiv",
    category: "Self-Supervised Learning",
    description:
      "Dynamic approach that actively searches the internet and downloads relevant images to train small-scale ML models, moving beyond static datasets.",
    link: "https://arxiv.org/abs/2302.14051",
  },
  {
    title: "DINOv3",
    authors: ["Oriane Siméoni", "Huy V. Vo", "Maximilian Seitzer"],
    year: "2025",
    venue: "arXiv",
    category: "Foundation Models",
    description:
      "Self-supervised learning approach for computer vision with Gram anchoring to address feature degradation, creating versatile visual foundation models.",
    link: "https://arxiv.org/abs/2508.10104",
  },
  {
    title: "Perception Encoder: The best visual embeddings are not at the output of the network",
    authors: ["Daniel Bolya", "Po-Yao Huang", "Peize Sun"],
    year: "2025",
    venue: "arXiv",
    category: "Vision Encoders",
    description:
      "Novel vision encoder that produces strong embeddings from intermediate network layers through contrastive vision-language training, achieving SOTA results.",
    link: "https://arxiv.org/abs/2504.13181",
  },
  {
    title: "RADIOv2.5: Improved Baselines for Agglomerative Vision Foundation Models",
    authors: ["Greg Heinrich", "Mike Ranzinger", "Hongxu (Danny) Yin"],
    year: "2024",
    venue: "arXiv",
    category: "Foundation Models",
    description:
      "Advanced techniques for training vision foundation models using multi-teacher distillation with solutions for resolution shifts and teacher imbalance.",
    link: "https://arxiv.org/abs/2412.07679",
  },
]

const PaperCard = ({ paper }: { paper: any }) => (
  <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[6px_6px_0px_0px_theme(colors.border)] transition-all duration-200">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="flex-1 space-y-3">
        <h3 className="text-xl font-bold font-mono text-foreground leading-tight">{paper.title}</h3>

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
)

export default function PapersPage() {
  return (
    <PixelLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">Research & Publications</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            My published research work and a curated collection of influential papers in deep learning and computer
            vision.
          </p>
        </div>

        {/* My Publications Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono text-foreground flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              My Publications
            </h2>
            <Button
              variant="outline"
              size="sm"
              className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)] bg-transparent"
              asChild
            >
              <a href="https://scholar.google.com/citations?user=o_SPbYQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Google Scholar
              </a>
            </Button>
          </div>
          <div className="grid gap-6">
            {myPublications.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </section>

        {/* Interesting Papers Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-accent" />
            Publications I Find Interesting
          </h2>
          <div className="grid gap-6">
            {interestingPapers.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </section>
      </div>
    </PixelLayout>
  )
}
