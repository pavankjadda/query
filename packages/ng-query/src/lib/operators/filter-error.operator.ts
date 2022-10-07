import { filter, Observable } from 'rxjs';
import { NgQueryObserverResult } from '../types';

export function filterError() {
  return function <T>(
    source: Observable<NgQueryObserverResult<T>>
  ): Observable<NgQueryObserverResult<T>> {
    return source.pipe(filter((result) => result.status === 'error'));
  };
}
