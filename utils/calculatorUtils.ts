import {evaluate} from "mathjs";

const parseLaTeXToReadableString = (LaTeX: string) => {
    return LaTeX.trim().replaceAll('$', '')
        .replaceAll('\\times', '*')
        .replaceAll('\\div', '/')
}

export const parseLaTeX = (LaTeX: string) => {
    try {
        return evaluate(parseLaTeXToReadableString(LaTeX)).toString();
    } catch (ex: any) {
        return ex.toString()
    }
}

