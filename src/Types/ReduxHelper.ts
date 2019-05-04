export type ReduxAction<T, P> =
    (payload: P, ...rest: any[]) => { type: T, payload: P, error?: boolean };
