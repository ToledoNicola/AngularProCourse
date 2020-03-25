export interface Observer {
  next?: (value: any) => void;
  complete?: () => void;
  error?: (value?: any) => void;
}

export class Observable {
  constructor(private subscriptionFn?: (observer: Observer) => void) {}

  subscribe(observer: Observer) {
    return this.subscriptionFn(observer);
  }

  pipe(...operators) {
    return operators.reduce((source, next) => next(source), this);
  }
}
