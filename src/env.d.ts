/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    theme?: string
    reveal?: any
    onsubmit?: string
  }
}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    reveal?: any
    revealed?: any
  }
}
