import type { Quest, Theme } from "../type";

export type Action = 
{type: 'themes/init', payload: Theme[]}