import { backend, IFetchAction } from './services/async';

export const fetchRootJSON: IFetchAction = backend.get('FETCH_ROOT_JSON', 'all');
export const fetchSchema: IFetchAction = backend.get('FETCH_SCHEMA', 'schema');
