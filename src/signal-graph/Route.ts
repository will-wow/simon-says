import * as Rx from "rxjs";

export const selectRoute$: Rx.BehaviorSubject<string> = new Rx.BehaviorSubject(
  "MainMenu"
);
