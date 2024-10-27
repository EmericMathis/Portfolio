'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, Play, Pause, SkipForward, SkipBack, Volume } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

// Liste de chansons d'exemple
const songs = [
  { title: 'backyard-by-lofium', url: '/music/lofi-song-backyard-by-lofium.mp3' },
  { title: 'toybox-by-lofium', url: '/music/lofi-song-toybox-by-lofium-242708.mp3' },
  { title: 'satisfying-lofi', url: '/music/satisfying-lofi-for-focus-study-amp-working-242103.mp3' },
]

export default function MusicPlayer({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [progress, setProgress] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef(new Audio(songs[currentSong].url))

  useEffect(() => {
    // Charger les données du localStorage
    const savedState = localStorage.getItem('musicPlayerState')
    if (savedState) {
      const { currentSong, volume, progress } = JSON.parse(savedState)
      setCurrentSong(currentSong)
      setVolume(volume)
      setProgress(progress)
      audioRef.current.src = songs[currentSong].url
      audioRef.current.currentTime = progress
      audioRef.current.volume = volume
    }

    // Mettre à jour la progression toutes les secondes
    const interval = setInterval(() => {
      setProgress(audioRef.current.currentTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Sauvegarder l'état dans le localStorage
    localStorage.setItem('musicPlayerState', JSON.stringify({
      currentSong,
      volume,
      progress
    }))
  }, [currentSong, volume, progress])

  useEffect(() => {
    const handleEnded = () => {
      changeSong(1)
    }

    audioRef.current.addEventListener('ended', handleEnded)
    return () => {
      audioRef.current.removeEventListener('ended', handleEnded)
    }
  }, [currentSong])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const changeSong = (direction: number) => {
    let newSong = (currentSong + direction + songs.length) % songs.length
    setCurrentSong(newSong)
    audioRef.current.src = songs[newSong].url
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    audioRef.current.volume = newVolume[0]
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleExpand}
        className={`rounded-full p-0 ${isExpanded && "border border-primary"}`}
      >
        {!isPlaying ? <Volume /> : <Volume2 />}
      </Button>
      {isExpanded && (
        <div className="absolute -translate-x-52 mt-3 w-72 max-w-[calc(100vw-2rem)]">
          <div className="bg-background border rounded-3xl p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-2">
                <Button size="icon" variant="secondary" className="rounded-full" onClick={() => changeSong(-1)}>
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button size="icon" className="rounded-full" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full" onClick={() => changeSong(1)}>
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="text-sm font-semibold truncate text-center">{songs[currentSong].title}</h3>
              <Slider value={[progress]} max={audioRef.current.duration || 100} step={1} onValueChange={(value) => { audioRef.current.currentTime = value[0]; setProgress(value[0]); }} />
              <div className="flex items-center space-x-2 mx-auto">
                <Volume2 className="h-4 w-4" />
                <Slider className="w-14" value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}