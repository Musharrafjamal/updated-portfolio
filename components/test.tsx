"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Database,
  Cloud,
  Server,
  Globe,
  Braces,
  FileCode,
  Figma,
  Terminal,
  GitBranch,
  Package,
  Cpu,
  X,
  ExternalLink,
} from "lucide-react"

// Tool data
const tools = [
  {
    id: "react",
    name: "React",
    icon: <Braces className="h-full w-full" />,
    color: "#61DAFB",
    description: "A JavaScript library for building user interfaces with a component-based architecture.",
    codeSnippet: `function Welcome() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    relatedTools: ["nextjs", "typescript", "vscode"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: <Server className="h-full w-full" />,
    color: "#68A063",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine for building server-side applications.",
    codeSnippet: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,
    relatedTools: ["express", "mongodb", "typescript"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <FileCode className="h-full w-full" />,
    color: "#3178C6",
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    codeSnippet: `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isActive: true
  };
}

const newUser = createUser({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: false
});`,
    relatedTools: ["react", "nextjs", "vscode"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <Globe className="h-full w-full" />,
    color: "#000000",
    description:
      "The React framework for production that gives you the best developer experience with all the features you need.",
    codeSnippet: `// app/page.tsx
export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>Welcome to Next.js 13</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}`,
    relatedTools: ["react", "vercel", "typescript"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: <Database className="h-full w-full" />,
    color: "#4DB33D",
    description:
      "A document database with the scalability and flexibility that you want with the querying and indexing that you need.",
    codeSnippet: `// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    
    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };
    const movie = await movies.findOne(query);
    
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);`,
    relatedTools: ["nodejs", "express", "mongoose"],
  },
  {
    id: "docker",
    name: "Docker",
    icon: <Package className="h-full w-full" />,
    color: "#2496ED",
    description: "A platform for developing, shipping, and running applications in containers.",
    codeSnippet: `# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]`,
    relatedTools: ["kubernetes", "github-actions", "aws"],
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: <Code className="h-full w-full" />,
    color: "#007ACC",
    description: "A lightweight but powerful source code editor which runs on your desktop.",
    codeSnippet: `// settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}`,
    relatedTools: ["git", "eslint", "prettier"],
  },
  {
    id: "git",
    name: "Git",
    icon: <GitBranch className="h-full w-full" />,
    color: "#F05032",
    description:
      "A free and open source distributed version control system designed to handle everything from small to very large projects.",
    codeSnippet: `# Create a new branch and switch to it
git checkout -b feature/new-feature

# Make changes and commit them
git add .
git commit -m "Add new feature"

# Push to remote repository
git push origin feature/new-feature

# Create a pull request (via GitHub UI)
# After review and approval, merge and clean up
git checkout main
git pull
git branch -d feature/new-feature`,
    relatedTools: ["github", "vscode", "github-actions"],
  },
  {
    id: "figma",
    name: "Figma",
    icon: <Figma className="h-full w-full" />,
    color: "#F24E1E",
    description: "A collaborative interface design tool that's taking over the UI/UX world.",
    codeSnippet: `// Example of using Figma API with JavaScript
const figmaApiKey = "your-figma-api-key";
const fileKey = "your-file-key";

fetch(\`https://api.figma.com/v1/files/\${fileKey}\`, {
  method: "GET",
  headers: {
    "X-Figma-Token": figmaApiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log("Figma file data:", data);
  // Process Figma file data
})
.catch(error => console.error("Error fetching Figma file:", error));`,
    relatedTools: ["tailwind", "react", "storybook"],
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <Cpu className="h-full w-full" />,
    color: "#06B6D4",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    codeSnippet: `// Example React component with Tailwind CSS
export default function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        className="w-full" 
        src="/placeholder.svg" 
        alt="Card image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Card Title
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full 
          px-3 py-1 text-sm font-semibold text-gray-700 
          mr-2 mb-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full 
          px-3 py-1 text-sm font-semibold text-gray-700 
          mr-2 mb-2">
          #tag2
        </span>
      </div>
    </div>
  );
}`,
    relatedTools: ["react", "nextjs", "figma"],
  },
  {
    id: "aws",
    name: "AWS",
    icon: <Cloud className="h-full w-full" />,
    color: "#FF9900",
    description: "A comprehensive and broadly adopted cloud platform, offering over 200 fully featured services.",
    codeSnippet: `// AWS SDK for JavaScript example
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Upload a file to S3
const uploadParams = {
  Bucket: 'my-bucket',
  Key: 'my-file.txt',
  Body: 'Hello World!'
};

s3.upload(uploadParams, (err, data) => {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});`,
    relatedTools: ["docker", "terraform", "serverless"],
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: <Terminal className="h-full w-full" />,
    color: "#000000",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    codeSnippet: `// vercel.json configuration
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "env": {
    "DATABASE_URL": "@database_url",
    "API_KEY": "@api_key"
  }
}`,
    relatedTools: ["nextjs", "react", "tailwind"],
  },
]

