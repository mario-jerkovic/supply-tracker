import { ActionType, getType } from 'typesafe-actions'

import { User } from './models'

import * as actions from './actions'

export type Actions = ActionType<typeof actions>;

export type State = {
    loading: boolean,
    user?: User,
    accessToken?: string
}

const initialState: State = {
    loading: false,
    user: undefined,
    accessToken: undefined,
}

export default (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case getType(actions.setLoading):
            return {
                ...state,
                loading: action.payload.loading,
            }
        case getType(actions.signIn.request):
        case getType(actions.getUser.request):
            return {
                ...state,
                loading: true,
            }
        case getType(actions.getUser.success):
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case getType(actions.signIn.success):
            return {
                ...state,
                loading: false,
                accessToken: action.payload,
            }
        default:
            return state
    }
}
