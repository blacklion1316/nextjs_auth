import { useSession } from "next-auth/react";
import PrintSession from "./components/PrintSession";
import ToggleModes from "./components/ToggleModes";
export default function Home() {



  return (
    <div>


      <h1>HelloWorld</h1>
      <PrintSession />
    </div>
  );
}
