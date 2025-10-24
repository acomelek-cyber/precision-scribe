import { Mail, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-2xl font-bold gradient-text">Precision Scribe</h3>
            <p className="text-sm text-foreground/70">Automated Learning Documentation</p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-3 md:items-center">
            <a href="#privacy" className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:hello@precision-scribe.com"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              hello@precision-scribe.com
            </a>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-foreground/50">
          © {new Date().getFullYear()} Precision Scribe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
