import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Mail, Phone, Calendar, Github, Linkedin } from "lucide-react"

const experience = [
  {
    title: "Computer Vision / Deep Learning Engineer",
    company: "Prime Vision",
    location: "Delft, Netherlands",
    period: "May 2022 - Present",
    description: [
      "Develop and deploy production-grade deep learning models (LLMs, VLMs, Foundation Models)",
      "Architect and maintain microservice pipelines for real-time data processing and inference",
      "Lead reading groups and technical seminars to foster continuous learning and keep the team at the forefront of state-of-the-art AI and deep learning research",
      "Collaborate with cross-functional teams to modernize legacy computer vision systems into scalable microservices",
    ],
  },
  {
    title: "Master Thesis Internship",
    company: "Barco",
    location: "Kortrijk, Belgium",
    period: "March 2021 - October 2021",
    description: [
      "Developed a deep learning system to analyze video data and assess subject engagement during educational content",
      "Implemented multi-task training approaches for engagement detection in e-learning environments",
      "Published research findings in ICIAP 2021 conference proceedings",
    ],
  },
  {
    title: "Data Scientist",
    company: "Univera",
    location: "Izmir, Turkey",
    period: "May 2018 - August 2019",
    description: [
      "Developed a demand forecasting tool for retail, tobacco, and FMCG sectors",
      "Created a genetic algorithm route optimizer to improve logistics efficiency",
      "Built predictive models to optimize supply chain operations",
    ],
  },
]

const education = [
  {
    degree: "Master's Degree in Data Science",
    school: "Sapienza University",
    location: "Rome, Italy",
    period: "September 2019 - October 2021",
    details: "Graduated with High Honours (110 cum laude/110)",
  },
  {
    degree: "Bachelor's Degree in Industrial Engineering",
    school: "Yasar University",
    location: "Izmir, Turkey",
    period: "September 2015 - June 2019",
    details: "GPA: 3.77/4.0",
  },
]

const skills = {
  "Programming & Data Science": ["Python", "SQL", "LangChain", "Pandas", "NumPy", "PyTorch", "TensorFlow"],
  "MLOps & Deployment": ["Docker", "Triton Inference Server", "MLFlow", "Jenkins", "Airflow", "ONNX", "TensorRT"],
  "Cloud & Infrastructure": ["Microsoft Azure", "AWS", "Google Cloud Platform", "Linux"],
  "Edge AI & Embedded CV": ["OpenCV", "Nvidia Jetson", "OAK-D Cameras", "ESP32"],
  "Project Management": ["SCRUM", "Jira", "CI/CD", "Git"],
}

const achievements = [
  "Transformer-Based OCR System for National Postal Service: Developed a novel transformer-based OCR achieving SOTA performance, reducing latency by 65%, and deployed for 1M+ daily scans with <0.5% error rate.",
  "End-to-end Microservice Pipeline for Shrinkage Detection: Built an end-to-end microservice pipeline for real-time shrinkage detection at the largest retail chain, reducing losses by 25%. Deployed in 5 stores and 180 self-checkouts.",
]

const publications = [
  {
    title:
      "Renewable energy management in smart home environment via forecast embedded scheduling based on Recurrent Trend Predictive Neural Network",
    journal: "Applied Energy, 340 (2023)",
    authors: "O. Copur et al.",
  },
  {
    title: "Engagement detection with multi-task training in e-learning environments",
    journal: "ICIAP (2021)",
    authors: "O. Copur et al.",
  },
]

export default function CVPage() {
  return (
    <PixelLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold font-mono text-foreground">Curriculum Vitae</h1>

          <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
            <h2 className="text-2xl font-bold font-mono text-foreground mb-4">Onur Copur</h2>
            <p className="text-lg text-primary font-mono mb-4">Computer Vision / Deep Learning Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="font-mono">onurcopur12@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-mono">+31683518894</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="font-mono">Delft, Netherlands</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span className="font-mono">in/onurcopur/</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="font-mono">github.com/CopurOnur</span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="font-mono border-2 border-primary shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:shadow-[2px_2px_0px_0px_theme(colors.primary)] transition-all duration-200"
            asChild
          >
            <a href="/onur_copur_cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Professional Summary */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">
            Professional Summary
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
            <p className="text-foreground leading-relaxed">
              Computer Vision / AI Engineer specializing in custom deep learning models, with expertise in OCR
              solutions for postal services and product detection for retail. Expert in researching state-of-the-art
              architectures, training neural networks, and deploying scalable AI solutions. Proficient in designing
              end-to-end data pipelines and integrating models into edge devices.
            </p>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">
            Key Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]"
              >
                <div className="flex items-start gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-foreground">{job.title}</h3>
                    <p className="text-lg text-primary font-mono">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="font-mono">{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-primary font-mono">{edu.school}</p>
                    <p className="text-foreground mt-2">{edu.details}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="font-mono">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]"
              >
                <h3 className="text-lg font-bold font-mono text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-sm border border-primary text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">
            Selected Publications
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index}>
                  <h3 className="font-bold text-foreground">"{pub.title}"</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {pub.authors} • {pub.journal}
                  </p>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground font-mono">
                  For complete publication details, see my Google Scholar profile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono text-foreground border-b-2 border-border pb-2">Languages</h2>
          <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="font-mono text-sm border border-primary text-primary">
                Turkish (Native)
              </Badge>
              <Badge variant="outline" className="font-mono text-sm border border-primary text-primary">
                English (C2)
              </Badge>
              <Badge variant="outline" className="font-mono text-sm border border-primary text-primary">
                Dutch (B1)
              </Badge>
              <Badge variant="outline" className="font-mono text-sm border border-primary text-primary">
                Italian (A2)
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </PixelLayout>
  )
}
