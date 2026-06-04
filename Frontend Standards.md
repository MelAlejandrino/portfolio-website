# Frontend Standards

## 1. State Management — Zustand

Zustand is our standard for **client-side** state management. It provides a minimal, scalable, hook-based API for managing global or component-shared state. We use it for UI state, user sessions, theme preferences, and any state that does not require server synchronization.

**Do not use Zustand for server data.** That belongs in React Query.

## 2. Server State — TanStack React Query

React Query is our standard for all **asynchronous server-state** operations. It handles fetching, caching, synchronizing, and updating data from APIs. It eliminates manual loading/error states, reduces redundant network requests, and keeps the UI consistently in sync with the backend.

This complements Zustand — React Query owns server data, Zustand owns client-only state.

## 3. Virtualization — TanStack Virtual

TanStack Virtual is our standard for rendering large lists, tables, or grids. It virtualizes the DOM by only rendering items in the viewport plus a small buffer, dramatically improving performance and memory usage for long datasets.

**Rule of thumb:** Use it when a scrollable list is expected to exceed ~200 items (e.g., infinite scrolls, data grids, large dropdowns).

## 4. Form Management — React Hook Form + Zod

React Hook Form paired with Zod is our standard for all form handling and input validation.

- **React Hook Form** manages form state, submission, and field registration with minimal re-renders.
- **Zod** defines the schema and drives validation — the same schema can be reused for API response typing.

```tsx
// src/features/clients/components/AddClientForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number({ invalid_type_error: 'Age must be a number' }).min(18),
});

type FormValues = z.infer<typeof schema>;

export const AddClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await someApiCall(data);
  };

  return (
    <div>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
        Submit
      </button>
    </div>
  );
};
```

**Best practices:**

- Always derive the TypeScript type from the Zod schema using `z.infer<typeof schema>`. Never define the type separately.
- Reuse the same Zod schema for API response validation where applicable.
- Keep schemas in a dedicated file: `src/features/[module]/schemas/[module].schema.ts`.

## 5. UI Libraries

- **shadcn/ui** — Reusable, accessible components built on Radix UI and styled with Tailwind CSS. Copy directly into the project for full code ownership and customization.
- **diceui** — Extends shadcn/ui with advanced composable components (data tables, drag-and-drop, media players). Same copy-paste philosophy.
- **shoogle** — A discovery tool for the shadcn/ui ecosystem. Search here before building a new component from scratch to prevent duplicate work.

## 6. Performance Patterns

### `memo`

Prevents a component from re-rendering if its props have not changed. Only wrap components that re-render frequently with the same props. Do not apply blindly.

```tsx
const ListItem = memo(({ item, onSelect }: { item: Item; onSelect: (id: string) => void }) => {
  return <div onClick={() => onSelect(item.id)}>{item.name}</div>;
});
```

### `useMemo`

Caches the result of an expensive calculation. Only use for genuinely expensive operations — sorting large arrays, complex transformations. Do not memoize basic arithmetic or simple object constructions.

```tsx
const sortedItems = useMemo(() => {
  return [...items].sort((a, b) => a.price - b.price);
}, [items]);
```

### `useCallback`

Returns a stable function reference. Only useful in two scenarios:

1. Passing a callback to a `memo`-wrapped child
2. A function is used inside a `useEffect` dependency array to prevent infinite loops

```tsx
// Scenario 1: Passing to memo child
const handleSelect = useCallback((id: string) => {
  console.log('Selected:', id);
}, []);

return <MemoChild onSelect={handleSelect} />;

// Scenario 2: Preventing infinite re-runs in useEffect
const fetchData = useCallback(async () => {
  const result = await api.get(userId);
  setData(result);
}, [userId]);

useEffect(() => {
  fetchData();
}, [fetchData]);
```

### Code Splitting — `React.lazy` + `Suspense`

Apply lazy loading at the route level or for heavy components that are not needed on initial render (e.g., modals, complex editors, charts).

```tsx
// app/reports/page.tsx
import { Suspense, lazy } from 'react';

const ReportsView = lazy(() => import('@/features/reports'));

export default function ReportsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReportsView />
    </Suspense>
  );
}
```

Do not lazy-load components that are always visible on first render (e.g., headers, nav). The hydration penalty outweighs the benefit.

## 7. Error Handling

### React Error Boundaries

Wrap major route sections or complex feature areas in Error Boundaries to prevent a single component failure from crashing the entire application.

```tsx
// src/shared/components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('[ErrorBoundary]', error);
    // Optionally send to logging service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
```

Usage:

```tsx
<ErrorBoundary fallback={<ErrorPage />}>
  <DashboardView />
</ErrorBoundary>
```

### Query Error Handling

React Query exposes errors per query. Surface them consistently:

- **Inline errors** — show a message in the component where the data is used.
- **Toasts** — use for background mutations (create, update, delete).
- **Full page errors** — use for critical data that blocks the page from rendering.

```tsx
// Inline
const { data, isError, error } = useQuery({ queryKey: [...], queryFn: ... });
if (isError) return <p>Failed to load: {error.message}</p>;

// Toast on mutation
const mutation = useMutation({
  mutationFn: updateClient,
  onError: (error) => toast.error(error.message),
  onSuccess: () => toast.success('Client updated.'),
});
```

