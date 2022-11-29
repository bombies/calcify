import {evaluate, pi, e} from "mathjs";

const parseLaTeXToReadableString = (LaTeX: string) => {
    return LaTeX.trim().replaceAll('$', '')
        .replaceAll('\\times', '*')
        .replaceAll('\\div', '/')
        .replaceAll('\\pi', 'pi')
}

export const parseLaTeX = (LaTeX: string) => {
    try {
        return evaluate(parseLaTeXToReadableString(LaTeX)).toString();
    } catch (ex: any) {
        return ex.toString()
    }
}

