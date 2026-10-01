"use client";

import type { RefObject } from "react";
import { usePortfolioMotion } from "./usePortfolioMotion";

export default function PortfolioMotion({
  root,
}: {
  root: RefObject<HTMLDivElement>;
}) {
  usePortfolioMotion(root);
  return null;
}
