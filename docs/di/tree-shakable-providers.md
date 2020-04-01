# Tree-shakable providers

Tree shaking refers to a compiler option that removes code from the final bundle if the app doesn't reference that code. When providers are tree-shakable, the Angular compiler removes the associated services from the final output when it determines that your application doesn't use those services. This significantly reduces the size of your bundles.

### non-tree-shakable providers

```typescript
import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class Service {
  doSomething(): void {
  }
}

@NgModule({
  providers: [Service],
})
export class ServiceModule {
}
```

### tree-shakable

```typescript
@Injectable({
  providedIn: 'root',
})
export class Service {
}
```

{% hint style="warning" %}
e possibile il provideIn: non in root??
{% endhint %}

