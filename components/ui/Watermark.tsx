interface WatermarkProps {
  collaborator?: string
}

export default function Watermark({ collaborator }: WatermarkProps) {
  return (
    <span
      className="absolute bottom-2 right-2.5 text-[10px] font-sans tracking-widest text-white/50 pointer-events-none select-none z-10"
      aria-hidden="true"
    >
      {collaborator ? `cholujdesign.com × ${collaborator}` : 'cholujdesign.com'}
    </span>
  )
}
