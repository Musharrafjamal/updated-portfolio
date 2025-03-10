"use client";
import {
  Bell,
  Home,
  HelpCircle,
  Settings,
  Shield,
  Mail,
  User,
  FileText,
  Lock,
  Briefcase,
  Folder,
  Brain,
  BriefcaseBusiness,
  Sun,
  Moon,
} from "lucide-react";
import { ExpandableTabs } from "./expandable-tabs";
import { LucideIcon } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { useTheme } from "next-themes";

// Define the TabItem type locally
type Tab = {
  title: string;
  icon: LucideIcon;
  href: string;
  type?: never;
};

type Separator = {
  type: "separator";
  title?: never;
  icon?: never;
};

type TabItem = Tab | Separator;

function DefaultTabs() {
  const tabs: TabItem[] = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Experience", icon: BriefcaseBusiness, href: "#experience" },
    // { type: "separator" as const },
    { title: "Projects", icon: Folder, href: "#projects" },
    { title: "Skills", icon: Brain, href: "#skills" },
    // { title: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <div className="flex gap-1 justify-center items-center fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}


export { DefaultTabs };
