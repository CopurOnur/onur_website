import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <PixelLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">Get In Touch</h1>
          
        </div>

        {/* Main Contact Card */}
        <div className="bg-card border-2 border-border rounded-lg p-8 shadow-[4px_4px_0px_0px_theme(colors.border)]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono text-foreground">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:onurcopur12@gmail.com"
                  className="flex items-center gap-4 p-4 bg-muted/30 border-2 border-border rounded-lg hover:shadow-[4px_4px_0px_0px_theme(colors.primary)] transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-foreground font-medium">onurcopur12@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted/30 border-2 border-border rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Location</p>
                    <p className="font-mono text-foreground font-medium">Randstad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono text-foreground">Connect Online</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:text-orange-500 bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://github.com/CopurOnur" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    GitHub - @CopurOnur
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:text-orange-500 bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/onurcopur/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn - Onur Copur
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:text-orange-500 bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://x.com/copuro_onur" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-3 h-5 w-5" />
                    Twitter - @copuro_onur
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </PixelLayout>
  )
}
