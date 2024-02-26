export type Answer = {
    id:number,
    answer_text:string,
    question_id:number,
    isRight:boolean
}
export type Quest = {
    id:number;
    question_text:string;
    theme_id:number,
    img_path:string;
    salary:number;
    Answers: Answer
}
export type IdQuest = Quest['id']

export type IdAnswer = Answer['id']

export type StateQuestions = {
    questions: Quest[]
}

export type Theme = {
    id:string;
    name:string;
    questions:IdQuest[]
}

export type StateThemes = {
    themes: Theme[]
}