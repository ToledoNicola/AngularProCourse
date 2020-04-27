# Overview

NgRx is a framework for building reactive applications in Angular. NgRx provides state management, isolation of side effects, entity collection management, router bindings, code generation, and developer tools that enhance developers experience when building many different types of applications.

* [Store](https://ngrx.io/guide/store) - RxJS powered state management for Angular apps, inspired by Redux.
* [Store Devtools](https://ngrx.io/guide/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging.
* [Effects](https://ngrx.io/guide/effects) - Side effect model for @ngrx/store.
* [Router Store](https://ngrx.io/guide/router-store) - Bindings to connect the Angular Router to @ngrx/store.
* [Entity](https://ngrx.io/guide/entity) - Entity State adapter for managing record collections.
* [NgRx Data](https://ngrx.io/guide/data) - Extension for simplified entity data management.
* [NgRx Component](https://ngrx.io/guide/component) - Extension for fully reactive, fully zone-less applications.
* [Schematics](https://ngrx.io/guide/schematics) - Scaffolding library for Angular applications using NgRx libraries.

### When Should I Use NgRx for State Management? <a id="when-should-i-use-ngrx-for-state-management"></a>

A good substance that might answer the question "Do I need NgRx", is the [**SHARI**](https://youtu.be/omnwu_etHTY) principle:

* **S**hared: state that is accessed by many components and services.
* **H**ydrated: state that is persisted and rehydrated from external storage.
* **A**vailable: state that needs to be available when re-entering routes.
* **R**etrieved: state that must be retrieved with a side-effect.
* **I**mpacted: state that is impacted by actions from other sources.

