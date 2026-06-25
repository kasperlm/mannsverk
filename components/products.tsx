import { ArrowUpRight, Trophy, MessageSquare, CalendarCheck } from 'lucide-react'

type Product = {
  index: string
  name: string
  tagline: string
  description: string
  url: string
  icon: React.FC<{ className?: string }>
  tags: string[]
  highlights: string[]
  stack: string[]
}

const products: Product[] = [
  {
    index: '01',
    name: 'MyLivescore',
    tagline: 'Tournament management platform',
    description:
      'A full-featured platform for sports organizers to run competitions of any scale — team registration, live scoring, standings, schedules, and spectator views, all in one place.',
    url: 'https://www.mylivescore.eu',
    icon: Trophy,
    tags: ['SaaS', 'Sports', 'Real-time'],
    highlights: [
      'Auto-generate match schedules in seconds',
      'Live scoring with SignalR — no refresh needed',
      'Supports leagues, knockouts, group stages',
      'Multi-language, 7 languages supported',
      'Role-based access for admins, refs & teams',
    ],
    stack: ['Next.js', 'SignalR', 'PostgreSQL', 'Stripe'],
  },
  {
    index: '02',
    name: 'Chatmans',
    tagline: 'AI chat support for your website',
    description:
      'Turn your documentation, product pages, and support content into a fully branded AI assistant — deployed on your site in minutes, with no code required.',
    url: 'https://chatmans.no',
    icon: MessageSquare,
    tags: ['AI', 'SaaS', 'Claude'],
    highlights: [
      'Upload PDFs, URLs, or crawl an entire site',
      'Powered by Anthropic Claude with streaming',
      'Every answer cites sources by page number',
      'One <script> tag — works on any website',
      'Human handoff to Intercom or Zendesk',
    ],
    stack: ['Next.js', 'Anthropic', 'Supabase', 'Vercel'],
  },
  {
    index: '03',
    name: 'Bookmans',
    tagline: 'Table reservation for quiz & event venues',
    description:
      'A SaaS platform built for quiz venues, bingo halls, and event spaces. Venues get their own branded booking page and a real-time dashboard — no technical setup needed.',
    url: 'https://bookmans.no',
    icon: CalendarCheck,
    tags: ['SaaS', 'Booking', 'Stripe Connect'],
    highlights: [
      'Branded subdomain per venue in minutes',
      'Automatic confirmation + cancellation emails',
      'Stripe Checkout & Connect for paid events',
      'Duplicate recurring events in one click',
      'Real-time booking dashboard for operators',
    ],
    stack: ['Next.js', 'Supabase', 'Stripe Connect', 'PostgreSQL'],
  },
]

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon
  return (
    <article className="group relative bg-card border border-border rounded-xl p-8 flex flex-col gap-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Icon className="size-5 text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-0.5">{product.index}</p>
            <h3 className="text-xl font-bold text-foreground tracking-tight">{product.name}</h3>
          </div>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 size-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          aria-label={`Open ${product.name} website`}
        >
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Tagline */}
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {product.tagline}
      </p>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
        {product.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2" role="list">
        {product.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-mono mt-0.5 shrink-0">{'>'}</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Footer: tags + stack */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
        {product.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Full-card link */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-xl"
        tabIndex={-1}
        aria-hidden="true"
      />
    </article>
  )
}

export function Products() {
  return (
    <section
      id="products"
      className="py-12 px-6 max-w-6xl mx-auto"
      aria-labelledby="products-heading"
    >
      {/* Section header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // what I&apos;ve built
          </p>
          <h2
            id="products-heading"
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter text-balance"
          >
            Products
          </h2>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  )
}
