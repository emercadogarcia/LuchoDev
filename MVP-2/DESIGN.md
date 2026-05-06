---
name: Precision Minimalist
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 32px
  margin-page: 64px
  section-padding: 120px
---

## Brand & Style

This design system centers on a high-end, editorial approach to technology branding. It leverages extreme minimalism to evoke a sense of clarity, precision, and intellectual authority. The aesthetic is "quiet luxury" for the digital space—avoiding the visual noise of traditional tech interfaces in favor of expansive whitespace and deliberate typographic hierarchy. 

The brand personality is disciplined and sophisticated. It communicates expertise through what it chooses to omit, ensuring that content and personal insights remain the focal point. The emotional response is one of calm reliability and professional focus, achieved through a strict adherence to a "less but better" philosophy.

## Colors

The color strategy uses a hierarchy of whites and soft grays to define spatial depth without relying on shadows.

- **Surface Strategy:** Use #FFFFFF for primary content containers and cards. Use #F8FAFC for the global page background to create a soft, non-glare environment.
- **Primary Action:** Royal Blue (#2563EB) is reserved strictly for primary calls-to-action and critical interactive states.
- **Subtle Highlights:** Cyan is employed sparingly for non-critical indicators, such as active navigation pips or secondary status tags, adding a modern tech flair.
- **Typography:** Slate (#1E293B) provides high legibility while remaining softer and more sophisticated than pure black.

## Typography

This design system utilizes the Inter font family across all levels to maintain a systematic and utilitarian feel. 

To achieve the "high-end" brand positioning, body text uses a generous 1.75 line height and slight positive letter spacing to improve readability and create an airy, editorial feel. Headlines should use tighter tracking and heavier weights to provide a grounding contrast to the light body copy. Label styles should frequently employ uppercase transformations with increased letter spacing (5%) to distinguish them from functional UI text.

## Layout & Spacing

The layout philosophy is based on a **fixed grid** with significant horizontal and vertical "breathing room." 

- **Grid:** Use a 12-column grid system with a maximum container width of 1120px to ensure line lengths remain optimal for reading.
- **Rhythm:** An 8px base unit governs all spacing. Vertical margins between sections should be aggressive (120px+) to clearly demarcate different content areas.
- **Whitespace:** Prioritize "macro-whitespace" (space between major elements) over "micro-whitespace" (space within elements) to create a sense of luxury and importance for the presented content.

## Elevation & Depth

This design system eschews traditional shadows in favor of **low-contrast outlines** and **tonal layering**. 

Depth is communicated through 1px solid borders using a soft slate tint (#E2E8F0). When an element needs to feel "elevated," move it from the background color (#F8FAFC) to a pure white surface (#FFFFFF). Avoid using blurs or multi-layered shadows. For hover states, a subtle transition to a slightly darker border or a 2px elevation shift is preferred over a drop shadow. This maintains the "precision" aspect of the brand by keeping edges crisp and defined.

## Shapes

The shape language is modern and approachable. A standard radius of **8px (0.5rem)** is applied to all primary containers, buttons, and input fields. 

This specific curvature strikes a balance between the clinical feel of sharp corners and the overly casual nature of pill-shaped buttons. Larger components, such as featured cards or section containers, may use a "rounded-lg" (1rem) or "rounded-xl" (1.5rem) treatment to emphasize their structural importance.

## Components

- **Buttons:** Primary buttons use a solid Royal Blue fill with white text. Secondary buttons use a transparent background with a 1px border (#E2E8F0) and slate text. Transitions should be instant or very fast (150ms) to feel responsive.
- **Input Fields:** Fields consist of a 1px border (#E2E8F0) and a white background. On focus, the border transitions to Royal Blue. Use "Label-sm" typography for floating or top-aligned labels.
- **Cards:** Cards are defined by a white surface against the soft gray background. They should have a 1px border and no shadow. Padding inside cards should be generous (minimum 32px).
- **Chips/Badges:** Use Cyan backgrounds at 10% opacity with saturated Cyan text for highlights. Keep corners fully rounded (pill-shaped) for these small elements only.
- **Lists:** Use wide spacing between list items (16px) and subtle 1px dividers. Icons within lists should be stroke-based (2px weight) rather than filled.
- **Navigation:** Top navigation should be sticky, with a white background and a subtle bottom border. Avoid heavy background blurs; keep the transition from navigation to page content sharp.