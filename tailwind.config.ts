import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Artist Portfolio Brand Colors
				'velvet-beige': 'hsl(var(--velvet-beige))',
				'soft-white': 'hsl(var(--soft-white))',
				'velvet-smoke': 'hsl(var(--velvet-smoke))',
				'velvet-deep': 'hsl(var(--velvet-deep))',
				'chaos-accent': 'hsl(var(--chaos-accent))',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Experimental Animations
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(-2px)' },
					'40%': { transform: 'translateX(2px)' },
					'60%': { transform: 'translateX(-1px)' },
					'80%': { transform: 'translateX(1px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' }
				},
				'chaos-shuffle': {
					'0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateX(-5px) translateY(-3px) rotate(1deg)' },
					'50%': { transform: 'translateX(3px) translateY(5px) rotate(-1deg)' },
					'75%': { transform: 'translateX(-2px) translateY(-2px) rotate(0.5deg)' }
				},
				'wipe-left': {
					from: { clipPath: 'inset(0 100% 0 0)' },
					to: { clipPath: 'inset(0 0 0 0)' }
				},
				'wipe-right': {
					from: { clipPath: 'inset(0 0 0 100%)' },
					to: { clipPath: 'inset(0 0 0 0)' }
				},
				'slide-chaos': {
					from: { 
						transform: 'translateX(-100%) skewX(15deg)',
						opacity: '0'
					},
					to: { 
						transform: 'translateX(0) skewX(0deg)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.3s ease-in-out',
				'float': 'float 6s ease-in-out infinite',
				'chaos-shuffle': 'chaos-shuffle 8s ease-in-out infinite',
				'wipe-left': 'wipe-left 1s ease-out',
				'wipe-right': 'wipe-right 1s ease-out',
				'slide-chaos': 'slide-chaos 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
