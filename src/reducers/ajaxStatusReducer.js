import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * This reducer tracks all the ajax calls. If the action is success or in error the counter is decreased otherwise if 
 * the action is being ajax call then the number is increased. Else default state is returned.
 * 
 * @author Deepak Rout <deepakrout@hotmail.com>
 */

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }


  return state;
}
