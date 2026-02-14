const AnimatedWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Base dark gradient - seamless deep navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,60%,5%)] via-[hsl(205,55%,7%)] to-[hsl(210,60%,4%)]" />

      {/* Subtle wave outlines (no filled shapes) */}
      <svg
        className="absolute inset-0 w-[200%] h-full wave-svg-1"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveStroke1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.18" />
            <stop offset="70%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,950 C320,850 640,1050 960,900 C1280,750 1600,1000 1920,850 C2240,700 2560,950 2880,800"
          fill="none"
          stroke="url(#waveStroke1)"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        className="absolute inset-0 w-[200%] h-full wave-svg-2"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveStroke2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(190, 90%, 50%)" stopOpacity="0.08" />
            <stop offset="60%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(190, 90%, 45%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,1100 C360,980 720,1200 1080,1050 C1440,900 1800,1150 2160,1000 C2520,850 2700,1080 2880,950"
          fill="none"
          stroke="url(#waveStroke2)"
          strokeWidth="1"
        />
      </svg>

      {/* Primary glowing flowing line */}
      <svg
        className="absolute inset-0 w-[200%] h-full flowing-line"
        viewBox="0 0 2880 1440"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(180, 100%, 65%)" stopOpacity="1" />
            <stop offset="70%" stopColor="hsl(185, 100%, 55%)" stopOpacity="0.7" />
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
          strokeWidth="2.5"
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
            <stop offset="40%" stopColor="hsl(190, 90%, 50%)" stopOpacity="0.5" />
            <stop offset="60%" stopColor="hsl(185, 100%, 60%)" stopOpacity="0.5" />
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
          strokeWidth="1.5"
          filter="url(#lineGlow2)"
        />
      </svg>

      {/* Ambient orbs - very subtle */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/6 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px]" />
    </div>
  );
};

export default AnimatedWaveBackground;
