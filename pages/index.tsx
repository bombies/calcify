import Layout from "../components/Layout";
import {useDispatch} from "react-redux";

export default function Home() {
    const reduxDispatch = useDispatch();

  return (
      <Layout>
        <div className='h-full pt-16 pink-gradient'>
            <p className='text-center font-bold text-8xl mb-6 text-white drop-shadow-lg'>Calcify!</p>
            {/*Calculator*/}
            <div className='h-3/4 w-1/2 bg-neutral-200 mx-auto rounded-lg'>
                <div className='h-32 rounded-lg bg-pink-300'></div>
                <div className='grid grid-cols-5 py-6 gap-y-8'>

                </div>
            </div>
        </div>
      </Layout>
  )
}
