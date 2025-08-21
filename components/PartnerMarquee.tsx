'use client'

type Logo = { src: string; alt: string };

export default function PartnerMarquee({ logos }: { logos: Logo[] }) {
  const track = [...logos, ...logos]; // duplicate for seamless loop
  return (
    <div className="marquee" role="region" aria-label="Trusted partners">
      <ul className="track">
        {track.map((l, i) => (
          <li className="item" key={i}>
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="img"
            />
          </li>
        ))}
      </ul>
      <div className="fade left" aria-hidden="true" />
      <div className="fade right" aria-hidden="true" />
      <style jsx>{`
        .marquee {
          position: relative;
          overflow: hidden;
          padding: 0.5rem 0;
        }
        .track {
          display: inline-flex;
          align-items: center;
          gap: 3rem;
          white-space: nowrap;
          min-width: max-content;
          will-change: transform;
          animation: scroll 38s linear infinite;
        }
        .marquee:hover .track { animation-play-state: paused; }
        .item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img {
          height: 48px;
          width: auto;
          opacity: 0.9;
          transition: opacity 150ms ease;
          filter: grayscale(10%);
        }
        .img:hover { opacity: 1; filter: none; }
        .fade {
          position: absolute;
          top: 0; bottom: 0; width: 80px;
          pointer-events: none; z-index: 10;
        }
        .fade.left { left: 0; background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)); }
        .fade.right { right: 0; background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0)); }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .img { height: 40px; }
          .track { gap: 2rem; animation-duration: 28s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; transform: none; }
        }
      `}</style>
    </div>
  );
}