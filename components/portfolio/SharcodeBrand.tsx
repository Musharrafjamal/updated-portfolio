import type { ComponentPropsWithoutRef } from "react";

type SharcodeBrandProps = Omit<ComponentPropsWithoutRef<"span">, "children">;

/** Non-interactive brand lockup. Wrap in a link when used as navigation. */
export default function SharcodeBrand({
  className = "",
  style,
  ...props
}: SharcodeBrandProps) {
  return (
    <span
      {...props}
      className={`sharcode-brand ${className}`.trim()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--sharcode-brand-gap, 10px)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <svg
        className="sharcode-mark"
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="36" height="36" rx="10" fill="#20231f" />
        <g
          stroke="#f3f2ed"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15.2 13.1c-.9-.8-2-1.2-3.3-1.2-2 0-3.4 1.1-3.4 2.7 0 1.6 1.3 2.5 3.3 3l1.1.3c2 .5 3.1 1.6 3.1 3.1 0 2-1.6 3.3-3.9 3.3-1.6 0-3.1-.6-4.1-1.7" />
          <path d="M27.2 13.8c-1-1.2-2.3-1.9-3.9-1.9-3.4 0-5.5 2.5-5.5 6.2s2.1 6.2 5.5 6.2c1.6 0 2.9-.7 3.9-1.9" />
        </g>
      </svg>
      <span
        className="sharcode-word"
        style={{
          fontSize: "var(--sharcode-word-size, 18px)",
          fontWeight: 650,
          letterSpacing: "-0.055em",
        }}
      >
        sharcode
      </span>
    </span>
  );
}
