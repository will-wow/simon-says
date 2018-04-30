import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";
import * as R from "ramda";

import * as Note from "../simon-says/Note";
import * as Util from "../shared/Util";

type TurnType = "newGame" | "nextTurn";

type Player = "ai" | "human";

const nextTune = (acc: Note.t[], value: TurnType): Note.t[] => {
  switch (value) {
    case "newGame": {
      return [];
    }
    case "nextTurn": {
      const newNote = Note.random();

      return R.append(newNote, acc);
    }
  }
};

export const selectStartGame$: Rx.BehaviorSubject<
  void
> = new Rx.BehaviorSubject(null);

export const selectTurn$: Rx.BehaviorSubject<Player> = new Rx.BehaviorSubject(
  "ai" as Player
);

const newGame$ = selectStartGame$.pipe(RxOp.mapTo("newGame"));

const nextAiTurn$ = selectTurn$.pipe(
  RxOp.filter(player => player === "ai"),
  RxOp.mapTo("nextTurn")
);

export const tune$: Rx.Observable<Note.t[]> = Rx.Observable.merge(
  newGame$,
  nextAiTurn$
).pipe(RxOp.scan(nextTune, []));
