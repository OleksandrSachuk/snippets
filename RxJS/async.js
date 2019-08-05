export const exampleEpic = (action$) => action$
  .pipe(
    ofType(ACTION),
    switchMap(({ payload: {  } }) => fromPromise(promise())
      .pipe(
        flatMap(() => of(({ type: SUCCESS_ACTION, payload: {  } }))),
        catchError(() => of({ type: FAILURE_ACTION })),
        startWith({ type: PENDING_ACTION }),
      )
    ),
  );
