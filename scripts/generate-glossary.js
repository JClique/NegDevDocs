const fs = require("fs");
const path = require("path");

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
				const definition = cleanDefinition(currentContent.join(" "));

				terms[slugify(currentTerm)] = {
					term: currentTerm.trim(),
					definition: definition,
				};
			}
			currentTerm = termMatch[1];
			currentContent = [];
		} else if (currentTerm) {
			const trimmed = line.trim();
			if (
				trimmed &&
				!trimmed.startsWith("-") &&
				!trimmed.startsWith("**") &&
				!trimmed.startsWith("##") &&
				!trimmed.match(/^\{/)
			) {
				currentContent.push(line);
			}
		}
	}

	if (currentTerm) {
		const definition = cleanDefinition(currentContent.join(" "));

		terms[slugify(currentTerm)] = {
			term: currentTerm.trim(),
			definition: definition,
		};
	}

	return terms;
}

function cleanDefinition(text) {
	return text
		.replace(/\*\*(.+?)\*\*/g, "$1")
		.replace(/\*(.+?)\*/g, "$1")
		.replace(/`(.+?)`/g, "$1")
		.replace(/\[(.+?)\]\(.+?\)/g, "$1")
		.replace(/• /g, "")
		.replace(/\.\s*$/, "")
		.replace(/\n/g, " ")
		.replace(/\s+/g, " ")
		.replace(/,(\S)/g, ", $1")
		.trim();
}

const rootDir = path.join(__dirname, "..");
const glossaryPath = path.join(rootDir, "docs/glossary.md");
const outputPath = path.join(rootDir, "docs/.vitepress/glossary-data.json");

const markdown = fs.readFileSync(glossaryPath, "utf8");
const terms = parseGlossary(markdown);

fs.writeFileSync(outputPath, JSON.stringify(terms, null, "\t"));

console.log(`Generated ${Object.keys(terms).length} terms to ${outputPath}`);
