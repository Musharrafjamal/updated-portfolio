import { InfiniteSlider } from "../ui/others/infinite-slider";
import {
  React,
  Appwrite,
  Babel,
  BunJs,
  ClaudeAI,
  CSS,
  HeadlessUI,
  HTML5,
  JavaScript,
  JQuery,
  NextJs,
  NextJsWordmark,
  Python,
  TypeScript,
  Redux,
  ReactRouter,
  Sass,
  TailwindCSS,
  ExpressJsDark,
  ExpressJsLight,
  Firebase,
  GoogleCloud,
  NestJS,
  Netlify2,
  NodeJs,
  Prisma,
  Render,
  Railway,
  Supabase,
  VercelDarkWordmark,
  VercelLightWordmark,
  MongoDB,
  PostgreSQL,
  Redis,
  Canva,
  Figma,
  Framer,
  Linux,
  Android,
  ChatGPT,
  DeepSeek,
  Docker,
  ESLint,
  GitHubCopilot,
  Insomnia,
  NPMWordmark,
  Postman,
  ViteJS,
  Zod,
  GitHubLight,
  GitHubDark,
  Git,
  Jira,
  Notion,
  VisualStudioCode,
  Bash,
  PowerShell,
  ShadcnUI,
  WebRTC,
} from "developer-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { GradientText } from "../ui/gradient-text";
import { Brush, DraftingCompass, Scissors, Swords } from "lucide-react";

// Define types for our tool objects
interface Tool {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: (props: any) => ReactNode;
  needsLightBg?: boolean;
}

