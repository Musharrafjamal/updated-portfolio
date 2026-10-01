import type { ComponentPropsWithoutRef } from "react";

type PersonalBrandProps = Omit<ComponentPropsWithoutRef<"span">, "children">;

/** Non-interactive brand lockup. Wrap in a link when used as navigation. */
export default function PersonalBrand({
  className = "",
  style,
  ...props
}: PersonalBrandProps) {
  return (
    <span
      {...props}
      className={`personal-brand ${className}`.trim()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--personal-brand-gap, 10px)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <svg
        className="personal-mark"
        width="30"
        height="30"
        viewBox="0 0 42 46"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g>
          <path
            d="M7 34V9L20 23L33 9V29C33 38 25 41 18 35"
            stroke="currentColor"
            strokeWidth="6.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M29.75 9H36.25V15.5Z"
            fill="var(--personal-accent, #d6f46a)"
          />
        </g>
      </svg>
      <span
        className="personal-word"
        style={{
          fontSize: "var(--personal-word-size, 18px)",
          fontWeight: 650,
          letterSpacing: "-0.055em",
        }}
      >
        <span>musharraf</span>{" "}
        <span>
          jamal<span className="personal-period">.</span>
        </span>
      </span>
    </span>
  );
}
