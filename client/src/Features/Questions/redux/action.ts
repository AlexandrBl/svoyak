import type { Answer, Quest, Theme } from "../type";

export type Action = 
{type: 'themes/init', payload: Theme[]}
|{type: 'answers/init', payload: Answer[]}
