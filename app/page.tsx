import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "../components/LoginForm";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <div
        className="div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <a
          href="/contact"
          className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Goto Contact Form
        </a>
      </div>
      <LoginForm />
    </main>
  );
}