### Global Auth Error Handler

Use a global query client `onError` callback or a custom Axios interceptor to catch `401 Unauthenticated` responses and redirect to the login page. Do not handle this per-query.

```tsx
// src/lib/query-client.ts
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        router.push('/login');
      }
    },
  }),
});
```

## 8. TypeScript Conventions

### `interface` vs `type`

| **Use case** | **Prefer** |
| --- | --- |
| Object shapes (props, API responses, store state) | `interface` |
| Union types, mapped types, utility types | `type` |
| Extending or merging shapes | `interface` (supports `extends`) |

```tsx
// ✅ interface for shapes
interface Client {
  id: string;
  name: string;
  email: string;
}

// ✅ type for unions
type PaymentStatus = 'pending' | 'paid' | 'failed';

// ✅ type for utility derivations
type CreateClientPayload = Omit<Client, 'id'>;
```

### Shared Types

Global or cross-feature types live in `src/shared/types/`.

```
src/shared/types/
  api.types.ts        ← Generic API wrapper types (PaginatedResponse, ApiError, etc.)
  auth.types.ts       ← Session, user role types
  common.types.ts     ← Shared enums, utility types used across features
```

### API Response Types

Define response types alongside service files and derive them from Zod schemas where possible.

```tsx
// src/features/clients/services/clients.service.ts
import { z } from 'zod';

export const ClientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type Client = z.infer<typeof ClientSchema>;
```

## 9. Testing

We use **Vitest** as the test runner and **React Testing Library** for component tests. Tests are colocated with their feature.

```
src/features/clients/
  ModuleNameView.tsx
  useClients.ts
  useClients.test.ts       ← hook unit test
  components/
    AddClientForm.tsx
    AddClientForm.test.tsx  ← component test
```

### Unit Tests (Hooks)

```tsx
// src/features/clients/useClients.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { useClients } from './useClients';
import { createWrapper } from '@/test/utils';

it('fetches and returns clients', async () => {
  const { result } = renderHook(() => useClients(), { wrapper: createWrapper() });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toBeDefined();
});
```

### Component Tests

```tsx
// src/features/clients/components/AddClientForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { AddClientForm } from './AddClientForm';

it('shows validation error when name is empty', async () => {
  render(<AddClientForm />);
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(await screen.findByText('Name is required')).toBeInTheDocument();
});
```

### Guidelines

- Test **behavior**, not implementation. Test what the user sees, not internal state.
- Mock API calls at the service layer, not inside components.
- Keep a shared `src/test/utils.tsx` for common wrappers (QueryClient provider, etc.).

## 10. File & Folder Structure

```
src/
  features/
    [module-name]/
      ModuleNameView.tsx                        ← UI component (view)
      use[ModuleName].ts             ← Custom hook (logic + data)
      [ModuleName].schema.ts          ← Zod schemas for forms/validation
      store/
        [useModuleName].store.ts         ← Zustand store (if needed)
      services/
        [module-name].service.ts       ← React Query hooks + API calls
        [ModuleName].types.ts
      components/
        SomeSubComponent.tsx           ← Local subcomponents
      [useModuleName].test.ts            ← Tests colocated here

  shared/
    components/
      ErrorBoundary.tsx
      LoadingSpinner.tsx
      [other reusable UI primitives]
    constants/
      api.constants.ts
    types/
      api.types.ts
      auth.types.ts
      common.types.ts
    hooks/
      useDebounce.ts
      usePrevious.ts
      [other reusable hooks]
    lib/
      query-client.ts
      axios.ts

  test/
    utils.tsx                          ← Shared test wrappers

app/
  [module-name]/
    page.tsx                           ← Route entry only, calls feature view
```

### Nested Module (Sidebar Group)

```
src/features/admin-settings/
  users/
    UsersView.tsx
    useUsers.ts
  roles/
    RolesView.tsx
    useRoles.ts
```

## 11. Coding Standards

### 11.1 Route Entry (`app/` folder)

Keep `page.tsx` files minimal — routing and rendering the feature view only.

```tsx
// app/clients/page.tsx
import { ClientsView } from '@/features/clients';

export default function ClientsPage() {
  return <ClientsView />;
}
```

### 11.2 Feature View (`src/features/[module]/ModuleNameView.tsx`)

UI only. No business logic, no direct API calls, no calculations.

```tsx
// src/features/clients/ClientsView.tsx
import { useClients } from './useClients';

export const ClientsView = () => {
  const { isFetching, clients } = useClients();

  if (isFetching) return <LoadingSpinner />;

  return (
    <main className="flex flex-col gap-4 p-8">
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </main>
  );
};
```

### 11.3 Custom Hook (`useModuleName.ts`)

All logic, data fetching, and derived state belong here.

```tsx
// src/features/clients/useClients.ts
import { servicesClients } from './services/clients.service';

export const useClients = () => {
  const { isFetching, data: clients = [] } = servicesClients.useGetAll();
  return { isFetching, clients };
};
```

