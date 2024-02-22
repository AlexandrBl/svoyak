import type { Quest, Theme } from "./type"

export const initFetchQuestions = async():Promise<Theme[]>=>{
const res = await fetch('/api/questions')
const data = await res.json()
return data.themes
}