# AI Assistant Guidelines

## Project Context
This is a React Native Expo project with TypeScript. When working on this codebase, you must adhere to the established conventions and patterns.

## Important Instructions

### 1. Project Structure Compliance
**ALWAYS** follow the structure and conventions defined in `@README.project-structure.md` when:
- Creating new files or folders
- Organizing code modules
- Naming files, folders, functions, types, etc.
- Implementing features or routes

### 2. Rules and Patterns
**ALWAYS** check the `@rules/` folder for specific implementation patterns before:
- Creating query hooks → See `@rules/README.query-hooks.md`
- Creating mutation hooks → See `@rules/README.mutation-hooks.md`
- Creating Zustand stores → See `@rules/README.zustand-store.md`
- Implementing any feature that might have established patterns

### 3. Code Generation Guidelines
When generating or modifying code:
1. First, understand the existing patterns in the codebase
2. Check if there are similar implementations to reference
3. Follow the established naming conventions strictly
4. Place files in the correct folders according to the project structure
5. Use the appropriate workflow pattern (Pattern 1, 2, or 3) based on complexity

### 4. Key Conventions Summary
- **File/Folder naming**: `kebab-case` (use `_kebab-case` for domain-specific modules)
- **Types/Classes**: `PascalCase`
- **Functions/Variables**: `camelCase`
- **Package Manager**: Always use `pnpm`
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Routing**: Expo Router (file-based)

### 5. Before Making Changes
Always:
1. Read the relevant documentation in `@README.project-structure.md`
2. Check for existing patterns in `@rules/` folder
3. Look for similar implementations in the codebase
4. Maintain consistency with existing code style

### 6. When Creating New Features
Follow this checklist:
- [ ] Determine if it's a shared module, route domain, or feature domain
- [ ] Create the appropriate folder structure as defined in the project structure
- [ ] Follow the naming conventions for all files and exports
- [ ] Check rules folder for implementation patterns
- [ ] Use existing utilities and shared modules when possible
- [ ] Only create service layers when business logic is complex

### 7. Checks Commands
- `pnpm format` - Format code with Prettier
- `pnpm check:all` - Run all checks concurrently for TypeScript, Lint and Check Spell

Remember: Consistency and adherence to established patterns is crucial for maintaining a clean, scalable codebase.