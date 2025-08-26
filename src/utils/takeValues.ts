import { lastValueFrom, Observable, take, toArray } from 'rxjs';

/**
 * Returns an Observable with a determined amount of emissions from an Observable
 * @param {Observable<T>} observable
 * @param {number} count
 * @returns {Observable<T[]>}
 */
export const takeValues$ = <T>(observable: Observable<T>, count: number = 1): Observable<T[]> => observable.pipe(take(count), toArray());

/**
 * Returns a Promise with a determined amount of emissions from an Observable
 * @param {Observable<T>} observable
 * @param {number} count
 * @returns {Promise<T[]>}
 */
export const takeValues = <T>(observable: Observable<T>, count: number = 1): Promise<T[]> => lastValueFrom(takeValues$(observable, count));