const Tools = () => {
  const { theme } = useTheme();

  // Frontend tools
  const frontendTools: Tool[] = [
    {
      id: "html5",
      title: "HTML5",
      description: "Markup language for creating web pages and applications",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: HTML5,
    },
    {
      id: "css",
      title: "CSS",
      description: "Style sheet language for designing web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: CSS,
    },
    {
      id: "javascript",
      title: "JavaScript",
      description: "Programming language for web development",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: JavaScript,
    },
    {
      id: "typescript",
      title: "TypeScript",
      description: "Typed superset of JavaScript",
      link: "https://www.typescriptlang.org/",
      icon: TypeScript,
    },
    {
      id: "react",
      title: "React",
      description: "JavaScript library for building user interfaces",
      link: "https://reactjs.org/",
      icon: React,
    },
    {
      id: "nextjs",
      title: "Next.js",
      description: "React framework for production",
      link: "https://nextjs.org/",
      icon: NextJsWordmark,
      needsLightBg: true,
    },
    {
      id: "reactrouter",
      title: "React Router",
      description: "Routing library for React",
      link: "https://reactrouter.com/",
      icon: ReactRouter,
      needsLightBg: true,
    },
    {
      id: "redux",
      title: "Redux",
      description: "State management for JavaScript apps",
      link: "https://redux.js.org/",
      icon: Redux,
    },
    {
      id: "tailwindcss",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework",
      link: "https://tailwindcss.com/",
      icon: TailwindCSS,
    },
    {
      id: "sass",
      title: "Sass",
      description: "CSS preprocessor scripting language",
      link: "https://sass-lang.com/",
      icon: Sass,
    },
    {
      id: "jquery",
      title: "jQuery",
      description: "JavaScript library for DOM manipulation",
      link: "https://jquery.com/",
      icon: JQuery,
    },
    {
      id: "headlessui",
      title: "Headless UI",
      description: "Unstyled UI components for React",
      link: "https://headlessui.dev/",
      icon: HeadlessUI,
    },
    {
      id: "shadcnui",
      title: "shadcn/ui",
      description: "Re-usable components built with Radix UI and Tailwind CSS",
      link: "https://ui.shadcn.com/",
      icon: ShadcnUI,
      needsLightBg: true,
    },
  ];

  // Backend tools
  const backendTools: Tool[] = [
    {
      id: "nodejs",
      title: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine",
      link: "https://nodejs.org/",
      icon: NodeJs,
    },
    {
      id: "expressjs",
      title: "Express.js",
      description: "Web application framework for Node.js",
      link: "https://expressjs.com/",
      icon: theme === "dark" ? ExpressJsLight : ExpressJsDark,
    },
    {
      id: "nestjs",
      title: "NestJS",
      description: "Progressive Node.js framework",
      link: "https://nestjs.com/",
      icon: NestJS,
    },
    {
      id: "python",
      title: "Python",
      description: "General-purpose programming language",
      link: "https://www.python.org/",
      icon: Python,
    },
    {
      id: "mongodb",
      title: "MongoDB",
      description: "NoSQL document database",
      link: "https://www.mongodb.com/",
      icon: MongoDB,
    },
    {
      id: "postgresql",
      title: "PostgreSQL",
      description: "Open source relational database",
      link: "https://www.postgresql.org/",
      icon: PostgreSQL,
    },
    {
      id: "redis",
      title: "Redis",
      description: "In-memory data structure store",
      link: "https://redis.io/",
      icon: Redis,
    },
    {
      id: "prisma",
      title: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript",
      link: "https://www.prisma.io/",
      icon: Prisma,
      needsLightBg: true,
    },
  ];

  // Cloud and deployment tools
  const cloudTools: Tool[] = [
    {
      id: "firebase",
      title: "Firebase",
      description: "App development platform by Google",
      link: "https://firebase.google.com/",
      icon: Firebase,
    },
    {
      id: "googlecloud",
      title: "Google Cloud",
      description: "Cloud computing services by Google",
      link: "https://cloud.google.com/",
      icon: GoogleCloud,
    },
    {
      id: "supabase",
      title: "Supabase",
      description: "Open source Firebase alternative",
      link: "https://supabase.io/",
      icon: Supabase,
    },
    {
      id: "vercel",
      title: "Vercel",
      description: "Platform for frontend frameworks and static sites",
      link: "https://vercel.com/",
      icon: theme === "dark" ? VercelLightWordmark : VercelDarkWordmark,
    },
    {
      id: "netlify",
      title: "Netlify",
      description: "Platform for web projects",
      link: "https://www.netlify.com/",
      icon: Netlify2,
      needsLightBg: true,
    },
    {
      id: "railway",
      title: "Railway",
      description: "Infrastructure platform for developers",
      link: "https://railway.app/",
      icon: Railway,
      needsLightBg: true,
    },
    {
      id: "render",
      title: "Render",
      description: "Unified cloud for web apps and websites",
      link: "https://render.com/",
      icon: Render,
      needsLightBg: true,
    },
    {
      id: "appwrite",
      title: "Appwrite",
      description: "Open source backend server for web and mobile apps",
      link: "https://appwrite.io/",
      icon: Appwrite,
    },
  ];

  // Development tools
  const devTools: Tool[] = [
    {
      id: "git",
      title: "Git",
      description: "Distributed version control system",
      link: "https://git-scm.com/",
      icon: Git,
    },
    {
      id: "github",
      title: "GitHub",
      description:
        "Code hosting platform for version control and collaboration",
      link: "https://github.com/",
      icon: theme === "dark" ? GitHubLight : GitHubDark,
    },
    {
      id: "vscode",
      title: "Visual Studio Code",
      description: "Code editor by Microsoft",
      link: "https://code.visualstudio.com/",
      icon: VisualStudioCode,
    },
    {
      id: "docker",
      title: "Docker",
      description:
        "Platform for developing, shipping, and running applications",
      link: "https://www.docker.com/",
      icon: Docker,
    },
    {
      id: "eslint",
      title: "ESLint",
      description: "Static code analysis tool for JavaScript",
      link: "https://eslint.org/",
      icon: ESLint,
    },
    {
      id: "babel",
      title: "Babel",
      description: "JavaScript compiler",
      link: "https://babeljs.io/",
      icon: Babel,
    },
    {
      id: "vitejs",
      title: "Vite.js",
      description: "Next generation frontend tooling",
      link: "https://vitejs.dev/",
      icon: ViteJS,
    },
    {
      id: "bunjs",
      title: "Bun.js",
      description: "JavaScript runtime, bundler, and package manager",
      link: "https://bun.sh/",
      icon: BunJs,
    },
    {
      id: "npm",
      title: "npm",
      description: "Package manager for JavaScript",
      link: "https://www.npmjs.com/",
      icon: NPMWordmark,
    },
    {
      id: "zod",
      title: "Zod",
      description: "TypeScript-first schema validation",
      link: "https://zod.dev/",
      icon: Zod,
    },
    {
      id: "postman",
      title: "Postman",
      description: "API platform for building and using APIs",
      link: "https://www.postman.com/",
      icon: Postman,
    },
    {
      id: "insomnia",
      title: "Insomnia",
      description: "API client and design tool",
      link: "https://insomnia.rest/",
      icon: Insomnia,
    },
    {
      id: "webrtc",
      title: "WebRTC",
      description: "Real-time communication for the web",
      link: "https://webrtc.org/",
      icon: WebRTC,
    },
  ];

  // AI and design tools
  const aiAndDesignTools: Tool[] = [
    {
      id: "claudeai",
      title: "Claude AI",
      description: "AI assistant by Anthropic",
      link: "https://www.anthropic.com/claude",
      icon: ClaudeAI,
    },
    {
      id: "chatgpt",
      title: "ChatGPT",
      description: "AI chatbot by OpenAI",
      link: "https://chat.openai.com/",
      icon: ChatGPT,
    },
    {
      id: "deepseek",
      title: "DeepSeek",
      description: "AI research and applications",
      link: "https://deepseek.com/",
      icon: DeepSeek,
    },
    {
      id: "githubcopilot",
      title: "GitHub Copilot",
      description: "AI pair programmer",
      link: "https://github.com/features/copilot",
      icon: GitHubCopilot,
      needsLightBg: true,
    },
    {
      id: "figma",
      title: "Figma",
      description: "Collaborative interface design tool",
      link: "https://www.figma.com/",
      icon: Figma,
    },
    {
      id: "framer",
      title: "Framer",
      description: "Interactive design tool",
      link: "https://www.framer.com/",
      icon: Framer,
      needsLightBg: true,
    },
    {
      id: "canva",
      title: "Canva",
      description: "Graphic design platform",
      link: "https://www.canva.com/",
      icon: Canva,
    },
  ];

  // Other tools
  const otherTools: Tool[] = [
    {
      id: "linux",
      title: "Linux",
      description: "Open source operating system",
      link: "https://www.linux.org/",
      icon: Linux,
    },
    {
      id: "android",
      title: "Android",
      description: "Mobile operating system",
      link: "https://www.android.com/",
      icon: Android,
    },
    {
      id: "bash",
      title: "Bash",
      description: "Unix shell and command language",
      link: "https://www.gnu.org/software/bash/",
      icon: Bash,
    },
    {
      id: "powershell",
      title: "PowerShell",
      description: "Task automation and configuration management framework",
      link: "https://docs.microsoft.com/en-us/powershell/",
      icon: PowerShell,
    },
    {
      id: "notion",
      title: "Notion",
      description: "All-in-one workspace",
      link: "https://www.notion.so/",
      icon: Notion,
    },
    {
      id: "jira",
      title: "Jira",
      description: "Issue tracking product",
      link: "https://www.atlassian.com/software/jira",
      icon: Jira,
    },
  ];

  // Combine all tools
  const allTools = [
    ...frontendTools,
    ...backendTools,
    ...cloudTools,
    ...devTools,
    ...aiAndDesignTools,
    ...otherTools,
  ];

  // Helper function to render icon with proper dark/light mode handling
  const renderIcon = (tool: Tool) => {
    const Icon = tool.icon;

    if (theme === "dark" && tool.needsLightBg) {
      return <Icon className="bg-white rounded-lg p-2" />;
    }

    return <Icon />;
  };

  // Group tools for the sliders
  const firstSliderTools = allTools.slice(0, Math.ceil(allTools.length / 2));
  const secondSliderTools = allTools.slice(Math.ceil(allTools.length / 2));

  return (
    <div className="flex flex-col space-y-10 px-10 mt-10">
      <h2 className="text-4xl font-bold text-center mt-10 font-moonWalk flex items-center justify-center gap-2">
        <Swords size={30} style={{ transform: "scaleX(-1)" }} />
        Tools
        <Swords size={30} />
      </h2>
      <InfiniteSlider speed={50} gap={32} speedOnHover={20}>
        {firstSliderTools.map((tool) => (
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link key={tool.id} href={tool.link} className="cursor-none">
                  {renderIcon(tool)}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-100/50 p-4 rounded-lg backdrop-blur-md border-zinc-200 text-black">
                <div className="bg-transparent text-lg font-bold font-moonWalk text-zinc-700">
                  {tool.title}
                </div>
                <p className="text-sm">{tool.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </InfiniteSlider>

      <InfiniteSlider speed={50} gap={32} speedOnHover={20} reverse>
        {secondSliderTools.map((tool) => (
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link key={tool.id} href={tool.link} className="cursor-none">
                  {renderIcon(tool)}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-100/50 p-4 rounded-lg backdrop-blur-md border-zinc-200 text-black">
                <div className="bg-transparent text-lg font-bold font-moonWalk text-zinc-700">
                  {tool.title}
                </div>
                <p className="text-sm">{tool.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default Tools;
