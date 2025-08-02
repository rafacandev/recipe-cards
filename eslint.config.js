import { defineConfig } from "eslint/config"

import js from "@eslint/js"
import solid from "eslint-plugin-solid/configs/recommended"

export default defineConfig([{ ignores: ["dist"] }, js.configs.recommended, solid])
