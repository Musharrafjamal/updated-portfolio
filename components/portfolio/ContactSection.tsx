"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from "react";
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react";
import { sendEmail, type EmailFailureCode } from "@/app/actions/send-email";
import "./contact.css";

const emailAddress = "musharrafjamal08@gmail.com";
const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/musharrafjamal8" },
  { label: "GitHub", href: "https://github.com/musharrafjamal" },
  { label: "X / Twitter", href: "https://x.com/musharrafJamal8" },
  { label: "Instagram", href: "https://www.instagram.com/musharraf_codeverse" },
];

type FormStatus = "idle" | "sending" | "success" | "error";
type FieldErrors = { email?: string; message?: string };

export default function ContactSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorCode, setErrorCode] = useState<EmailFailureCode | null>(null);
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "unavailable"
  >("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formPanelRef = useRef<HTMLDivElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    },
    [],
  );

  function focusForm(event: MouseEvent<HTMLButtonElement>) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    emailRef.current?.focus({ preventScroll: true });
    formPanelRef.current?.scrollIntoView({
      block: "start",
      behavior: prefersReducedMotion || event.detail === 0 ? "auto" : "smooth",
    });
  }

  async function copyEmail() {
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("unavailable");
    }
    copyTimeoutRef.current = setTimeout(() => setCopyStatus("idle"), 2500);
  }

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    if (status === "error" || status === "success") {
      setStatus("idle");
      setResponseMessage("");
      setErrorCode(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const email = formData.email.trim();
    const message = formData.message.trim();
    const nextErrors: FieldErrors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (message.length < 10 || message.length > 5000) {
      nextErrors.message = "Use between 10 and 5,000 characters.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      (nextErrors.email ? emailRef : messageRef).current?.focus();
      return;
    }

    setStatus("sending");
    setResponseMessage("");
    setErrorCode(null);
    try {
      const result = await sendEmail({ email, message });
      if (result.success) {
        setStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(result.message);
        setErrorCode(result.code);
      }
    } catch {
      setStatus("error");
      setErrorCode("DELIVERY_FAILED");
      setResponseMessage(
        "Message couldn’t be sent. Retry or email me directly.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="portfolio-contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-shell">
        <div className="contact-section-meta" data-reveal>
          <span>
            <span className="contact-meta-dot" /> Contact
          </span>
          <span className="contact-meta-index">04 / GET IN TOUCH</span>
        </div>

        <div className="contact-heading-row">
          <h2
            id="contact-heading"
            aria-label="Have something in mind?"
            data-contact-heading
            data-motion-heading
          >
            <span className="motion-line">
              <span data-contact-line>Have something</span>
            </span>
            <span className="motion-line">
              <span data-contact-line>
                in mind<span className="contact-heading-dot">?</span>
              </span>
            </span>
          </h2>
          <button
            type="button"
            className="contact-talk-button"
            aria-controls="contact-form-panel"
            aria-label="Go to the contact form"
            onClick={focusForm}
            data-magnetic
            data-contact-cta
            data-cursor="Let's talk"
          >
            <ArrowUpRight aria-hidden="true" className="contact-talk-arrow" />
            <span>Let’s talk</span>
            <span
              className="contact-talk-orbit"
              data-contact-orbit
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="contact-body-grid" data-contact-body>
          <div className="contact-conversation-row" data-contact-intro>
            <h3 className="contact-invitation">Say hello.</h3>
            <div className="contact-email-group">
              <span className="contact-small-label">EMAIL</span>
              <div className="contact-email-row">
                <a
                  href={`mailto:${emailAddress}`}
                  className="contact-email-link text-link"
                >
                  <span className="text-link-label">{emailAddress}</span>
                </a>
                <button
                  type="button"
                  className="contact-copy-button"
                  onClick={copyEmail}
                  aria-label={
                    copyStatus === "copied"
                      ? "Email address copied"
                      : "Copy email address"
                  }
                  title={
                    copyStatus === "copied" ? "Copied!" : "Copy email address"
                  }
                >
                  {copyStatus === "copied" ? (
                    <Check size={16} aria-hidden="true" />
                  ) : (
                    <Copy size={16} aria-hidden="true" />
                  )}
                </button>
              </div>
              <span className="contact-copy-status" aria-live="polite">
                {copyStatus === "copied"
                  ? "Copied to clipboard."
                  : copyStatus === "unavailable"
                    ? "Select the email address to copy it."
                    : ""}
              </span>
            </div>
          </div>

          <div
            id="contact-form-panel"
            className="contact-form-panel"
            ref={formPanelRef}
            data-contact-form
          >
            <div className="contact-form-panel-inner">
              <div className="contact-form-heading">
                <div>
                  <h3 id="contact-form-title">Send a message.</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
              {status === "success" && (
                <div
                  className="contact-success"
                  role="status"
                  aria-live="polite"
                >
                  <span className="contact-success-icon">
                    <Check size={28} aria-hidden="true" />
                  </span>
                  <div>
                    <h4>Message received.</h4>
                    <p>I’ll get back to you by email.</p>
                  </div>
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Send Musharraf a message"
                aria-busy={status === "sending"}
              >
                <fieldset
                  disabled={status === "sending"}
                  className="contact-form-fields"
                >
                  <div
                    className="contact-field contact-email-field"
                    data-contact-field
                  >
                    <label htmlFor="contact-email">
                      Your email <span>*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      maxLength={254}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="contact-field-error"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div
                    className="contact-field contact-message-field"
                    data-contact-field
                  >
                    <label htmlFor="contact-message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      ref={messageRef}
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project…"
                      value={formData.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      maxLength={5000}
                      minLength={10}
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                    />
                    <div className="contact-message-meta">
                      {errors.message ? (
                        <p
                          id="contact-message-error"
                          className="contact-field-error"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      ) : null}
                      <span aria-hidden="true">
                        {formData.message.length.toLocaleString()} / 5,000
                      </span>
                    </div>
                  </div>
                  <div className="contact-submit-row" data-contact-field>
                    <button type="submit" className="contact-submit-button">
                      <span>
                        {status === "sending"
                          ? "Sending message"
                          : "Send message"}
                      </span>
                      {status === "sending" ? (
                        <Loader2
                          size={19}
                          className="contact-loading-icon"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowUpRight size={20} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </fieldset>
                {status === "error" && (
                  <div className="contact-delivery-error">
                    <p className="contact-response-error" role="alert">
                      {responseMessage}
                    </p>
                    {(errorCode === "NOT_CONFIGURED" ||
                      errorCode === "DELIVERY_FAILED") && (
                      <div className="contact-delivery-fallback">
                        <a
                          className="text-link"
                          href={`mailto:${emailAddress}?subject=${encodeURIComponent("Portfolio message")}&body=${encodeURIComponent(`Reply email: ${formData.email}\n\n${formData.message}`)}`}
                        >
                          <span className="text-link-label">
                            Open email draft
                          </span>
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                        <a
                          className="text-link"
                          href={`mailto:${emailAddress}`}
                        >
                          <span className="text-link-label">
                            {emailAddress}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <footer className="contact-footer" data-reveal>
          <div className="contact-signature">
            <span className="contact-signature-name">
              Musharraf Jamal<span aria-hidden="true">✳</span>
            </span>
            <span>FULL-STACK ENGINEERING / AI / DESIGN</span>
          </div>
          <nav className="contact-socials" aria-label="Social profiles">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="text-link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (opens in a new tab)`}
              >
                <span className="text-link-label">{social.label}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <span className="contact-copyright">
            © {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </section>
  );
}
