"use client"

import { Pause, Play, Volume2, VolumeX } from "lucide-react"

type Props = {
  playing: boolean
  muted: boolean
  onTogglePlay: () => void
  onToggleMute: () => void
}

export function MusicWidget({ playing, muted, onTogglePlay, onToggleMute }: Props) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-border bg-card/90 px-3 py-2 backdrop-blur-md">
      <button
        type="button"
        onClick={onTogglePlay}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-white"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      <div className="min-w-0 pr-1 font-mono leading-tight">
        <p className="truncate text-sm font-bold text-foreground">On The Radar</p>
        <p className="truncate text-xs text-muted-foreground">Lee Drilly</p>
      </div>

      <button
        type="button"
        onClick={onToggleMute}
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  )
}
