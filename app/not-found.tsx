import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="page-container"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "28px",
      }}
    >
      <span className="eyebrow">404 / A little off track</span>
      <h1
        style={{
          fontSize: "clamp(50px, 9vw, 120px)",
          lineHeight: 1,
          letterSpacing: "-.06em",
          fontWeight: 500,
        }}
      >
        Let’s find
        <br />
        <em>our way back.</em>
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 14 }}>
        This page isn’t here. The good stuff is on the homepage.
      </p>
      <Link href="/" className="pill-button ink-button">
        Back to the portfolio ↗
      </Link>
    </main>
  );
}
