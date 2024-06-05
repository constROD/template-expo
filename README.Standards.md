# Standards

## Naming conventions

- `kebab-case` - for all folders/files.
- `PascalCase` - for classes and types.
- `snake_case` - for database tables and columns.
- `camelCase` - for functions, zod schemas and etc.

## Folder structure

- `src` - main source code.

### Router

- `src/app` - for expo app router.
  - `src/app/<route-name>/index.tsx` - for route page component.
  - `src/app/<route-name>/_components` - for route page components.

### Features

- `src/features` - for feature modules. **(Only if needed)**
  - `src/features/<feature-name>` - for feature module.
    - `src/features/<feature-name>/components` - for components.
    - `src/features/<feature-name>/constants` - for constants.
    - `src/features/<feature-name>/utils` - for utilities.

### Others

  - `src/assets` - for assets.
  - `src/components` - for shared components.
    - `src/components/ui/*` - for ui components (`button`, `input` & etc).
  - `src/constants` - for constants.
  - `src/data` - for data access layer. (e.g. `api`, `database`).
  - `src/lib` - for 3rd party integrations libraries.
  - `src/mutation` - for `react-query` mutation. **(Only if needed)**
  - `src/query` - for `react-query` query. **(Only if needed)**
  - `src/stores` - for zustand stores.
  - `src/types` - for types.
  - `src/utils` - for utilities.
