import React, { useState, useEffect } from 'react';

// ============================================
// MAZAYAGO RAMADAN 2026 - UNIFIED HOMEPAGE
// Combining: Hero Design + Icons/Buttons + Content
// ============================================

// Brand Colors
const colors = {
  teal: '#1BC1B9',
  tealDark: '#0D9488',
  tealLight: '#E6FAF9',
  tealMuted: '#1BC1B940',
  orange: '#ED8937',
  orangeLight: '#FFF3E8',
  orangeWarm: '#FFF9F0',
  green: '#7CBE43',
  greenLight: '#F0F9E8',
  dark: '#0F2847',
  darkLight: '#1a3a5c',
  gray: '#64748B',
  grayLight: '#94A3B8',
  grayMuted: '#E2E8F0',
  light: '#F8FAFC',
  white: '#FFFFFF',
  gold: '#D4AF37',
  goldLight: '#F5E6B3',
  facebook: '#1877F2',
};

// ============================================
// MAZAYAGO LOGO COMPONENT
// ============================================
const MazayaGoLogo = ({ white = false, size = 120 }) => (
  <svg 
    width={size} 
    height={size * 0.83}
    viewBox="0 0 262 217" 
    fill="none"
  >
    <defs>
      <linearGradient id={`logoGrad${white ? 'W' : ''}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={white ? '#FFFFFF' : colors.teal} />
        <stop offset="50%" stopColor={white ? '#FFFFFF' : colors.orange} />
        <stop offset="100%" stopColor={white ? '#FFFFFF' : colors.green} />
      </linearGradient>
    </defs>
    <path 
      d="M30 180V70L70 130L131 40L192 130L232 70V180" 
      stroke={`url(#logoGrad${white ? 'W' : ''})`}
      strokeWidth="20" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="131" cy="25" r="18" fill={white ? '#FFFFFF' : colors.orange} />
    <circle cx="50" cy="45" r="12" fill={white ? '#FFFFFF' : colors.teal} opacity="0.8" />
    <circle cx="212" cy="45" r="12" fill={white ? '#FFFFFF' : colors.green} opacity="0.8" />
    <circle cx="70" cy="155" r="8" fill={white ? '#FFFFFF' : colors.orange} opacity="0.6" />
    <circle cx="192" cy="155" r="8" fill={white ? '#FFFFFF' : colors.teal} opacity="0.6" />
  </svg>
);

// ============================================
// FACEBOOK LOGO ICON
// ============================================
const FacebookLogo = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill={colors.facebook}/>
    <path 
      d="M26.5 14H29.5V10H26.5C23.5 10 21 12.5 21 15.5V18H18V22H21V38H26V22H29L30 18H26V15.5C26 14.7 26.2 14 26.5 14Z" 
      fill="white"
    />
  </svg>
);

// ============================================
// SERVICE ICONS (Duotone Style)
// ============================================
const ServiceIcons = {
  raffles: ({ size = 64, color = colors.teal }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="8" y="20" width="48" height="28" rx="4" fill={`${color}20`}/>
      <rect x="6" y="18" width="48" height="28" rx="4" fill={color}/>
      <line x1="20" y1="18" x2="20" y2="46" stroke="white" strokeWidth="2" strokeDasharray="4 3"/>
      <circle cx="38" cy="32" r="12" fill={colors.orange}/>
      <path d="M38 24L40 29H45L41 33L43 38L38 35L33 38L35 33L31 29H36L38 24Z" fill="white"/>
      <circle cx="13" cy="26" r="2" fill="white" opacity="0.6"/>
      <circle cx="13" cy="32" r="2" fill="white" opacity="0.6"/>
      <circle cx="13" cy="38" r="2" fill="white" opacity="0.6"/>
    </svg>
  ),
  
  riddles: ({ size = 64, color = colors.teal }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="34" cy="34" r="22" fill={`${colors.orange}20`}/>
      <circle cx="32" cy="32" r="22" fill={color}/>
      <path d="M20 26C20 26 22 28 26 28C30 28 32 26 32 26V20H44V32C44 32 42 34 42 38C42 42 44 44 44 44H32V38C32 38 30 36 26 36C22 36 20 38 20 38V26Z" fill="white" opacity="0.3"/>
      <text x="32" y="42" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">?</text>
      <circle cx="50" cy="14" r="8" fill={colors.orange}/>
      <path d="M50 10V12M46 14H48M52 14H54M47 11L48.5 12.5M53 11L51.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="48" y="16" width="4" height="3" rx="1" fill="white"/>
    </svg>
  ),
  
  predictions: ({ size = 64, color = colors.teal }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="54" rx="14" ry="4" fill={`${color}40`}/>
      <rect x="24" y="48" width="16" height="8" rx="2" fill={color}/>
      <circle cx="32" cy="28" r="20" fill={`${color}30`}/>
      <circle cx="32" cy="28" r="18" fill={color}/>
      <circle cx="32" cy="28" r="12" fill={`${colors.orange}40`}/>
      <ellipse cx="32" cy="28" rx="8" ry="5" fill="white" opacity="0.9"/>
      <circle cx="32" cy="28" r="4" fill={colors.orange}/>
      <circle cx="32" cy="28" r="2" fill={colors.dark}/>
      <circle cx="48" cy="14" r="3" fill={colors.orange}/>
      <circle cx="16" cy="18" r="2" fill={colors.orange}/>
      <circle cx="44" cy="36" r="2" fill="white"/>
      <path d="M24 18C26 16 28 16 28 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
};

// ============================================
// WHY ICONS - COMPETITORS
// ============================================
const WhyCompetitorIcons = {
  fairChance: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="22" y="8" width="4" height="28" rx="1" fill={colors.teal}/>
      <rect x="18" y="36" width="12" height="4" rx="2" fill={colors.teal}/>
      <rect x="10" y="16" width="28" height="3" rx="1" fill={colors.teal}/>
      <path d="M10 19L6 28H18L14 19" fill={`${colors.orange}40`}/>
      <ellipse cx="12" cy="28" rx="6" ry="2" fill={colors.orange}/>
      <path d="M34 19L30 28H42L38 19" fill={`${colors.orange}40`}/>
      <ellipse cx="36" cy="28" rx="6" ry="2" fill={colors.orange}/>
      <circle cx="40" cy="10" r="6" fill={colors.green}/>
      <rect x="37" y="8" width="6" height="2" rx="1" fill="white"/>
      <rect x="37" y="11" width="6" height="2" rx="1" fill="white"/>
    </svg>
  ),
  
  easyJoin: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="28" r="16" fill={`${colors.teal}20`}/>
      <path d="M24 14C20 14 16 16 16 22V32C16 36 20 40 24 40C28 40 32 36 32 32V22C32 16 28 14 24 14Z" fill={colors.teal}/>
      <ellipse cx="24" cy="20" rx="4" ry="6" fill="white"/>
      <circle cx="24" cy="28" r="8" stroke={colors.orange} strokeWidth="2" fill="none" opacity="0.6"/>
      <circle cx="24" cy="28" r="12" stroke={colors.orange} strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="38" cy="12" r="6" fill={colors.orange}/>
      <path d="M36 12L38 14L40 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  
  realPrizes: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="20" width="28" height="20" rx="3" fill={colors.orange}/>
      <rect x="22" y="20" width="4" height="20" fill={`${colors.orange}60`}/>
      <rect x="8" y="14" width="32" height="8" rx="2" fill={colors.teal}/>
      <rect x="22" y="14" width="4" height="8" fill={`${colors.teal}70`}/>
      <circle cx="24" cy="14" r="4" fill={colors.orange}/>
      <path d="M20 10C20 10 18 6 14 8C10 10 14 14 20 14" fill={colors.teal}/>
      <path d="M28 10C28 10 30 6 34 8C38 10 34 14 28 14" fill={colors.teal}/>
      <circle cx="40" cy="10" r="5" fill={colors.green}/>
      <path d="M38 10L39 11L42 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  
  guaranteedFun: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="26" r="18" fill={`${colors.orange}20`}/>
      <circle cx="24" cy="24" r="18" fill={colors.orange}/>
      <circle cx="18" cy="20" r="3" fill="white"/>
      <circle cx="30" cy="20" r="3" fill="white"/>
      <circle cx="18" cy="20" r="1.5" fill={colors.dark}/>
      <circle cx="30" cy="20" r="1.5" fill={colors.dark}/>
      <path d="M16 28C16 28 20 34 24 34C28 34 32 28 32 28" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="10" r="6" fill={colors.teal}/>
      <path d="M38 8L40 6L42 8M38 12L40 14L42 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="8" y="8" width="4" height="4" rx="1" fill={colors.green} transform="rotate(15 10 10)"/>
    </svg>
  ),
};

