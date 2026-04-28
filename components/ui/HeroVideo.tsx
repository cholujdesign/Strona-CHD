'use client'

const YT_ID = 'cCwqpy8ra7w'

export default function HeroVideo() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=${YT_ID}&enablejsapi=1`}
        title=""
        allow="autoplay; encrypted-media"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          border: 'none',
          width: 'max(100vw, 177.78vh)',
          height: 'max(100vh, 56.25vw)',
        }}
      />
    </div>
  )
}
