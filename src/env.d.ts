/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    theme?: string
    reveal?: string
    onsubmit?: string
  }
}
