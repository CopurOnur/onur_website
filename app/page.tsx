import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, Cpu, Zap, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { BlinkingCursor } from "@/components/pixel-animations"
import { KonamiCode } from "@/components/konami-code"
import { RetroTerminal } from "@/components/retro-terminal"

export default function HomePage() {
  return (
    <>
      <KonamiCode />
      <RetroTerminal />
      <PixelLayout>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="relative inline-block">
              {/* Pixel Art Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-[8px_8px_0px_0px_theme(colors.border)] border-4 border-border pixel-glow">
                  {/* Simple pixel art face */}
                  <div className="absolute top-6 left-8 w-4 h-4 bg-background rounded-sm"></div>
                  <div className="absolute top-6 right-8 w-4 h-4 bg-background rounded-sm"></div>
                  <div className="absolute top-12 left-10 w-2 h-2 bg-foreground rounded-full"></div>
                  <div className="absolute top-12 right-10 w-2 h-2 bg-foreground rounded-full"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-background rounded-full"></div>
                </div>
                {/* Floating pixels animation */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-sm animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-sm animate-pulse"></div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-mono text-foreground mb-4 animate-in slide-in-from-bottom-4 duration-1000">
                Onur Copur
                <BlinkingCursor className="ml-2" />
              </h1>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge className="font-mono text-sm px-3 py-1 border-2 border-cyan-600 bg-cyan-600 text-white shadow-[2px_2px_0px_0px_theme(colors.border)]">
                  Deep Learning Engineer
                </Badge>
                <Badge
                  variant="outline"
                  className="font-mono text-sm px-3 py-1 border-2 border-cyan-600 text-cyan-600 bg-white shadow-[2px_2px_0px_0px_theme(colors.cyan.600)]"
                >
                  Computer Vision
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto leading-relaxed">
                Specializing in custom deep learning models with expertise in OCR solutions for postal services and
                product detection for retail. Expert in researching state-of-the-art architectures and deploying
                scalable AI solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="font-mono border-2 border-primary bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:shadow-[2px_2px_0px_0px_theme(colors.primary)] transition-all duration-200"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </Link>
              <Link href="/papers">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono border-2 border-border text-foreground bg-background shadow-[4px_4px_0px_0px_theme(colors.border)] hover:shadow-[2px_2px_0px_0px_theme(colors.border)] transition-all duration-200"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Research Papers
                </Button>
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
                <h2 className="text-2xl font-bold font-mono text-foreground mb-4 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-primary" />
                  About Me
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    I'm a Computer Vision / AI Engineer with expertise in developing production-grade deep
                    learning models including LLMs, VLMs, and Foundation Models. Currently working at Prime Vision in
                    Delft, Netherlands, where I architect microservice pipelines for real-time data processing and
                    inference.
                  </p>
                  <p>
                    My work focuses on transformer-based OCR systems for national postal services and end-to-end
                    microservice pipelines for retail shrinkage detection. I've successfully deployed systems handling
                    1M+ daily scans with &lt;0.5% error rates and reduced retail losses by 25%.
                  </p>
                  <p>
                    I lead reading groups and technical seminars to keep teams at the forefront of AI research, and I'm
                    passionate about modernizing legacy computer vision systems into scalable, production-ready
                    solutions.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
                <h3 className="text-lg font-bold font-mono text-foreground mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://github.com/CopurOnur" target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono border-2 border-border text-foreground bg-background shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)]"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/onurcopur" target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono border-2 border-border text-foreground bg-background shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)]"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:onurcopur12@gmail.com">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono border-2 border-border text-foreground bg-background shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[1px_1px_0px_0px_theme(colors.border)]"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
                <h3 className="text-xl font-bold font-mono text-foreground mb-4 flex items-center">
                  <Cpu className="mr-3 h-5 w-5 text-accent" />
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "PyTorch",
                    "TensorFlow",
                    "Python",
                    "SQL",
                    "LangChain",
                    "Docker",
                    "MLFlow",
                    "Jenkins",
                    "Airflow",
                    "ONNX",
                    "TensorRT",
                    "Azure",
                    "AWS",
                    "OpenCV",
                    "Nvidia Jetson",
                    "FastAPI",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-muted border border-border rounded px-3 py-2 text-sm font-mono text-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
                <h3 className="text-xl font-bold font-mono text-foreground mb-4 flex items-center">
                  <Zap className="mr-3 h-5 w-5 text-primary" />
                  Research Interests
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    OCR & Document Analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Transformer Architectures
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Retail Computer Vision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Edge AI & Deployment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    MLOps & Microservices
                  </li>
                </ul>
              </div>
            </div>
          </section>

          

          {/* Easter Egg Hint */}
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground opacity-50">
              Hint: Try the classic cheat code... ↑↑↓↓←→←→BA
            </p>
          </div>
        </div>
      </PixelLayout>
    </>
  )
}
