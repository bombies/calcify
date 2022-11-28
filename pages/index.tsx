import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import CalculatorButton from "../components/calculator/CalculatorButton";

export default function Home() {
    const reduxDispatch = useDispatch();

  return (
      <Layout>
        <div className='h-full pt-16 pink-gradient'>
            <p className='text-center font-bold text-8xl mb-6 text-white drop-shadow-lg'>Calcify!</p>
            {/*Calculator*/}
            <div className='min-h-[75%] w-1/2 bg-neutral-100 mx-auto rounded-lg bg-opacity-70 backdrop-blur-xl'>
                <div className='h-48 rounded-lg bg-pink-300'></div>
                <div className='grid grid-cols-5 gap-y-2 gap-x-1 py-6 px-3 h-32'>
                    <CalculatorButton label='2nd' />
                    <CalculatorButton label='' />
                    <CalculatorButton label='log' />
                    <CalculatorButton label='ln' />
                    <CalculatorButton label='Clear' />

                    <CalculatorButton label='hyp' />
                    <CalculatorButton label='sin' />
                    <CalculatorButton label='cos' />
                    <CalculatorButton label='tan' />
                    <CalculatorButton label='y^x' />

                    <CalculatorButton label='pi' />
                    <CalculatorButton label='1/x' />
                    <CalculatorButton label='x^2' />
                    <CalculatorButton label='root(x)' />
                    <CalculatorButton label=' ' />

                    <CalculatorButton label=' ' />
                    <CalculatorButton label=' ' />
                    <CalculatorButton label='(' />
                    <CalculatorButton label=')' />
                    <CalculatorButton label='/' />

                    <CalculatorButton label=' ' />
                    <CalculatorButton label='7' />
                    <CalculatorButton label='8' />
                    <CalculatorButton label='9' />
                    <CalculatorButton label='*' />

                    <CalculatorButton label=' ' />
                    <CalculatorButton label='4' />
                    <CalculatorButton label='5' />
                    <CalculatorButton label='6' />
                    <CalculatorButton label='-' />

                    <CalculatorButton label=' ' />
                    <CalculatorButton label='1' />
                    <CalculatorButton label='2' />
                    <CalculatorButton label='3' />
                    <CalculatorButton label='+' />

                    <CalculatorButton label=' ' />
                    <CalculatorButton label='0' />
                    <CalculatorButton label='.' />
                    <CalculatorButton label=' ' />
                    <CalculatorButton label='=' />
                </div>
            </div>
        </div>
      </Layout>
  )
}
