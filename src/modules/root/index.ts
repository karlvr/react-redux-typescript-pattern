import { createStore, compose } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import { StoreState as _RootStoreState, reducer } from './reducer'

export type RootStoreState = _RootStoreState

/**
 * Enhancers for the store.
 */
const enhancers = compose(
	/* Include the devtools. Comment this out if you don't want to use the dev tools. */
	devToolsEnhancer({}),
)

/**
 * Create the store. We do not include an initial state, as each of the module / duck
 * reducers includes its own initial state.
 */
const store = createStore(reducer, enhancers)

export function getStore() {
	return store
}
