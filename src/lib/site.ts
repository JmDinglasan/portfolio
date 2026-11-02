// ============================================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  This is the ONE file you'll change most often. Update text, links,
//  services, and projects below — the rest of the site reads from here.
// ============================================================================

export const site = {
  // --- Basic identity -------------------------------------------------------
  name: "John Mari Dinglasan",
  role: "AI Automation & Integration Developer",
  tagline:
    "I build AI-powered automations, API integrations, and web solutions that help businesses reduce repetitive work and streamline their operations.",

  // --- Contact links --------------------------------------------------------
  email: "jm.dinglasan11@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1jZh-13BCOcL66Rs9KTFYZ6lpSzA_OAhB/view?usp=sharing",
  socials: {
    github: "https://github.com/JmDinglasan",
    linkedin: "https://www.linkedin.com/in/jm-dinglasan/",
  },

  // --- Quick facts (honest credibility strip under the hero) ---------------
  // No vanity metrics — just true, scannable positioning statements.
  quickFacts: [
    { label: "Focus", value: "AI Automation & Integrations" },
    { label: "Core stack", value: "n8n · Next.js · APIs · LLMs" },
    { label: "Availability", value: "Freelance · Remote" },
  ],

  // --- About ---------------------------------------------------------------
  about: [
    "Developer specializing in AI automation, business process automation, API integrations, and web technologies.",
    "I focus on the business problem — connecting the tools a company already uses so their team spends less time on manual, repetitive work.",
    "Currently building real-world automation and integration projects.",
  ],

  // --- Services (Section 3 of the plan) ------------------------------------
  services: [
    {
      title: "AI Automation",
      description:
        "n8n workflows, AI-powered processes, and automated business operations that run without manual effort.",
    },
    {
      title: "API & System Integrations",
      description:
        "Connecting CRMs, forms, databases, communication tools, and other systems that don't natively talk to each other.",
    },
    {
      title: "Web Development",
      description:
        "Fast, modern websites, landing pages, and custom web solutions built with Next.js and React.",
    },
    {
      title: "AI Solutions",
      description:
        "AI agents, LLM integrations, and AI-assisted workflows that add smart decision-making to business processes.",
    },
  ],

  // --- Process (How I Work) ------------------------------------------------
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Understand your current process and identify the highest-impact automation opportunities.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Map the workflow, integrations, and technical architecture before building anything.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop the solution and integrations end to end.",
    },
    {
      step: "04",
      title: "Test",
      description: "Validate the workflow against real-world scenarios and edge cases.",
    },
    {
      step: "05",
      title: "Deploy",
      description: "Ship the solution and hand over clear documentation and support.",
    },
  ],

  // --- What I Build (capabilities, framed as offerings) --------------------
  // Generic solution types — what a client can hire me to build. No specific
  // client engagements are described here (that stays in interviews).
  capabilities: [
    {
      title: "AI Voice Agents",
      problem: "Customers wait on hold for simple, repetitive questions.",
      build:
        "A conversational voice agent that verifies callers, answers using your live data, and hands off to a human the moment it matters.",
      outcome:
        "Faster answers, shorter queues, and staff freed up for the calls that actually need them.",
      technologies: ["ElevenLabs", "LLMs", "Twilio / SIP", "REST APIs", "Webhooks"],
    },
    {
      title: "Support Chatbots",
      problem:
        "Repetitive messages pile up across Messenger, web chat, and social.",
      build:
        "A chatbot that handles FAQs and self-service and routes only the cases that need a person — with a proper live-agent handoff.",
      outcome:
        "Most inquiries resolved automatically; your team focuses on what's left.",
      technologies: ["n8n", "LLMs", "Messenger API", "Supabase", "Webhooks"],
    },
    {
      title: "Workflow Automation",
      problem:
        "Your team copies data between tools and chases follow-ups by hand.",
      build:
        "An automated pipeline that connects your forms, CRM, spreadsheets, and notifications so the busywork runs itself.",
      outcome:
        "Hours of manual work removed every week, with nothing slipping through the cracks.",
      technologies: ["n8n", "GoHighLevel", "Google Workspace", "REST APIs", "Webhooks"],
    },
    {
      title: "AI-Powered Integrations",
      problem: "The tools you already use don't talk to each other.",
      build:
        "Custom API integrations — often with an AI layer for qualification, routing, or summarization — that keep your systems in sync.",
      outcome: "One connected flow instead of scattered, disconnected tools.",
      technologies: ["REST APIs", "Webhooks", "LLMs", "Claude", "n8n"],
    },
  ],

  // --- Currently Building (honest "activity" section) ----------------------
  currentlyBuilding:
    "I'm currently working on two automation and integration projects focused on improving business workflows using AI, APIs, and automation.",

  // --- Technologies (only list what you can actually discuss) --------------
  technologies: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "n8n",
    "GoHighLevel",
    "REST APIs",
    "Webhooks",
    "LLMs / AI",
    "Google Workspace",
    "GitHub",
    "Vercel",
  ],
};

export type Capability = (typeof site.capabilities)[number];
export type Service = (typeof site.services)[number];
