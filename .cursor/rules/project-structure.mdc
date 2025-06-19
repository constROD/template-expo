---
description: Guidelines for Project Structure
globs: 
alwaysApply: true
---
# Project Structure & Code Organization

## Package Manager
- Use `pnpm` for all package installations and management

## Core Libraries and Versions
- React Native: Expo SDK
- TypeScript: ^5.x.x
- React Navigation: For navigation
- TanStack Query: For data fetching and caching
- Zustand: For state management
- Zod: ^3.x.x for validation
- React Hook Form: For form handling
- Expo Router: For file-based routing

## Naming Conventions
- `kebab-case` - for all folders/files
- `_kebab-case` - for feature and route domain's specific common modules
- `PascalCase` - for classes and types
- `snake_case` - for database tables and columns
- `camelCase` - for functions, zod schemas and etc.

## Miscellaneous Folders
- `docs` - for any to-do plan workflows or documentation
- `prompts` - for prompts format
- `rules` - for standards or rules of the repo
- `.expo` - for expo configuration
- `assets` - for static assets (images, fonts, etc.)

## Common Modules
- `assets` - for assets
- `components` - for components
- `constants` - for constants
- `contexts` - for react context api
- `data` - for data access layer (e.g. `api`, `database`)
- `hooks` - for custom hooks, tanstack query and mutation
- `lib` - for 3rd party integrations libraries
- `services` - for business logic and orchestration of data access layer **(Only if necessary)**
- `stores` - for stores (e.g. `zustand`)
- `types` - for types
- `utils` - for utilities
  
## Domain Folders
- `src` - main source code and shared common modules
- `src/app` - main router folder
- `src/features` - main features folder **(Only if necessary)**

## Files
- `src/app/_layout.tsx` - root layout file
- `src/app/index.tsx` - main entry point

## Shared Modules Structure
Shared modules follow this structure:

```
src/
├── assets/                 # Shared assets module
├── components/             # Shared components
│   └── ui/                 # UI components (button, input, etc.)
├── constants/              # Shared constants module
├── contexts/               # Shared React context API module
├── data/                   # Shared data access layer module (API, database)
├── hooks/                  # Shared custom hooks, tanstack query and mutation
│   ├── use-<hook-name>.ts  # Shared custom hook
│   └── query/              # Query hooks (only if necessary)
│       ├── use-<hook-name>-query.ts    # React Query query
│       └── use-<hook-name>-mutation.ts # React Query mutation
├── lib/                    # Shared 3rd party integrations
├── services/               # Shared business logic (only if necessary)
├── stores/                 # Shared stores (e.g. zustand)
├── types/                  # Shared types
└── utils/                  # Shared utilities
```

## Routes Domain Structure
When creating new route files, follow this structure:

```
src/app/<route-name>/
├── index.tsx               # Route's entry point
├── _components/            # Route's components module
├── _constants/             # Route's constants module
├── _contexts/              # Route's react context api module (only if necessary)
├── _hooks/                 # Route's hooks module
├── _types/                 # Route's types module
└── _utils/                 # Route's utilities module
```

## Feature Domain Structure (Optional)
When creating new feature files, follow this structure:

```
src/features/<feature-name>/
├── index.ts                # Feature's entry point
├── _assets/                # Feature's assets (only if necessary)
├── _components/            # Feature's components
├── _constants/             # Feature's constants
├── _contexts/              # Feature's react context api (only if necessary)
├── _data/                  # Feature's data access layer (only if necessary)
├── _hooks/                 # Feature's custom hooks, tanstack query and mutation (only if necessary)
├── _lib/                   # Feature's 3rd party integrations libraries (only if necessary)
├── _services/              # Feature's business logic (only if necessary)
├── _stores/                # Feature's stores (e.g. zustand)
├── _types/                 # Feature's types
└── _utils/                 # Feature's utilities
```