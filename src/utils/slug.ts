/**
 * Converts a URL slug to a readable name format
 * Example: "maulana-hilmi-arkan" -> "Maulana Hilmi Arkan"
 */
export function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Validates if a slug exists (is an invited guest)
 * This will later be connected to a database/API
 * For now, returns true for any non-empty slug
 */
export function isValidGuestSlug(slug: string): boolean {
  // TODO: Connect to database/API to validate guest list
  // For now, any non-empty slug is considered valid
  return slug.trim().length > 0;
}

