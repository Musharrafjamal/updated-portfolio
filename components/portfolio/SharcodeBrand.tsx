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
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M24 7H13L7 13L25 19L19 25H8"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          className="sharcode-accent"
          x="25"
          y="5"
          width="4"
          height="4"
          rx="1"
          fill="var(--sharcode-accent, #d6f46a)"
        />
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
