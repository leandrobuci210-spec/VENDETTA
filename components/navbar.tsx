"use client"

import Image from "next/image"
import { Home, Gamepad2, Users } from "lucide-react"

const DISCORD_INVITE = "https://discord.gg/vendettaw"
const ROBLOX_LINK = "https://www.roblox.com/share/g/35432142"

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Brand */}
        <div className="relative h-8 w-24 overflow-hidden">
          <Image
            src="/vendetta-logo.png"
            alt="VENDETTA"
            fill
            className="scale-125 object-cover mix-blend-screen"
          />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-2 font-mono text-xs sm:gap-3 sm:text-sm">
          <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-foreground">
            <Home className="h-4 w-4" />
            Home
          </span>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Users className="h-4 w-4" />
            Discord
          </a>
          <a
            href={ROBLOX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Gamepad2 className="h-4 w-4" />
            Roblox
          </a>
        </div>
      </nav>
    </header>
  )
}