// ============================================
// WHY ICONS - ORGANIZERS
// ============================================
const WhyOrganizerIcons = {
  fullTransparency: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="24" rx="18" ry="12" fill={`${colors.teal}20`}/>
      <ellipse cx="24" cy="24" rx="16" ry="10" fill={colors.teal}/>
      <circle cx="24" cy="24" r="8" fill="white"/>
      <circle cx="24" cy="24" r="5" fill={colors.orange}/>
      <circle cx="24" cy="24" r="2" fill={colors.dark}/>
      <circle cx="22" cy="22" r="1.5" fill="white"/>
      <path d="M6 24C6 24 12 14 24 14C36 14 42 24 42 24" stroke={colors.teal} strokeWidth="2" fill="none" opacity="0.5"/>
      <circle cx="40" cy="12" r="6" fill={colors.green}/>
      <path d="M37 12L39 14L43 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  
  easyLaunch: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 8C24 8 32 12 32 24L28 32H20L16 24C16 12 24 8 24 8Z" fill={colors.teal}/>
      <circle cx="24" cy="18" r="4" fill="white"/>
      <circle cx="24" cy="18" r="2" fill={colors.orange}/>
      <path d="M16 24L10 30L16 28Z" fill={colors.orange}/>
      <path d="M32 24L38 30L32 28Z" fill={colors.orange}/>
      <path d="M20 32L24 42L28 32" fill={colors.orange}/>
      <path d="M22 32L24 38L26 32" fill={`${colors.orange}60`}/>
      <line x1="8" y1="18" x2="12" y2="18" stroke={colors.teal} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="36" y1="18" x2="40" y2="18" stroke={colors.teal} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="6" y1="24" x2="10" y2="24" stroke={colors.teal} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  
  realData: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="4" fill={`${colors.teal}15`}/>
      <rect x="12" y="26" width="6" height="12" rx="1" fill={`${colors.teal}50`}/>
      <rect x="21" y="18" width="6" height="20" rx="1" fill={colors.teal}/>
      <rect x="30" y="14" width="6" height="24" rx="1" fill={colors.orange}/>
      <line x1="10" y1="14" x2="38" y2="14" stroke={colors.grayMuted} strokeWidth="1"/>
      <line x1="10" y1="22" x2="38" y2="22" stroke={colors.grayMuted} strokeWidth="1"/>
      <line x1="10" y1="30" x2="38" y2="30" stroke={colors.grayMuted} strokeWidth="1"/>
      <path d="M12 32L21 24L30 18L38 12" stroke={colors.green} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="10" r="5" fill={colors.green}/>
      <path d="M38 10L40 8L42 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  
  professionalExperience: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="6" width="28" height="36" rx="4" fill={colors.teal}/>
      <rect x="13" y="12" width="22" height="24" rx="2" fill="white"/>
      <rect x="16" y="15" width="16" height="3" rx="1" fill={colors.teal}/>
      <rect x="16" y="20" width="12" height="2" rx="0.5" fill={`${colors.teal}40`}/>
      <rect x="16" y="24" width="14" height="2" rx="0.5" fill={`${colors.teal}40`}/>
      <rect x="16" y="30" width="8" height="4" rx="1" fill={colors.orange}/>
      <rect x="20" y="8" width="8" height="2" rx="1" fill={`${colors.teal}70`}/>
      <rect x="20" y="40" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
      <circle cx="40" cy="10" r="6" fill={colors.orange}/>
      <path d="M38 10H42M40 8V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

// ============================================
// INDUSTRY ICONS (Use Cases - Organizers)
// ============================================
const IndustryIcons = {
  restaurants: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="34" rx="16" ry="6" fill={`${colors.teal}30`}/>
      <ellipse cx="24" cy="32" rx="14" ry="5" fill={colors.teal}/>
      <ellipse cx="24" cy="32" rx="10" ry="3" fill="white" opacity="0.3"/>
      <path d="M12 8V14M14 8V12M14 14V8M16 8V14M12 14C12 18 14 20 14 20V28" stroke={colors.teal} strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 8C36 8 38 10 38 16V28" stroke={colors.teal} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M36 8L38 10" stroke={colors.teal} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 22C20 22 22 20 22 18" stroke={colors.orange} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M24 20C24 20 26 18 26 16" stroke={colors.orange} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M28 22C28 22 30 20 30 18" stroke={colors.orange} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="40" cy="12" r="5" fill={colors.orange}/>
      <text x="40" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">%</text>
    </svg>
  ),
  
  supermarket: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M8 12H12L16 32H38L42 16H14" stroke={colors.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="16" y="18" width="20" height="12" rx="2" fill={`${colors.teal}30`}/>
      <circle cx="18" cy="38" r="4" fill={colors.teal}/>
      <circle cx="36" cy="38" r="4" fill={colors.teal}/>
      <circle cx="18" cy="38" r="1.5" fill="white"/>
      <circle cx="36" cy="38" r="1.5" fill="white"/>
      <rect x="20" y="20" width="4" height="6" rx="1" fill={colors.orange}/>
      <rect x="26" y="22" width="4" height="4" rx="1" fill={colors.green}/>
      <rect x="32" y="20" width="3" height="6" rx="1" fill={colors.teal}/>
      <circle cx="40" cy="10" r="5" fill={colors.orange}/>
      <text x="40" y="13" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">★</text>
    </svg>
  ),
  
  brands: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M12 8L36 8C38 8 40 10 40 12V32L24 44L8 32V12C8 10 10 8 12 8Z" fill={colors.teal}/>
      <circle cx="24" cy="16" r="4" fill="white"/>
      <circle cx="24" cy="16" r="2" fill={colors.teal}/>
      <rect x="16" y="24" width="16" height="3" rx="1" fill="white"/>
      <rect x="18" y="30" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
      <circle cx="40" cy="12" r="6" fill={colors.orange}/>
      <text x="40" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">?</text>
    </svg>
  ),
  
  tvChannels: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="12" width="36" height="26" rx="3" fill={colors.teal}/>
      <rect x="10" y="16" width="28" height="18" rx="2" fill={colors.dark}/>
      <path d="M20 20L32 25L20 30Z" fill={colors.orange}/>
      <rect x="18" y="38" width="12" height="2" rx="1" fill={colors.teal}/>
      <path d="M22 38L24 42L26 38" fill={colors.teal}/>
      <path d="M18 12L24 6L30 12" stroke={colors.teal} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="10" r="5" fill={colors.orange}/>
      <path d="M38 8L40 6L42 8M38 12L40 14L42 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  
  sportsStores: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill={colors.teal}/>
      <circle cx="24" cy="24" r="16" fill="white"/>
      <path d="M24 14L30 18L28 26L20 26L18 18Z" fill={colors.teal}/>
      <path d="M24 8L30 12L30 18L24 14L18 18L18 12Z" stroke={colors.teal} strokeWidth="1.5" fill="none"/>
      <path d="M32 20L38 24L36 32L28 26L30 18Z" stroke={colors.teal} strokeWidth="1.5" fill="none"/>
      <path d="M16 20L10 24L12 32L20 26L18 18Z" stroke={colors.teal} strokeWidth="1.5" fill="none"/>
      <path d="M20 32L20 26L28 26L28 32L24 38Z" stroke={colors.teal} strokeWidth="1.5" fill="none"/>
      <circle cx="40" cy="10" r="5" fill={colors.orange}/>
      <text x="40" y="13" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">VS</text>
    </svg>
  ),
  
  educational: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 10L4 20L24 30L44 20L24 10Z" fill={colors.teal}/>
      <path d="M12 22V34C12 34 18 40 24 40C30 40 36 34 36 34V22" fill={`${colors.teal}70`}/>
      <path d="M40 20V32" stroke={colors.orange} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="34" r="3" fill={colors.orange}/>
      <rect x="20" y="24" width="8" height="6" rx="1" fill="white" opacity="0.5"/>
      <circle cx="8" cy="12" r="5" fill={colors.orange}/>
      <text x="8" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">?</text>
    </svg>
  ),
};

