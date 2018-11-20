## DLL Test Bed

A prototype repo to look at how to accomplish Typescript with DllPlugin

## How to use this repo to test things out

1. cd into the foolib, foolib-new, and app
2. run `yarn` in each of the folders
3. run `yarn build` in each of the foolib folders
4. run `yarn start` in `app`

Test out swapping a version, modify the value inside `app/.env`. Then repeat step 4.

The app will be built and served here: https://localhost:8080

### Findings

- because of the mapping weirdness, ts-loader cannot be used in the library webpack
- an alias needs to be created for the app side to allow based module name imports to work with the dllreferenceplugin
