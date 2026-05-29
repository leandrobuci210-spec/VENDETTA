"use client"

import { useState } from "react"
import Image from "next/image"
import { Home, Gamepad2, Users, Crown, Camera, X, ChevronLeft, ChevronRight } from "lucide-react"

const DISCORD_INVITE = "https://discord.gg/vendettaw"
const ROBLOX_LINK = "https://www.roblox.com/share/g/35432142"

const HONOURABLE_PEOPLE = ["Prosper", "Ezz", "Socie", "Risky", "AJ"]

const FUNNY_MOMENTS = [
  { src: "/funny/dihscord.png", alt: "Twizzy dihscord moment" },
  { src: "/funny/diddy.png", alt: "Draco funny moment" },
  { src: "/funny/nana.png", alt: "Masky and rena nana moment" },
  { src: "/funny/free-access.jpg", alt: "CTB_CHRIS free access moment" },
  { src: "/funny/rivels.png", alt: "Rivels moment" },
  { src: "/funny/cozet.png", alt: "Cozet funny moment" },
]

type ModalType = "honourable" | "funny" | null

export function Navbar() {
  const [openModal, setOpenModal] = useState<ModalType>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % FUNNY_MOMENTS.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + FUNNY_MOMENTS.length) % FUNNY_MOMENTS.length)
  }

  return (
    <>
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
            <button
              type="button"
              onClick={() => {
                setOpenModal("honourable")
              }}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Crown className="h-4 w-4" />
              <span className="hidden sm:inline">Honourable People</span>
              <span className="sm:hidden">Honours</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentImage(0)
                setOpenModal("funny")
              }}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Funny Moments</span>
              <span className="sm:hidden">Funny</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Honourable People Modal */}
      {openModal === "honourable" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center gap-6">
              <Crown className="h-10 w-10 text-yellow-500" />
              <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground">
                HONOURABLE PEOPLE
              </h2>
              <div className="w-full border-t border-border" />
              <ul className="flex w-full flex-col gap-3">
                {HONOURABLE_PEOPLE.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-5 py-3 font-mono text-lg tracking-wide text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Funny Moments Modal */}
      {openModal === "funny" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 z-10 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center gap-4">
              <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground">
                FUNNY MOMENTS
              </h2>
              <div className="w-full border-t border-border" />

              {/* Image viewer */}
              <div className="relative flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="mx-12 flex w-full items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={FUNNY_MOMENTS[currentImage].src}
                    alt={FUNNY_MOMENTS[currentImage].alt}
                    className="max-h-[60vh] w-auto rounded-xl object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {FUNNY_MOMENTS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === currentImage ? "bg-foreground" : "bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              <p className="font-mono text-xs text-muted-foreground">
                {currentImage + 1} / {FUNNY_MOMENTS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
