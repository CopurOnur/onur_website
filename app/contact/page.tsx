"use client"

import type React from "react"

import { useState } from "react"
import { PixelLayout } from "@/components/pixel-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <PixelLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-foreground">Get In Touch</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Interested in collaborating on deep learning projects or discussing computer vision research? I'd love to
            hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
              <h2 className="text-2xl font-bold font-mono text-foreground mb-6 flex items-center">
                <Send className="mr-3 h-6 w-6 text-primary" />
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] focus:shadow-[4px_4px_0px_0px_theme(colors.primary)] transition-all duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] focus:shadow-[4px_4px_0px_0px_theme(colors.primary)] transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] focus:shadow-[4px_4px_0px_0px_theme(colors.primary)] transition-all duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] focus:shadow-[4px_4px_0px_0px_theme(colors.primary)] transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, question, or collaboration idea..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-mono border-2 border-primary shadow-[4px_4px_0px_0px_theme(colors.primary)] hover:shadow-[2px_2px_0px_0px_theme(colors.primary)] transition-all duration-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
              <h3 className="text-xl font-bold font-mono text-foreground mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-foreground">alex.chen@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Location</p>
                    <p className="font-mono text-foreground">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Response Time</p>
                    <p className="font-mono text-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
              <h3 className="text-xl font-bold font-mono text-foreground mb-4">Connect Online</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.border)] bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    GitHub - @alexchen
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.border)] bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn - Alex Chen
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start font-mono border-2 border-border shadow-[2px_2px_0px_0px_theme(colors.border)] hover:shadow-[4px_4px_0px_0px_theme(colors.border)] bg-transparent transition-all duration-200"
                  asChild
                >
                  <a href="https://twitter.com/alexchen_ai" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-3 h-5 w-5" />
                    Twitter - @alexchen_ai
                  </a>
                </Button>
              </div>
            </div>

            {/* Collaboration Info */}
            <div className="bg-muted/50 border-2 border-border rounded-lg p-6 shadow-[4px_4px_0px_0px_theme(colors.border)]">
              <h3 className="text-lg font-bold font-mono text-foreground mb-3">Open to Collaboration</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Research partnerships
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Open source contributions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Speaking opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Consulting projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PixelLayout>
  )
}
