# tsdown --watch bug reproduction repo

Versions used for reproduction:
- NodeJs `v25.2.1`
- NPM `11.6.4`
- OS `Manjaro Linux Linux 6.17.13-1-MANJARO`


## How to reproduce

1. Clone this repository
2. `npm install`
3. `tsdown --watch`

Expected:`dist/` folder contains compiled library.
Actual: `dist/` is empty.

## Variations
If the `tsdown.config.ts` is modified to only contain one `format`, so either `cjs` OR `esm`, then watch mode works as expected and will compile the library. If both are present, watch mode does nothing.