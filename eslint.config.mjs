import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/.expo",
        "**/*.config.js",
        "**/*.config.ts",
        "**/*.config.mjs",
        "**/expo-env.d.ts",
    ],
}, ...compat.extends("universe/native"), {
    rules: {
        "react/jsx-curly-brace-presence": ["error", {
            props: "never",
            children: "never",
            propElementValues: "always",
        }],

        "@typescript-eslint/consistent-type-imports": ["warn", {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
        }],

        "@typescript-eslint/no-explicit-any": ["error", {
            fixToUnknown: true,
        }],

        "no-console": "error",
    },
}];