export default function CircularToolSelection() {
  const [selectedTool, setSelectedTool] = useState<any>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setContainerSize({ width, height })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Select a tool
  const handleSelectTool = (tool: any) => {
    setSelectedTool(tool)
    setIsDetailOpen(true)
  }

  // Close detail view
  const handleCloseDetail = () => {
    setIsDetailOpen(false)
  }

  // Calculate positions in a circle
  const getToolPosition = (index: number, total: number) => {
    const radius = Math.min(containerSize.width, containerSize.height) * 0.35
    const angle = (index / total) * 2 * Math.PI
    const x = radius * Math.cos(angle - Math.PI / 2)
    const y = radius * Math.sin(angle - Math.PI / 2)
    return { x, y }
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
        {/* Central circle */}
        <motion.div
          className="absolute w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center backdrop-blur-md border border-slate-600"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <div className="text-white text-center">
            <Code className="w-8 h-8 mx-auto" />
            <div className="text-xs mt-1">Tools</div>
          </div>
        </motion.div>

        {/* Tool items in a circle */}
        {tools.map((tool, index) => {
          const position = getToolPosition(index, tools.length)
          return (
            <motion.div
              key={tool.id}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: position.x,
                y: position.y,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <motion.button
                className={`w-16 h-16 rounded-full flex items-center justify-center`}
                style={{
                  backgroundColor: `${tool.color}20`,
                  border: `2px solid ${tool.color}`,
                } as React.CSSProperties}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 15px ${tool.color}80`,
                } as any}
                onClick={() => handleSelectTool(tool)}
              >
                <div className="text-white" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
              </motion.button>
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="text-white text-sm font-medium">{tool.name}</div>
              </motion.div>
            </motion.div>
          )
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {tools.map((_, index) => {
            const position = getToolPosition(index, tools.length)
            return (
              <motion.line
                key={`line-${index}`}
                x1="0"
                y1="0"
                x2={position.x}
                y2={position.y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.05 }}
              />
            )
          })}
        </svg>

        {/* Detail view */}
        <AnimatePresence>
          {isDetailOpen && selectedTool && (
            <motion.div
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md z-10 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-slate-800 rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl border border-slate-700"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Header */}
                <div
                  className="p-6 flex items-center justify-between"
                  style={{ backgroundColor: `${selectedTool.color}20` } as React.CSSProperties}
                >
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: selectedTool.color } as React.CSSProperties}
                    >
                      <div className="text-slate-900 w-6 h-6">{selectedTool.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedTool.name}</h2>
                      <p className="text-slate-300">{selectedTool.description}</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-white transition-colors" onClick={handleCloseDetail}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Code editor */}
                  <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                    <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-xs text-slate-400 font-mono">
                        {selectedTool.name.toLowerCase()}.{selectedTool.id === "docker" ? "dockerfile" : "js"}
                      </div>
                    </div>
                    <div className="p-4 font-mono text-sm text-slate-300 overflow-auto max-h-80">
                      <pre className="whitespace-pre-wrap">{selectedTool.codeSnippet}</pre>
                    </div>
                  </div>

                  {/* Related tools */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Related Tools</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedTool.relatedTools.map((relatedId: any) => {
                        const relatedTool = tools.find((t) => t.id === relatedId)
                        if (!relatedTool) return null

                        return (
                          <motion.button
                            key={relatedTool.id}
                            className="flex items-center p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelectTool(relatedTool)}
                          >
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                              style={{ backgroundColor: relatedTool.color }}
                            >
                              <div className="text-slate-900 w-4 h-4">{relatedTool.icon}</div>
                            </div>
                            <div className="text-white text-sm font-medium">{relatedTool.name}</div>
                          </motion.button>
                        )
                      })}
                    </div>

                    {/* Documentation link */}
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Documentation
                      </a>
                    </div>

                    {/* Features */}
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white mb-3">Key Features</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2"></div>
                          <span>Feature one related to {selectedTool.name}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2"></div>
                          <span>Another important capability</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2"></div>
                          <span>Third key feature of this tool</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

