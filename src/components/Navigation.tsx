import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 64;

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ids = useMemo(() => navItems.map((n) => n.href.slice(1)), []);

  const onLinkClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
      setIsOpen(false);
    };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${NAV_HEIGHT + 24}px 0px -55% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const callback: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
      if (visible.length) {
        const id = (visible[0].target as HTMLElement).id;
        if (id && id !== active) setActive(id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, options);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    sections.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) setActive(id);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-[100] focus:rounded-md focus:bg-[hsl(var(--primary))] focus:px-3 focus:py-2 focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      <nav
        role="navigation"
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <a
              href="#home"
              onClick={onLinkClick("#home")}
              className="text-base font-semibold tracking-tight text-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4] rounded-md"
            >
              Sathwik Vuppala
            </a>

            {/* Desktop */}
            <div className="hidden md:block">
              <ul className="ml-10 flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onLinkClick(item.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]
                          ${
                            isActive
                              ? "text-[hsl(var(--primary))]"
                              : "text-muted-foreground hover:text-[hsl(var(--primary))]"
                          }`}
                      >
                        {item.label}
                        <span
                          className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-opacity ${
                            isActive ? "opacity-100 bg-[hsl(var(--primary))]" : "opacity-0"
                          }`}
                        />
                      </a>
                    </li>
                  );
                })}
                <li className="ml-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border px-3 py-2 text-sm hover:border-[hsl(var(--primary))/0.4] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                  >
                    Résumé
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                className="rounded-md p-2 hover:bg-accent/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                onClick={() => setIsOpen((s) => !s)}
                aria-controls="mobile-nav"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-nav"
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t bg-background/90 backdrop-blur">
              <ul className="px-2 py-2">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onLinkClick(item.href)}
                        className={`block w-full rounded-md px-3 py-3 text-base font-medium transition-colors
                          ${
                            isActive
                              ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary))/0.1]"
                              : "text-muted-foreground hover:bg-[hsl(var(--primary))/0.06] hover:text-[hsl(var(--primary))]"
                          }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="px-2 pt-1 pb-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-full border px-3 py-2 text-center text-sm hover:border-[hsl(var(--primary))/0.4] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
                  >
                    Résumé
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind fixed nav */}
      <div style={{ height: NAV_HEIGHT }} aria-hidden />
    </>
  );
}
