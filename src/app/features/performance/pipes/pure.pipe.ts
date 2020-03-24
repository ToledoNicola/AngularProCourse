import { Pipe, PipeTransform } from "@angular/core";
/**
 * npm install lodash-es --save
 * npm install @types/lodash-es --save-dev
 * import debounce from 'lodash-es/debounce'
 */
import { memoize } from "lodash-es";

/**
 * esegue la funzione solo se il valore di ingrsso cambia poi salva il risultato
 * ed ogni volta che riceve in input quel valore non riesegue la funzione ma
 * restituisce il valore salvato prima per quell'input
 */
const memoizedfunction = memoize(value => {
  console.log("executed memoized function ", value);
  return value;
});

@Pipe({
  name: "pure",
  pure: false // ad ogni changedetection esegue la funzione transform solo se il 'value' cambia
})
export class PurePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log("executed pipe", value);

    return memoizedfunction(value);
  }
}
