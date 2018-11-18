a prototype repo to look at how to accomplish Typescript with DllPlugin

Findings:

- because of the mapping weirdness, ts-loader cannot be used in the library webpack
- an alias needs to be created for the app side to allow based module name imports to work with the dllreferenceplugin
