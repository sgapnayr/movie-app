export const FullStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const HalfStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z" fill="url(#half-grad)" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const EmptyStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z" />
  </svg>
);
