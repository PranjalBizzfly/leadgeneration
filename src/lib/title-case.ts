/** Capitalises the first letter of every word for display, leaving acronyms, mixed-case brand names, emails and paths untouched. */
export function titleCase(text: string): string {
  return text
    .split(/(\s+)/)
    .map((token) =>
      /@|:\/\/|^\/|www\.|_/.test(token)
        ? token
        : token.replace(/(^|[(\["“‘\-–—/+&])([a-z])([A-Za-z’']*)/g, (match, pre: string, first: string, rest: string) =>
            /[A-Z]/.test(rest) ? match : pre + first.toUpperCase() + rest,
          ),
    )
    .join("");
}
