export interface Action {
  type: string;
  payload?: any;
}
export interface Reducer<T> {
  (state: T, action: Action | {}): T;
}
export type ReducerMap<T> = {
  [p in keyof T]: Reducer<T[p]>;
};
