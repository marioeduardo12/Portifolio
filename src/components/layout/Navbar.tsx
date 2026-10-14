"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { IconLink } from "@/components/ui/IconLink";
import { Logo } from "@/components/ui/Logo";
import { navItems, profile, socialLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { easeOutQuint } from "@/lib/motion";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 16);
  });

  useEffect(() => {
    if (!isMenuOpen) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget;
    if (isMenuOpen && nextFocus && !event.currentTarget.contains(nextFocus)) {
      closeMenu();
    }
  };

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      onBlur={handleBlur}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label="Navegação principal"
        className={cn(
          "relative mx-auto flex h-16 max-w-7xl animate-fade-down items-center justify-between gap-4 rounded-2xl border pr-2.5 pl-4 transition-[background-color,border-color,box-shadow] duration-500 sm:pr-3 sm:pl-5",
          isSolid
            ? "border-border bg-background/75 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.9)] backdrop-blur-xl"
            : "border-transparent",
        )}
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-2.5 rounded-lg"
        >
          <Logo className="size-7 transition-transform duration-500 ease-out-quint group-hover:scale-110" />
          <span className="text-[0.9375rem] font-semibold tracking-tight">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-primary/25 bg-primary/10"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <IconLink
            href={socialLinks.github.href}
            label={socialLinks.github.label}
            className="hidden sm:inline-grid"
          >
            <GitHubIcon className="size-4.5" />
          </IconLink>
          <IconLink
            href={socialLinks.linkedin.href}
            label={socialLinks.linkedin.label}
            className="hidden sm:inline-grid"
          >
            <LinkedInIcon className="size-4" />
          </IconLink>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-grid size-10 place-items-center rounded-xl border border-border bg-white/2 text-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 lg:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu-backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            className="fixed inset-0 -z-10 bg-background/70 backdrop-blur-sm lg:hidden"
          />
        )}
        {isMenuOpen && (
          <motion.div
            key="menu-panel"
            id="menu-mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeOutQuint }}
            className="mx-auto mt-2 max-w-7xl origin-top rounded-2xl border border-border bg-surface/95 p-2 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9)] backdrop-blur-xl lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.04,
                      duration: 0.4,
                      ease: easeOutQuint,
                    }}
                  >
                    <a
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-colors duration-300",
                        isActive
                          ? "bg-primary/10 text-foreground"
                          : "text-muted hover:bg-white/3 hover:text-foreground",
                      )}
                    >
                      {item.label}
                      <ChevronRight
                        aria-hidden="true"
                        className={cn(
                          "size-4",
                          isActive ? "text-primary-soft" : "opacity-40",
                        )}
                      />
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-2 flex items-center gap-2 border-t border-border px-2 pt-3 pb-1">
              <IconLink href={socialLinks.github.href} label={socialLinks.github.label}>
                <GitHubIcon className="size-4.5" />
              </IconLink>
              <IconLink
                href={socialLinks.linkedin.href}
                label={socialLinks.linkedin.label}
              >
                <LinkedInIcon className="size-4" />
              </IconLink>
              <span className="ml-auto pr-2 text-xs text-muted">{profile.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
