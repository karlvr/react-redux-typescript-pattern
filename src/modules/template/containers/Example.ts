/**
 * Container template for a component.
 */

/* Import the component from the component path */
import Component from '../components/Example'

import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'

/* Import RootStoreState */
import { RootStoreState } from 'modules/root/index'

/* Import module actions */
import * as actions from '../actions'

/**
 * Interface for properties that the container passes to the component.
 */
export interface Props {
	exampleProperty: string
}

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
	onExample: (value: string) => void
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
	return {
		exampleProperty: state.template.name,
	}
}

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch<Action>): Actions => ({
	onExample: (value) => {
		dispatch(actions.examplePrimitiveAction(value))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
