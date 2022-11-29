import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import CalculatorButton from "../components/calculator/CalculatorButton";
import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";
import {MouseEventHandler, useMemo, useState} from "react";
import {parseLaTeX} from "../utils/calculatorUtils";
import { v4 } from 'uuid';
import TextBox from "../components/TextBox";

type Button = {
    buttonLabel: string,
}

const buttons: Button[] = [
    { buttonLabel: '$2^{nd}$' },
    { buttonLabel: '' },
    { buttonLabel: '$log$' },
    { buttonLabel: '$ln$' },
    { buttonLabel: 'Clear' },

    { buttonLabel: '$hyp$' },
    { buttonLabel: '$sin$' },
    { buttonLabel: '$cos$' },
    { buttonLabel: '$tan$' },
    { buttonLabel: '$y^x$' },

    { buttonLabel: '$\\pi$' },
    { buttonLabel: '$1\\over{x}$' },
    { buttonLabel: '$x^2$' },
    { buttonLabel: '$\\sqrt{x}$' },
    { buttonLabel: ' ' },

    { buttonLabel: ' ' },
    { buttonLabel: ' ' },
    { buttonLabel: '$($' },
    { buttonLabel: '$)$' },
    { buttonLabel: '$\\div $' },

    { buttonLabel: ' ' },
    { buttonLabel: '$7$' },
    { buttonLabel: '$8$' },
    { buttonLabel: '$9$' },
    { buttonLabel: '$\\times $' },

    { buttonLabel: ' ' },
    { buttonLabel: '$4$' },
    { buttonLabel: '$5$' },
    { buttonLabel: '$6$' },
    { buttonLabel: '$-$' },

    { buttonLabel: ' ' },
    { buttonLabel: '$3$' },
    { buttonLabel: '$2$' },
    { buttonLabel: '$1$' },
    { buttonLabel: '$+$' },

    { buttonLabel: ' ' },
    { buttonLabel: '$0$' },
    { buttonLabel: '$.$' },
    { buttonLabel: ' ' },
    { buttonLabel: '$=$' },
]

export default function Home() {
    const reduxDispatch = useDispatch();

    const generateButtons = (buttons: Button[]) => {
        return buttons.map(button => <CalculatorButton key={v4()} label={button.buttonLabel} onClick={() => {
            switch (button.buttonLabel.toLowerCase().replaceAll('$', '')) {
                case 'clear': {
                    clearArgs();
                    break;
                }
                case '=': {
                    setCurrentArg(parseLaTeX(currentArg))
                    break;
                }
                case 'x^2': {
                    appendArg('^2');
                    break;
                }
                case 'tan':
                case 'sin':
                case 'cos': {
                    appendArg(`${button.buttonLabel.replaceAll('$', '')}(`)
                    break;
                }
                default: {
                    appendArg(button.buttonLabel)
                    break;
                }
            }
        }} />)
    }

    const buttonElems = generateButtons(buttons);

    const [currentArg, setCurrentArg] = useState(' ')
    const clearArgs = () => {
        setCurrentArg(' ')
    }

    const appendArg = (arg: string) => {
        setCurrentArg(oldArg => oldArg + arg)
    }

  return (
      <Layout>
        <div className='pt-16 pb-16 pink-gradient bg-repeat'>
            <p className='text-center font-bold text-8xl laptop2:text-6xl mb-6 text-white drop-shadow-lg'>Calcify!</p>
            {/*Calculator*/}
            <div className='w-1/2 bg-neutral-100 mx-auto rounded-lg bg-opacity-70 backdrop-blur-xl'>
                <div className='h-48 relative rounded-lg bg-pink-300 text-5xl text-white font-bold overflow-hidden overflow-ellipsis'>
                    <div className='absolute right-10 bottom-10'>
                        <Latex>{`$ ${currentArg ? currentArg.replaceAll('$', '') : ''}$`}</Latex>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-y-2 gap-x-1 py-6 px-3 h-full'>
                    {buttonElems}
                </div>
            </div>
        </div>
      </Layout>
  )
}
