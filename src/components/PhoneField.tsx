"use client";

import { useSyncExternalStore } from "react";
import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const flag = (cc: string) => String.fromCodePoint(...[...cc].map((c) => 0x1f1a5 + c.charCodeAt(0)));

/** Every country libphonenumber knows, sorted by name, with its dialling code. */
export const COUNTRIES = getCountries()
  .map((code) => ({ code, name: regionNames.of(code) ?? code, dial: getCountryCallingCode(code) }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const DEFAULT_COUNTRY: CountryCode = "IN";

const field =
  "w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand-soft";

type Props = {
  country: CountryCode;
  onCountryChange: (c: CountryCode) => void;
  onBlur: () => void;
  error?: string;
};

/** Country code picker plus phone number input; submitted as `phoneCountry` and `phone`. */
/** True only in the browser after hydration. Country names come from Intl, which differs between Node and browsers. */
const noop = () => () => {};
const useHydrated = () => useSyncExternalStore(noop, () => true, () => false);

export function PhoneField({ country, onCountryChange, onBlur, error }: Props) {
  const hydrated = useHydrated();
  const options = hydrated ? COUNTRIES : COUNTRIES.filter((c) => c.code === country);
  return (
    <div className="text-sm font-semibold">
      <label htmlFor="phone">Phone Number</label>
      <div className="mt-1.5 flex gap-2">
        <select
          name="phoneCountry"
          aria-label="Country Code"
          autoComplete="tel-country-code"
          value={country}
          onChange={(e) => onCountryChange(e.target.value as CountryCode)}
          className={`${field} !w-[7.5rem] shrink-0 !px-2.5`}
        >
          {options.map((c) => (
            <option key={c.code} value={c.code}>
              {flag(c.code)} +{c.dial} {c.name}
            </option>
          ))}
        </select>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={country === "IN" ? "98765 43210" : "Phone Number"}
          maxLength={20}
          onBlur={onBlur}
          className={`${field} min-w-0`}
          aria-invalid={!!error}
          aria-describedby="err-phone"
        />
      </div>
      {error && <span id="err-phone" className="mt-1 block text-xs font-medium text-danger">{error}</span>}
    </div>
  );
}
