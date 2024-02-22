export type Quest = {
    id:number;
    question_text:string;
    theme_id:number,
    img_path:string;
}

export type StateQuestions = {
    questions: Quest[]
}

export type Theme = {
    id:number;
    name:string;
    questions:Quest[]
}

export type StateThemes = {
    themes: Theme[]
}