# vue-tsc-with-incremental

https://github.com/vuejs/language-tools/issues/2756

## Steps

1. Run `npm install`
2. Run `npx vue-tsc --noEmit`
3. Add type error to any `*.vue` file
4. Run `npx vue-tsc --noEmit`

There should be an error.
