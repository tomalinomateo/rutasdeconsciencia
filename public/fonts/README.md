# Fonts Directory

This directory contains all custom fonts used in the project.

## Structure

```
fonts/
├── garet/           # Garet font family
│   ├── Garet-Book.otf
│   ├── Garet-Book.ttf
│   ├── Garet-Book.woff
│   ├── Garet-Book.woff2
│   ├── Garet-Heavy.otf
│   ├── Garet-Heavy.ttf
│   ├── Garet-Heavy.woff
│   └── Garet-Heavy.woff2
└── the-seasons/     # The Seasons font family
    ├── Fontspring-DEMO-theseasons-bd.otf
    ├── Fontspring-DEMO-theseasons-bdit.otf
    ├── Fontspring-DEMO-theseasons-it.otf
    ├── Fontspring-DEMO-theseasons-lt.otf
    ├── Fontspring-DEMO-theseasons-ltit.otf
    └── Fontspring-DEMO-theseasons-reg.otf
```

## Font Usage

### The Seasons

- **Family**: `"The Seasons", serif`
- **Weights**: normal (400), bold (700)
- **Styles**: normal, italic
- **Usage**: Main titles and headings

### Garet

- **Family**: `"Garet", sans-serif`
- **Weights**: normal (400), bold (700)
- **Styles**: normal
- **Usage**: Body text, subtitles, and UI elements

## CSS Implementation

Fonts are loaded in `src/app/globals.css` using `@font-face` declarations with proper fallbacks and optimization settings.
