import React from 'react'

export default function SpotifyDocs(){
  return (
    <details className="mx-auto max-w-7xl px-6 mt-6 mb-2 open:mb-6">
      <summary className="cursor-pointer text-sm text-white/60">How to connect Spotify "Now Playing"</summary>
      <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/70">
        <p className="mb-2">Use a backend route that calls Spotify's Currently Playing endpoint and return minimal JSON.</p>
        <pre className="whitespace-pre-wrap">
{`// Example FastAPI route (placeholder)
@app.get('/spotify/now-playing')
async def now_playing():
    # call Spotify API with OAuth token, then return simplified payload
    return {"is_playing": true, "title": "Track", "artist": "Artist", "album_art": "url", "progress_ms": 12345, "duration_ms": 200000}
`}
        </pre>
      </div>
    </details>
  )
}
