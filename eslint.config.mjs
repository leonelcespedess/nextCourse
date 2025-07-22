import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "dist/",
      "build/",
      "out/",
      "node_modules/",
      "*.log",
      ".env",
      ".env.local",
      "generated.ts",
      "api-types/",
      "src/legacy-code/",
      "app/generated/", // <-- agregado aquí
      
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
