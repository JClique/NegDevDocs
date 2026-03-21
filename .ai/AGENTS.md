# Negative Development Docs - Agent Context

## Project Overview

This is a documentation site for **Negative Development**, a community darkroom hosted at SEESAW, Manchester. The site covers analogue photography, film developing, and darkroom printing processes.

- **Framework**: VitePress
- **Styling**: Tailwind CSS
- **Components**: Vue.js
- **Dev command**: `npm run docs:dev`

## Git Workflow

- Work is done on the `development` branch
- Commit messages should be concise and descriptive
- Commits are made after completing features/tasks, not after every single change

## Content Conventions

### Writing Style

- Clear, accessible language for beginners
- Concise responses - avoid unnecessary preamble
- Use British English spelling (e.g., "colour", "developing")
- Technical terms should be explained or linked to the glossary

### Documentation Structure

- `/docs/analogue-photography/` - Beginner photography guides
- `/docs/film-developing/` - Film development processes
- `/docs/darkroom-printing/` - Darkroom printing guides
- `/docs/appendix/` - Reference materials and calculators
- `/components/` - Vue components used in the site
- `/components/enumerables/` - JSON data arrays (film stocks, developers, etc.)

### Key References

- Community darkroom: **SEESAW, Manchester**
- Website: https://www.negativedevelopment.co.uk/

## Development Notes

### Component Conventions

- Vue components use PascalCase names (e.g., `VButton`, `VFieldItem`)
- Form components use `useForm()` helper from `form-helper.ts`
- Field types include: text, select, radio, checkbox, range, action

### JSON Data Files

- Film developer times sourced from official Ilford datasheets
- All times are at 20°C/68°F unless otherwise noted
- Follow existing JSON structure when adding new entries
