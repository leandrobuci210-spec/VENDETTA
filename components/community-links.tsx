"use client"

import { useState } from "react"
import { ExternalLink, X } from "lucide-react"

const DISCORD_INVITE = "https://discord.gg/vendettaw"
const ROBLOX_LINK = "https://www.roblox.com/share/g/35432142"

type Platform = "discord" | "roblox" | null

function PlatformCard({
  label,
  tag,
  image,
  accent,
  rounded,
  onClick,
}: {
  label: string
  tag: string
  image: string
  accent: string
  rounded?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-9 text-foreground transition-all hover:-translate-y-1"
      style={{ ["--accent" as string]: accent }}
      aria-label={`Open ${label}`}
    >
      {/* corner brackets */}
      <span className="pointer-events-none absolute left-2 top-2 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-muted-foreground/40 transition-colors group-hover:border-[var(--accent)]" />
      <span className="pointer-events-none absolute right-2 top-2 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-muted-foreground/40 transition-colors group-hover:border-[var(--accent)]" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-muted-foreground/40 transition-colors group-hover:border-[var(--accent)]" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-muted-foreground/40 transition-colors group-hover:border-[var(--accent)]" />

      {/* avatar */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-border bg-background/60 transition-transform group-hover:scale-105">
        <img
          src={image || "/placeholder.svg"}
          alt={`${label} logo`}
          className={`h-16 w-16 object-contain ${rounded ? "rounded-lg" : ""}`}
        />
      </div>

      {/* name */}
      <div className="text-center">
        <p className="font-mono text-xl font-bold tracking-[0.15em]">{label}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{tag}</p>
      </div>

      {/* socials divider */}
      <div className="flex w-full flex-col items-center gap-3 border-t border-border pt-5">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">--SOCIALS--</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:border-[var(--accent)] group-hover:text-foreground">
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </button>
  )
}

export function CommunityLinks() {
  const [open, setOpen] = useState<Platform>(null)

  return (
    <>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        <PlatformCard
          label="DISCORD"
          tag="Community Server"
          image="/discord-logo.png"
          accent="#5865F2"
          onClick={() => setOpen("discord")}
        />
        <PlatformCard
          label="ROBLOX"
          tag="Official Group"
          image="/roblox-logo.png"
          accent="#ffffff"
          rounded
          onClick={() => setOpen("roblox")}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {open === "discord" ? (
              <>
                <img src="/discord-logo.png" alt="Discord logo" className="mx-auto h-16 w-16 object-contain" />
                <h2 className="mt-4 text-2xl font-bold tracking-wide text-foreground">Join our Discord</h2>
                <p className="mt-2 break-all text-sm text-muted-foreground">{DISCORD_INVITE}</p>
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Join Server <ExternalLink className="h-4 w-4" />
                </a>
              </>
            ) : (
              <>
                <img src="/roblox-logo.png" alt="Roblox logo" className="mx-auto h-16 w-16 rounded-xl object-contain" />
                <h2 className="mt-4 text-2xl font-bold tracking-wide text-foreground">Play on Roblox</h2>
                <p className="mt-2 break-all text-sm text-muted-foreground">{ROBLOX_LINK}</p>
                <a
                  href={ROBLOX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Open Roblox <ExternalLink className="h-4 w-4" />
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
