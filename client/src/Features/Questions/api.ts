import type { IdQuest, Quest, Theme } from "./type"

export const initFetchQuestions = async():Promise<Theme[]>=>{
const res = await fetch('/api/questions')
const data = await res.json()
return data.themes
}

export const chekedAnswerFetch = async(obj):Promise=> {
    const res = await fetch('/api/questions', {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: obj.id,
            idAnswer: obj.idAnswer
        })
    })
    const data = await res.json()
    return data
}