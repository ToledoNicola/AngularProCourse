import { InjectionToken } from "@angular/core";

/**
 * per creare un token unico invece di usare le stringhe che possono essere duplicate
 */
export const ReducersStore = new InjectionToken("Reducers");
