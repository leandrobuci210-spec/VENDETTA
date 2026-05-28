"use client"

import { useEffect, useRef } from "react"

type Props = {
  playing: boolean
  muted: boolean
}

/**
 * Plays the background track using a native <audio> element looping the local MP3.
 */
export function BackgroundMusic({ playing, muted }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)

  // React to play/pause changes.
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.play().catch(() => {
        // Autoplay may be blocked until a user gesture; ignore.
      })
    } else {
      a.pause()
    }
  }, [playing])

  // React to mute changes.
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = muted
    a.volume = 0.7
  }, [muted])

  return <audio ref={audioRef} src="/all-roads.mp3" loop preload="auto" className="hidden" aria-hidden />
}
