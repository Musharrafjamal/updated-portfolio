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
        viewBox="0 0 42 42"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g transform="translate(1.5 0)">
          <path
            d="M34 3H15C8.4 3 4 7.4 4 14c0 4.8 3 8.3 8 10l11 3.8c1.6.6 2.4 1.4 2.4 2.6 0 1.2-1.1 2-2.9 2H7L3 39h21c7.2 0 12-4.5 12-11 0-4.8-3.2-8.2-8.3-9.9L17 14.5c-1.6-.5-2.4-1.3-2.4-2.5 0-1.2 1.1-2 2.9-2h12.3L34 3Z"
            fill="#20231f"
          />
          <path
            className="sharcode-accent"
            d="m25.6 21.8 7.2 2.5-5.8 4.5c.7-3.1.2-5.3-1.4-7Z"
            fill="var(--sharcode-accent, #d6f46a)"
          />
          <path
            d="m12 21.6 10.8 3.7"
            stroke="var(--paper, #f3f2ed)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
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