// ============================================
// USER TYPE ICONS (Use Cases - Competitors)
// ============================================
const UserTypeIcons = {
  shopper: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M10 16L14 40H34L38 16H10Z" fill={colors.teal}/>
      <path d="M16 16V12C16 8 20 6 24 6C28 6 32 8 32 12V16" stroke={colors.teal} strokeWidth="3" fill="none"/>
      <rect x="18" y="22" width="12" height="12" rx="2" fill="white" opacity="0.3"/>
      <path d="M22 28L26 32M26 28L22 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="12" r="6" fill={colors.orange}/>
      <rect x="37" y="10" width="6" height="4" rx="1" fill="white"/>
    </svg>
  ),
  
  luckHunter: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="18" r="8" fill={colors.green}/>
      <circle cx="18" cy="24" r="8" fill={colors.green}/>
      <circle cx="30" cy="24" r="8" fill={colors.green}/>
      <circle cx="24" cy="30" r="8" fill={colors.green}/>
      <circle cx="24" cy="24" r="4" fill={`${colors.green}80`}/>
      <path d="M24 34V42" stroke={colors.green} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="40" cy="10" r="5" fill={colors.orange}/>
      <text x="40" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">★</text>
      <circle cx="8" cy="16" r="2" fill={colors.orange}/>
      <circle cx="12" cy="40" r="2" fill={colors.teal}/>
    </svg>
  ),
  
  knowledgeExpert: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="14" fill={colors.teal}/>
      <path d="M18 16C18 16 20 14 24 14C28 14 30 16 30 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M16 20C16 20 20 22 24 22C28 22 32 20 32 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M18 24C18 24 20 26 24 26C28 26 30 24 30 24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="24" cy="20" r="6" fill={colors.orange}/>
      <rect x="22" y="26" width="4" height="4" rx="1" fill={colors.orange}/>
      <path d="M22 30H26" stroke={colors.teal} strokeWidth="1"/>
      <path d="M22 32H26" stroke={colors.teal} strokeWidth="1"/>
      <path d="M24 10V8M32 14L34 12M16 14L14 12" stroke={colors.orange} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="12" r="5" fill={colors.green}/>
      <path d="M38 12L39 13L42 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  
  riddleLover: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="14" height="14" rx="2" fill={colors.teal}/>
      <rect x="26" y="8" width="14" height="14" rx="2" fill={colors.orange}/>
      <rect x="8" y="26" width="14" height="14" rx="2" fill={colors.orange}/>
      <rect x="26" y="26" width="14" height="14" rx="2" fill={colors.teal}/>
      <circle cx="22" cy="15" r="3" fill={colors.teal}/>
      <circle cx="26" cy="15" r="3" fill={colors.orange}/>
      <circle cx="15" cy="22" r="3" fill={colors.teal}/>
      <circle cx="15" cy="26" r="3" fill={colors.orange}/>
      <circle cx="33" cy="22" r="3" fill={colors.orange}/>
      <circle cx="33" cy="26" r="3" fill={colors.teal}/>
      <circle cx="22" cy="33" r="3" fill={colors.orange}/>
      <circle cx="26" cy="33" r="3" fill={colors.teal}/>
      <text x="15" y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">?</text>
      <text x="33" y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
    </svg>
  ),
  
  sportsFan: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M16 10H32V20C32 28 28 32 24 32C20 32 16 28 16 20V10Z" fill={colors.orange}/>
      <path d="M16 14H10C10 14 8 14 8 18C8 22 12 24 16 22" fill={colors.orange}/>
      <path d="M32 14H38C38 14 40 14 40 18C40 22 36 24 32 22" fill={colors.orange}/>
      <rect x="22" y="32" width="4" height="6" fill={colors.orange}/>
      <rect x="18" y="38" width="12" height="4" rx="1" fill={colors.teal}/>
      <circle cx="24" cy="20" r="4" fill="white" opacity="0.5"/>
      <text x="24" y="23" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">1</text>
      <circle cx="40" cy="8" r="4" fill={colors.green}/>
      <text x="40" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">1</text>
    </svg>
  ),
  
  seriesFollower: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M12 18L16 42H32L36 18H12Z" fill={colors.orange}/>
      <path d="M16 18L18 42" stroke="white" strokeWidth="2" opacity="0.3"/>
      <path d="M24 18L24 42" stroke="white" strokeWidth="2" opacity="0.3"/>
      <path d="M32 18L30 42" stroke="white" strokeWidth="2" opacity="0.3"/>
      <circle cx="18" cy="14" r="4" fill={colors.tealLight}/>
      <circle cx="24" cy="12" r="5" fill={colors.tealLight}/>
      <circle cx="30" cy="14" r="4" fill={colors.tealLight}/>
      <circle cx="21" cy="16" r="3" fill={colors.tealLight}/>
      <circle cx="27" cy="16" r="3" fill={colors.tealLight}/>
      <circle cx="40" cy="10" r="5" fill={colors.teal}/>
      <path d="M38 8L42 10L38 12Z" fill="white"/>
    </svg>
  ),
};

