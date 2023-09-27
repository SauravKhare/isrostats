import { useEffect, useState } from "react";
import Lister from "../components/Lister";

function Launchers() {
  const [launchers, setLaunchers] = useState([]);

  async function getLaunchers() {
    const req = await fetch("https://isro.vercel.app/api/launchers");
    const res = await req.json();
    setLaunchers(res.launchers);
  }

  useEffect(() => {
    getLaunchers();
  }, []);
  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-10 md:px-40 pt-10">
        <h1 className="font-space-mono font-bold text-4xl md:text-5xl">Launchers</h1>
        <p className="font-space-mono text-sm mt-4">
          All the launchers (rockets) used to send satellite, spacecrafts in
          space.
        </p>
      </div>
      <div className="container mx-auto px-10 md:px-40 py-10">
        <Lister data={launchers} listfor="launchers" />
      </div>
    </section>
  );
}

export default Launchers;
