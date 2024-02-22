import { createContext } from "react";
import { init } from "../Reducer/reducer";
import type { Context } from "./type";

const initialContext:Context = {
  state:init,
  dispatch: ()=>{}
}

export const appContext = createContext(initialContext)