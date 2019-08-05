export const exampleEpic = (action$) => action$
  .pipe(
    ofType(ACTION),
    switchMap(({ payload: {  } }) => fromPromise(promise())
      .pipe(
        flatMap((result) => of(({ type: SUCCESS_ACTION, payload: { result } }))),
        catchError((error) => of({ type: FAILURE_ACTION, payload: { error } })),
        startWith({ type: PENDING_ACTION }),
      )
    ),
  );
