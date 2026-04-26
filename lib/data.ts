export const projects = [
  {
    id: '01',
    slug: 'project-alpha',
    title: 'Project Alpha',
    description:
      'Distributed tracing system built to surface latency regressions across 12 microservices before they reached customers.',
    chips: ['Go', 'Kubernetes', 'gRPC', 'OpenTelemetry'],
    accentChip: 'Observability',
    outcomes: [
      { value: '↓ 40%', label: 'p99 latency' },
      { value: '12', label: 'services instrumented' },
    ],
    meta: {
      role: 'Application Engineer',
      year: '2023',
      team: '[ N engineers ]',
      stack: 'Go · Kubernetes · gRPC · OpenTelemetry',
    },
  },
  {
    id: '02',
    slug: 'project-beta',
    title: 'Project Beta',
    description:
      'ML pipeline orchestration layer handling 3M+ events daily with guaranteed SLAs and automatic failure recovery.',
    chips: ['Python', 'TensorFlow', 'Apache Airflow', 'BigQuery'],
    accentChip: 'ML Platform',
    outcomes: [
      { value: '3M+', label: 'events/day' },
      { value: '99.9%', label: 'SLA' },
    ],
    meta: {
      role: 'Application Engineer',
      year: '2023',
      team: '[ N engineers ]',
      stack: 'Python · TensorFlow · Airflow · BigQuery',
    },
  },
  {
    id: '03',
    slug: 'project-gamma',
    title: 'Project Gamma',
    description:
      'Internal developer tooling platform that reduced time-to-first-deploy for new engineers from days to under two hours.',
    chips: ['TypeScript', 'React', 'PostgreSQL', 'Terraform'],
    accentChip: 'Dev Tooling',
    outcomes: [
      { value: '200+', label: 'engineers onboarded' },
      { value: '↓ 80%', label: 'setup time' },
    ],
    meta: {
      role: 'Application Engineer',
      year: '2024',
      team: '[ N engineers ]',
      stack: 'TypeScript · React · PostgreSQL · Terraform',
    },
  },
];

export const stackGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Go', depth: 'production', deep: true },
      { name: 'Java', depth: 'production', deep: true },
      { name: 'Python', depth: 'production', deep: true },
      { name: 'TypeScript', depth: 'proficient', deep: false },
      { name: 'Rust', depth: 'learning', deep: false },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Kubernetes', depth: 'production', deep: true },
      { name: 'GCP', depth: 'production', deep: true },
      { name: 'Terraform', depth: 'production', deep: true },
      { name: 'Kafka', depth: 'proficient', deep: false },
      { name: 'Redis', depth: 'proficient', deep: false },
    ],
  },
  {
    title: 'Observability',
    items: [
      { name: 'OpenTelemetry', depth: 'production', deep: true },
      { name: 'Prometheus', depth: 'production', deep: true },
      { name: 'Grafana', depth: 'production', deep: true },
      { name: 'Jaeger', depth: 'proficient', deep: false },
    ],
  },
  {
    title: 'Process',
    items: [
      { name: 'RFC authoring', depth: 'authored', deep: true },
      { name: 'Architecture review', depth: 'led', deep: true },
      { name: 'ADRs', depth: 'authored', deep: true },
      { name: 'On-call design', depth: 'led', deep: true },
    ],
  },
];

export const experience = [
  {
    role: 'Application Engineer',
    company: 'Google',
    period: '2022 – present',
    bullets: [
      '[ Key responsibility — quantify scope and impact ]',
      '[ Key responsibility — what you built or improved ]',
      '[ Key responsibility — team or org-level outcome ]',
    ],
  },
  {
    role: 'Software Engineer II',
    company: '[ Previous Company ]',
    period: '2020 – 2022',
    bullets: ['[ Key responsibility ]', '[ Key responsibility ]'],
  },
  {
    role: 'Software Engineer I',
    company: '[ Startup ]',
    period: '2018 – 2020',
    bullets: ['[ Key responsibility ]'],
  },
  {
    role: '[ Degree ] in [ Field ]',
    company: '[ University ]',
    period: '[ Year ] – [ Year ]',
    bullets: [],
  },
];

export const posts = [
  {
    slug: 'distributed-tracer',
    title: 'How I built a distributed tracer at Google — and what I\'d do differently',
    tag: 'Engineering',
    date: 'Apr 2026',
  },
  {
    slug: 'kubernetes-production',
    title: 'Lessons from four years of Kubernetes in production',
    tag: 'Infrastructure',
    date: 'Feb 2026',
  },
  {
    slug: 'rfc-before-code',
    title: 'Why I write the RFC before I write the code',
    tag: 'Process',
    date: 'Nov 2025',
  },
  {
    slug: 'internal-dev-tools',
    title: 'Building internal dev tools people actually want to use',
    tag: 'Engineering',
    date: 'Sep 2025',
  },
  {
    slug: 'oncall-design',
    title: "On-call shouldn't be a hazing ritual: how to design for operational sanity",
    tag: 'Reliability',
    date: 'Jun 2025',
  },
];
