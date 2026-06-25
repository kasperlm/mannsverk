import { ArrowUpRight, Mail } from 'lucide-react'

const steps = [
  { step: '01', title: 'You share the idea', description: 'Tell me what problem you want to solve. A quick email or message is enough to start.' },
  { step: '02', title: 'We scope it together', description: "I ask the right questions to understand the core use case and what success looks like." },
  { step: '03', title: 'I build it', description: 'I handle the tech. You focus on the domain. We iterate until it works.' },
  { step: '04', title: 'Ship and grow', description: 'We launch, collect feedback, and keep improving. Real users, real product.' },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-6xl mx-auto"
      aria-labelledby="contact-heading"
    >
      {/* Top: process */}
      <div className="mb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          // how it works
        </p>
        <h2
          id="contact-heading"
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-16 text-balance"
        >
          Have an idea?<br />
          <span className="text-primary">{"Let's build it."}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col gap-4">
              <span className="font-mono text-4xl font-bold text-primary/20">{s.step}</span>
              <p className="font-mono text-sm font-semibold text-foreground">{s.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: CTA block */}
      <div className="relative bg-card border border-primary/20 rounded-2xl p-10 md:p-16 overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(oklch(0.80 0.18 145 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.80 0.18 145 / 4%) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              // open for collaboration
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter mb-4 text-balance">
              Got something worth building?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I&apos;m always interested in new ideas — whether it&apos;s a full product, a specific feature, or just a problem you&apos;re trying to understand. Reach out and let&apos;s talk.
            </p>
          </div>

          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="mailto:kasper@mannsverk.no"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest px-8 py-4 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <Mail size={16} />
              kasper@mannsverk.no
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.mylivescore.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1 border border-border text-muted-foreground font-mono text-xs px-4 py-2.5 rounded-lg hover:border-primary/40 hover:text-primary transition-all"
              >
                MyLivescore <ArrowUpRight size={12} />
              </a>
              <a
                href="https://chatmans.no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1 border border-border text-muted-foreground font-mono text-xs px-4 py-2.5 rounded-lg hover:border-primary/40 hover:text-primary transition-all"
              >
                Chatmans <ArrowUpRight size={12} />
              </a>
              <a
                href="https://bookmans.no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1 border border-border text-muted-foreground font-mono text-xs px-4 py-2.5 rounded-lg hover:border-primary/40 hover:text-primary transition-all"
              >
                Bookmans <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
