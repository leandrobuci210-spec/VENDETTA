"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { BackgroundMusic } from "@/components/background-music"
import { CommunityLinks } from "@/components/community-links"
import { Navbar } from "@/components/navbar"
import { MusicWidget } from "@/components/music-widget"

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const enter = () => {
    setEntered(true)
    setPlaying(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background music */}
      <BackgroundMusic playing={playing} muted={muted} />

      {/* Entry overlay — needed so the browser allows audio playback */}
      {!entered && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-12 bg-background px-6">
          <div className="relative aspect-[5/2] w-[min(72vw,380px)] overflow-hidden">
            <Image
              src="/vendetta-logo.png"
              alt="VENDETTA"
              fill
              priority
              className="scale-110 object-cover mix-blend-screen drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            />
          </div>
          <button
            type="button"
            onClick={enter}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-10 py-4 font-mono text-lg font-bold tracking-[0.25em] text-foreground transition-all hover:-translate-y-0.5 hover:border-white hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"
          >
            <Play className="h-5 w-5" />
            ENTER
          </button>
          <p className="font-mono text-xs tracking-widest text-muted-foreground">CLICK ENTER TO PLAY MUSIC</p>
        </div>
      )}

      {/* Site */}
      {entered && <Navbar />}

      {/* Hero glow + logo */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,220,220,0.22),transparent_65%)] blur-2xl"
        />
        <div className="relative aspect-[5/2] w-[min(86vw,560px)] overflow-hidden">
          <Image
            src="/vendetta-logo.png"
            alt="VENDETTA"
            fill
            priority
            className="scale-110 object-cover mix-blend-screen drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
          />
        </div>
        <p className="mt-2 font-mono text-sm tracking-[0.5em] text-muted-foreground sm:text-base">COMMUNITY</p>

        {/* Staff */}
        <div className="mt-14 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs tracking-[0.4em] text-muted-foreground">OWNER</span>
            <span className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] sm:text-3xl">
              MASKY
            </span>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="relative z-10 flex justify-center px-6 pb-32">
        <CommunityLinks />
      </section>

      {/* Music widget */}
      {entered && (
        <MusicWidget
          playing={playing}
          muted={muted}
          onTogglePlay={() => setPlaying((p) => !p)}
          onToggleMute={() => setMuted((m) => !m)}
        />
      )}
    </main>
  )
}
