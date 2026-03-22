const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/\s*\/\s*/g, "-")
		.replace(/\s+/g, "-")
		.replace(/[^\w-]/g, "")
		.replace(/--+/g, "-")
		.replace(/^-|-$/g, "");
}

function parseGlossary(markdown) {
	const lines = markdown.split("\n");
	const terms = {};
	let currentTerm = null;
	let currentContent = [];

	for (const line of lines) {
		const termMatch = line.match(/^### (.+)$/);
		if (termMatch) {
			if (currentTerm) {
				const { html, text } = renderDefinition(currentContent.join("\n"));
				terms[slugify(currentTerm)] = {
					term: currentTerm.trim(),
					definition: text,
					definitionHtml: html,
				};
			}
			currentTerm = termMatch[1];
			currentContent = [];
		} else if (currentTerm) {
			// Accumulate all content lines for this term until the next term header
			// Ignore VitePress hidden section headings (e.g., "## A {.hidden}")
			if (!line.startsWith("## ")) {
				currentContent.push(line);
			}
		}
	}

	if (currentTerm) {
		const { html, text } = renderDefinition(currentContent.join("\n"));
		terms[slugify(currentTerm)] = {
			term: currentTerm.trim(),
			definition: text,
			definitionHtml: html,
		};
	}

	return terms;
}

function cleanDefinitionToText(text) {
	return text
		.replace(/\*\*(.+?)\*\*/g, "$1")
		.replace(/\*(.+?)\*/g, "$1")
		.replace(/`(.+?)`/g, "$1")
		.replace(/\[(.+?)\]\(.+?\)/g, "$1")
		.replace(/• /g, "")
		.replace(/\n/g, " ")
		.replace(/\s+/g, " ")
		.replace(/,(\S)/g, ", $1")
		.trim();
}

function renderDefinition(markdown) {
	// Convert common unicode bullets to markdown list items for nicer HTML
	const normalized = markdown
		.split("\n")
		.map((ln) => (ln.trim().startsWith("• ") ? ln.replace("• ", "- ") : ln))
		.join("\n")
		.trim();

	const html = marked.parse(normalized, { mangle: false, headerIds: false });
	const text = cleanDefinitionToText(normalized).replace(/\.$/, "");
	return { html, text };
}

const rootDir = path.join(__dirname, "..");
const glossaryPath = path.join(rootDir, "docs/glossary.md");
const outputPath = path.join(rootDir, "docs/.vitepress/glossary-data.json");

const markdown = fs.readFileSync(glossaryPath, "utf8");
const terms = parseGlossary(markdown);

fs.writeFileSync(outputPath, JSON.stringify(terms, null, "\t"));

console.log(`Generated ${Object.keys(terms).length} terms to ${outputPath}`);
