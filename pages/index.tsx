import Layout from "../components/Layout";
import {useDispatch} from "react-redux";

export default function Home() {
    const reduxDispatch = useDispatch();

  return (
      <Layout>
        <div className='h-full pt-16'>
            <p className='text-center font-bold text-6xl mb-6'>Calcify!</p>
            {/*Calculator*/}
            <div className='h-3/4 w-1/2 bg-neutral-700 mx-auto rounded-lg'>
                <div className='h-32 rounded-lg bg-black'></div>
                <div className='grid grid-cols-5 py-6 gap-y-8'>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                    <p className='text-center'>1</p>
                </div>
            </div>
        </div>
      </Layout>
  )
}
