import { ArrowUpRight } from 'lucide-react'

const productLinks = [
  { label: 'MyLivescore', href: 'https://www.mylivescore.eu' },
  { label: 'Chatmans', href: 'https://chatmans.no' },
  { label: 'Bookmans', href: 'https://bookmans.no' },
]

const pageLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-16 max-w-6xl mx-auto" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-primary text-sm">{'>'}</span>
            <span className="font-mono font-semibold text-foreground tracking-tight text-sm uppercase">
              Mannsverk Consulting
            </span>
            <span className="font-mono text-primary cursor-blink text-sm">_</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-pretty">
            Building indie SaaS products and practical software solutions from Norway.
          </p>
          <a
            href="mailto:kasper@mannsverk.no"
            className="font-mono text-xs text-primary hover:underline underline-offset-4 transition-colors"
          >
            kasper@mannsverk.no
          </a>
        </div>

        {/* Products */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
            Products
          </p>
          <ul className="flex flex-col gap-3" role="list">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
            Navigation
          </p>
          <ul className="flex flex-col gap-3" role="list">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {year} Mannsverk Consulting. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js &amp; deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
