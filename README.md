# Template Expo by bossROD

## Prerequisites

- Download extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in your VSCode.
- Install [node](https://nodejs.org/en) using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)
- Install [pnpm](https://pnpm.io/) (check version in [package.json](./package.json) file look for `packageManager`)
- Follow this [Development Build](https://docs.expo.dev/get-started/set-up-your-environment/) to setup Expo.
- Follow this [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) to setup Android Emulator.
- Follow this [IOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) to setup IOS Simulator.

## Installation

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm android
pnpm ios
pnpm web
```

## Rules

Please read the repo **Standards** here [README.Standards.md](./README.Standards.md)
