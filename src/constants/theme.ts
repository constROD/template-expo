export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  primary: '#1C64F2',
  secondary: '#dbeafe',
  warning: '#ca8a04',
  'warning-bg': '#fef9c3',
  danger: '#dc2626',
  'danger-bg': '#fee2e2',
  gray: '#4b5563',
  'gray-bg': '#f3f4f6',
  link: '#2C71F6',
} as const;

export const FONTS = {
  regular: { fontFamily: 'Poppins_400Regular', fontWeight: 'regular' },
  bold: { fontFamily: 'Poppins_700Bold', fontWeight: 'bold' },
} as const;

export const FONT_SIZES = {
  sm: 10,
  base: 12,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
} as const;

export const SPACINGS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
} as const;

export const BORDER_RADIUS = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  xl: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
} as const;
