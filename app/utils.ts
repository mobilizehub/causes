export function pluralize(
	word: string,
	count: number,
	customPlural?: string,
): string {
	if (count === 1) {
		return `${count.toLocaleString()} ${word}`;
	}

	// Use custom plural if provided
	if (customPlural) {
		return `${count.toLocaleString()} ${customPlural}`;
	}

	// Basic English pluralization rules
	if (word.endsWith("y")) {
		// Words ending in 'y': change 'y' to 'ies'
		// But only if the letter before 'y' is a consonant
		const letterBeforeY = word[word.length - 2];
		if (!"aeiou".includes(letterBeforeY.toLowerCase())) {
			return `${count.toLocaleString()} ${word.slice(0, -1)}ies`;
		}
	} else if (
		word.endsWith("s") ||
		word.endsWith("sh") ||
		word.endsWith("ch") ||
		word.endsWith("x") ||
		word.endsWith("z")
	) {
		// Words ending in 's', 'sh', 'ch', 'x', 'z': add 'es'
		return `${count.toLocaleString()} ${word}es`;
	}

	// Default: add 's'
	return `${count.toLocaleString()} ${word}s`;
}
