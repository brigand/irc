// @flow
import { combineReducers } from 'redux'
import connections from './connections'
import conversations from './conversations'
import type { IrcState, Action } from '../flow'

type Root = (IrcState, Action) => IrcState;

export const rootReducer : Root = combineReducers({
  connections,
  conversations
})