// ============================================
// HOW IT WORKS ICONS
// ============================================
const HowItWorksIcons = {
  chooseCampaign: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" fill={`${colors.teal}15`}/>
      <rect x="12" y="14" width="32" height="28" rx="4" fill={colors.teal}/>
      <rect x="16" y="18" width="10" height="8" rx="2" fill="white"/>
      <rect x="30" y="18" width="10" height="8" rx="2" fill={`${colors.orange}50`}/>
      <rect x="16" y="30" width="10" height="8" rx="2" fill={`${colors.orange}50`}/>
      <rect x="30" y="30" width="10" height="8" rx="2" fill="white"/>
      <circle cx="21" cy="22" r="2" fill={colors.orange}/>
    </svg>
  ),
  
  participate: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" fill={`${colors.orange}15`}/>
      <path d="M28 12C24 12 20 14 20 20V36C20 40 24 44 28 44C32 44 36 40 36 36V20C36 14 32 12 28 12Z" fill={colors.orange}/>
      <ellipse cx="28" cy="20" rx="4" ry="6" fill="white"/>
      <circle cx="28" cy="28" r="10" stroke={colors.teal} strokeWidth="2" fill="none" opacity="0.5"/>
      <circle cx="28" cy="28" r="16" stroke={colors.teal} strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  ),
  
  waitResult: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" fill={`${colors.teal}15`}/>
      <path d="M18 12H38V18C38 24 32 28 28 28C32 28 38 32 38 38V44H18V38C18 32 24 28 28 28C24 28 18 24 18 18V12Z" fill={colors.teal}/>
      <path d="M22 16H34V18C34 22 30 26 28 26" fill={colors.orange}/>
      <path d="M26 36H30V40H22V38C22 36 24 36 26 36Z" fill={colors.orange}/>
      <rect x="16" y="10" width="24" height="4" rx="1" fill={colors.teal}/>
      <rect x="16" y="42" width="24" height="4" rx="1" fill={colors.teal}/>
    </svg>
  ),
  
  winReceive: ({ size = 56 }) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" fill={`${colors.green}15`}/>
      <rect x="14" y="26" width="28" height="20" rx="3" fill={colors.orange}/>
      <rect x="26" y="26" width="4" height="20" fill={`${colors.orange}70`}/>
      <rect x="12" y="20" width="32" height="8" rx="2" fill={colors.teal}/>
      <rect x="26" y="20" width="4" height="8" fill={`${colors.teal}80`}/>
      <circle cx="28" cy="20" r="4" fill={colors.orange}/>
      <path d="M24 16C24 16 22 12 18 14C14 16 18 20 24 20" fill={colors.green}/>
      <path d="M32 16C32 16 34 12 38 14C42 16 38 20 32 20" fill={colors.green}/>
      <circle cx="44" cy="14" r="3" fill={colors.green}/>
      <circle cx="12" cy="18" r="2" fill={colors.orange}/>
    </svg>
  ),
};

// ============================================
// COMPARISON ICONS
// ============================================
const ComparisonIcons = {
  check: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={colors.green}/>
      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  cross: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={colors.grayLight}/>
      <path d="M8 8L16 16M16 8L8 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

// ============================================
// WHATSAPP BUTTON
// ============================================
const WhatsAppButton = () => (
  <a
    href="https://wa.me/967XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      zIndex: 1000,
      transition: 'transform 0.3s ease',
    }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
      <path d="M16 3C8.82 3 3 8.82 3 16C3 18.74 3.78 21.3 5.13 23.47L3.1 29.1L8.91 27.13C10.99 28.34 13.41 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM22.3 18.86C22.01 18.71 20.59 18.01 20.33 17.91C20.07 17.81 19.88 17.76 19.69 18.06C19.5 18.36 18.95 19.01 18.78 19.21C18.61 19.41 18.44 19.44 18.15 19.29C17.86 19.14 16.91 18.83 15.79 17.82C14.92 17.03 14.33 16.06 14.16 15.76C13.99 15.46 14.14 15.3 14.29 15.15C14.42 15.02 14.59 14.8 14.74 14.62C14.89 14.44 14.94 14.31 15.04 14.11C15.14 13.91 15.09 13.73 15.02 13.58C14.95 13.43 14.34 12 14.11 11.41C13.89 10.84 13.66 10.92 13.49 10.91C13.32 10.9 13.13 10.9 12.93 10.9C12.73 10.9 12.41 10.97 12.15 11.27C11.89 11.57 11.14 12.27 11.14 13.7C11.14 15.13 12.18 16.51 12.33 16.71C12.48 16.91 14.33 19.81 17.1 21.04C19.42 21.9 20.05 21.86 20.55 21.79C21.11 21.71 22.27 21.07 22.5 20.37C22.73 19.67 22.73 19.08 22.66 18.96C22.59 18.84 22.39 18.77 22.3 18.86Z"/>
    </svg>
  </a>
);

// ============================================
// HERO GRAPHICS - COMPETITORS (Helal + Coins + Prize Box)
// ============================================
const CompetitorHeroGraphic = () => (
  <svg viewBox="0 0 400 380" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E6B3"/>
        <stop offset="50%" stopColor="#D4AF37"/>
        <stop offset="100%" stopColor="#B8860B"/>
      </linearGradient>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#B8860B"/>
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="15" floodOpacity="0.2"/>
      </filter>
    </defs>
    
    {/* Background Decorative Circle */}
    <circle cx="200" cy="180" r="140" fill={`${colors.teal}08`}/>
    <circle cx="200" cy="180" r="100" fill={`${colors.orange}06`}/>
    
    {/* Ramadan Crescent (Helal) - Main Element */}
    <g filter="url(#glow)">
      <path 
        d="M280 60C280 60 240 80 240 130C240 180 280 200 280 200C250 195 225 165 225 130C225 95 250 65 280 60Z" 
        fill="url(#goldGradient)"
      />
      <circle cx="290" cy="75" r="8" fill={colors.gold}/>
    </g>
    
    {/* Prize Box */}
    <g filter="url(#softShadow)">
      {/* Box Body */}
      <rect x="130" y="200" width="140" height="100" rx="8" fill={colors.orange}/>
      <rect x="130" y="200" width="140" height="100" rx="8" fill="url(#goldGradient)" opacity="0.3"/>
      {/* Box Ribbon Vertical */}
      <rect x="190" y="200" width="20" height="100" fill={colors.teal}/>
      {/* Box Lid */}
      <rect x="120" y="180" width="160" height="25" rx="6" fill={colors.teal}/>
      <rect x="120" y="180" width="160" height="25" rx="6" fill="url(#goldGradient)" opacity="0.2"/>
      {/* Ribbon on Lid */}
      <rect x="190" y="180" width="20" height="25" fill={`${colors.teal}90`}/>
      {/* Bow */}
      <ellipse cx="200" cy="175" rx="25" ry="12" fill={colors.orange}/>
      <circle cx="200" cy="175" r="8" fill={colors.gold}/>
      <path d="M175 175C175 175 165 160 180 155C195 150 200 167 200 167" fill={colors.orange}/>
      <path d="M225 175C225 175 235 160 220 155C205 150 200 167 200 167" fill={colors.orange}/>
    </g>
    
    {/* Floating Coins */}
    {/* Coin 1 - Top Left */}
    <g transform="translate(80, 100)">
      <ellipse cx="0" cy="0" rx="25" ry="8" fill="#B8860B"/>
      <ellipse cx="0" cy="-3" rx="25" ry="8" fill="url(#coinGradient)"/>
      <text x="0" y="1" textAnchor="middle" fill="#B8860B" fontSize="12" fontWeight="bold">$</text>
    </g>
    
    {/* Coin 2 - Top Right */}
    <g transform="translate(320, 130) rotate(-15)">
      <ellipse cx="0" cy="0" rx="20" ry="6" fill="#B8860B"/>
      <ellipse cx="0" cy="-3" rx="20" ry="6" fill="url(#coinGradient)"/>
      <text x="0" y="0" textAnchor="middle" fill="#B8860B" fontSize="10" fontWeight="bold">$</text>
    </g>
    
    {/* Coin 3 - Bottom Left */}
    <g transform="translate(60, 250) rotate(10)">
      <ellipse cx="0" cy="0" rx="18" ry="5" fill="#B8860B"/>
      <ellipse cx="0" cy="-2" rx="18" ry="5" fill="url(#coinGradient)"/>
      <text x="0" y="1" textAnchor="middle" fill="#B8860B" fontSize="8" fontWeight="bold">$</text>
    </g>
    
    {/* Coin 4 - Bottom Right */}
    <g transform="translate(340, 240)">
      <ellipse cx="0" cy="0" rx="22" ry="7" fill="#B8860B"/>
      <ellipse cx="0" cy="-3" rx="22" ry="7" fill="url(#coinGradient)"/>
      <text x="0" y="1" textAnchor="middle" fill="#B8860B" fontSize="10" fontWeight="bold">$</text>
    </g>
    
    {/* Coin Stack near box */}
    <g transform="translate(300, 280)">
      <ellipse cx="0" cy="12" rx="15" ry="4" fill="#8B7355"/>
      <ellipse cx="0" cy="8" rx="15" ry="4" fill="#A67C52"/>
      <ellipse cx="0" cy="4" rx="15" ry="4" fill="#B8860B"/>
      <ellipse cx="0" cy="0" rx="15" ry="4" fill="url(#coinGradient)"/>
    </g>
    
    {/* Stars Decoration */}
    <polygon points="100,60 103,70 114,70 105,76 108,86 100,80 92,86 95,76 86,70 97,70" fill={colors.gold} opacity="0.8"/>
    <polygon points="350,180 352,186 359,186 354,190 356,197 350,193 344,197 346,190 341,186 348,186" fill={colors.teal} opacity="0.7"/>
    <polygon points="70,180 72,186 78,186 74,189 75,195 70,192 65,195 66,189 62,186 68,186" fill={colors.green} opacity="0.6"/>
    
    {/* Small Sparkles */}
    <circle cx="150" cy="80" r="3" fill={colors.gold} opacity="0.6"/>
    <circle cx="330" cy="100" r="2" fill={colors.teal} opacity="0.5"/>
    <circle cx="50" cy="150" r="2" fill={colors.orange} opacity="0.6"/>
    <circle cx="360" cy="200" r="3" fill={colors.gold} opacity="0.5"/>
    <circle cx="90" cy="320" r="2" fill={colors.teal} opacity="0.4"/>
    <circle cx="320" cy="320" r="2" fill={colors.green} opacity="0.5"/>
  </svg>
);