### 11.4 Service Layer (`services/[module-name].service.ts`)

Wire React Query hooks to API calls here. This is the only place where `useQuery` and `useMutation` are written.

```tsx
// src/features/clients/services/clients.service.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiConstants } from '@/shared/constants/api.constants';
import { axiosInstance } from '@/shared/lib/axios';
import type { Client } from './clients.service';

const getAll = async (): Promise<Client[]> => {
  const { data } = await axiosInstance.get(ApiConstants.CLIENTS);
  return data;
};

const create = async (payload: CreateClientPayload): Promise<Client> => {
  const { data } = await axiosInstance.post(ApiConstants.CLIENTS, payload);
  return data;
};

export const servicesClients = {
  useGetAll: () =>
    useQuery({ queryKey: ApiConstants.CLIENTS_QUERY_KEY, queryFn: getAll }),

  useCreate: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: create,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ApiConstants.CLIENTS_QUERY_KEY }),
    });
  },
};
```

### 11.5 Zustand Store (`store/[module-name].store.ts`)

Client-only UI state. Always type state values — no raw strings where a union type is appropriate.

```tsx
// src/features/clients/store/clients.store.ts
import { create } from 'zustand/react';

type DialogMode = 'create' | 'edit' | '';

interface ClientsStore {
  dialogMode: DialogMode;
  selectedClientId: string | null;
  setDialogMode: (mode: DialogMode) => void;
  setSelectedClientId: (id: string | null) => void;
}

export const useClientsStore = create<ClientsStore>((set) => ({
  dialogMode: '',
  selectedClientId: null,
  setDialogMode: (dialogMode) => set({ dialogMode }),
  setSelectedClientId: (selectedClientId) => set({ selectedClientId }),
}));
```

### 11.6 Constants (`src/shared/constants/api.constants.ts`)

All API endpoints and query keys in one place.

```tsx
export const ApiConstants = {
  /** Get all clients */
  CLIENTS: '/clients',
  CLIENTS_QUERY_KEY: ['clients'] as const,

  /** Get client by ID */
  CLIENT_DETAIL: (id: string) => `/clients/${id}`,
  CLIENT_DETAIL_QUERY_KEY: (id: string) => ['clients', id] as const,
} as const;
```

### 11.7 Barrel Exports (`index.ts`)

Each feature folder exposes its public API via a barrel export. This keeps imports clean and prevents deep path coupling between features.

```tsx
// src/features/clients/index.ts
export { ClientsView } from './ClientsView';
export { useClients } from './useClients';
// Do NOT export internal subcomponents or implementation details
```

Import from the feature root, not deep paths:

```tsx
// ✅
import { ClientsView } from '@/features/clients';

// ❌
import { ClientsView } from '@/features/clients/components/ClientsView';
```

## 12. Quick Reference

### File Location Summary

| **What** | **Where** | **Example** |
| --- | --- | --- |
| Route entry | `app/` | `app/clients/page.tsx` |
| UI component | `src/features/[module]/` | `src/features/clients/ClientsView.tsx` |
| Logic hook | `src/features/[module]/` | `src/features/clients/useClients.ts` |
| Service layer | `src/features/[module]/services/` | `src/features/clients/services/clients.service.ts` |
| Zod schema | `src/features/[module]/` | `src/features/clients/clients.schema.ts` |
| Zustand store | `src/features/[module]/store/` | `src/features/clients/store/useClient.store.ts` |
| Shared components | `src/shared/components/` | `src/shared/components/ErrorBoundary.tsx` |
| Shared hooks | `src/shared/hooks/` | `src/shared/hooks/useDebounce.ts` |
| Shared types | `src/shared/types/` | `src/shared/types/api.types.ts` |
| API constants | `src/shared/constants/` | `src/shared/constants/api.constants.ts` |
| Test utilities | `src/test/` | `src/test/utils.tsx` |

### File Naming Convention

| **Type** | **Convention** | **Example** |
| --- | --- | --- |
| Feature view | `PascalCase.tsx` | `ClientsView.tsx` |
| Hooks | `useCamelCase.ts` | `useClients.ts` |
| Store | `useCamelCase.store.ts` | `useClients.store.ts` |
| Service | `kebab-case.service.ts` | `clients.service.ts` |
| Schema | `kebab-case.schema.ts` | `clients.schema.ts` |
| Constants | `kebab-case.constants.ts` | `api.constants.ts` |
| Tests | Same as source + `.test` | `useClients.test.ts` |

**Exception:** Next.js reserved files (`page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`) remain lowercase as required by the framework.

### Decision Guide

| **Situation** | **Tool** |
| --- | --- |
| Fetching / caching API data | React Query (`services/`) |
| UI state, modals, toggles | Zustand store |
| Form state + validation | React Hook Form + Zod |
| List with 200+ items | TanStack Virtual |
| Heavy route component | `React.lazy`  • `Suspense` |
| Component renders too often | `memo`  • `useCallback` |
| Expensive calculation | `useMemo` |
| Auth error (global) | Query client `onError` / Axios interceptor |
| Crash isolation | `ErrorBoundary` |