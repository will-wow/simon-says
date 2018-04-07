import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";
import * as R from "ramda";

export const selectToggleMute$: Rx.BehaviorSubject<
  void
> = new Rx.BehaviorSubject(null);

export const mute$: Rx.Observable<boolean> = selectToggleMute$.pipe(
  RxOp.startWith(),
  RxOp.scan(R.not, false)
);
