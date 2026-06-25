import { Code2, Zap, Wrench, Globe } from 'lucide-react'

const traits = [
  {
    icon: Code2,
    label: 'Full-stack',
    description: 'Frontend to backend — I own the whole stack and move fast because of it.',
  },
  {
    icon: Zap,
    label: 'Indie pace',
    description: 'No committees, no red tape. Ideas go from concept to live product quickly.',
  },
  {
    icon: Wrench,
    label: 'Product-minded',
    description: 'I care about whether it actually works for users, not just whether it compiles.',
  },
  {
    icon: Globe,
    label: 'Norwegian roots',
    description: 'Based in Norway, building products used across Europe and beyond.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // who I am
          </p>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter leading-tight mb-8 text-balance"
          >
            I build useful software.<br />
            <span className="text-muted-foreground">That&apos;s it.</span>
          </h2>
          <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed text-pretty">
            <p>
              I&apos;m Kasper Mannsverk — a developer who builds things because I find a problem worth solving. Each of my products started as a personal itch: a sports organizer drowning in spreadsheets, a support team fielding the same questions over and over, a quiz venue taking bookings via Instagram DMs.
            </p>
            <p>
              I write full-stack code, handle infrastructure, design UX, and ship. Usually alone, sometimes with a co-founder, always with real users in mind.
            </p>
            <p>
              When I&apos;m not maintaining existing products, I&apos;m thinking about new ones — or talking to people who have an idea they haven&apos;t had time to build.
            </p>
          </div>
        </div>

        {/* Right: trait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traits.map((trait) => {
            const Icon = trait.icon
            return (
              <div
                key={trait.label}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="size-4 text-primary" />
                </div>
                <p className="font-mono text-sm font-semibold text-foreground">{trait.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{trait.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
