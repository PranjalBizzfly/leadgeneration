import { isSupportedCountry, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js";

/**
 * Validates a phone number for the chosen country (shared by the form and the API route).
 * Returns the number in international E.164 form (e.g. +919876543210), or an error message.
 */
export function checkPhone(raw: string, country: string): { e164: string } | { error: string } {
  const value = raw.trim();
  if (!value) return { error: "Please enter your phone number." };
  if (!isSupportedCountry(country)) return { error: "Please choose a country code." };
  if (!/^[+\d\s().-]+$/.test(value)) return { error: "Use digits only (spaces, dashes and brackets are fine)." };
  const parsed = parsePhoneNumberFromString(value, country as CountryCode);
  if (!parsed || !parsed.isValid()) return { error: "Please enter a valid phone number for the selected country." };
  // A number typed with a different +code than the picker is still accepted, as its own country.
  return { e164: parsed.number };
}
