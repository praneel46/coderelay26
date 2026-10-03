export const INTRO_ENABLED = true;
export const INTRO_PLAY_ONCE_PER_SESSION = true;
export const INTRO_MAX_WAIT_MS = 12000;
export const INTRO_BG = '#05060d';

export const INTRO_VIDEOS = {
  mobile: '/video/Vigyantra_intro_mobile_9x16.mp4',
  desktop: '/video/Vigyantra_intro_desktop_16x9.mp4',
} as const;

// Posters are optional; ffmpeg was unavailable in this workspace.
export const INTRO_POSTERS = {
  mobile: null,
  desktop: null,
} as const;

export const INTRO_SESSION_KEY = 'vigyantra_intro_seen_v1';
