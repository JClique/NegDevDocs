# Update Glossary

This skill identifies technical photography and darkroom terms in articles that should be added to the glossary, and ensures consistent linking throughout.

## What I do

I analyse documentation articles and identify technical terms that:

- Are photography or darkroom related
- Require explanation for beginners
- Are not already in the glossary
- Should be consistently linked throughout the article

## Rules for Glossary Entries

### What to include

- Technical photography terms (exposure, aperture, depth of field, etc.)
- Darkroom processes and chemicals (developer, fixer, stop bath, etc.)
- Equipment terminology (enlarger, easel, timer, etc.)
- Film formats and camera types
- Processing techniques (push/pull, cross-processing, etc.)

### What to exclude

- Common words explained inline
- Complex terms unrelated to photography/darkroom
- Terms already in the glossary
- Brand names (unless they represent a generic concept)

### Content rules

- Maximum two paragraphs
- Plain text explanation (no markdown formatting)
- Written in clear, accessible language
- Follow the site's writing style (British English, beginner-friendly)
- First sentence should define the term concisely

## Linking Rules

- Link glossary terms using markdown links: `[Term](/glossary#term-id)`
- **First instance only**: Only link the term on its first occurrence in the article
- Subsequent uses should be plain text
- If a term appears multiple times, include the link on the first instance

## How to use

1. Read the article to understand its content and identify technical terms
2. Read `docs/glossary.md` to check existing entries
3. Identify terms that need glossary entries
4. Draft new glossary entries following the rules
5. Update the article to link terms on first instance only
6. Return a summary of changes

## Process

### Step 1: Identify candidates

Look for:

- Bold terms introduced for the first time
- Technical jargon without inline explanation
- Processes or equipment mentioned by name
- Terms that a beginner might not know

### Step 2: Check existing glossary

Before adding a term:

- Search `docs/glossary.md` to confirm it's not already included
- Note the term's slug (lowercase, hyphens, no special characters)

### Step 3: Draft entries

Create entries following this format:

```markdown
### New Term

A clear, concise definition of the term in plain text. This can be one or two paragraphs that explain the concept for a beginner.
```

### Step 4: Position correctly

Glossary entries must be in **alphabetical order**. Find the correct section (A-Z) and insert the entry in the appropriate position.

### Step 5: Update article links

For each new term:

- Find the first occurrence in the article
- Wrap it in a glossary link: `[New Term](/glossary#new-term)`
- Remove links from subsequent occurrences

## Example

**Article mentions**: "An enlarger projects light through the negative onto light-sensitive paper."

**Analysis**: "Enlarger" is a technical darkroom term. Check glossary - not present.

**Glossary entry** (in D section):

```markdown
### Enlarger

A device used in darkroom printing that projects light through a photographic negative onto light-sensitive printing paper.
Enlargers allow photographers to create prints larger than the original negative and control image size, focus, and exposure.
```

**Article update**: Link only on first instance: `An [enlarger](/glossary#enlarger) projects light...`
