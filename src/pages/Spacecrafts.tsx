import { useEffect, useState } from "react";
import Lister from "../components/Lister";

function Spacecrafts() {
  const [spacecrafts, setSpacrcrafts] = useState([]);

  async function getSpacecrafts() {
    const req = await fetch("https://isro.vercel.app/api/spacecrafts");
    const res = await req.json();
    setSpacrcrafts(res.spacecrafts);
  }

  useEffect(() => {
    getSpacecrafts();
  }, []);

  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-10 md:px-40 pt-10">
        <h1 className="font-space-mono font-bold text-4xl md:text-5xl">Spacecrafts</h1>
        <p className="font-space-mono text-sm mt-4">
          All the spacecrafts, satellite launched by ISRO.
        </p>
      </div>
      <div className="container mx-auto px-10 md:px-40 py-10">
        <Lister data={spacecrafts} listfor="spacecrafts" />
      </div>
    </section>
  );
}

export default Spacecrafts;
