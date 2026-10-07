export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  division: "YEQARI IT INFRASTRUCTURE" | "YEQARI DIGITAL" | "YEQARI ACADEMY";
  divisionSlug: "it-infrastructure" | "digital" | "academy";
  divisionDescription: string;
  tagline: string;
  heroSummary: string;
  problemSolved: {
    headline: string;
    points: { issue: string; impact: string }[];
  };
  whatYeqariProvides: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  keyCapabilities: {
    title: string;
    description: string;
    metric?: string;
  }[];
  typicalProcess: {
    step: string;
    name: string;
    description: string;
    timeline: string;
  }[];
  targetAudience: {
    profile: string;
    description: string;
  }[];
  relevantUseCases: {
    clientType: string;
    challenge: string;
    solution: string;
    outcome: string;
  }[];
  relatedServices: {
    slug: string;
    title: string;
    division: string;
  }[];
}

export const servicesData: Record<string, ServiceItem> = {
  // =========================================================================
  // 01 — YEQARI IT INFRASTRUCTURE
  // =========================================================================
  "website-development": {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "High-performance digital flagship systems engineered for speed, conversion, security, and global presence.",
    tagline: "Engineered web flagships built for uncompromising velocity, visual authority, and conversion.",
    heroSummary: "We architect and build bespoke corporate websites, marketing flagships, and global web experiences. Using modern headless architectures, type-safe frameworks, and meticulous layout craftsmanship, we deliver sub-second load times and immersive brand interactions that turn visitors into enterprise accounts.",
    problemSolved: {
      headline: "The Cost of Slow, Template-Based Agency Websites",
      points: [
        {
          issue: "Bloated Page Builders & High Latency",
          impact: "Most agencies build on monolithic, plugin-heavy templates that take 4+ seconds to load, losing up to 40% of potential leads before the first paint."
        },
        {
          issue: "Rigid CMS Traps & Security Liabilities",
          impact: "Unmaintained legacy plugins create persistent security vulnerabilities and leave non-technical teams unable to update content without breaking the site."
        },
        {
          issue: "Generic Aesthetic Dilution",
          impact: "Off-the-shelf templates communicate low authority and fail to differentiate enterprise technology brands in competitive global markets."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Bespoke Headless Architecture",
        description: "Zero monolithic bloat. We engineer custom web systems using Next.js, TypeScript, and modern headless CMS engines (Sanity, Strapi, Contentful).",
        deliverables: ["Custom front-end codebase", "Structured Headless CMS integration", "Automated CI/CD build pipelines"]
      },
      {
        title: "Sub-Second Global Edge Performance",
        description: "Every asset, query, and render path is optimized for Core Web Vitals, achieving 95+ Lighthouse scores and edge CDN distribution across 300+ global locations.",
        deliverables: ["Edge caching configuration", "Next-gen AVIF/WebP image pipeline", "Zero-layout-shift (CLS) layout audit"]
      },
      {
        title: "Brand-Aligned Interactive Motion",
        description: "Tasteful micro-interactions, canvas/WebGL visual accents, and responsive layout ergonomics that command respect without degrading accessibility.",
        deliverables: ["Framer Motion animations", "Cross-browser regression testing", "Full WCAG 2.1 AA accessibility compliance"]
      }
    ],
    keyCapabilities: [
      { title: "Sub-Second Edge Rendering", description: "SSR and SSG paradigms deployed on Vercel/Cloudflare Edge with automated stale-while-revalidate caching.", metric: "<800ms FCP" },
      { title: "Headless Content Governance", description: "Granular role-based workflows allowing marketing teams to publish without engineering intervention.", metric: "100% Type-Safe" },
      { title: "Enterprise Technical SEO", description: "Automated dynamic OpenGraph generators, JSON-LD Schema graphs, semantic HTML5, and automated sitemaps.", metric: "100 SEO Score" },
      { title: "High-Traffic Elastic Scalability", description: "Serverless runtime scale that seamlessly absorbs sudden viral spikes and enterprise marketing campaigns.", metric: "99.99% Uptime" }
    ],
    typicalProcess: [
      { step: "01", name: "Architecture & Information Design", description: "Auditing domain objectives, user personas, sitemap hierarchy, and establishing technical contracts.", timeline: "Week 1–2" },
      { step: "02", name: "Fidelity Prototyping & Design Systems", description: "Developing responsive UI component tokens, interactive states, and responsive breakpoint rules in Figma.", timeline: "Week 2–3" },
      { step: "03", name: "Front-End & CMS Engineering", description: "Clean Next.js implementation, headless data modeling, API hydration, and smooth micro-interactions.", timeline: "Week 3–5" },
      { step: "04", name: "Performance Benchmarking & Staging", description: "Core Web Vitals auditing, cross-device QA, security headers verification, and client editorial training.", timeline: "Week 5–6" },
      { step: "05", name: "Global Edge Deployment", description: "DNS routing, zero-downtime cutover, search console indexing verification, and real-time observability telemetry.", timeline: "Week 6" }
    ],
    targetAudience: [
      { profile: "Growth-Stage Scaleups", description: "Companies outgrowing Webflow/WordPress needing bespoke interactive design and robust developer tooling." },
      { profile: "Enterprise Technology Brands", description: "Global B2B software vendors requiring institutional design credibility, multi-region compliance, and fast edge delivery." },
      { profile: "Evolving Founders & Leaders", description: "Organizations launching new market ventures that require a world-class digital flagship on day one." }
    ],
    relevantUseCases: [
      {
        clientType: "Global SaaS Platform",
        challenge: "Legacy WordPress platform took 4.8s to load, had frequent downtime during product launches, and suffered poor organic search ranking.",
        solution: "Engineered headless Next.js frontend integrated with Sanity CMS, internationalized routing, and edge-rendered documentation.",
        outcome: "62% increase in demo requests, page load decreased to 720ms, and zero downtime across 250k monthly active sessions."
      },
      {
        clientType: "B2B Supply Chain Tech",
        challenge: "Generic agency template failed to demonstrate deep proprietary logistics capabilities to institutional enterprise buyers.",
        solution: "Custom interactive web platform featuring real-time interactive route calculators, product feature comparisons, and enterprise proposal capture.",
        outcome: "Average session duration increased by 140%, enterprise RFP inbound inquiries tripled in 90 days."
      }
    ],
    relatedServices: [
      { slug: "web-app-development", title: "Web Application Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "ui-ux-engineering", title: "UI/UX Engineering", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "branding-identity", title: "Branding & Identity", division: "YEQARI DIGITAL" }
    ]
  },

  "web-app-development": {
    id: "web-app-development",
    slug: "web-app-development",
    title: "Web Application Development",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Mission-critical, reactive web applications built with type safety, robust API contracts, and high-concurrency cloud backends.",
    tagline: "Resilient, responsive browser applications designed for complex business logic and massive scale.",
    heroSummary: "We design and build full-stack web applications, customer portals, enterprise dashboards, and multi-tenant SaaS products. From relational data models and reactive state management to asynchronous task queues and strict RBAC authorization, we craft web systems that execute flawlessly at scale.",
    problemSolved: {
      headline: "Overcoming Technical Debt in Complex Web Systems",
      points: [
        {
          issue: "Fragile Spaghetti Architectures",
          impact: "Prototypes hastily patched together break as user concurrency grows, making new feature deployment slow and prone to regression bugs."
        },
        {
          issue: "Poor Offline & Real-Time Sync",
          impact: "Modern users expect instantaneous updates. Polling APIs overload servers and lead to stale, conflicting data states."
        },
        {
          issue: "Inadequate Security & Role Governance",
          impact: "Ad-hoc permission logic exposes sensitive tenant data, failing enterprise security compliance and SOC2 audits."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Full-Stack Type Safety",
        description: "End-to-end typed architecture spanning database schema (Prisma/Drizzle), backend handlers, and frontend state (tRPC/GraphQL/REST).",
        deliverables: ["Unified TypeScript monorepo", "Validated Zod input schemas", "Deterministic API client generation"]
      },
      {
        title: "Multi-Tenant Cloud Data Architecture",
        description: "PostgreSQL, Supabase, or AWS Aurora relational databases with row-level security (RLS), automated migrations, and point-in-time backup recovery.",
        deliverables: ["Isolated tenant data modeling", "High-throughput Redis caching layers", "Automated migration scripts"]
      },
      {
        title: "Real-Time Event Streams",
        description: "WebSocket, Server-Sent Events (SSE), and webhook pipelines for instantaneous dashboard telemetry, collaborative sessions, and live notifications.",
        deliverables: ["Real-time state synchronization", "Asynchronous job worker queues", "Webhook idempotency handling"]
      }
    ],
    keyCapabilities: [
      { title: "Multi-Tenant RBAC Security", description: "Role-based and attribute-based access control with granular session token rotation.", metric: "SOC2 Ready" },
      { title: "Real-Time State Engines", description: "Live collaboration and data synchronization powered by WebSockets and optimistic UI mutations.", metric: "<50ms Latency" },
      { title: "Comprehensive Automated Testing", description: "End-to-end Playwright tests, Jest unit suites, and strict CI linting gates for zero-regression deploys.", metric: ">85% Coverage" },
      { title: "Elastic Containerized Deployment", description: "Docker, Kubernetes, or AWS ECS workloads orchestrated with horizontal autoscaling rules.", metric: "Auto-Scalable" }
    ],
    typicalProcess: [
      { step: "01", name: "System Architecture & Schema Design", description: "Entity-relationship modeling, state boundary planning, API specification, and security perimeter definition.", timeline: "Week 1–2" },
      { step: "02", name: "Core Engine & Auth Implementation", description: "Database provisioning, authentication flows (OAuth2/SSO), tenant scoping, and base API handlers.", timeline: "Week 3–4" },
      { step: "03", name: "Frontend State & View Synthesis", description: "Building complex reactive views, real-time widgets, data tables, and client validation matrices.", timeline: "Week 5–7" },
      { step: "04", name: "Integration & Performance Hardening", description: "Stress-testing concurrency limits, load balancing, vulnerability penetration analysis, and caching audits.", timeline: "Week 8–9" },
      { step: "05", name: "Staged Production Cutover", description: "Blue-green deployment rollout, monitoring dashboard configuration, and SRE alerting setup.", timeline: "Week 10" }
    ],
    targetAudience: [
      { profile: "B2B SaaS Companies", description: "Founders and product managers requiring robust engineering for subscription products." },
      { profile: "Enterprise Operations Teams", description: "Organizations modernizing legacy internal tools into sleek, cloud-native web consoles." },
      { profile: "Digital Marketplaces", description: "Platforms coordinating high volumes of multi-sided transactions, booking flows, and escrow." }
    ],
    relevantUseCases: [
      {
        clientType: "FinTech Billing Portal",
        challenge: "Client struggled with manual reconciliation and frequent synchronization errors across thousands of merchant invoices.",
        solution: "Architected a reactive Next.js & PostgreSQL portal with automated Stripe webhook ingestion, real-time ledger sync, and custom CSV export engines.",
        outcome: "Eliminated 98% of reconciliation discrepancies and reduced payout processing time from 4 days to instant."
      },
      {
        clientType: "Healthcare Resource Dispatcher",
        challenge: "Emergency coordinator teams relied on disconnected spreadsheets that caused dispatch delays.",
        solution: "Developed an encrypted, real-time dispatch dashboard with live geo-mapping, driver status sockets, and audit logging.",
        outcome: "Reduced average patient assignment time by 68% with zero clinical compliance incidents."
      }
    ],
    relatedServices: [
      { slug: "custom-software", title: "Custom Software Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "cloud-it-infrastructure", title: "Cloud & IT Infrastructure", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "ai-engineering", title: "AI Engineering", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "mobile-app-development": {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Native and high-performance cross-platform iOS & Android mobile applications with offline-first synchronization and fluid UX.",
    tagline: "Fluid, high-retention iOS & Android applications engineered for performance and real-world utility.",
    heroSummary: "We build native and cross-platform mobile experiences that users love to open every day. Leveraging React Native, Flutter, Swift, and Kotlin, we deliver 60fps animations, intelligent background syncing, native hardware integrations (biometrics, camera, Bluetooth), and frictionless app store deployments.",
    problemSolved: {
      headline: "The Pitfalls of Sluggish, Fragmented Mobile Apps",
      points: [
        {
          issue: "Choppy Web-Views & Janky Gestures",
          impact: "Cheap hybrid wrappers feel sluggish, fail touch responsiveness expectations, and receive poor app store ratings that kill acquisition."
        },
        {
          issue: "Fragile Multi-Platform Codebases",
          impact: "Maintaining separate disparate iOS and Android engineering teams doubles burn rate and creates mismatched feature parity."
        },
        {
          issue: "Offline Data Loss & Poor Connectivity Resilience",
          impact: "Apps that freeze or discard user actions during intermittent 4G/5G transitions cause direct revenue churn."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Cross-Platform Velocity with Native Polish",
        description: "Shared business logic in React Native or Flutter coupled with native swift/kotlin bridges for hardware access and hardware acceleration.",
        deliverables: ["Single maintainable codebase", "Native device bridge modules", "iOS and Android build artifacts"]
      },
      {
        title: "Offline-First Local Storage & Sync",
        description: "WatermelonDB or SQLite local persistence layer that records user state offline and reconciles with cloud APIs seamlessly upon reconnection.",
        deliverables: ["Optimistic UI updates", "Conflict resolution heuristics", "Background sync task handlers"]
      },
      {
        title: "App Store Publishing & Release Engineering",
        description: "End-to-end handling of Apple App Store and Google Play Console certifications, test distribution (TestFlight), and OTA patch pipelines.",
        deliverables: ["Automated Fastlane pipelines", "Store listing asset optimization", "Over-The-Air (EAS/CodePush) updates"]
      }
    ],
    keyCapabilities: [
      { title: "60 FPS Native Performance", description: "Hardware-accelerated render loops and reanimated gesture handlers that feel completely organic.", metric: "60 FPS Locked" },
      { title: "Deep Hardware Integration", description: "Biometric FaceID/fingerprint auth, BLE communication, GPS background tracking, and camera ML scanners.", metric: "Full Hardware API" },
      { title: "Push Notification Funnels", description: "Segmented rich push notifications via Apple APNS and Firebase Cloud Messaging with deep linking.", metric: "Personalized Sync" },
      { title: "Automated CI/CD Delivery", description: "Automated builds, linting, signing, and beta distribution to QA teams on every pull request.", metric: "Zero Manual Signing" }
    ],
    typicalProcess: [
      { step: "01", name: "Mobile Journey & Wireframing", description: "Designing thumb-zone friendly navigation, touch feedback patterns, and screen hierarchy.", timeline: "Week 1–2" },
      { step: "02", name: "Design System & Figma Handoff", description: "Crafting dark/light mode themes, dynamic font scaling, and custom iconography sets.", timeline: "Week 2–3" },
      { step: "03", name: "Native Core & API Wiring", description: "Implementing local database, state machines, push handlers, and secure token storage.", timeline: "Week 4–7" },
      { step: "04", name: "Physical Device Testing & Edge Conditions", description: "Benchmarking on diverse Android devices, low-bandwidth throttling, and battery consumption audits.", timeline: "Week 8–9" },
      { step: "05", name: "App Store Review & Release", description: "Compliance checks, privacy disclosure submission, review guidelines validation, and staged rollout.", timeline: "Week 10" }
    ],
    targetAudience: [
      { profile: "Consumer Tech Startups", description: "Products needing high engagement, push notifications, and viral sharing mechanics on iOS and Android." },
      { profile: "Field Workforce & Operations", description: "Internal workforce applications requiring barcode scanning, GPS geolocation, and offline capability." },
      { profile: "FinTech & Secure Banking", description: "Apps handling financial transactions requiring hardware enclave key storage and biometric gates." }
    ],
    relevantUseCases: [
      {
        clientType: "On-Demand Delivery Network",
        challenge: "Drivers faced connectivity drops in underground locations, resulting in lost order confirmations and angry customers.",
        solution: "Built an offline-first React Native driver app with automatic queue syncing, geolocation tracking, and instant haptic confirmation.",
        outcome: "Order delivery success rate rose to 99.8%, and app battery drain dropped by 35%."
      },
      {
        clientType: "Fitness & Habit Tracking App",
        challenge: "Client wanted a unified app launching simultaneously on iOS and Android with custom health sensor integration.",
        solution: "Engineered a Flutter application integrating Apple HealthKit and Google Health Connect with gamified daily progression.",
        outcome: "Achieved 4.9 rating on App Store and 4.8 on Google Play with over 80k downloads in first 6 months."
      }
    ],
    relatedServices: [
      { slug: "web-app-development", title: "Web Application Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "ui-ux-engineering", title: "UI/UX Engineering", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "software-integration", title: "Software Integration", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "custom-software": {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Tailored software systems, enterprise logic engines, and proprietary internal tools engineered for competitive advantage.",
    tagline: "Proprietary software engines engineered exactly to your operational logic and commercial advantage.",
    heroSummary: "When off-the-shelf software imposes limiting compromises, YEQARI engineers custom software solutions tailored exactly to your unique organizational workflows. We build robust backend systems, calculation engines, specialized ERP extensions, and automated operational pipelines that eliminate bottlenecks and scale with your growth.",
    problemSolved: {
      headline: "The Hidden Tax of Forcing Off-The-Shelf SaaS",
      points: [
        {
          issue: "Per-Seat Pricing Bloat & Feature Mismatch",
          impact: "Off-the-shelf SaaS forces companies into expensive annual licenses while providing only 30% of needed functionality and 70% unnecessary noise."
        },
        {
          issue: "Fragmented Data Silos & Manual CSV Glue",
          impact: "Employees waste hundreds of weekly hours manually downloading, reformatting, and re-uploading spreadsheets across incompatible tools."
        },
        {
          issue: "Inability to Innovate Unique Business Models",
          impact: "When your competitors use the exact same software, your operational model cannot be a source of competitive differentiation."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Domain-Driven Software Design",
        description: "We map your actual operational business rules into clean, modular domain services, establishing clean architectural boundaries.",
        deliverables: ["Domain architecture blueprint", "Custom business logic engines", "Clean service-oriented codebases"]
      },
      {
        title: "Enterprise Core System Replacement",
        description: "Modernizing clunky, brittle legacy desktop tools or spreadsheet monsters into secure, high-throughput cloud software.",
        deliverables: ["Zero-data-loss database migration", "Side-by-side verification run", "Staff enablement documentation"]
      },
      {
        title: "Proprietary Intellectual Property",
        description: "You own 100% of the code, IP, and deployment assets. No recurring licensing fees, vendor lock-in, or third-party usage restrictions.",
        deliverables: ["Complete repository ownership", "Comprehensive architecture documentation", "Open-source foundational components"]
      }
    ],
    keyCapabilities: [
      { title: "Custom Computational Engines", description: "Complex pricing algorithms, scheduling models, inventory allocations, and analytical processing.", metric: "100% Tailored" },
      { title: "High-Throughput Processing", description: "Asynchronous task workers capable of ingesting millions of daily events without degradation.", metric: ">10k ops/sec" },
      { title: "Full IP & Code Sovereignty", description: "Complete source code transfer, architectural ownership, and freedom from vendor licensing taxes.", metric: "100% IP Ownership" },
      { title: "Enterprise Audit & Governance", description: "Deterministic audit logging, data residency controls, and disaster recovery replication.", metric: "Audit Ready" }
    ],
    typicalProcess: [
      { step: "01", name: "Operational Workflow Immersion", description: "Deep analysis of existing operations, spreadsheet schemas, bottleneck areas, and stakeholder requirements.", timeline: "Week 1–2" },
      { step: "02", name: "Architecture & Data Modeling", description: "Defining relational schemas, service boundaries, state machines, and failover topologies.", timeline: "Week 3" },
      { step: "03", name: "Modular Engine Development", description: "Iterative sprints delivering functional vertical slices of business logic with continuous stakeholder review.", timeline: "Week 4–8" },
      { step: "04", name: "Legacy Data Migration & Parallel Testing", description: "Running legacy and new engines in parallel to verify 100% calculation parity and zero data regression.", timeline: "Week 9–10" },
      { step: "05", name: "Full Cutover & Long-Term SLA", description: "Production switch, operational team training, and managed maintenance agreements.", timeline: "Week 11" }
    ],
    targetAudience: [
      { profile: "Medium & Large Enterprises", description: "Companies whose operational workflows have outgrown generic tools like Salesforce or SAP." },
      { profile: "High-Volume Logistics & Manufacturing", description: "Operators requiring custom allocation algorithms, warehouse dispatching, or manufacturing tracking." },
      { profile: "Proprietary FinTech & Trading", description: "Firms needing customized ledger logic, risk scoring, and proprietary compliance auditing." }
    ],
    relevantUseCases: [
      {
        clientType: "International Freight Forwarder",
        challenge: "Coordinating multi-modal freight across 14 ports using disjointed spreadsheets caused missed customs deadlines and costly demurrage fees.",
        solution: "Engineered a custom cloud-based freight coordination engine with automated manifest validation, customs API sync, and milestone alerts.",
        outcome: "Demurrage penalties dropped to zero, saving $420,000 annually while scaling shipping volume by 3x."
      },
      {
        clientType: "Commercial Equipment Rental Firm",
        challenge: "Off-the-shelf rental software could not handle customized dynamic pricing based on weather, equipment wear, and job duration.",
        solution: "Developed custom pricing and reservation software integrated directly into inventory telemetry and fleet telematics.",
        outcome: "Asset utilization increased from 61% to 89%, generating an additional $1.2M in annual gross rental yield."
      }
    ],
    relatedServices: [
      { slug: "software-integration", title: "Software Integration", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "cloud-it-infrastructure", title: "Cloud & IT Infrastructure", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "automation", title: "Automation & Digital Systems", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "ui-ux-engineering": {
    id: "ui-ux-engineering",
    slug: "ui-ux-engineering",
    title: "UI/UX Engineering",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Design systems, ergonomic user interfaces, and human-computer interaction engineered for clarity and cognitive ease.",
    tagline: "Rigorous interface architecture where aesthetic mastery meets scientific usability and functional clarity.",
    heroSummary: "Great user experiences are not born of subjective opinion—they are engineered through deep cognitive ergonomics, information hierarchy, and design systems that scale. We bridge the gap between design theory and technical reality, delivering pixel-perfect UI kits, WCAG-compliant design tokens, and friction-free user flows.",
    problemSolved: {
      headline: "Why Conventional 'Pretty' Design Fails in Complex Systems",
      points: [
        {
          issue: "Visual Fluff Over Functional Utility",
          impact: "Designers unfamiliar with frontend code design interfaces that look appealing on Dribbble but are impossible to implement or painful to use daily."
        },
        {
          issue: "Disjointed Inconsistent Interfaces",
          impact: "Without a centralized design token system, every new feature reinvents buttons, inputs, and spacing, inflating CSS code and confusing users."
        },
        {
          issue: "High Cognitive Friction & Abandonment",
          impact: "Overcomplicated navigation structures and unclear error states frustrate users, leading to high churn rates and inundated support desks."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Production Design Systems & Token Architecture",
        description: "Comprehensive Figma libraries mapped 1-to-1 to CSS/Tailwind design tokens, ensuring developers and designers speak the exact same language.",
        deliverables: ["Atomic Figma component library", "Typed design token files", "Interactive Storybook documentation"]
      },
      {
        title: "User Journey & Cognitive Task Mapping",
        description: "Reducing interaction steps, clarifying visual hierarchy, and creating intuitive mental models for complex multi-step workflows.",
        deliverables: ["User journey flowcharts", "Information architecture trees", "Interactive low-latency clickable prototypes"]
      },
      {
        title: "Usability Testing & Accessibility Audits",
        description: "Rigorous empirical usability sessions, contrast ratio validation, and screen reader testing conforming to WCAG 2.1 AA standards.",
        deliverables: ["Empirical usability test reports", "Contrast and keyboard navigation audit", "Heuristic evaluation scorecards"]
      }
    ],
    keyCapabilities: [
      { title: "Design Token Architecture", description: "Unified color, spacing, typography, and shadow tokens synced continuously between Figma and Git repos.", metric: "1:1 Code Parity" },
      { title: "Enterprise Dashboard Density", description: "High-density data layouts, filter matrices, and multi-tier tables optimized for operational power-users.", metric: "Zero Clutter" },
      { title: "WCAG 2.1 AA Certification", description: "Ensuring full accessibility for color blindness, screen readers, keyboard-only navigation, and contrast.", metric: "100% Accessible" },
      { title: "Micro-Interaction Choreography", description: "Physics-based feedback, meaningful motion, and loading state skeletons that reduce perceived latency.", metric: "Subtle & Intentional" }
    ],
    typicalProcess: [
      { step: "01", name: "User Research & Cognitive Discovery", description: "Interviewing users, analyzing session recordings, identifying friction drop-offs, and mapping key task flows.", timeline: "Week 1–2" },
      { step: "02", name: "Information Architecture & Wireframing", description: "Structuring content hierarchy, navigational mental models, and testing low-fidelity interaction structures.", timeline: "Week 2–3" },
      { step: "03", name: "Visual Language & Design Token System", description: "Crafting distinct typography, palette, elevation scales, and building comprehensive component states.", timeline: "Week 3–5" },
      { step: "04", name: "Interactive Prototyping & Usability Sessions", description: "Building realistic clickable prototypes and running moderated user testing to validate task completion times.", timeline: "Week 5–6" },
      { step: "05", name: "Engineering Handoff & Storybook", description: "Detailed developer specifications, responsive edge cases, and Storybook component cataloging.", timeline: "Week 6" }
    ],
    targetAudience: [
      { profile: "Complex SaaS Platforms", description: "B2B tools where data density, workflows, and speed of execution directly dictate user retention." },
      { profile: "Enterprise Software Modernizers", description: "Legacy enterprise software needing a modern, consumer-grade user experience to boost adoption." },
      { profile: "Founders Launching Flagship Products", description: "New products needing a world-class visual first impression that instantly establishes brand authority." }
    ],
    relevantUseCases: [
      {
        clientType: "Cryptocurrency Portfolio Management",
        challenge: "Users struggled to interpret fragmented multi-wallet analytics, leading to high onboarding drop-off within the first 10 minutes.",
        solution: "Redesigned the entire interaction architecture with modular dashboard widgets, clear asset allocations, and instant trade visualizers.",
        outcome: "Onboarding completion increased from 34% to 81%, and day-30 user retention jumped by 52%."
      },
      {
        clientType: "Telemedicine Patient Portal",
        challenge: "Elderly patients struggled to schedule appointments and find lab results due to small targets and unintuitive navigation.",
        solution: "Engineered an accessible, high-contrast interface with clear typography, voice prompt fallbacks, and a 3-step appointment flow.",
        outcome: "Support call volume regarding booking assistance dropped by 74%, while appointment completion rate reached 96%."
      }
    ],
    relatedServices: [
      { slug: "website-development", title: "Website Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "web-app-development", title: "Web Application Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "branding-identity", title: "Branding & Identity", division: "YEQARI DIGITAL" }
    ]
  },

  "cloud-it-infrastructure": {
    id: "cloud-it-infrastructure",
    slug: "cloud-it-infrastructure",
    title: "Cloud & IT Infrastructure",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "High-availability cloud architectures, DevOps automation, cloud cost optimization, and enterprise infrastructure security.",
    tagline: "Resilient, automated cloud infrastructure built for high availability, zero downtime, and ironclad security.",
    heroSummary: "We design, provision, and maintain production cloud environments across AWS, Google Cloud, and modern edge platforms. Implementing Infrastructure-as-Code (Terraform), container orchestration (Kubernetes/Docker), automated CI/CD pipelines, and proactive observability, we ensure your digital assets remain fast, secure, and always accessible.",
    problemSolved: {
      headline: "The Peril of Brittle, Unmanaged Infrastructure",
      points: [
        {
          issue: "Runaway Cloud Invoices",
          impact: "Over-provisioned idle instances, unmonitored egress bandwidth, and unattached volumes bleed thousands of dollars monthly in wasted spend."
        },
        {
          issue: "Catastrophic Downtime & Single Points of Failure",
          impact: "Manual server setups without automated failover or disaster recovery lead to hours of costly downtime during server crashes."
        },
        {
          issue: "Security Blindspots & Vulnerabilities",
          impact: "Open firewall ports, default passwords, and lack of secrets management invite automated ransomware and devastating data breaches."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Infrastructure as Code (Terraform / Pulumi)",
        description: "Every cloud resource is version-controlled in Git, enabling reproducible, automated provisioning and zero configuration drift.",
        deliverables: ["Version-controlled Terraform repos", "Modular environment templates (Dev/Staging/Prod)", "Automated drift detection"]
      },
      {
        title: "Automated CI/CD Delivery Pipelines",
        description: "Zero-touch deployment pipelines using GitHub Actions, validating tests, building optimized containers, and deploying via blue-green cutovers.",
        deliverables: ["Automated testing & linting gates", "Container vulnerability scanning", "Zero-downtime rollback triggers"]
      },
      {
        title: "24/7 Observability & Telemetry",
        description: "Full-stack monitoring with Prometheus, Grafana, Datadog, or AWS CloudWatch tracking p99 latency, error rates, and resource utilization.",
        deliverables: ["Real-time Grafana dashboards", "Smart alert routing to Slack/PagerDuty", "Centralized log aggregation"]
      }
    ],
    keyCapabilities: [
      { title: "Multi-Zone High Availability", description: "Automated multi-availability zone failover with elastic load balancers and auto-healing compute nodes.", metric: "99.99% Target" },
      { title: "FinOps Cost Optimization", description: "Rightsizing compute instances, implementing Spot/Savings plans, and tuning storage tiers to cut cloud waste.", metric: "30–50% Cost Cut" },
      { title: "Zero-Trust Security Perimeter", description: "VPC network isolation, IAM least-privilege policies, WAF DDoS protection, and automated secret rotations.", metric: "Zero Trust" },
      { title: "Automated Backup & Recovery", description: "Point-in-time database snapshotting, cross-region replication, and automated disaster recovery drills.", metric: "<15 min RTO/RPO" }
    ],
    typicalProcess: [
      { step: "01", name: "Infrastructure & Security Audit", description: "Deep inspection of existing servers, IAM policies, network topology, cost metrics, and security risks.", timeline: "Week 1" },
      { step: "02", name: "Target Architecture & IaC Blueprints", description: "Designing scalable VPC architectures, subnet layouts, container clusters, and writing Terraform scripts.", timeline: "Week 2–3" },
      { step: "03", name: "Staging Provisioning & CI/CD Setup", description: "Deploying parallel isolated infrastructure, setting up container registries, and building deployment pipelines.", timeline: "Week 3–4" },
      { step: "04", name: "Data Migration & Failover Verification", description: "Replicating production data, simulating server failures, testing backup restores, and fine-tuning auto-scaling.", timeline: "Week 5" },
      { step: "05", name: "Zero-Downtime Production Cutover", description: "DNS switchover, real-time traffic monitoring, alert routing activation, and handover to client teams.", timeline: "Week 6" }
    ],
    targetAudience: [
      { profile: "High-Growth Digital Platforms", description: "Companies whose applications are experiencing rapid traffic surges and need automated elastic scale." },
      { profile: "Enterprises Seeking Cloud Migration", description: "Organizations moving legacy on-premise hardware into agile, compliant cloud environments." },
      { profile: "Companies Overpaying for Cloud", description: "Businesses looking to drastically reduce AWS/GCP bills through rigorous FinOps rightsizing." }
    ],
    relevantUseCases: [
      {
        clientType: "E-Commerce Flash Sale Platform",
        challenge: "Client website crashed repeatedly during Black Friday traffic surges, resulting in hundreds of thousands in lost revenue.",
        solution: "Re-architected backend into auto-scaling containerized microservices on AWS ECS with CloudFront caching and multi-AZ Aurora.",
        outcome: "Absorbed 12x traffic surge without a single dropped request while cutting average baseline server costs by 38%."
      },
      {
        clientType: "Healthcare SaaS Provider",
        challenge: "Needed HIPAA-compliant cloud architecture with complete audit logging and automated disaster recovery to close enterprise hospital deals.",
        solution: "Implemented private AWS VPC with KMS encrypted storage, strict IAM RBAC, CloudTrail immutable auditing, and automated Terraform deployments.",
        outcome: "Successfully passed 3 consecutive enterprise hospital security audits and achieved SOC2 Type II certification."
      }
    ],
    relatedServices: [
      { slug: "custom-software", title: "Custom Software Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "automation", title: "Automation & Digital Systems", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "ai-engineering", title: "AI Engineering", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "software-integration": {
    id: "software-integration",
    slug: "software-integration",
    title: "Software Integration",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Connecting fragmented enterprise software, APIs, ERPs, CRMs, and payment gateways into a unified, synchronized ecosystem.",
    tagline: "Unify your disparate systems, APIs, and databases into a seamless, synchronized operational powerhouse.",
    heroSummary: "Modern businesses run on dozens of specialized tools, but when those tools do not communicate, operational chaos ensues. YEQARI develops custom middleware, bi-directional API connectors, and automated webhook pipelines that bridge your CRM, ERP, payment gateways, accounting platforms, and custom software into one harmonized ecosystem.",
    problemSolved: {
      headline: "The Crippling Cost of Disconnected Business Tools",
      points: [
        {
          issue: "Duplicate Data Entry & Human Error",
          impact: "Staff manually re-typing customer and order data between CRM, accounting, and inventory tools inevitably leads to costly mistakes."
        },
        {
          issue: "Out-of-Sync Inventory & Delayed Billing",
          impact: "When inventory platforms do not sync instantaneously with e-commerce stores, items oversell and revenue reconciliation lags by weeks."
        },
        {
          issue: "Brittle Zapier & No-Code Failures",
          impact: "Generic no-code tools fail silently during rate limits or schema changes, leaving no audit logs and breaking vital operational flows."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Resilient Custom Middleware & Connectors",
        description: "Bespoke API adapters built in Node.js, Go, or Python with built-in retry mechanisms, rate limit smoothing, and error dead-letter queues.",
        deliverables: ["Custom API bridge services", "Bi-directional data sync engines", "Dead-letter replay queues"]
      },
      {
        title: "Enterprise ERP & CRM Synchronizers",
        description: "Deep integrations with platforms like Salesforce, HubSpot, SAP, NetSuite, Zoho, Stripe, and QuickBooks.",
        deliverables: ["Field-to-field mapping architecture", "Real-time webhook listener services", "Audit trail dashboard"]
      },
      {
        title: "Payment Gateway & Financial Pipeline Integration",
        description: "Integrating global and local payment processors (Stripe, PayPal, PayHere, Adyen) with automated invoicing, tax calculation, and ledger reconciliation.",
        deliverables: ["PCI-compliant tokenization pipelines", "Automated receipt & invoice triggers", "Bank ledger reconciliation scripts"]
      }
    ],
    keyCapabilities: [
      { title: "Idempotent Event Processing", description: "Guaranteed once-and-only-once execution preventing duplicate charges, duplicate orders, or corrupted records.", metric: "Zero Duplication" },
      { title: "Rate-Limit Smoothing", description: "Token-bucket and leaky-bucket algorithms buffering high-velocity spikes to respect external API quotas.", metric: "100% Rate Safe" },
      { title: "Legacy SOAP/XML Modernization", description: "Transforming clunky legacy XML and proprietary binary protocols into clean, JSON-based REST/GraphQL endpoints.", metric: "Legacy Bridging" },
      { title: "Real-Time Webhook Verification", description: "Cryptographic signature validation and secure payload decrypting preventing spoofing attacks.", metric: "HMAC Verified" }
    ],
    typicalProcess: [
      { step: "01", name: "Data Ecosystem & API Audit", description: "Cataloging all existing software tools, API capabilities, webhook limitations, data models, and sync intervals.", timeline: "Week 1" },
      { step: "02", name: "Data Schema & Mapping Blueprint", description: "Defining exact field mappings, conflict resolution rules, transformations, and fallback behaviors.", timeline: "Week 2" },
      { step: "03", name: "Connector & Middleware Engineering", description: "Developing robust connector services with automated logging, retry queues, and monitoring endpoints.", timeline: "Week 3–4" },
      { step: "04", name: "Sandbox Simulation & Load Testing", description: "Simulating edge cases, network drops, corrupted payloads, and high-frequency webhook bursts.", timeline: "Week 5" },
      { step: "05", name: "Live Production Rollout", description: "Activating live sync, verifying zero data drift, and providing monitoring consoles to technical staff.", timeline: "Week 6" }
    ],
    targetAudience: [
      { profile: "Multi-Platform E-Commerce Operators", description: "Brands selling across multiple channels needing real-time sync with warehouse management and accounting." },
      { profile: "High-Transaction FinTech Platforms", description: "Businesses connecting banking rails, payment gateways, and regulatory reporting APIs." },
      { profile: "B2B Professional Service Firms", description: "Firms bridging custom client portals with enterprise CRMs and billing engines." }
    ],
    relevantUseCases: [
      {
        clientType: "Omnichannel Retail Brand",
        challenge: "Online orders from Shopify were not syncing with legacy warehouse inventory, causing daily stock-outs and customer complaints.",
        solution: "Engineered a bi-directional middleware service with real-time stock reservations, automated SKU translation, and instant fulfillment updates.",
        outcome: "Order fulfillment time dropped by 85%, and overselling incidents fell to exactly zero."
      },
      {
        clientType: "Real Estate Property Management",
        challenge: "Tenant applications, background checks, and lease signatures were scattered across 4 disconnected software products.",
        solution: "Built a centralized integration pipeline connecting DocuSign, Stripe, Checkr, and custom tenant database.",
        outcome: "Reduced lease turnaround from 5 business days to 35 minutes, boosting property occupancy to 98%."
      }
    ],
    relatedServices: [
      { slug: "custom-software", title: "Custom Software Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "automation", title: "Automation & Digital Systems", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "cloud-it-infrastructure", title: "Cloud & IT Infrastructure", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "automation": {
    id: "automation",
    slug: "automation",
    title: "Automation & Digital Systems",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Autonomous operational workflows, robotic process automation, data scrapers, and digital execution systems that run 24/7.",
    tagline: "Replace repetitive manual labor with deterministic, autonomous digital automation pipelines.",
    heroSummary: "Human intellect should be spent on strategic decisions, not copying numbers between browser tabs. YEQARI architects and deploys autonomous automation systems, background cron workers, document processors, and event-driven triggers that execute operational workflows with 100% precision 24 hours a day.",
    problemSolved: {
      headline: "The Stagnation of Manual Operational Toil",
      points: [
        {
          issue: "Expensive Human Bottlenecks",
          impact: "Hiring more staff just to manually format reports, send confirmation emails, and update CRM records scales headcount cost without increasing leverage."
        },
        {
          issue: "Fatigue-Induced Errors in Data Entry",
          impact: "Manual data entry inevitably introduces typos, missed approvals, and delayed follow-ups that degrade customer trust."
        },
        {
          issue: "Slow Reaction Time to Critical Events",
          impact: "When critical leads or system alerts wait hours for a human to notice them, conversion rates plummet and issues escalate."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Intelligent Document & Data Processing",
        description: "Automated extraction and structuring of data from incoming PDF invoices, contracts, receipts, and emails into database records.",
        deliverables: ["OCR & Document parsing pipelines", "Automated validation filters", "Structured database ingest scripts"]
      },
      {
        title: "Autonomous Lead & Customer Lifecycles",
        description: "Instantaneous enrichment of incoming sales leads, automated qualification scoring, personalized CRM routing, and dynamic SMS/email dispatches.",
        deliverables: ["Real-time lead enrichment hooks", "Automated scheduling workflows", "Multi-channel notification triggers"]
      },
      {
        title: "Automated Reporting & Business Intelligence",
        description: "Scheduled daily and weekly operational digests synthesized from multiple data sources, delivered automatically to Slack, Discord, or Executive inboxes.",
        deliverables: ["Automated KPI generation pipelines", "Slack/Teams bot alerts", "Automated PDF summary dispatches"]
      }
    ],
    keyCapabilities: [
      { title: "Event-Driven Worker Clusters", description: "Serverless and Redis-backed task runners executing jobs asynchronously with millisecond latency.", metric: "Instantaneous" },
      { title: "Automated Error Remediation", description: "Intelligent recovery mechanisms that alert teams only when human intervention is truly indispensable.", metric: "99.9% Auto-Resolved" },
      { title: "Full Operational Visibility", description: "Audit dashboards providing step-by-step logs of every automated execution, timestamp, and payload.", metric: "100% Traceable" },
      { title: "Zero Manual Interventions", description: "Workflows designed from the ground up to operate completely autonomously with deterministic outputs.", metric: "24/7 Autonomous" }
    ],
    typicalProcess: [
      { step: "01", name: "Operational Workflow Mapping", description: "Shadowing team workflows, timing manual steps, identifying repetitive tasks, and measuring potential ROI.", timeline: "Week 1" },
      { step: "02", name: "Pipeline Architecture & Rule Definition", description: "Documenting trigger conditions, validation logic, branch paths, and failover notifications.", timeline: "Week 2" },
      { step: "03", name: "Automation Engineering & Scripting", description: "Writing robust headless scripts, webhook receivers, database queries, and notification engines.", timeline: "Week 3–4" },
      { step: "04", name: "Dry-Run Validation in Shadow Mode", description: "Running automation in shadow mode alongside human operators to verify 100% output accuracy.", timeline: "Week 4–5" },
      { step: "05", name: "Full Autonomous Deployment", description: "Handing over execution to the autonomous system with live monitoring and alerting.", timeline: "Week 5" }
    ],
    targetAudience: [
      { profile: "High-Velocity Sales & Marketing Teams", description: "Teams handling hundreds of daily inbound inquiries requiring immediate enrichment and routing." },
      { profile: "Back-Office Operations & Finance", description: "Teams spending hours every week compiling reports, generating invoices, and auditing receipts." },
      { profile: "Digital Agencies & Service Businesses", description: "Firms looking to automate onboarding, project kickoffs, and client reporting to scale client load." }
    ],
    relevantUseCases: [
      {
        clientType: "Commercial Insurance Brokerage",
        challenge: "Brokers spent an average of 45 minutes manually extracting policy data from carrier PDF forms to generate quotes.",
        solution: "Deployed an automated OCR document processing pipeline that extracts policy fields, validates underwriting rules, and pre-populates quotes in 12 seconds.",
        outcome: "Quote turnaround accelerated by 95%, enabling brokers to close 3.2x more policies per month."
      },
      {
        clientType: "SaaS Sales Operations",
        challenge: "High-value enterprise leads waited an average of 4 hours for a sales rep to manually qualify and respond, leading to low demo attendance.",
        solution: "Engineered an automated lead enrichment and instant qualification system that pings SDRs on Slack within 8 seconds of submission with calendar links.",
        outcome: "Demo booking rate increased by 47%, and inbound pipeline value grew by $1.8M in 2 quarters."
      }
    ],
    relatedServices: [
      { slug: "software-integration", title: "Software Integration", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "ai-engineering", title: "AI Engineering", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "custom-software", title: "Custom Software Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "ai-engineering": {
    id: "ai-engineering",
    slug: "ai-engineering",
    title: "AI Engineering",
    division: "YEQARI IT INFRASTRUCTURE",
    divisionSlug: "it-infrastructure",
    divisionDescription: "Applied artificial intelligence, LLM orchestration, Retrieval-Augmented Generation (RAG), and custom autonomous agent pipelines.",
    tagline: "Move beyond AI toys. Build deterministic, production-grade intelligence embedded into your software.",
    heroSummary: "While others generate generic chatbots, YEQARI engineers production-grade artificial intelligence systems that solve concrete operational challenges. We build Retrieval-Augmented Generation (RAG) pipelines over proprietary company knowledge, autonomous agent workflows with human-in-the-loop gating, and fine-tuned domain models with strict privacy and cost controls.",
    problemSolved: {
      headline: "Why 80% of Enterprise AI Proof-of-Concepts Fail in Production",
      points: [
        {
          issue: "Hallucinations & Untrusted Outputs",
          impact: "Uncontrolled LLM prompts output inaccurate facts or fabricate nonexistent policies, exposing businesses to legal and operational liabilities."
        },
        {
          issue: "Runaway Token Costs & High Latency",
          impact: "Naive prompt structures send entire documents on every query, generating sky-high OpenAI bills and sluggish 10-second response times."
        },
        {
          issue: "Data Privacy & Leaked Confidential IP",
          impact: "Pumping proprietary business secrets into public third-party models breaches customer contracts and violates enterprise privacy compliance."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Enterprise RAG (Retrieval-Augmented Generation)",
        description: "Vector database indexing (Pinecone/pgvector/Qdrant) with hybrid keyword and semantic retrieval, re-ranking, and deterministic citation backing.",
        deliverables: ["Vector embedding chunking pipelines", "Hybrid search & re-ranking layers", "Strict factual citation verification"]
      },
      {
        title: "Autonomous Agent Tool-Calling Workflows",
        description: "Multi-agent systems equipped with deterministic API tool access (database queries, email dispatch, CRM updates) governed by human approval gates.",
        deliverables: ["Deterministic tool-calling protocols", "State machine agent orchestration", "Human-in-the-loop review interfaces"]
      },
      {
        title: "Private & Air-Gapped Model Deployment",
        description: "Deploying open-source state-of-the-art models (Llama 3, Mistral) on dedicated private cloud instances with zero third-party data logging.",
        deliverables: ["Private vLLM/Ollama inference server", "Custom model quantization", "Zero-data-retention compliance guarantees"]
      }
    ],
    keyCapabilities: [
      { title: "Hybrid Lexical + Vector Retrieval", description: "Combining BM25 keyword precision with dense semantic vector embeddings for unmatched retrieval accuracy.", metric: ">95% Precision" },
      { title: "Strict Guardrails & Hallucination Defense", description: "Automated output validation checking every generated token against factual context before displaying to users.", metric: "Zero Hallucination" },
      { title: "Cost & Semantic Caching", description: "Redis semantic vector caching returning answers to frequent questions in under 10ms at zero token cost.", metric: "60% Token Savings" },
      { title: "Enterprise Compliance & PII Redaction", description: "Real-time sanitization of personal identification numbers, credit cards, and confidential identifiers.", metric: "100% PII Redacted" }
    ],
    typicalProcess: [
      { step: "01", name: "AI Feasibility & Dataset Evaluation", description: "Auditing organizational documents, assessing retrieval complexity, and defining empirical evaluation metrics.", timeline: "Week 1–2" },
      { step: "02", name: "Chunking, Embedding & Vector Indexing", description: "Designing optimal document chunking hierarchies, generating vector embeddings, and populating vector databases.", timeline: "Week 3" },
      { step: "03", name: "Pipeline Architecture & Evaluation Benchmarking", description: "Building RAG pipelines, configuring re-ranking models, and running automated benchmark test suites.", timeline: "Week 4–5" },
      { step: "04", name: "Safety Guardrails & Application Integration", description: "Wiring API endpoints into web/mobile apps, setting up token budget ceilings, and implementing PII filters.", timeline: "Week 6–7" },
      { step: "05", name: "Production Observability & Feedback Loop", description: "Tracking user thumbs-up/down ratings, latency percentiles, and continuously retraining vector indices.", timeline: "Week 8" }
    ],
    targetAudience: [
      { profile: "Legal & Compliance Enterprises", description: "Firms needing instant, cited answers across thousands of complex regulatory documents and contracts." },
      { profile: "Customer Support at Scale", description: "Organizations aiming to resolve 70%+ of customer support tickets autonomously with exact knowledge base accuracy." },
      { profile: "Data-Rich Technology Startups", description: "Founders embedding intelligent generative features and predictive intelligence into their software platforms." }
    ],
    relevantUseCases: [
      {
        clientType: "Commercial Real Estate Advisory",
        challenge: "Advisors took 6 hours to manually read 100-page lease contracts to extract critical financial clauses and escalation terms.",
        solution: "Built a secure private RAG intelligence platform that extracts 28 critical financial terms with exact page citations and confidence scores.",
        outcome: "Contract review time reduced from 6 hours to 4 minutes with 99.4% accuracy across 1,200 commercial leases."
      },
      {
        clientType: "Technical Support Engineering Firm",
        challenge: "Tier-1 support reps were overwhelmed by 500+ daily tickets regarding complex machinery troubleshooting manuals.",
        solution: "Engineered an AI copilot that suggests verified technical troubleshooting steps with schematic diagrams directly into Zendesk.",
        outcome: "First-contact resolution improved by 54%, and average resolution time dropped from 48 minutes to 9 minutes."
      }
    ],
    relatedServices: [
      { slug: "automation", title: "Automation & Digital Systems", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "web-app-development", title: "Web Application Development", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "cloud-it-infrastructure", title: "Cloud & IT Infrastructure", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  // =========================================================================
  // 02 — YEQARI DIGITAL
  // =========================================================================
  "branding-identity": {
    id: "branding-identity",
    slug: "branding-identity",
    title: "Branding & Identity",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "Distinctive brand positioning, visual architecture, logo design, typography, and comprehensive brand identity systems.",
    tagline: "Build an indelible brand identity that commands market authority and differentiates your technological vision.",
    heroSummary: "In an ocean of generic technology companies, brand identity is the ultimate moat. We design comprehensive visual and strategic brand identities—from iconic logo marks and bespoke typography pairings to full design guidelines and narrative positioning—that make your company unforgettable to investors, partners, and customers.",
    problemSolved: {
      headline: "The Silent Penalty of Weak, Undifferentiated Branding",
      points: [
        {
          issue: "Looking Like Every Other Generic Tech Startup",
          impact: "Stock vector logos and default typography telegraph amateurism, forcing you to compete solely on price rather than perceived value."
        },
        {
          issue: "Fragmented Visual Inconsistency Across Touchpoints",
          impact: "When your pitch deck, website, social banners, and app use different colors and fonts, your brand presence feels disorganized and untrustworthy."
        },
        {
          issue: "Lack of Cohesive Emotional Resonance",
          impact: "Customers do not buy technology features—they buy clarity, competence, and confidence. Weak branding fails to ignite that emotional conviction."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Iconic Logo Architecture & Symbol Design",
        description: "Timeless, mathematically precise mark design delivered with complete vector guidelines, monochrome variations, and app icon exports.",
        deliverables: ["Master logo vector suite (SVG/AI/EPS)", "Responsive lockup variations", "Monochrome and reversed colorways"]
      },
      {
        title: "Comprehensive Typography & Color Systems",
        description: "Harmonious chromatic palettes tailored to tech aesthetics, paired with high-legibility typographic hierarchies and licensing documentation.",
        deliverables: ["Curated digital color tokens (HEX/RGB/HSL)", "Typographic pairing rules", "Usage hierarchy spec sheets"]
      },
      {
        title: "The Brand Bible & Design Guidelines",
        description: "A definitive, master brand manual covering clear space, co-branding guidelines, photography art direction, and tone of voice.",
        deliverables: ["Interactive digital brand guide", "Print & digital collateral templates", "Social media avatar & banner kits"]
      }
    ],
    keyCapabilities: [
      { title: "Mathematical Proportion & Geometry", description: "Crafted on strict geometric grids ensuring flawless scalability from 16px favicons to massive physical billboards.", metric: "Vector Mastered" },
      { title: "Category Differentiation Strategy", description: "Comprehensive competitor visual mapping to ensure your brand stands out unmistakably in your vertical.", metric: "100% Unique" },
      { title: "Multi-Touchpoint Consistency", description: "Design specifications ensuring brand fidelity across web, mobile, apparel, print, and video assets.", metric: "Full Spectrum" },
      { title: "Complete Commercial IP Ownership", description: "Full transfer of all intellectual property, vector source files, and commercial usage rights.", metric: "Full Ownership" }
    ],
    typicalProcess: [
      { step: "01", name: "Brand Discovery & Market Mapping", description: "Unpacking company ethos, competitive landscape, target audience psychology, and strategic positioning.", timeline: "Week 1–2" },
      { step: "02", name: "Creative Direction & Moodboards", description: "Exploring distinct visual directions, typography moods, and conceptual aesthetic territories.", timeline: "Week 2–3" },
      { step: "03", name: "Symbol Exploration & Iteration", description: "Developing custom logo concepts, testing grid geometry, and stress-testing on diverse backgrounds.", timeline: "Week 3–4" },
      { step: "04", name: "Systemization & Collateral Design", description: "Building color tokens, presentation templates, business cards, social media assets, and swag mockups.", timeline: "Week 4–5" },
      { step: "05", name: "Master Asset Delivery & Brand Manual", description: "Delivering export packages, vector source archives, and the comprehensive Brand Bible.", timeline: "Week 5" }
    ],
    targetAudience: [
      { profile: "Emerging Technology Companies", description: "Startups ready to transition from raw technical prototypes into institutional-grade market leaders." },
      { profile: "Established Businesses Rebranding", description: "Companies modernizing legacy visual identities to reflect digital and international capabilities." },
      { profile: "Venture-Backed Founders", description: "Founders preparing for Seed or Series A fundraising requiring tier-one presentation credibility." }
    ],
    relevantUseCases: [
      {
        clientType: "FinTech Cross-Border Payment Protocol",
        challenge: "Client looked like a generic crypto clone with neon colors, causing skepticism among institutional banking partners.",
        solution: "Created an authoritative, Swiss-inspired visual identity with deep midnight navy, precision serif typography, and an elegant geometric monogram.",
        outcome: "Closed 4 tier-1 banking partnerships and raised $3.5M Seed round within 4 months of brand rollout."
      },
      {
        clientType: "B2B AI Data Analytics Platform",
        challenge: "Two co-founders had great algorithms but a homemade PowerPoint logo that failed to win enterprise enterprise customer trust.",
        solution: "Designed a clean, futuristic identity centered around structured kinetic vectors, complete with brand guidelines and enterprise deck templates.",
        outcome: "Average enterprise contract value increased by 220% as enterprise buyers perceived them as an established market player."
      }
    ],
    relatedServices: [
      { slug: "creative-content", title: "Creative Content", division: "YEQARI DIGITAL" },
      { slug: "ui-ux-engineering", title: "UI/UX Engineering", division: "YEQARI IT INFRASTRUCTURE" },
      { slug: "website-development", title: "Website Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "social-media-management": {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "Multi-platform brand presence, content distribution, community building, and algorithmic growth across LinkedIn, Instagram, TikTok, and X.",
    tagline: "Build cultural relevance, audience trust, and consistent inbound attention across modern social platforms.",
    heroSummary: "Social media for modern technology companies is not about posting generic stock quotes—it is about distributing proprietary engineering insights, founder narratives, product announcements, and high-production visual media that builds a passionate community and feeds your customer acquisition pipeline.",
    problemSolved: {
      headline: "Why Most Tech Social Media Accounts Are Ineffective Ghost Towns",
      points: [
        {
          issue: "Generic Corporate Noise Nobody Cares About",
          impact: "Posting dry press releases and sterile corporate updates results in zero engagement, algorithm penalties, and wasted team effort."
        },
        {
          issue: "Erratic, Inconsistent Posting Schedules",
          impact: "Sporadic activity signals to prospective clients and candidates that the company is disorganized or struggling."
        },
        {
          issue: "Lack of Clear Conversion Funnels",
          impact: "Generating vanity views without directing attention into newsletter signups, demo requests, or community channels produces zero business ROI."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Platform-Specific Content Production",
        description: "Bespoke short-form carousels, video reels, technical breakdowns, and thought leadership threads crafted natively for each platform's algorithm.",
        deliverables: ["Weekly scheduled content batches", "Native carousel graphics", "Engaging video reels & animations"]
      },
      {
        title: "Active Community Management & Engagement",
        description: "Proactive interaction with industry leaders, replying to comments within 15 minutes, and building organic partnerships.",
        deliverables: ["Daily inbox & comment monitoring", "Outbound strategic engagement", "Community sentiment reporting"]
      },
      {
        title: "Algorithmic Analytics & Performance Optimization",
        description: "Monthly data-driven debriefs tracking engagement rates, follower velocity, profile clicks, and outbound website conversions.",
        deliverables: ["Monthly growth performance dashboards", "Top-performing content post-mortems", "A/B testing optimization logs"]
      }
    ],
    keyCapabilities: [
      { title: "LinkedIn Thought Leadership", description: "Ghostwriting founder profiles and company updates tailored to B2B decision makers.", metric: "B2B Focus" },
      { title: "Short-Form Video Production", description: "Scripting, editing, and publishing engaging TikTok/Reels content that humanizes technology.", metric: "High Engagement" },
      { title: "Algorithmic Optimization", description: "Optimizing posting windows, hashtag strategies, hook pacing, and visual retention loops.", metric: "Data-Driven" },
      { title: "Inbound Funnel Integration", description: "Turning viral social reach into newsletter subscribers, Discord members, and qualified demo leads.", metric: "ROI Focused" }
    ],
    typicalProcess: [
      { step: "01", name: "Social Audit & Audience Profiling", description: "Analyzing current channel performance, competitor engagement, audience demographics, and ideal content pillars.", timeline: "Week 1" },
      { step: "02", name: "Editorial Calendar & Content System", description: "Establishing weekly content cadences, visual asset templates, voice guidelines, and review approval workflows.", timeline: "Week 2" },
      { step: "03", name: "Batch Asset Creation & Review", description: "Producing the first month of graphics, videos, carousels, and copy in collaborative review software.", timeline: "Week 3" },
      { step: "04", name: "Execution, Publishing & Active Moderation", description: "Daily automated publishing, real-time engagement in comments, and proactive outreach.", timeline: "Ongoing" },
      { step: "05", name: "Monthly Growth Review & Strategy Tuning", description: "Reviewing metrics, doubling down on viral formats, and testing emerging platform features.", timeline: "Monthly" }
    ],
    targetAudience: [
      { profile: "B2B Tech Startups & Founders", description: "Leaders wanting to build strong personal and brand authority on LinkedIn and X." },
      { profile: "Consumer Tech & Apps", description: "Brands needing active, energetic presence on Instagram and TikTok to drive organic app downloads." },
      { profile: "Professional Service Providers", description: "Agencies, consultancies, and modern service firms looking for consistent organic inbound inquiries." }
    ],
    relevantUseCases: [
      {
        clientType: "Developer Tooling Startup",
        challenge: "Great product but had only 320 followers on LinkedIn and struggled to get developers to notice their open-source repository.",
        solution: "Implemented a 3x/week technical breakdown strategy on LinkedIn and X featuring code snippets, architecture diagrams, and founder insights.",
        outcome: "Grew to 18,500 targeted technical followers in 5 months, resulting in 4,200 GitHub stars and 800+ beta signups."
      },
      {
        clientType: "Education Tech Platform",
        challenge: "Client ran traditional Google search ads with high CAC ($85/lead) and low retention among younger learners.",
        solution: "Built a TikTok and Instagram educational short-form video strategy breaking down complex tech concepts into 30-second bites.",
        outcome: "Generated 3.4M organic views in 90 days, cutting blended customer acquisition cost by 62%."
      }
    ],
    relatedServices: [
      { slug: "creative-content", title: "Creative Content", division: "YEQARI DIGITAL" },
      { slug: "content-strategy", title: "Content Strategy", division: "YEQARI DIGITAL" },
      { slug: "digital-marketing", title: "Digital Marketing", division: "YEQARI DIGITAL" }
    ]
  },

  "content-strategy": {
    id: "content-strategy",
    slug: "content-strategy",
    title: "Content Strategy",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "Strategic editorial roadmaps, technical whitepapers, case study architecture, and customer journey storytelling.",
    tagline: "Turn knowledge into commercial authority with strategic, high-conviction content systems.",
    heroSummary: "Content is not filler copy—it is the intellectual currency of your company. We craft rigorous content strategies that position your executives as industry authorities, educate potential buyers on complex problems, and systematically nurture prospects down the funnel through whitepapers, case studies, and thought leadership articles.",
    problemSolved: {
      headline: "The Failure of Random Acts of Content Creation",
      points: [
        {
          issue: "Low-Quality AI Content Sludge",
          impact: "Flooding blogs with generic, unedited AI articles damages brand credibility, triggers search engine spam penalties, and convinces nobody."
        },
        {
          issue: "Disconnect Between Content and Sales Realities",
          impact: "Writing articles that generate random clicks from unqualified readers without educating high-intent buyers wastes marketing budget."
        },
        {
          issue: "No Compelling Narrative or Point of View",
          impact: "Content that reads like a bland Wikipedia summary fails to demonstrate why your technology is the superior solution."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Strategic Content Pillar Architecture",
        description: "Mapping your business objectives to high-intent buyer personas, questions, and conversion triggers.",
        deliverables: ["Quarterly content roadmap", "Search intent keyword clusters", "Competitor content gap analysis"]
      },
      {
        title: "Deep-Dive Case Studies & Customer Proof",
        description: "Structuring authoritative case studies highlighting tangible ROI, metrics, architectural diagrams, and executive quotes.",
        deliverables: ["Comprehensive customer success stories", "One-page PDF sales enablement sheets", "Video interview narrative briefs"]
      },
      {
        title: "Technical Whitepapers & Research Reports",
        description: "Authoring institutional-grade industry whitepapers that establish intellectual leadership and generate high-intent enterprise leads.",
        deliverables: ["Full whitepaper research & writing", "Executive summary briefs", "Gated lead-magnet landing copy"]
      }
    ],
    keyCapabilities: [
      { title: "Technical Subject Matter Expertise", description: "Writers who understand software engineering, cloud architectures, AI, and enterprise economics.", metric: "No Fluff" },
      { title: "High-Intent Keyword Mapping", description: "Targeting bottom-of-the-funnel commercial keywords with real purchase intent rather than vanity traffic.", metric: "Commercial Intent" },
      { title: "Multi-Format Repurposing Engine", description: "Transforming 1 flagship whitepaper into 8 LinkedIn articles, 12 tweets, an infographic, and an executive webinar.", metric: "10x Leverage" },
      { title: "Full Sales Alignment", description: "Equipping your sales reps with tactical content assets that overcome objections during live prospect deals.", metric: "Deal Acceleration" }
    ],
    typicalProcess: [
      { step: "01", name: "Buyer Journey & Persona Immersion", description: "Interviewing sales reps, customers, and founders to identify the exact questions prospects ask before buying.", timeline: "Week 1–2" },
      { step: "02", name: "Content Roadmap & Pillar Blueprint", description: "Defining 4 key content pillars, drafting 12-week editorial schedule, and assigning target metrics.", timeline: "Week 2" },
      { step: "03", name: "Deep Research & First Flagship Asset", description: "Conducting interviews, gathering data, and writing the first high-conviction whitepaper or deep case study.", timeline: "Week 3–4" },
      { step: "04", name: "Distribution Matrix & Sales Enablement", description: "Repurposing flagship piece into bite-sized social content, email sequences, and sales collateral.", timeline: "Week 5" },
      { step: "05", name: "Quarterly Review & Lead Attribution", description: "Analyzing which content assets directly influenced closed-won deals and updating the strategic roadmap.", timeline: "Ongoing" }
    ],
    targetAudience: [
      { profile: "B2B Enterprise Software", description: "Companies with high contract values requiring extensive buyer education and risk-mitigation proof." },
      { profile: "Consultancies & Solution Providers", description: "Firms whose primary competitive advantage is deep domain expertise and proprietary methodology." },
      { profile: "Emerging Innovators", description: "Startups pioneering new product categories that need to educate the market on new paradigms." }
    ],
    relevantUseCases: [
      {
        clientType: "Cloud Security Platform",
        challenge: "C-suite executives found the technical product too complex to understand, causing deals to stall in evaluation for 9+ months.",
        solution: "Authored an executive guide titled 'The Zero-Trust Cloud Audit: 7 Blindspots Costing Millions' and 3 detailed case studies.",
        outcome: "Average sales cycle shortened from 270 days to 110 days, generating $2.4M in pipeline attribution."
      },
      {
        clientType: "Industrial IoT Solution",
        challenge: "Traditional blog posts yielded 200 visits a month with zero inbound inquiries.",
        solution: "Restructured strategy around practical factory ROI calculators, regulatory compliance whitepapers, and operational teardowns.",
        outcome: "Organic search leads increased by 380%, with 14 tier-1 manufacturing plants requesting technical audits."
      }
    ],
    relatedServices: [
      { slug: "marketing-strategy", title: "Marketing Strategy", division: "YEQARI DIGITAL" },
      { slug: "creative-content", title: "Creative Content", division: "YEQARI DIGITAL" },
      { slug: "social-media-management", title: "Social Media Management", division: "YEQARI DIGITAL" }
    ]
  },

  "marketing-strategy": {
    id: "marketing-strategy",
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "Full-funnel go-to-market planning, positioning architecture, unit economics modeling, and sustainable customer acquisition.",
    tagline: "Data-driven, full-funnel growth architectures engineered for predictable customer acquisition.",
    heroSummary: "Growth is not a series of disconnected marketing experiments—it is a closed-loop system of positioning, audience targeting, conversion mechanics, and retention. We architect comprehensive marketing strategies that connect your brand narrative to high-converting acquisition channels, ensuring every dollar spent compounds in measurable revenue.",
    problemSolved: {
      headline: "The Chaos of Uncoordinated Marketing Spend",
      points: [
        {
          issue: "Burning Cash on Premature Paid Ads",
          impact: "Pouring budget into Google or Meta ads before tightening your value proposition and landing page conversion yields high CAC and burned capital."
        },
        {
          issue: "Disjointed Multi-Channel Messaging",
          impact: "When marketing tells one story, sales tells another, and the product delivers something else, customer churn spikes."
        },
        {
          issue: "Lack of Attribution & Flawed Metrics",
          impact: "Tracking vanity impressions instead of pipeline velocity, CAC, and LTV prevents leadership from knowing which levers actually work."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Go-To-Market (GTM) Playbook",
        description: "A comprehensive roadmap defining target market segments, competitive positioning wedges, pricing structures, and channel distribution.",
        deliverables: ["Definitive GTM Playbook", "Ideal Customer Profile (ICP) matrix", "Channel viability scoring"]
      },
      {
        title: "Full-Funnel Unit Economics Modeling",
        description: "Financial modeling of customer acquisition cost (CAC), lifetime value (LTV), payback period, and conversion benchmarks across every funnel stage.",
        deliverables: ["Interactive CAC/LTV financial model", "Funnel conversion rate benchmarks", "Budget allocation scenario matrix"]
      },
      {
        title: "Cross-Channel Campaign Architecture",
        description: "Designing coordinated marketing campaigns orchestrating search, social, email automation, partnerships, and PR into a single cohesive push.",
        deliverables: ["Campaign calendar and briefs", "Offer architecture and lead magnets", "Attribution tracking specification"]
      }
    ],
    keyCapabilities: [
      { title: "Positioning Wedge Discovery", description: "Identifying the precise market gap where your product possesses an unfair advantage over incumbents.", metric: "Unfair Advantage" },
      { title: "Multi-Touch Attribution", description: "Implementing first-touch, last-touch, and linear attribution models to uncover real acquisition drivers.", metric: "Full Attribution" },
      { title: "Funnel Leakage Auditing", description: "Diagnosing the exact landing pages, forms, or onboarding steps causing user drop-off.", metric: "Leak Elimination" },
      { title: "Scalable Growth Flywheels", description: "Designing compounding loops where new customers organically invite, refer, or generate more customers.", metric: "Compounding Growth" }
    ],
    typicalProcess: [
      { step: "01", name: "Market & Historical Performance Audit", description: "Auditing historical customer data, current acquisition channels, unit economics, and competitive pricing.", timeline: "Week 1–2" },
      { step: "02", name: "ICP Definition & Value Proposition Matrix", description: "Clarifying highest-value customer segments, pain points, objection triggers, and strategic positioning.", timeline: "Week 2–3" },
      { step: "03", name: "Channel Strategy & Funnel Architecture", description: "Selecting the 2–3 primary distribution channels, designing lead magnets, and mapping automated email sequences.", timeline: "Week 3–4" },
      { step: "04", name: "Campaign Playbook & Asset Creation", description: "Developing ad copy, landing page briefs, conversion triggers, and sales enablement collateral.", timeline: "Week 5" },
      { step: "05", name: "Launch, Measurement & Growth Sprints", description: "Executing coordinated launch, tracking daily attribution metrics, and holding weekly optimization debriefs.", timeline: "Week 6+" }
    ],
    targetAudience: [
      { profile: "Seed to Series B Tech Companies", description: "Founders seeking to transition from founder-led sales into a repeatable, scalable marketing engine." },
      { profile: "Traditional Businesses Going Digital", description: "Established regional operators expanding into nationwide or global digital customer acquisition." },
      { profile: "New Product Launches", description: "Companies launching flagship products needing a coordinated, high-impact market entry strategy." }
    ],
    relevantUseCases: [
      {
        clientType: "FinTech Micro-Lending Platform",
        challenge: "Client spent $20,000/month on generic Facebook ads with poor payback periods and a 65% drop-off at application.",
        solution: "Restructured GTM strategy around focused Google Search intent, localized partner affiliate channels, and an interactive eligibility quiz.",
        outcome: "Blended CAC dropped from $140 to $38, while qualified loan applications grew by 310% in 90 days."
      },
      {
        clientType: "B2B Workforce Scheduling SaaS",
        challenge: "Targeting all SMBs with one generic message resulted in weak conversion and low sales team morale.",
        solution: "Refined ICP to healthcare clinics with 10–50 nurses; created tailored landing pages, compliance case studies, and automated email nurturing.",
        outcome: "Sales conversion rate improved from 4.2% to 19.8%, resulting in $850k in new ARR."
      }
    ],
    relatedServices: [
      { slug: "digital-marketing", title: "Digital Marketing", division: "YEQARI DIGITAL" },
      { slug: "content-strategy", title: "Content Strategy", division: "YEQARI DIGITAL" },
      { slug: "branding-identity", title: "Branding & Identity", division: "YEQARI DIGITAL" }
    ]
  },

  "digital-marketing": {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "High-performance paid acquisition (Google, Meta, LinkedIn), conversion rate optimization (CRO), and search engine optimization (SEO).",
    tagline: "Precision paid acquisition and technical SEO engineered to scale revenue predictably.",
    heroSummary: "Digital marketing should not be an uncertain gamble—it should function like an investment machine with clear inputs and predictable yields. We execute technical search engine optimization (SEO), high-intent paid search (Google Ads), precision paid social (LinkedIn, Meta), and conversion rate optimization (CRO) that scales your bottom line.",
    problemSolved: {
      headline: "The Pitfalls of Wasteful, Inefficient Ad Spend",
      points: [
        {
          issue: "Broad Match Keyword Bleed",
          impact: "Unmonitored Google Ads campaigns bid on low-intent search terms, draining budget on tire-kickers who never intend to buy."
        },
        {
          issue: "Ad Creative Fatigue & High CPMs",
          impact: "Running the same 2 static ad images for months causes ad fatigue, driving up cost per click while conversion rates plummet."
        },
        {
          issue: "Neglected Technical SEO Foundations",
          impact: "Failing to optimize site speed, indexation hierarchy, and structured data leaves you completely invisible in organic search."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Technical & Programmatic SEO",
        description: "Full audit of crawl budgets, schema markup, Core Web Vitals, backlink profiles, and scalable content architecture to win high-intent search queries.",
        deliverables: ["Comprehensive technical SEO audit", "Schema.org structured data implementation", "High-intent keyword ranking roadmap"]
      },
      {
        title: "High-Intent Paid Search (Google Ads / Bing)",
        description: "Meticulous single-intent ad groups, negative keyword scrubbers, and conversion-optimized landing pages with high quality scores.",
        deliverables: ["Precision search campaign structures", "Continuous negative keyword pruning", "A/B tested ad copy variations"]
      },
      {
        title: "Paid Social & Account-Based Marketing (ABM)",
        description: "Hyper-targeted LinkedIn campaigns targeting specific company sizes, job titles, and industries, coupled with retargeting pixels.",
        deliverables: ["ABM target account matching", "Multi-stage retargeting funnels", "Creative testing matrix"]
      }
    ],
    keyCapabilities: [
      { title: "Continuous A/B Conversion Testing", description: "Testing headlines, form field counts, trust badges, and CTA button copy to maximize conversion yield.", metric: "Continuous CRO" },
      { title: "Server-Side Conversion Tracking", description: "Meta Conversions API and Google Enhanced Conversions bypassing iOS ad blockers and cookie expiration.", metric: "100% Tracking" },
      { title: "Negative Keyword Guardrails", description: "Proactive negative keyword lists preventing budget waste on competitor searches, jobs, and free tools.", metric: "Zero Ad Waste" },
      { title: "Real-Time ROAS Dashboards", description: "Live Looker Studio / dashboard integration showing exact cost per acquisition, pipeline, and closed revenue.", metric: "Live ROAS" }
    ],
    typicalProcess: [
      { step: "01", name: "Account Audit & Tracking Infrastructure", description: "Auditing previous campaigns, installing server-side tracking pixels, and verifying conversion goal accuracy.", timeline: "Week 1" },
      { step: "02", name: "Audience Segmentation & Keyword Build", description: "Building hyper-targeted keyword matrices, negative keyword libraries, and custom retargeting audiences.", timeline: "Week 2" },
      { step: "03", name: "Creative Development & Dedicated Landing Pages", description: "Designing high-converting landing page variants and generating 15+ ad creative variations.", timeline: "Week 3" },
      { step: "04", name: "Controlled Launch & Bid Optimization", description: "Launching campaigns with conservative budgets, testing bid strategies, and optimizing quality scores.", timeline: "Week 4" },
      { step: "05", name: "Aggressive Scaling & CRO Iteration", description: "Allocating more capital to winning ads while launching continuous A/B landing page tests.", timeline: "Ongoing" }
    ],
    targetAudience: [
      { profile: "B2B SaaS & Tech Providers", description: "Companies needing steady pipeline of qualified demo requests and sales-assisted leads." },
      { profile: "E-Commerce & DTC Brands", description: "Retailers looking to scale return on ad spend (ROAS) and dominate Google Shopping and Meta feeds." },
      { profile: "High-Ticket Service Companies", description: "Organizations where closing just 2–3 new enterprise clients per month represents massive revenue." }
    ],
    relevantUseCases: [
      {
        clientType: "Enterprise HR Software Provider",
        challenge: "Client was spending $12,000/month on Google Ads with an exorbitant $380 cost per demo request.",
        solution: "Overhauled campaign architecture with exact-match intent terms, single-purpose landing pages, and server-side tracking.",
        outcome: "Cost per qualified demo dropped to $92, tripling monthly demo volume without increasing total ad spend."
      },
      {
        clientType: "Specialized Cybersecurity Consultancy",
        challenge: "Invisible in organic search; competitors dominated the top 5 spots for high-value penetration testing keywords.",
        solution: "Executed technical SEO restructuring, authored 18 deep-dive vulnerability teardowns, and optimized Core Web Vitals.",
        outcome: "Organic search traffic grew by 420% in 6 months, generating $1.1M in organic inbound enterprise pipeline."
      }
    ],
    relatedServices: [
      { slug: "marketing-strategy", title: "Marketing Strategy", division: "YEQARI DIGITAL" },
      { slug: "creative-content", title: "Creative Content", division: "YEQARI DIGITAL" },
      { slug: "website-development", title: "Website Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "creative-content": {
    id: "creative-content",
    slug: "creative-content",
    title: "Creative Content",
    division: "YEQARI DIGITAL",
    divisionSlug: "digital",
    divisionDescription: "High-end 3D visual assets, motion graphics, UI mockups, commercial product videos, and brand collateral.",
    tagline: "Premium visual craftsmanship, 3D motion, and design assets that make your technology unforgettable.",
    heroSummary: "In digital technology, visual execution is a direct proxy for engineering quality. We craft bespoke 3D graphics, motion graphic explainers, interface product videos, and brand collateral that elevate your brand from looking like a standard startup to commanding the presence of a category leader.",
    problemSolved: {
      headline: "The Risk of Looking Cheap in a Premium Market",
      points: [
        {
          issue: "Stock Photos and Cliché Vector Illustrations",
          impact: "Using generic Unsplash photos and flat vector illustrations instantly degrades buyer trust and makes your product look commoditized."
        },
        {
          issue: "Boring, Incomprehensible Product Demos",
          impact: "Dry screencasts with choppy voiceovers fail to capture viewer attention, causing prospective buyers to click away in seconds."
        },
        {
          issue: "Visual Disconnect Across Marketing Channels",
          impact: "Having an attractive website but low-resolution, amateur social and deck graphics shatters brand coherence."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Bespoke 3D Visuals & Product Renders",
        description: "Photorealistic and stylistic 3D renders, abstract technological metaphors, and device mockups tailored to your brand color palette.",
        deliverables: ["High-res 3D hero assets (4K/WebP)", "Transparent asset cutouts", "Interactive 3D model files (GLTF/USDZ)"]
      },
      {
        title: "Motion Graphic Product Explainers",
        description: "High-tempo 60-to-90 second animated explainer videos illustrating your software's value proposition with crisp kinetic typography.",
        deliverables: ["Full storyboard and script", "Custom motion design in After Effects", "Sound design and master audio mix"]
      },
      {
        title: "Executive Pitch Decks & Sales Collateral",
        description: "Visually stunning investor pitch decks, client proposal templates, and one-pagers designed to win high-stakes enterprise decisions.",
        deliverables: ["Figma & Keynote/PowerPoint master templates", "Custom vector diagrams & iconography", "Interactive digital PDF exports"]
      }
    ],
    keyCapabilities: [
      { title: "Kinetic UI Animations", description: "Animating software interfaces with fluid camera sweeps, micro-zooms, and simulated cursor interactions.", metric: "Cinematic Polish" },
      { title: "3D Spatial Visualization", description: "Crafting custom abstract 3D tokens, data flows, and hardware mockups in Blender and Cinema4D.", metric: "4K Rendered" },
      { title: "High-Stakes Pitch Decks", description: "Decks specifically formatted for investor comprehension, highlighting TAM, metrics, and technical moat.", metric: "Investor Ready" },
      { title: "Modular Visual Kits", description: "Building reusable asset libraries so your internal teams can generate cohesive branded assets on demand.", metric: "Asset Library" }
    ],
    typicalProcess: [
      { step: "01", name: "Creative Brief & Narrative Direction", description: "Defining core message, visual tone, target emotional reaction, and format requirements.", timeline: "Week 1" },
      { step: "02", name: "Moodboards & Style Frames", description: "Presenting 2–3 distinct visual style frames, color studies, and 3D material textures for approval.", timeline: "Week 2" },
      { step: "03", name: "Storyboarding & Vector Design", description: "Drafting frame-by-frame animatics, UI asset layouts, and 3D scene compositions.", timeline: "Week 3" },
      { step: "04", name: "Motion Choreography & 3D Rendering", description: "Animating sequences, fine-tuning easing curves, lighting 3D scenes, and mastering sound design.", timeline: "Week 4–5" },
      { step: "05", name: "Final Master Delivery & Formats", description: "Delivering multi-format exports optimized for web, social, pitch presentations, and ultra-high-res displays.", timeline: "Week 5" }
    ],
    targetAudience: [
      { profile: "Hardware & DeepTech Startups", description: "Companies whose complex physical or cryptographic products need visual explanations to be understood." },
      { profile: "Fundraising Founders", description: "Founders seeking institutional venture capital requiring pitch decks that look like a top-tier design studio built them." },
      { profile: "B2B SaaS Product Marketing Teams", description: "Teams launching major new features requiring high-production launch trailers and social hype reels." }
    ],
    relevantUseCases: [
      {
        clientType: "Decentralized Cloud Computing Protocol",
        challenge: "Investors could not visualize how their decentralized GPU cluster worked, hindering Seed fundraising discussions.",
        solution: "Created a 75-second 3D kinetic motion explainer showing network nodes coordinating in real time with high-energy audio.",
        outcome: "Video accumulated 180,000 organic views on X and directly helped secure a $4.2M oversubscribed Seed round."
      },
      {
        clientType: "Enterprise Supply Chain Optimization",
        challenge: "Sales reps used an ugly 40-slide PowerPoint that looked outdated and failed to communicate software sophistication.",
        solution: "Rebuilt the entire sales deck into a 16-slide high-impact presentation with custom 3D logistics models and clear ROI charts.",
        outcome: "Enterprise deal close rate jumped by 38%, with multiple prospects specifically praising the clarity of the presentation."
      }
    ],
    relatedServices: [
      { slug: "branding-identity", title: "Branding & Identity", division: "YEQARI DIGITAL" },
      { slug: "social-media-management", title: "Social Media Management", division: "YEQARI DIGITAL" },
      { slug: "ui-ux-engineering", title: "UI/UX Engineering", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  // =========================================================================
  // 03 — YEQARI ACADEMY
  // =========================================================================
  "corporate-training": {
    id: "corporate-training",
    slug: "corporate-training",
    title: "Corporate Training",
    division: "YEQARI ACADEMY",
    divisionSlug: "academy",
    divisionDescription: "Upskilling corporate engineering, product, and leadership teams in modern cloud, software, and AI workflows.",
    tagline: "Transform your workforce with practical, hands-on corporate technology and software training.",
    heroSummary: "Technology evolves faster than traditional corporate training can keep pace with. YEQARI Academy delivers intensive, hands-on corporate training programs covering modern cloud infrastructure, full-stack software development, automated testing, and secure engineering practices designed for real enterprise teams.",
    problemSolved: {
      headline: "The Skill Gap Holding Back Enterprise Digital Acceleration",
      points: [
        {
          issue: "Theoretical Courses with Zero Practical Relevance",
          impact: "Sending employees to generic online video courses leads to poor retention and zero measurable change in codebase quality."
        },
        {
          issue: "Legacy Practices Slowing Down Delivery",
          impact: "Teams unfamiliar with modern CI/CD, TypeScript, and microservices take weeks to ship features that competitors ship in hours."
        },
        {
          issue: "High Employee Turnover Due to Lack of Growth",
          impact: "Top engineering talent leaves organizations that fail to invest in upskilling them on modern, future-facing tools."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Bespoke Enterprise Curriculum",
        description: "Custom training syllabus designed specifically around your company's actual codebase, technical stack, and business priorities.",
        deliverables: ["Custom syllabus and curriculum guide", "Interactive hands-on lab environments", "Code review workshops on company repos"]
      },
      {
        title: "Live Interactive Instructor Sessions",
        description: "Conducted by veteran senior software architects and engineering leaders with real-world production experience.",
        deliverables: ["Live synchronous workshops (remote or on-site)", "Recorded sessions with lifetime archive", "Dedicated Slack/Teams Q&A channels"]
      },
      {
        title: "Competency Assessments & Milestone Projects",
        description: "Practical coding challenges and team capstone projects proving mastery of the concepts before program completion.",
        deliverables: ["Individual skill competency scorecards", "Team capstone project evaluations", "Official YEQARI completion certificates"]
      }
    ],
    keyCapabilities: [
      { title: "Modern Stack Focus", description: "Covering Next.js, TypeScript, Docker, Kubernetes, AWS, GraphQL, and microservice architectures.", metric: "Cutting Edge" },
      { title: "Hands-On Lab Infrastructure", description: "Pre-configured cloud sandbox environments allowing learners to practice without touching production.", metric: "Zero Risk Sandbox" },
      { title: "Flexible Executive Schedules", description: "Modular session structures adapted to corporate workdays (half-day workshops, weekend intensives).", metric: "Corporate Friendly" },
      { title: "Post-Training Support & Auditing", description: "30 days of follow-up mentoring and code review support to cement new operational habits.", metric: "30-Day Follow-Up" }
    ],
    typicalProcess: [
      { step: "01", name: "Organizational Skill Gap Assessment", description: "Auditing team proficiencies, reviewing current engineering bottlenecks, and defining training goals.", timeline: "Week 1" },
      { step: "02", name: "Custom Curriculum & Lab Preparation", description: "Tailoring real-world code examples and provisioning isolated cloud sandboxes for participants.", timeline: "Week 2" },
      { step: "03", name: "Interactive Workshop Delivery", description: "Conducting intensive hands-on workshops with live code walkthroughs and pair-programming exercises.", timeline: "Weeks 3–6" },
      { step: "04", name: "Capstone Project & Evaluation", description: "Teams build a functional prototype applying learned paradigms to a real internal business need.", timeline: "Week 7" },
      { step: "05", name: "Outcome Report & Executive Briefing", description: "Delivering competency reports to executive leadership with actionable ongoing recommendations.", timeline: "Week 8" }
    ],
    targetAudience: [
      { profile: "Enterprise IT & Software Teams", description: "Companies modernizing legacy systems and needing their internal teams upskilled on cloud-native practices." },
      { profile: "Engineering Managers & CTOs", description: "Leaders seeking to establish standardized engineering practices and elevate team velocity." },
      { profile: "High-Growth Scaleups", description: "Companies rapidly hiring new developers needing a structured, high-velocity onboarding bootcamp." }
    ],
    relevantUseCases: [
      {
        clientType: "Regional Financial Institution",
        challenge: "40 internal developers were proficient in legacy Java monolithic apps but struggled to build modern React/TypeScript microservices.",
        solution: "Delivered a 6-week intensive workshop series on React, TypeScript, and micro-frontend architectures with hands-on labs.",
        outcome: "Team successfully launched the bank's new mobile-first banking portal 2 months ahead of schedule."
      },
      {
        clientType: "Telecommunications Enterprise",
        challenge: "Frequent deployment bugs and manual testing caused 14-day release cycles and frequent rollbacks.",
        solution: "Conducted automated testing and CI/CD corporate training covering Playwright, GitHub Actions, and containerized pipelines.",
        outcome: "Deployment cycle was reduced from 14 days to daily releases, while production defect rate dropped by 78%."
      }
    ],
    relatedServices: [
      { slug: "technology-training", title: "Technology Training", division: "YEQARI ACADEMY" },
      { slug: "ai-awareness-programs", title: "AI Awareness Programs", division: "YEQARI ACADEMY" },
      { slug: "custom-software", title: "Custom Software Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "executive-tech-webinars": {
    id: "executive-tech-webinars",
    slug: "executive-tech-webinars",
    title: "Executive Tech Webinars",
    division: "YEQARI ACADEMY",
    divisionSlug: "academy",
    divisionDescription: "High-level strategic masterclasses on emerging tech trends, digital transformation, and executive decision-making.",
    tagline: "High-impact digital masterclasses equipping executives to lead in the age of rapid technological disruption.",
    heroSummary: "For C-suite executives, board members, and business leaders, staying informed on technology trends is not about learning to code—it is about understanding strategic leverage, risk mitigation, and commercial opportunity. YEQARI delivers concise, high-caliber webinars that demystify emerging technology for decision makers.",
    problemSolved: {
      headline: "Navigating Technology Hype vs Real Commercial Value",
      points: [
        {
          issue: "Overwhelmed by AI and Tech Buzzwords",
          impact: "Executives struggle to distinguish genuine operational breakthroughs from marketing hype, risking costly misallocations of capital."
        },
        {
          issue: "Misalignment Between Leadership and Tech Teams",
          impact: "When executives do not understand modern software lifecycles, unrealistic timelines and friction with engineering teams persist."
        },
        {
          issue: "Falling Behind Agile, Tech-First Competitors",
          impact: "Legacy leaders who wait too long to adopt cloud, automation, and AI find their margins eroding to nimble market entrants."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Executive-Level Strategic Briefings",
        description: "Concentrated 60-to-90 minute interactive briefings translating complex technical paradigms into commercial business decisions.",
        deliverables: ["High-impact executive slide decks", "Interactive Q&A with tech leaders", "Executive summary whitepapers"]
      },
      {
        title: "Industry-Specific Case Studies",
        description: "Detailed breakdowns of how peer enterprises in banking, retail, healthcare, and logistics successfully implemented digital initiatives.",
        deliverables: ["Real-world ROI case studies", "Benchmarking and failure post-mortems", "Technology vendor evaluation guides"]
      },
      {
        title: "Interactive Strategy & Scenario Sessions",
        description: "Facilitated discussions helping board members evaluate upcoming technology investments, vendor proposals, and digital roadmaps.",
        deliverables: ["Scenario planning worksheets", "Technology risk assessment checklists", "Executive action frameworks"]
      }
    ],
    keyCapabilities: [
      { title: "Board-Level Clarity", description: "Zero esoteric jargon; everything framed through revenue, margin, risk, and competitive moat.", metric: "C-Suite Focused" },
      { title: "Emerging Tech Demystification", description: "Clear, grounded breakdowns of generative AI, Web3, cloud economics, cybersecurity, and automation.", metric: "Zero Hype" },
      { title: "Actionable Decision Frameworks", description: "Providing leaders with repeatable mental models to evaluate software vendor pitches and IT budgets.", metric: "Decision Ready" },
      { title: "Direct Architect Access", description: "Direct dialogue with engineers and strategists building production software every single day.", metric: "Practitioner Led" }
    ],
    typicalProcess: [
      { step: "01", name: "Executive Topic Consultation", description: "Aligning on current strategic questions, upcoming board initiatives, and participant expectations.", timeline: "Week 1" },
      { step: "02", name: "Custom Briefing Development", description: "Tailoring data points, regulatory considerations, and competitive case studies to your industry.", timeline: "Week 2" },
      { step: "03", name: "Live Masterclass Delivery", description: "Delivering dynamic, high-engagement session with real-time polling, interactive scenarios, and Q&A.", timeline: "Live Event" },
      { step: "04", name: "Executive Briefing Deck & Recording", description: "Distributing the recorded presentation, executive summary, and decision checklist to participants.", timeline: "Post-Event" },
      { step: "05", name: "Follow-Up Advisory Advisory", description: "Optional 1-on-1 strategic advisory sessions to address specific organizational initiatives.", timeline: "Optional" }
    ],
    targetAudience: [
      { profile: "C-Suite Executives & Managing Directors", description: "CEOs, COOs, and CFOs needing clear strategic guidance on digital transformation and AI investments." },
      { profile: "Board Members & Non-Executive Directors", description: "Fiduciary leaders responsible for governing technology risk, cybersecurity, and long-term competitiveness." },
      { profile: "Business Unit Heads & Vice Presidents", description: "Leaders orchestrating digital modernizations across sales, operations, finance, or customer service." }
    ],
    relevantUseCases: [
      {
        clientType: "Manufacturing Conglomerate Board",
        challenge: "Board was evaluating a $2.5M digital transformation proposal from an external vendor and felt ill-equipped to judge technical feasibility.",
        solution: "Conducted an executive masterclass on modern cloud architectures, vendor contracts, and red flags in enterprise IT proposals.",
        outcome: "Board renegotiated vendor scope, saving $800,000 while ensuring core deliverables were tied to enforceable milestones."
      },
      {
        clientType: "Hospitality & Hotel Group Leadership",
        challenge: "Executive team was unsure how generative AI could realistically impact guest experience without endangering brand reputation.",
        solution: "Delivered a targeted executive briefing analyzing autonomous booking engines, AI concierge architectures, and privacy safeguards.",
        outcome: "Approved a phased pilot program that automated 45% of customer service inquiries within 6 months."
      }
    ],
    relatedServices: [
      { slug: "ai-awareness-programs", title: "AI Awareness Programs", division: "YEQARI ACADEMY" },
      { slug: "corporate-training", title: "Corporate Training", division: "YEQARI ACADEMY" },
      { slug: "marketing-strategy", title: "Marketing Strategy", division: "YEQARI DIGITAL" }
    ]
  },

  "youth-innovation-programs": {
    id: "youth-innovation-programs",
    slug: "youth-innovation-programs",
    title: "Youth Innovation Programs",
    division: "YEQARI ACADEMY",
    divisionSlug: "academy",
    divisionDescription: "Empowering young builders, students, and next-generation creators with real-world programming, design, and problem-solving skills.",
    tagline: "Igniting the next generation of engineers, designers, and innovators with real-world technical skills.",
    heroSummary: "The future belongs to those who build it. YEQARI Youth Innovation Programs bridge the chasm between academic theory and real-world tech creation. We provide young students, aspiring builders, and teenage innovators with hands-on coding bootcamps, design thinking workshops, and mentorship from practicing tech professionals.",
    problemSolved: {
      headline: "The Disconnect Between School Curriculums and Modern Tech",
      points: [
        {
          issue: "Outdated Academic Computer Science Curriculums",
          impact: "Teaching obsolete syntax from 20 years ago leaves young minds bored and unprepared for real-world software creation."
        },
        {
          issue: "Passive Consumption Instead of Creative Building",
          impact: "Young people spend thousands of hours consuming digital media without learning how digital products are actually engineered."
        },
        {
          issue: "Lack of Access to Real Mentorship",
          impact: "Curious students with breakthrough ideas often have no technical mentors to guide them from a notebook concept into a working project."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Hands-On Software & Web Bootcamps",
        description: "Immersive workshops teaching modern HTML, CSS, JavaScript, Python, and UI/UX design through building real, tangible projects.",
        deliverables: ["Project-based curriculum", "Live coding environment access", "Personal digital portfolio website"]
      },
      {
        title: "Hackathons & Innovation Challenges",
        description: "Energetic team hackathons where students team up to solve social, environmental, and business challenges using technology.",
        deliverables: ["Mentored hackathon events", "Project pitch presentation opportunities", "Prizes, awards, and digital badges"]
      },
      {
        title: "Mentorship from Real Tech Builders",
        description: "Direct guidance and office hours with active software engineers, UI/UX designers, and young founders from YEQARI GLOBAL.",
        deliverables: ["Bi-weekly mentorship office hours", "Career and university pathway guidance", "Community Discord/WhatsApp access"]
      }
    ],
    keyCapabilities: [
      { title: "Project-Centric Learning", description: "Zero passive lectures. Every student builds, deploys, and publishes actual working web projects and apps.", metric: "100% Hands-On" },
      { title: "Real Developer Tooling", description: "Students learn GitHub, modern code editors, Figma, and cloud hosting from day one.", metric: "Industry Standard" },
      { title: "Confidence & Pitch Presentation", description: "Fostering presentation skills, public speaking, and the ability to articulate technical ideas clearly.", metric: "Pitch Ready" },
      { title: "Safe & Inspiring Community", description: "Cultivating a supportive, collaborative peer environment where curious young minds thrive.", metric: "Supportive Network" }
    ],
    typicalProcess: [
      { step: "01", name: "Enrollment & Builder Orientation", description: "Welcoming students, setting up their development environments, and introducing the core cohort challenge.", timeline: "Week 1" },
      { step: "02", name: "Foundational Code & Design Sprints", description: "Interactive daily/weekly lessons building component blocks, responsive layouts, and interactive logic.", timeline: "Weeks 2–4" },
      { step: "03", name: "Capstone Project Conception", description: "Students select a real-world problem they care about and design a solution under mentor supervision.", timeline: "Week 5" },
      { step: "04", name: "Building, Polishing & Deploying", description: "Writing code, debugging edge cases, and pushing their live projects to custom public URLs.", timeline: "Weeks 6–7" },
      { step: "05", name: "Youth Showcase & Demo Day", description: "Presenting projects to family, peers, and tech judges, followed by official certification awards.", timeline: "Week 8" }
    ],
    targetAudience: [
      { profile: "High School & College Students (Ages 14–22)", description: "Passionate young individuals eager to learn software engineering, game design, and startup building." },
      { profile: "Forward-Thinking Schools & Educational Institutions", description: "Schools seeking to offer modern, industry-accredited STEM and digital innovation extracurriculars." },
      { profile: "Parents Seeking Future-Ready Skills", description: "Parents wanting their children to develop computational thinking, creativity, and career leverage." }
    ],
    relevantUseCases: [
      {
        clientType: "Colombo High School Innovation Cohort",
        challenge: "School offered basic computer science but students lacked real-world web development and UI/UX experience.",
        solution: "Ran a 6-week YEQARI Youth Innovation Bootcamp where 35 students learned Figma, HTML/CSS, and JavaScript.",
        outcome: "Every student published a live portfolio site, and 4 teams created working web apps submitted to regional competitions."
      },
      {
        clientType: "Youth Community STEM Initiative",
        challenge: "Underrepresented teenage students lacked access to tech mentors and laptop development tools.",
        solution: "Partnered to deliver an open-access coding weekend with hands-on mentors and cloud-based coding environments.",
        outcome: "94% of students reported high confidence in pursuing computer science degrees and careers."
      }
    ],
    relatedServices: [
      { slug: "technology-training", title: "Technology Training", division: "YEQARI ACADEMY" },
      { slug: "ai-awareness-programs", title: "AI Awareness Programs", division: "YEQARI ACADEMY" },
      { slug: "website-development", title: "Website Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "ai-awareness-programs": {
    id: "ai-awareness-programs",
    slug: "ai-awareness-programs",
    title: "AI Awareness Programs",
    division: "YEQARI ACADEMY",
    divisionSlug: "academy",
    divisionDescription: "Demystifying artificial intelligence, generative tools, and intelligent automation for business leaders, teams, and curious learners.",
    tagline: "Demystify artificial intelligence. Learn how modern AI actually works and how to apply it ethically and effectively.",
    heroSummary: "Artificial intelligence is reshaping every industry, yet widespread confusion and fear persist. YEQARI AI Awareness Programs provide accessible, practical education on how generative AI, large language models, computer vision, and automation actually operate. We equip participants with practical fluency, prompting skills, and critical evaluation frameworks.",
    problemSolved: {
      headline: "Overcoming AI Illiteracy and Operational Paralyzation",
      points: [
        {
          issue: "Fear and Resistance Among Staff",
          impact: "Employees worried about replacement resist AI adoption or quietly use insecure public tools that leak company secrets."
        },
        {
          issue: "Naive Reliance on Untested Outputs",
          impact: "Staff accepting AI-generated figures without critical verification publish flawed reports and make bad business decisions."
        },
        {
          issue: "Lack of Clear Organizational AI Policies",
          impact: "Without structured guidance, employees do not know which data can safely be processed with AI and which cannot."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Applied AI Literacy Workshops",
        description: "Engaging workshops breaking down LLMs, diffusion models, vector databases, and neural networks in accessible, plain language.",
        deliverables: ["Comprehensive AI literacy guides", "Hands-on generative prompting labs", "Enterprise AI acceptable-use templates"]
      },
      {
        title: "Prompt Engineering & Workflow Amplification",
        description: "Teaching non-technical and technical professionals how to write precise, high-yield prompts and structure automated research workflows.",
        deliverables: ["Curated prompt engineering cheat sheets", "Workflow automation templates", "Tool comparison matrices"]
      },
      {
        title: "AI Ethics, Bias & Governance Frameworks",
        description: "Understanding intellectual property rights, data privacy compliance, ethical considerations, and bias mitigation.",
        deliverables: ["AI risk governance checklists", "Data privacy compliance guides", "Certificate of AI Awareness completion"]
      }
    ],
    keyCapabilities: [
      { title: "Zero Jargon Explanation", description: "Demystifying complex neural concepts using intuitive mental models accessible to any team member.", metric: "100% Accessible" },
      { title: "Practical Workflow Boosts", description: "Immediate productivity boosts in writing, research, data analysis, summarizing, and ideation.", metric: "Instant ROI" },
      { title: "Data Security First", description: "Educating staff on enterprise privacy boundaries, preventing confidential client data leakage.", metric: "Security Focused" },
      { title: "Interactive Hands-On Demos", description: "Live interactive experiments testing generative tools, vision models, and automated bots in real time.", metric: "Engaging & Live" }
    ],
    typicalProcess: [
      { step: "01", name: "Organizational AI Survey", description: "Surveying participant familiarity, existing tool usage, primary anxieties, and department goals.", timeline: "Week 1" },
      { step: "02", name: "Customized Program Delivery", description: "Interactive workshop session exploring core AI mechanisms, capabilities, and realistic limitations.", timeline: "Workshop" },
      { step: "03", name: "Hands-On Prompting & Tool Labs", description: "Participants complete guided exercises solving actual daily work tasks with guided AI prompts.", timeline: "Lab Session" },
      { step: "04", name: "Policy & Best Practice Formulation", description: "Helping leadership formalize an official organizational AI Acceptable-Use Policy.", timeline: "Post-Workshop" },
      { step: "05", name: "Resource Kit & Ongoing Updates", description: "Distributing cheat sheets, recorded sessions, and access to quarterly AI update briefings.", timeline: "Ongoing" }
    ],
    targetAudience: [
      { profile: "Corporate Non-Technical Staff", description: "Marketing, HR, legal, operations, and administrative professionals seeking to boost daily output." },
      { profile: "Small Business Owners & Entrepreneurs", description: "Founders wanting to leverage modern AI tools to punch above their weight with smaller teams." },
      { profile: "Educational Institutions & Teachers", description: "Educators needing to understand how to guide students constructively in an AI-pervasive world." }
    ],
    relevantUseCases: [
      {
        clientType: "Mid-Sized Accounting Firm",
        challenge: "Employees were secretly pasting client financial statements into public ChatGPT, risking catastrophic privacy violations.",
        solution: "Delivered firm-wide AI Awareness workshop explaining security boundaries, prompt hygiene, and secure local alternatives.",
        outcome: "Adopted official AI policy and private workflow tools, boosting tax memo drafting speed by 60% with zero privacy breaches."
      },
      {
        clientType: "Chamber of Commerce Business Leaders",
        challenge: "120 local SME business owners felt intimidated by rapid AI advances and did not know how to begin adopting tools.",
        solution: "Conducted an interactive AI Awareness masterclass demonstrating 5 practical ways small businesses can automate admin work.",
        outcome: "92% of attendees successfully implemented an automated AI workflow within 14 days of the session."
      }
    ],
    relatedServices: [
      { slug: "executive-tech-webinars", title: "Executive Tech Webinars", division: "YEQARI ACADEMY" },
      { slug: "technology-training", title: "Technology Training", division: "YEQARI ACADEMY" },
      { slug: "ai-engineering", title: "AI Engineering", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  },

  "technology-training": {
    id: "technology-training",
    slug: "technology-training",
    title: "Technology Training",
    division: "YEQARI ACADEMY",
    divisionSlug: "academy",
    divisionDescription: "Professional development bootcamps, code mastery, cloud certifications, and technical upskilling for modern careers.",
    tagline: "Master modern software engineering, web architectures, and cloud systems with industry practitioners.",
    heroSummary: "Whether you are a developer looking to transition into full-stack engineering or a professional leveling up technical competence, YEQARI Technology Training provides rigorous, production-grade instruction. Learn modern TypeScript, React, Next.js, Node.js, databases, and DevOps directly from engineers who build production systems daily.",
    problemSolved: {
      headline: "The Gap Between Tutorial Hell and Production Engineering",
      points: [
        {
          issue: "Trapped in Shallow Video Tutorials",
          impact: "Following along with simple 'To-Do list' tutorials fails to teach real-world debugging, architecture, and edge cases."
        },
        {
          issue: "Zero Experience with Team Collaboration",
          impact: "Learners don't know how to handle Git merge conflicts, code reviews, staging environments, or production deployments."
        },
        {
          issue: "Outdated Curriculums Ignoring Modern Tooling",
          impact: "Bootcamps teaching outdated libraries leave graduates struggling to pass modern technical interviews."
        }
      ]
    },
    whatYeqariProvides: [
      {
        title: "Full-Stack Production Bootcamp",
        description: "Intensive deep dive into modern TypeScript, React/Next.js, database architecture (PostgreSQL), and cloud deployment.",
        deliverables: ["Full-stack project source code", "Architecture design reviews", "Git workflow mastery"]
      },
      {
        title: "Real-World Code Reviews & Pair Programming",
        description: "Weekly 1-on-1 code reviews with senior developers analyzing code quality, design patterns, security, and performance.",
        deliverables: ["In-depth GitHub pull request reviews", "Pair-programming mentorship sessions", "Refactoring guidance"]
      },
      {
        title: "Portfolio Development & Technical Interview Prep",
        description: "Building production-grade applications that stand out to technical hiring managers, combined with mock system design interviews.",
        deliverables: ["2 deployed capstone portfolio apps", "System design interview guides", "Resume and technical LinkedIn audit"]
      }
    ],
    keyCapabilities: [
      { title: "Type-Safe Full-Stack Mastery", description: "Mastering TypeScript end-to-end, from front-end component state to backend database schema definitions.", metric: "Type Safe" },
      { title: "Production Database Skills", description: "Writing performant SQL queries, managing schema migrations, indexing, and understanding relational integrity.", metric: "PostgreSQL" },
      { title: "DevOps & Cloud Deployment", description: "Deploying production applications to Vercel, AWS, and Docker containers with automated CI/CD.", metric: "CI/CD Mastery" },
      { title: "Industry Practitioner Mentors", description: "Instructors who actively write and deploy software for global clients every single day.", metric: "Real Experience" }
    ],
    typicalProcess: [
      { step: "01", name: "Assessment & Stack Orientation", description: "Assessing existing coding foundations, establishing Git workflows, and configuring modern developer tools.", timeline: "Week 1" },
      { step: "02", name: "Front-End Engineering Mastery", description: "Deep dive into React, Next.js App Router, Tailwind CSS, accessibility, and state management.", timeline: "Weeks 2–4" },
      { step: "03", name: "Back-End & Database Architecture", description: "Designing relational databases, building RESTful/tRPC APIs, authentication, and security middleware.", timeline: "Weeks 5–7" },
      { step: "04", name: "Capstone Application Engineering", description: "Building a complex, multi-tenant web application from scratch with real user authentication and payments.", timeline: "Weeks 8–10" },
      { step: "05", name: "Deployment, Testing & Graduation", description: "Automated end-to-end testing, cloud cutover, portfolio launch, and graduation certificate.", timeline: "Weeks 11–12" }
    ],
    targetAudience: [
      { profile: "Aspiring Full-Stack Developers", description: "Individuals wanting to break into tech with real, production-ready skills that companies actually hire for." },
      { profile: "Junior & Mid-Level Developers", description: "Engineers looking to level up to Senior positions by mastering system design, TypeScript, and cloud practices." },
      { profile: "Technical Career Switchers", description: "Professionals from STEM, finance, or analytical backgrounds transitioning into high-growth software roles." }
    ],
    relevantUseCases: [
      {
        clientType: "Self-Taught Developer Transition",
        challenge: "Candidate was stuck in tutorial hell for 18 months, struggling to build full-stack apps independently or pass technical screenings.",
        solution: "Enrolled in YEQARI Technology Training, built a production-grade SaaS analytics portal with full TypeScript and database migrations.",
        outcome: "Landed a Full-Stack Engineer role at an international tech company with a 130% salary increase."
      },
      {
        clientType: "Junior Developer Upskilling",
        challenge: "Frontend developer lacked backend database and cloud deployment skills, limiting promotion opportunities.",
        solution: "Completed specialized backend & cloud training module, mastering Node.js, PostgreSQL, Docker, and AWS deployment.",
        outcome: "Promoted to Full-Stack Engineer within 4 months and took ownership of the company's core API architecture."
      }
    ],
    relatedServices: [
      { slug: "corporate-training", title: "Corporate Training", division: "YEQARI ACADEMY" },
      { slug: "youth-innovation-programs", title: "Youth Innovation Programs", division: "YEQARI ACADEMY" },
      { slug: "web-app-development", title: "Web Application Development", division: "YEQARI IT INFRASTRUCTURE" }
    ]
  }
};

export const divisionLists = {
  itInfrastructure: [
    { name: "Website Development", slug: "website-development" },
    { name: "Web Application Development", slug: "web-app-development" },
    { name: "Mobile App Development", slug: "mobile-app-development" },
    { name: "Custom Software Development", slug: "custom-software" },
    { name: "UI/UX Engineering", slug: "ui-ux-engineering" },
    { name: "Cloud & IT Infrastructure", slug: "cloud-it-infrastructure" },
    { name: "Software Integration", slug: "software-integration" },
    { name: "Automation & Digital Systems", slug: "automation" },
    { name: "AI Engineering", slug: "ai-engineering" }
  ],
  digital: [
    { name: "Branding & Identity", slug: "branding-identity" },
    { name: "Social Media Management", slug: "social-media-management" },
    { name: "Content Strategy", slug: "content-strategy" },
    { name: "Marketing Strategy", slug: "marketing-strategy" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Creative Content", slug: "creative-content" }
  ],
  academy: [
    { name: "Corporate Training", slug: "corporate-training" },
    { name: "Executive Tech Webinars", slug: "executive-tech-webinars" },
    { name: "Youth Innovation Programs", slug: "youth-innovation-programs" },
    { name: "AI Awareness Programs", slug: "ai-awareness-programs" },
    { name: "Technology Training", slug: "technology-training" }
  ]
};