// ============================================
// HERO GRAPHICS - ORGANIZERS (Helal + Social Media Trend)
// ============================================
const OrganizerHeroGraphic = () => (
  <svg viewBox="0 0 400 380" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="goldGradOrg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E6B3"/>
        <stop offset="50%" stopColor="#D4AF37"/>
        <stop offset="100%" stopColor="#B8860B"/>
      </linearGradient>
      <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor={colors.teal} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={colors.teal}/>
      </linearGradient>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15"/>
      </filter>
      <filter id="glowOrg" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background Decorative */}
    <circle cx="200" cy="190" r="150" fill={`${colors.orange}06`}/>
    <circle cx="200" cy="190" r="110" fill={`${colors.teal}05`}/>
    
    {/* Ramadan Crescent (Helal) - Top Right */}
    <g filter="url(#glowOrg)" transform="translate(280, 30)">
      <path 
        d="M50 10C50 10 20 25 20 65C20 105 50 120 50 120C25 116 5 92 5 65C5 38 25 14 50 10Z" 
        fill="url(#goldGradOrg)"
      />
      <circle cx="58" cy="20" r="6" fill={colors.gold}/>
    </g>
    
    {/* Main Dashboard Card */}
    <g filter="url(#cardShadow)">
      <rect x="60" y="100" width="180" height="130" rx="16" fill="white"/>
      
      {/* Card Header */}
      <rect x="75" y="115" width="80" height="8" rx="4" fill={colors.orange}/>
      <rect x="75" y="130" width="50" height="5" rx="2" fill={colors.grayMuted}/>
      
      {/* Chart Area */}
      <rect x="75" y="145" width="150" height="70" rx="8" fill={`${colors.teal}08`}/>
      
      {/* Chart Line - Trending Up */}
      <path 
        d="M85 195 L110 175 L135 185 L160 160 L185 145 L210 130" 
        stroke={colors.teal} 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chart Fill */}
      <path 
        d="M85 195 L110 175 L135 185 L160 160 L185 145 L210 130 L210 210 L85 210 Z" 
        fill="url(#chartGradient)"
        opacity="0.3"
      />
      
      {/* Chart Points */}
      <circle cx="110" cy="175" r="4" fill={colors.orange}/>
      <circle cx="160" cy="160" r="4" fill={colors.orange}/>
      <circle cx="210" cy="130" r="5" fill={colors.green}/>
    </g>
    
    {/* Social Media Engagement Card */}
    <g filter="url(#cardShadow)">
      <rect x="200" y="160" width="140" height="100" rx="12" fill="white"/>
      
      {/* Engagement Stats */}
      <circle cx="240" cy="200" r="25" fill={`${colors.orange}15`}/>
      <text x="240" y="207" textAnchor="middle" fill={colors.orange} fontSize="18" fontWeight="bold">85%</text>
      
      {/* Stats Bars */}
      <rect x="280" y="185" width="45" height="6" rx="3" fill={colors.teal}/>
      <rect x="280" y="198" width="35" height="5" rx="2" fill={colors.grayMuted}/>
      <rect x="280" y="210" width="40" height="5" rx="2" fill={colors.grayMuted}/>
      
      {/* Trend Arrow */}
      <g transform="translate(305, 235)">
        <circle cx="0" cy="0" r="12" fill={colors.green}/>
        <path d="M-5 3 L0 -5 L5 3 M0 -3 L0 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </g>
    
    {/* Notification/Like Bubble */}
    <g transform="translate(280, 80)">
      <circle cx="0" cy="0" r="22" fill={colors.orange}/>
      <path d="M0 -8 C-12 -8 -12 4 0 12 C12 4 12 -8 0 -8Z" fill="white" transform="scale(0.7)"/>
    </g>
    
    {/* Share/Viral Icon */}
    <g transform="translate(90, 260)">
      <circle cx="0" cy="0" r="18" fill={colors.teal}/>
      <circle cx="-6" cy="-4" r="4" fill="white"/>
      <circle cx="6" cy="-4" r="4" fill="white"/>
      <circle cx="0" cy="6" r="4" fill="white"/>
      <line x1="-4" y1="-2" x2="-2" y2="4" stroke="white" strokeWidth="2"/>
      <line x1="4" y1="-2" x2="2" y2="4" stroke="white" strokeWidth="2"/>
    </g>
    
    {/* Users/Audience Icon */}
    <g transform="translate(350, 280)">
      <circle cx="0" cy="0" r="16" fill={`${colors.teal}20`}/>
      <circle cx="-6" cy="-3" r="4" fill={colors.teal}/>
      <circle cx="6" cy="-3" r="4" fill={colors.teal}/>
      <ellipse cx="0" cy="8" rx="12" ry="6" fill={colors.teal}/>
    </g>
    
    {/* Floating Elements */}
    {/* Star 1 */}
    <polygon points="50,80 52,86 58,86 54,90 55,96 50,93 45,96 46,90 42,86 48,86" fill={colors.gold} opacity="0.7"/>
    
    {/* Star 2 */}
    <polygon points="370,150 372,155 377,155 373,158 374,163 370,160 366,163 367,158 363,155 368,155" fill={colors.teal} opacity="0.6"/>
    
    {/* Small Decorative Circles */}
    <circle cx="40" cy="200" r="4" fill={colors.orange} opacity="0.4"/>
    <circle cx="380" cy="220" r="3" fill={colors.green} opacity="0.5"/>
    <circle cx="150" cy="50" r="3" fill={colors.gold} opacity="0.6"/>
    <circle cx="100" cy="320" r="3" fill={colors.teal} opacity="0.4"/>
    <circle cx="320" cy="340" r="2" fill={colors.orange} opacity="0.5"/>
  </svg>
);

