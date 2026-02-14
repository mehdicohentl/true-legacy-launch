const AnimatedWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,60%,6%)] via-[hsl(205,55%,8%)] to-[hsl(200,50%,5%)]" />

      {/* Animated SVG wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full wave-svg-1"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(195, 100%, 40%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(195, 100%, 40%)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M0,800 C320,650 640,900 960,750 C1280,600 1600,850 1920,700 C2240,550 2560,800 2880,650 L2880,1440 L0,1440 Z"
          fill="url(#waveGrad1)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full wave-svg-2"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,900 C360,750 720,1000 1080,850 C1440,700 1800,950 2160,800 C2520,650 2700,900 2880,780 L2880,1440 L0,1440 Z"
          fill="url(#waveGrad2)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full wave-svg-3"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="hsl(180, 100%, 60%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M0,1000 C400,850 800,1100 1200,950 C1600,800 2000,1050 2400,900 C2600,820 2760,950 2880,880 L2880,1440 L0,1440 Z"
          fill="url(#waveGrad3)"
        />
      </svg>

      {/* Glowing cyan flowing line */}
      <svg
        className="absolute inset-0 w-[200%] h-full flowing-line"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(180, 100%, 65%)" stopOpacity="1" />
            <stop offset="70%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,720 C240,620 480,820 720,700 C960,580 1200,780 1440,660 C1680,540 1920,740 2160,620 C2400,500 2640,700 2880,580"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          filter="url(#lineGlow)"
        />
      </svg>

      {/* Secondary flowing line */}
      <svg
        className="absolute inset-0 w-[200%] h-full flowing-line-2"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(190, 90%, 50%)" stopOpacity="0.6" />
            <stop offset="60%" stopColor="hsl(185, 100%, 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0" />
          </linearGradient>
          <filter id="lineGlow2">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,500 C300,400 600,600 900,480 C1200,360 1500,560 1800,440 C2100,320 2400,520 2880,400"
          fill="none"
          stroke="url(#lineGrad2)"
          strokeWidth="2"
          filter="url(#lineGlow2)"
        />
      </svg>

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
    </div>
  );
};

export default AnimatedWaveBackground;
