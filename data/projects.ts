export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, user management, and subscription billing powered by Stripe.",
    longDescription:
      "Built a comprehensive SaaS analytics dashboard that handles real-time data visualization using WebSockets, complex user role management, and seamless Stripe subscription integration. The platform serves over 500 active users and processes thousands of events daily. Features include customizable widgets, CSV export, and multi-tenant architecture.",
    image: "https://images.ctfassets.net/vv1yxl437u7d/2z29Lyap5Pr9qmo3Kg1HGk/88a638da3ccae093759e0aff0ac63a7d/User_Feedback_Dashboard.webp",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://demo.saas-dashboard.dev",
    githubUrl: "https://github.com/alexmorgan/saas-dashboard",
    featured: true,
    year: "2024",
  },
  {
    slug: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by OpenAI GPT-4 that helps users draft, edit, and improve content with context-aware suggestions.",
    longDescription:
      "Developed an AI-powered writing assistant that leverages OpenAI's GPT-4 API to provide real-time writing suggestions, grammar corrections, and tone adjustments. The app features a rich text editor built with Tiptap, document versioning, and collaborative editing via Yjs. Includes a custom prompt engineering system for domain-specific writing styles.",
    image: "https://static-web.grammarly.com/1e6ajr2k4140/5dm0V3qvfWzmAOg2Pneg0m/b37a354e643a566757f61fb6d900dcce/Frame_31612499__14_.png?w=1248",
    tags: ["React", "OpenAI", "Tiptap", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://writeai.demo.dev",
    githubUrl: "https://github.com/alexmorgan/ai-writer",
    featured: true,
    year: "2024",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, checkout, and order tracking — built for performance and scale.",
    longDescription:
      "Architected a high-performance e-commerce platform capable of handling flash sales with thousands of concurrent users. Implemented optimistic UI updates, server-side cart management, and a custom checkout flow with multiple payment providers. Features include inventory management, discount codes, and a seller dashboard with analytics.",
    image: "https://images.ctfassets.net/lzny33ho1g45/6fQdc54nNz8mgDLVrroe9q/10759d0461920a3bb853d4fa4f35d3c2/Best_eCommerce_platforms.jpg?fm=jpg&q=31&fit=thumb&w=1520&h=760",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS", "Vercel"],
    liveUrl: "https://shop.demo.dev",
    githubUrl: "https://github.com/alexmorgan/ecommerce",
    featured: true,
    year: "2023",
  },
  {
    slug: "devops-monitor",
    title: "DevOps Monitoring Tool",
    description:
      "A lightweight infrastructure monitoring dashboard with alerting, log aggregation, and deployment pipeline visualization.",
    longDescription:
      "Created a DevOps monitoring solution that aggregates metrics from multiple cloud providers (AWS, GCP, Azure) into a unified dashboard. Features include custom alert rules, Slack/PagerDuty integrations, log search with full-text indexing, and deployment timeline visualization. Reduced incident response time by 40% for the team.",
    image: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/media/dashboard-focus/my-work-focus.png?view=azure-devops",
    tags: ["React", "Go", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
    liveUrl: "https://monitor.demo.dev",
    githubUrl: "https://github.com/alexmorgan/devops-monitor",
    featured: false,
    year: "2023",
  },
  {
    slug: "social-app",
    title: "Real-Time Social App",
    description:
      "A Twitter-like social platform with real-time feeds, notifications, direct messaging, and media uploads.",
    longDescription:
      "Built a scalable social media application with real-time capabilities using WebSockets for live feeds and notifications. Implemented infinite scroll with cursor-based pagination, image/video upload with CDN delivery, and a recommendation algorithm for content discovery. The app handles 10k+ daily active users with sub-100ms response times.",
    image: "https://colorlib.com/wp-content/uploads/sites/2/carbonmade-portfolio-builder.jpg",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Cloudinary", "Pusher"],
    githubUrl: "https://github.com/alexmorgan/social-app",
    featured: false,
    year: "2023",
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder that lets developers create stunning portfolios without writing code.",
    longDescription:
      "Designed and built a no-code portfolio builder specifically for developers and designers. Features a drag-and-drop interface powered by dnd-kit, 20+ customizable section templates, custom domain support, and one-click deployment to Vercel. Users can import their GitHub projects automatically and generate a portfolio in under 5 minutes.",
    image: "https://www.etfrc.com/images/PB_alloc.png",
    tags: ["React", "dnd-kit", "Vercel API", "Tailwind CSS", "Zustand"],
    liveUrl: "https://portfoliobuilder.demo.dev",
    githubUrl: "https://github.com/alexmorgan/portfolio-builder",
    featured: false,
    year: "2022",
  },
];