// ============================================
// MAIN COMPONENT
// ============================================
const MazayaGoUnifiedHomepage = () => {
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryColor = isOrganizer ? colors.orange : colors.teal;

  // ============================================
  // DATA
  // ============================================
  const services = [
    {
      id: 'raffles',
      icon: ServiceIcons.raffles,
      title: 'السحوبات والجوائز',
      descCompetitor: 'شارك حسب شروط الحملة (شراء، مشاركة، أو مهمة بسيطة) وادخل السحب — فرصتك للفوز بجوائز قيّمة بسحوبات شفافة ونتائج واضحة',
      descOrganizer: 'أنشئ حماساً بالفوز الفوري والسحوبات الشفافة التي تجذب العملاء وتزيد المبيعات',
    },
    {
      id: 'riddles',
      icon: ServiceIcons.riddles,
      title: 'الألغاز المعرفية',
      descCompetitor: 'اختبر معلوماتك واربح مكافآت فورية مع أسئلة ممتعة ومتنوعة',
      descOrganizer: 'ثقّف عملاءك عن منتجاتك بأسلوب تفاعلي ممتع يبني الوعي بعلامتك التجارية',
    },
    {
      id: 'predictions',
      icon: ServiceIcons.predictions,
      title: 'التوقعات',
      descCompetitor: 'توقّع نتائج المباريات وأحداث المسلسلات وأثبت خبرتك واربح جوائز',
      descOrganizer: 'اربط علامتك بالأحداث المثيرة والمباريات لتفاعل جماهيري واسع',
    },
  ];

  const whyMazayaCompetitors = [
    { icon: WhyCompetitorIcons.fairChance, title: 'فرص عادلة للجميع', desc: 'سحوبات شفافة ونتائج مرئية فورياً بدون تدخل بشري' },
    { icon: WhyCompetitorIcons.easyJoin, title: 'مشاركة سهلة', desc: 'انضم بنقرة واحدة بدون تعقيدات أو شروط صعبة' },
    { icon: WhyCompetitorIcons.realPrizes, title: 'جوائز حقيقية', desc: 'مكافآت قيّمة يمكنك استلامها فوراً من التجار' },
    { icon: WhyCompetitorIcons.guaranteedFun, title: 'متعة مضمونة', desc: 'تجارب تفاعلية ممتعة مع كل مشاركة' },
  ];

  const whyMazayaOrganizers = [
    { icon: WhyOrganizerIcons.fullTransparency, title: 'شفافية كاملة', desc: 'نتائج مرئية فورياً تبني ثقة عملائك' },
    { icon: WhyOrganizerIcons.easyLaunch, title: 'إطلاق سهل', desc: 'أنشئ حملتك في دقائق بدون خبرة تقنية' },
    { icon: WhyOrganizerIcons.realData, title: 'بيانات حقيقية', desc: 'تحليلات دقيقة عن تفاعل عملائك' },
    { icon: WhyOrganizerIcons.professionalExperience, title: 'تجربة احترافية', desc: 'واجهات جذابة ترفع من صورة علامتك' },
  ];

  const useCasesOrganizers = [
    { icon: IndustryIcons.restaurants, title: 'المطاعم والمقاهي', service: 'السحوبات', desc: 'سحوبات "شارك حسب شروط الحملة" لزيادة المبيعات' },
    { icon: IndustryIcons.supermarket, title: 'السوبرماركت', service: 'السحوبات', desc: 'سحوبات رمضان الكبرى على المشتريات' },
    { icon: IndustryIcons.brands, title: 'العلامات التجارية', service: 'الألغاز', desc: '"اختبر معلوماتك عن منتجاتنا" للتوعية' },
    { icon: IndustryIcons.tvChannels, title: 'القنوات والمسلسلات', service: 'التوقعات', desc: 'توقع أحداث المسلسل للتفاعل الجماهيري' },
    { icon: IndustryIcons.sportsStores, title: 'المتاجر الرياضية', service: 'التوقعات', desc: 'توقع نتائج المباريات مع جوائز قيّمة' },
    { icon: IndustryIcons.educational, title: 'المراكز التعليمية', service: 'الألغاز', desc: 'مسابقات معرفية رمضانية للطلاب' },
  ];

  const useCasesCompetitors = [
    { icon: UserTypeIcons.shopper, title: 'المتسوق الذكي', service: 'السحوبات', desc: 'اشترِ من متاجرك المفضلة وادخل السحب' },
    { icon: UserTypeIcons.luckHunter, title: 'صياد الحظ', service: 'السحوبات', desc: 'شارك في سحوبات يومية (حسب الحملات) واربح' },
    { icon: UserTypeIcons.knowledgeExpert, title: 'خبير المعرفة', service: 'الألغاز', desc: 'أجب على الأسئلة واربح مكافآت فورية' },
    { icon: UserTypeIcons.riddleLover, title: 'محب الفوازير', service: 'الألغاز', desc: 'استمتع بفوازير رمضان اليومية' },
    { icon: UserTypeIcons.sportsFan, title: 'عاشق الرياضة', service: 'التوقعات', desc: 'توقع نتائج المباريات وأثبت خبرتك' },
    { icon: UserTypeIcons.seriesFollower, title: 'متابع المسلسلات', service: 'التوقعات', desc: 'توقع أحداث مسلسلك المفضل واربح' },
  ];

  const comparisons = [
    { mazaya: 'سحوبات آلية شفافة', facebook: 'سحوبات يدوية' },
    { mazaya: 'نتائج مرئية فورياً', facebook: 'نتائج مؤجلة' },
    { mazaya: 'بيانات وتحليلات دقيقة', facebook: 'بدون تحليلات' },
    { mazaya: 'تفاعل قابل للقياس', facebook: 'تفاعل غير منظم' },
    { mazaya: 'إدارة الفائزين آلياً', facebook: 'إدارة يدوية مرهقة' },
    { mazaya: 'تجربة مستخدم احترافية', facebook: 'تجربة عادية' },
  ];

  const howItWorks = [
    { icon: HowItWorksIcons.chooseCampaign, title: 'اختر الحملة', desc: 'تصفح الحملات المتاحة واختر ما يناسبك' },
    { icon: HowItWorksIcons.participate, title: 'شارك', desc: 'أكمل المهمة المطلوبة: سحب، لغز، أو توقع' },
    { icon: HowItWorksIcons.waitResult, title: 'انتظر النتيجة', desc: 'تابع النتائج الشفافة المعلنة للجميع' },
    { icon: HowItWorksIcons.winReceive, title: 'اربح واستلم', desc: 'احصل على جائزتك الحقيقية بسهولة' },
  ];

  // ============================================
  // NAVBAR COMPONENT
  // ============================================
  const Navbar = () => (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: isScrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <MazayaGoLogo size={isScrolled ? 90 : 110} />
          <span style={{ 
            fontSize: '22px', 
            fontWeight: '800', 
            color: colors.dark,
            display: isScrolled ? 'none' : 'block'
          }}>مزايا جو</span>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {[
            { label: 'الرئيسية', href: '/' },
            { label: 'الحملات', href: '/offers' },
            { label: 'الخدمات', href: '/services' },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{
              color: isScrolled ? colors.dark : colors.dark,
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'color 0.2s',
            }}>{item.label}</a>
          ))}
          
          {/* Audience Toggle */}
          <div style={{
            display: 'flex',
            backgroundColor: colors.grayMuted,
            borderRadius: '30px',
            padding: '4px',
          }}>
            <button 
              onClick={() => setIsOrganizer(false)} 
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: !isOrganizer ? colors.teal : 'transparent',
                color: !isOrganizer ? 'white' : colors.gray,
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
            >
              للمتسابقين
            </button>
            <button 
              onClick={() => setIsOrganizer(true)} 
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: isOrganizer ? colors.orange : 'transparent',
                color: isOrganizer ? 'white' : colors.gray,
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
            >
              للمنظمين
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // ============================================
  // HERO SECTION
  // ============================================
  const HeroSection = () => (
    <section id="الرئيسية" style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darkLight} 100%)`,
      paddingTop: '140px',
      padding: '140px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        top: -200,
        right: -200,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: `${colors.teal}08`,
      }}/>
      <div style={{
        position: 'absolute',
        bottom: -150,
        left: -150,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: `${colors.orange}06`,
      }}/>
      
      {/* Ramadan Stars Decoration */}
      <div style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.15 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill={colors.gold}>
          <path d="M40 0L48 30H80L54 48L62 80L40 60L18 80L26 48L0 30H32L40 0Z"/>
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '60%', left: '3%', opacity: 0.1 }}>
        <svg width="50" height="50" viewBox="0 0 80 80" fill={colors.gold}>
          <path d="M40 0L48 30H80L54 48L62 80L40 60L18 80L26 48L0 30H32L40 0Z"/>
        </svg>
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Text Content */}
        <div style={{ 
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: isOrganizer ? `${colors.orange}25` : `${colors.teal}25`,
            color: isOrganizer ? colors.orange : colors.teal,
            padding: '10px 22px',
            borderRadius: '30px',
            fontSize: '15px',
            fontWeight: '700',
            marginBottom: '28px',
          }}>
            <span style={{ fontSize: '20px' }}>🌙</span>
            <span>{isOrganizer ? 'موسم رمضان ٢٠٢٦' : 'رمضان كريم'}</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: '800',
            color: colors.white,
            marginBottom: '20px',
            lineHeight: 1.15,
          }}>
            {isOrganizer ? 'حملاتك الرمضانية' : 'رمضانك '}
            <span style={{ color: isOrganizer ? colors.teal : colors.orange }}>
              {isOrganizer ? ' تبدأ هنا' : 'ربح'}
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '20px',
            color: colors.grayLight,
            marginBottom: '16px',
            lineHeight: 1.8,
            maxWidth: '500px',
          }}>
            {isOrganizer 
              ? 'أطلق حملاتك الرمضانية بسهولة — سحوبات شفافة، ألغاز تفاعلية، وتوقعات مثيرة تجذب جمهورك.'
              : 'شارك في مسابقات رمضان واربح جوائز حقيقية - سحوبات يومية، فوازير رمضان، وتوقعات المباريات!'}
          </p>

          {/* Highlight Text */}
          <p style={{
            fontSize: '18px',
            color: isOrganizer ? colors.orange : colors.teal,
            fontWeight: '700',
            marginBottom: '32px',
          }}>
            {isOrganizer ? '✨ ابدأ بحملتك الأولى بسهولة' : '✨ سحوبات، ألغاز، وتوقعات'}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={isOrganizer ? '/services' : '/offers'} style={{
              display: 'inline-block',
              padding: '18px 40px',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: isOrganizer ? colors.orange : colors.teal,
              color: 'white',
              cursor: 'pointer',
              boxShadow: `0 8px 30px ${primaryColor}40`,
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}>
              {isOrganizer ? 'ابدأ حملتك' : 'استكشف الحملات'}
            </a>
            <a href={isOrganizer ? '/offers' : '/services'} style={{
              display: 'inline-block',
              padding: '18px 40px',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '12px',
              border: `2px solid ${colors.grayLight}`,
              backgroundColor: 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}>
              {isOrganizer ? 'شاهد أمثلة حملات' : 'تعرف على الخدمات'}
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div style={{ 
          position: 'relative', 
          height: '450px',
          animation: 'float 4s ease-in-out infinite',
        }}>
          {isOrganizer ? <OrganizerHeroGraphic /> : <CompetitorHeroGraphic />}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );

  // ============================================
  // SERVICES SECTION
  // ============================================
  const ServicesSection = () => (
    <section id="الخدمات" style={{ 
      padding: '100px 24px', 
      backgroundColor: colors.white,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: '800', 
            color: colors.dark, 
            marginBottom: '16px' 
          }}>
            خدماتنا
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: colors.gray, 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            ثلاث خدمات تفاعلية مصممة لتحقيق أهدافك
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '32px' 
        }}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              style={{
                backgroundColor: colors.light,
                borderRadius: '20px',
                padding: '40px 28px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: `2px solid transparent`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = primaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <service.icon size={80} color={primaryColor} />
              </div>
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                color: colors.dark, 
                marginBottom: '16px' 
              }}>
                {service.title}
              </h3>
              <p style={{ 
                fontSize: '15px', 
                color: colors.gray, 
                lineHeight: 1.7 
              }}>
                {isOrganizer ? service.descOrganizer : service.descCompetitor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ============================================
  // WHY MAZAYAGO SECTION
  // ============================================
  const WhySection = () => {
    const items = isOrganizer ? whyMazayaOrganizers : whyMazayaCompetitors;
    
    return (
      <section style={{ 
        padding: '100px 24px', 
        backgroundColor: colors.light,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: colors.dark, 
              marginBottom: '16px' 
            }}>
              لماذا مزايا جو؟
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: colors.gray 
            }}>
              {isOrganizer ? 'مميزات تجعل حملاتك أكثر فعالية' : 'مميزات تجعل تجربتك أفضل'}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px' 
          }}>
            {items.map((item, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '16px',
                  padding: '32px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <item.icon size={56} />
                </div>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  color: colors.dark, 
                  marginBottom: '12px' 
                }}>
                  {item.title}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: colors.gray, 
                  lineHeight: 1.6 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ============================================
  // USE CASES SECTION
  // ============================================
  const UseCasesSection = () => {
    const items = isOrganizer ? useCasesOrganizers : useCasesCompetitors;
    
    return (
      <section style={{ 
        padding: '100px 24px', 
        backgroundColor: colors.white,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: colors.dark, 
              marginBottom: '16px' 
            }}>
              {isOrganizer ? 'حالات الاستخدام' : 'طرق المشاركة'}
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: colors.gray 
            }}>
              {isOrganizer 
                ? 'اكتشف كيف يمكن لمزايا جو أن تخدم نشاطك' 
                : 'اختر الطريقة التي تناسب اهتماماتك'}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px' 
          }}>
            {items.map((item, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: colors.light,
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  padding: '12px',
                  flexShrink: 0,
                }}>
                  <item.icon size={48} />
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '17px', 
                    fontWeight: '700', 
                    color: colors.dark, 
                    marginBottom: '6px' 
                  }}>
                    {item.title}
                  </h4>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: `${primaryColor}15`,
                    color: primaryColor,
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '10px',
                  }}>
                    {item.service}
                  </span>
                  <p style={{ 
                    fontSize: '14px', 
                    color: colors.gray, 
                    lineHeight: 1.6 
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ============================================
  // COMPARISON SECTION (Organizers Only)
  // ============================================
  const ComparisonSection = () => {
    if (!isOrganizer) return null;
    
    return (
      <section style={{ 
        padding: '100px 24px', 
        backgroundColor: colors.light,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: colors.dark, 
              marginBottom: '16px' 
            }}>
              مزايا جو vs فيسبوك
            </h2>
            <p style={{ fontSize: '18px', color: colors.gray }}>
              لماذا تختار منصة متخصصة بدلاً من السحوبات التقليدية؟
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr auto 1fr', 
            gap: '24px',
            alignItems: 'stretch',
          }}>
            {/* MazayaGo Card */}
            <div style={{
              backgroundColor: colors.white,
              borderRadius: '20px',
              padding: '32px 24px',
              border: `3px solid ${colors.teal}`,
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '12px', 
                marginBottom: '24px' 
              }}>
                <MazayaGoLogo size={60} />
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: colors.teal, 
                textAlign: 'center', 
                marginBottom: '24px' 
              }}>
                مزايا جو
              </h3>
              {comparisons.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: i < comparisons.length - 1 ? `1px solid ${colors.grayMuted}` : 'none',
                }}>
                  <ComparisonIcons.check size={24} />
                  <span style={{ fontSize: '15px', color: colors.dark, fontWeight: '500' }}>
                    {item.mazaya}
                  </span>
                </div>
              ))}
            </div>

            {/* VS Divider */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: colors.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '14px',
              }}>VS</div>
            </div>

            {/* Facebook Card */}
            <div style={{
              backgroundColor: colors.grayMuted,
              borderRadius: '20px',
              padding: '32px 24px',
              border: `3px solid ${colors.grayLight}`,
              opacity: 0.85,
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '12px', 
                marginBottom: '24px' 
              }}>
                <FacebookLogo size={50} />
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: colors.gray, 
                textAlign: 'center', 
                marginBottom: '24px' 
              }}>
                فيسبوك
              </h3>
              {comparisons.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: i < comparisons.length - 1 ? `1px solid ${colors.gray}20` : 'none',
                }}>
                  <ComparisonIcons.cross size={24} />
                  <span style={{ fontSize: '15px', color: colors.grayLight, fontWeight: '500' }}>
                    {item.facebook}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ============================================
  
  // ============================================
  // ORGANIZER TEMPLATES SECTION (HOME TEASER)
  // ============================================
  const OrganizerTemplatesSection = () => (
    <section style={{
      padding: '90px 24px',
      backgroundColor: colors.white,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '800',
            color: colors.dark,
            marginBottom: '14px',
          }}>
            قوالب حملات جاهزة للتجار
          </h2>
          <p style={{ fontSize: '18px', color: colors.gray, lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            اختر قالباً سريعاً وابدأ حملة رمضانية جذّابة خلال دقائق — مع شروط مرنة وجوائز وتفاعل قابل للقياس.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '38px',
        }}>
          {[
            {
              title: 'سحب رمضان اليومي',
              desc: 'اجذب زيارات يومية بآلية سحب شفافة وشروط مشاركة مرنة (شراء/مشاركة/مهمة).',
              badge: 'الأكثر طلباً',
            },
            {
              title: 'فوازير رمضان',
              desc: 'أسئلة ممتعة تبني الوعي بالعلامة وتزيد التفاعل — مع نقاط ومكافآت فورية.',
              badge: 'تفاعل عالي',
            },
            {
              title: 'توقع نتيجة مباراة',
              desc: 'اربط علامتك بأجواء المباريات: توقعات قبل المباراة ثم اختيار فائز تلقائياً بعد النتيجة.',
              badge: 'مثالي للرياضة',
            },
          ].map((t, idx) => (
            <div key={idx} style={{
              borderRadius: '20px',
              background: `linear-gradient(180deg, ${colors.light} 0%, ${colors.white} 100%)`,
              border: `1px solid ${colors.grayLight}`,
              padding: '26px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: -80,
                left: -80,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: `${colors.orange}10`,
              }} />
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '999px',
                backgroundColor: `${colors.orange}14`,
                color: colors.orange,
                fontWeight: '800',
                fontSize: '13px',
                marginBottom: '14px',
                position: 'relative',
                zIndex: 1,
              }}>
                {t.badge}
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: '800', color: colors.dark, marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                {t.title}
              </h3>
              <p style={{ fontSize: '15px', color: colors.gray, lineHeight: 1.8, marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                {t.desc}
              </p>

              <a href="/services" style={{
                display: 'inline-block',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: colors.orange,
                color: 'white',
                fontWeight: '800',
                fontSize: '14px',
                textDecoration: 'none',
                position: 'relative',
                zIndex: 1,
              }}>
                استخدم هذا القالب
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/services" style={{
            display: 'inline-block',
            padding: '14px 22px',
            borderRadius: '14px',
            border: `2px solid ${colors.orange}`,
            color: colors.orange,
            fontWeight: '800',
            textDecoration: 'none',
          }}>
            عرض كل الخدمات والتفاصيل
          </a>
        </div>
      </div>
    </section>
  );

// FINAL CTA SECTION
  // ============================================
  const FinalCTASection = () => (
    <section style={{
      padding: '100px 24px',
      background: isOrganizer 
        ? `linear-gradient(135deg, ${colors.orange} 0%, ${colors.tealDark} 100%)`
        : `linear-gradient(135deg, ${colors.teal} 0%, ${colors.green} 100%)`,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '44px', 
          fontWeight: '800', 
          color: 'white', 
          marginBottom: '20px' 
        }}>
          {isOrganizer ? 'جاهز تبدأ موسم رمضان؟' : 'جاهز تربح في رمضان؟'}
        </h2>
        <p style={{ 
          fontSize: '20px', 
          color: 'rgba(255,255,255,0.9)', 
          marginBottom: '40px', 
          lineHeight: 1.7 
        }}>
          {isOrganizer 
            ? 'ابدأ بحملتك الأولى وفعّل تفاعل رمضان بنتائج واضحة وتقارير بسيطة'
            : 'ابدأ الآن وشارك في الحملات الرمضانية المتاحة للفوز بالجوائز'}
        </p>
        <a href={isOrganizer ? '/services' : '/offers'} style={{
          display: 'inline-block',
          padding: '20px 56px',
          fontSize: '22px',
          fontWeight: '700',
          borderRadius: '35px',
          border: 'none',
          backgroundColor: 'white',
          color: isOrganizer ? colors.orange : colors.teal,
          cursor: 'pointer',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
        }}>
          {isOrganizer ? 'ابدأ حملتك' : 'استكشف الحملات'}
        </a>
      </div>
    </section>
  );

  // ============================================
  // FOOTER
  // ============================================
  const Footer = () => (
    <footer style={{ 
      backgroundColor: colors.dark, 
      padding: '60px 24px 30px' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '28px' 
      }}>
        <MazayaGoLogo white size={100} />
        
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          flexWrap: 'wrap', 
          justifyContent: 'center' 
        }}>
          {['سياسة الخصوصية', 'الشروط والأحكام', 'تواصل معنا'].map((link) => (
            <a 
              key={link} 
              href="#" 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontSize: '15px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              {link}
            </a>
          ))}
        </div>

        <p style={{ 
          color: 'rgba(255,255,255,0.5)', 
          fontSize: '14px', 
          marginTop: '20px' 
        }}>
          © 2026 مزايا جو. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );

  // ============================================
  // RENDER
  // ============================================
  return (
    <div style={{ 
      fontFamily: "'Tajawal', 'Cairo', sans-serif", 
      direction: 'rtl', 
      overflowX: 'hidden',
      backgroundColor: colors.light,
    }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {isOrganizer && <OrganizerTemplatesSection />}
      <WhySection />
      <UseCasesSection />
      <ComparisonSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MazayaGoUnifiedHomepage;
