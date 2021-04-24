import { ELEVATE } from '../actionTypes';

export const lift = (e) => dispatch => {
  const name = e.target.getAttribute('name');
  dispatch({ type: ELEVATE, name });
}

