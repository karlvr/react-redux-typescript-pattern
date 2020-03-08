import { combineReducers } from 'redux'

/* Import reducers from our modules */
import * as example from 'modules/example/reducer'
// import * as another from '../modules/another/reducers';

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
interface MutableStoreState {
	example: example.StoreState
	// another: another.StoreState;
}

export type StoreState = DeepReadonly<MutableStoreState>

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
export const reducer = combineReducers<StoreState>({
	example: example.reducer,
	// another: another.reducer,
})
