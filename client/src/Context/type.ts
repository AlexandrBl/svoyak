import type { Dispatch } from "react";
import type { State } from "../Reducer/type"
import type { Action } from "../Reducer/actionTypes";

export type Context = {
  state: State;
  dispatch: Dispatch<Action>
}