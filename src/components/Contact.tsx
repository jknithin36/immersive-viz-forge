import { useMemo, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, Copy, Check, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const EMAIL = "sathwikvuppala.cs@gmail.com";
  const PHONE = "+1 571 604 9924";
  const GITHUB = "https://github.com/sathwikvuppala";
  const LINKEDIN = "https://linkedin.com/in/sathwikvuppala";
  const CALENDAR = "#"; // put Calendly/Cal.com link here if you have one

  // tiny UX niceties
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const s = encodeURIComponent(subject || "Hello Sathwik 👋");
    const b = encodeURIComponent(message || "Hi Sathwik,\n\nI’d love to connect about...");
    return `mailto:${EMAIL}?subject=${s}&body=${b}`;
  }, [EMAIL, subject, message]);

  const copy = async (txt: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(txt);
      setCopied(key);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      // fallback: no clipboard permission
      alert(`Copied: ${txt}`);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-nav py-24 bg-[hsl(var(--background))]"
    >
      {/* background layers to match the rest */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.1)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <header className="mb-14 text-center animate-fade-in">
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Get In Touch
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[hsl(var(--primary))]" />
            <span className="h-1 w-10 rounded-full bg-[hsl(var(--secondary))]" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
            I’m open to roles, collaborations, and fun side projects. Pick a lane below—email, call, socials, or book a quick chat.
          </p>
        </header>

        {/* content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: quick message card (no backend, uses mailto) */}
          <Card className="animate-fade-in border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">Send a quick message</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    I usually reply within 24–48 hours.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-3 py-1 text-xs text-[hsl(var(--muted-foreground))]">
                  <CalendarDays className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                  Available
                </span>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-2 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                />
                <textarea
                  rows={6}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-2 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]"
                  >
                    <a href={mailtoHref}>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </a>
                  </Button>
                  {CALENDAR !== "#" && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(CALENDAR, "_blank")}
                      className="border-[hsl(var(--primary))/0.35] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.08]"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Book 15-min chat
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right: contact blocks + socials with copy actions */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* Email */}
            <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[hsl(var(--primary)/0.12)] p-3">
                    <Mail className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Email</h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-[hsl(var(--primary))] underline-offset-4 hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <button
                    onClick={() => copy(EMAIL, "email")}
                    className="rounded-md border border-[hsl(var(--border))] p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))/0.06] hover:text-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[hsl(var(--secondary)/0.18)] p-3">
                    <Phone className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Phone</h3>
                    <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="text-[hsl(var(--foreground))]">
                      {PHONE}
                    </a>
                  </div>
                  <button
                    onClick={() => copy(PHONE, "phone")}
                    className="rounded-md border border-[hsl(var(--border))] p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))/0.08] hover:text-[hsl(var(--secondary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                    aria-label="Copy phone number"
                    title="Copy phone"
                  >
                    {copied === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* GitHub */}
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[hsl(var(--primary)/0.12)] p-3">
                      <Github className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--foreground))]">GitHub</h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">@sathwikvuppala</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* LinkedIn */}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[hsl(var(--primary)/0.12)] p-3">
                      <Linkedin className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--foreground))]">LinkedIn</h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">@sathwikvuppala</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>

        {/* footer CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]"
          >
            <a href={mailtoHref}>
              <Send className="mr-2 h-5 w-5" />
              Email Me Directly
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
