# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Version caveat

This is Next.js 16.2.6 — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed deprecation notices.

## Commands

```
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

Testing uses **Vitest** + **React Testing Library** (not yet wired into `package.json`).

## Tech stack standards

Full standards live in `Frontend Standards.md`. Summary of the key choices:

| Concern | Tool |
| --- | --- |
| Client-side state | **Zustand** (stores in `src/features/[module]/store/`) |
| Server data (fetch/cache/sync) | **TanStack React Query** (hooks in `services/`) |
| Forms + validation | **React Hook Form** + **Zod** (derive TS types via `z.infer`) |
| Virtualization (200+ items) | **TanStack Virtual** |
| UI primitives | **shadcn/ui** (Radix + Tailwind), **diceui** for advanced components |
| Tests | **Vitest** + **React Testing Library** |

Zustand and React Query are complementary — Zustand owns client-only state (UI modals, toggles, theme), React Query owns all async server data.

## File structure

```
src/
  features/
    [module]/
      ModuleNameView.tsx         # UI only, no logic or API calls
      use[Module].ts             # Custom hook — all logic + data fetching
      [module].schema.ts         # Zod schemas for forms/validation
      index.ts                   # Barrel export (public API only)
      store/
        use[Module].store.ts     # Zustand store (client-only state)
      services/
        [module].service.ts      # React Query hooks + API calls
        [module].types.ts
      components/                # Local subcomponents
      use[Module].test.ts        # Colocated tests

  shared/
    components/                  # Reusable UI (ErrorBoundary, LoadingSpinner)
    hooks/                       # Reusable hooks (useDebounce, usePrevious)
    types/                       # Shared types (api.types.ts, auth.types.ts)
    constants/                   # API endpoints + query keys
    lib/                         # query-client.ts, axios.ts

  test/
    utils.tsx                    # Shared test wrappers (QueryClient provider, etc.)

app/
  [module]/
    page.tsx                     # Route entry only — delegates to feature view
```

## Coding standards

- **Route entries** (`app/**/page.tsx`) are minimal — render the feature view only, no logic.
- **Feature views** (`ModuleNameView.tsx`) are UI-only — data comes from the custom hook.
- **Custom hooks** (`useModule.ts`) contain all logic, data fetching, and derived state.
- **Service layer** (`services/*.service.ts`) is the only place `useQuery`/`useMutation` are written.
- **Import via barrel** — `import { ClientsView } from '@/features/clients'`, never deep paths.
- **File naming**: feature views/hooks are PascalCase (`ClientsView.tsx`, `useClients.ts`), services/constants are kebab-case (`clients.service.ts`, `api.constants.ts`), stores are `useCamelCase.store.ts`. Next.js reserved files (`page.tsx`, `layout.tsx`, `loading.tsx`) stay lowercase as required.

## TypeScript

- `interface` for object shapes (props, API responses, store state); `type` for unions, mapped types, and utility derivations.
- Always derive form types from Zod schemas via `z.infer<typeof schema>` — never define the type separately.
- Path alias `@/*` maps to `./*` (project root).

## Error handling

- **Error Boundaries** wrap major route sections to prevent one crash from taking down the full app.
- **React Query errors**: inline for read queries, toasts for mutations, full-page fallback for critical blocking data.
- **401/Unauthenticated**: handle globally via QueryClient `onError` or Axios interceptor — never per-query.

## Instant navigation

If fixing slow client-side navigations, Suspense alone is not enough. You must also export `unstable_instant` from the route. See `node_modules/next/dist/docs/` for details.
