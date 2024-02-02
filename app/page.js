import { useSession } from "next-auth/react";
import PrintSession from "./components/PrintSession";
export default function Home() {



  return (
    <div>
      <h1>HelloWorld</h1>
      <PrintSession />
    </div>
  );
}
