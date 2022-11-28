import Layout from "../components/Layout";
import {useDispatch} from "react-redux";

export default function Home() {
    const reduxDispatch = useDispatch();

  return (
      <Layout>
        <div>
          <p>hello world xd</p>
        </div>
      </Layout>
  )
}
