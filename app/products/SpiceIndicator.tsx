export default function SpiceIndicator({level}:{level:'Mild'|'Medium'|'Hot'}){
  const filled = level==='Hot' ? 3 : level==='Medium' ? 2 : 1;
  return (
    <div className="flex items-center gap-1" aria-label={`Spice level: ${level}`}>
      {[1,2,3].map(n => (
        <img
          key={n}
          src={`/icons/${n<=filled ? 'filledChilli' : 'emptyChilli'}.webp`}
          alt={n<=filled ? 'filled chilli' : 'empty chilli'}
          className="h-4 w-4"
        />
      ))}
    </div>
  )
}
