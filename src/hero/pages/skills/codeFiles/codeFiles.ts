
export const codeFiles = [
    {
        name: "frontend.tsx",
        language: "TypeScript",
        icon: "📱",
        code: `import React from 'react';
import { NextPage } from 'next';

// Tecnologías Frontend
const skills = {
  frameworks: ['React', 'Next.js', 'Vue'],
  styling: ['Tailwind CSS', 'Styled Components', 'Framer Motion'],
  state: ['Redux', 'Zustand', 'TanStack Query'],
  tooling: ['Vite'],
  testing: ['Vitest', 'React Testing Library'],
  uiLibraries: ['Radix UI', 'shadcn/ui'],
  typescript: 'Advanced Level ⚡'
};

export const Frontend: NextPage = () => {
  return <CreativeUI skills={skills} />;
};`,
    },
    {
        name: "backend.js",
        language: "JavaScript",
        icon: "⚙️",
        code: `const express = require('express');
const { PostgreSQL } = require('pg');

// Backend Stack
class BackendDeveloper {
  constructor() {
    this.skills = {
    runtimes: ['Node.js', 'Python'],
    frameworks: ['NestJS', 'Express', 'FastAPI', 'Django'],
    databases: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'],
    apis: ['REST', 'GraphQL', 'WebSocket'],
    auth: ['JWT', 'OAuth2'],
    testing: ['Vitest'],
    };
  }
  
  async buildAPI() {
    return this.skills;
  }
}

module.exports = new BackendDeveloper();`,
    },
    {
        name: "design.css",
        language: "CSS",
        icon: "🎨",
        code: `/* UI/UX Design Skills */

:root {
  --creativity: infinite;
  --tools: Figma, Sketch;
  --animations: advanced;
  --responsive: 100%;
}

.designer {
  design-systems: mastered;
  user-experience: priority;
  accessibility: wcag-aaa;
  motion-design: smooth;
  
  animation: creative-flow 3s ease infinite;
  transform: perspective(1000px) rotateY(10deg);
}

@keyframes creative-flow {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(360deg); }
}`,
    },
    {
        name: "devops.sh",
        language: "Bash",
        icon: "🚀",
        code: `#!/bin/bash

# DevOps & Cloud Skills

CLOUD_PLATFORMS=("AWS (learning)" "Vercel (learning)" "Railway (learning)")
CONTAINERS=("Docker")
CI_CD=("GitHub Actions (learning)" "Jenkins (learning)")
MONITORING=("Grafana (learning)" "Prometheus (learning)")

deploy() {
  echo "🔧 Building application..."
  docker build -t app:latest .
  
  echo "☁️  Deploying to cloud..."
  kubectl apply -f deployment.yaml
  
  echo "✅ Deployment successful!"
  echo "🎉 Application is live!"
}

deploy`,
    },
];