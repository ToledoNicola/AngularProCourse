import {
  Directive,
  Inject,
  Self,
  SkipSelf,
  Host,
  Optional
} from "@angular/core";
import { ProvaToken } from "../components/pippo/pippo.component";

@Directive({
  selector: "[appProva]",
  providers: [
    {
      provide: ProvaToken,
      useValue: { nome: " da se stesso" }
    }
  ]
})
export class ProvaDirective {
  constructor(@Optional() @Host() @Inject(ProvaToken) private prova) {
    console.log("[direttiva]:", prova.nome);
  }
}
