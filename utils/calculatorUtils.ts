import {evaluate} from "mathjs";

const parseLaTeXToReadableString = (LaTeX: string) => {
    return LaTeX.trim().replaceAll('$', '')
        .replaceAll('\\times', '*')
        .replaceAll('\\div', '/')
}

export const parseLaTeX = (LaTeX: string) => {
    console.log(evaluate(parseLaTeXToReadableString(LaTeX)));
}

