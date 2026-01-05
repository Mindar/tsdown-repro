import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
	"index": "./src/index.ts"
  },
  platform: "neutral",
  exports: true,
  dts: true,
  format: {
	// If both of these are present, watch mode does not work
	// If either cjs OR esm are present, then watch mode works as expected
	cjs: {
		target: ["node22"]
	},
	esm: {
		target: ["es2026"]
	}
  }
})
