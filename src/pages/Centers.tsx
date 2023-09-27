import { useEffect, useState } from "react";
import Lister from "../components/Lister";

function Centers() {
  const [centers, setCenters] = useState([]);

  async function getCenters() {
    const req = await fetch("https://isro.vercel.app/api/centres");
    const res = await req.json();
    setCenters(res.centres);
  }

  useEffect(() => {
    getCenters();
  }, []);

  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-10 md:px-40 pt-10">
        <h1 className="font-space-mono font-bold text-4xl md:text-5xl">Centers</h1>
        <p className="font-space-mono text-sm mt-4">
          All the launch sites, scientific research centers which are used and
          come under ISRO.
        </p>
      </div>
      <div className="container mx-auto px-10 md:px-40 py-10">
        <Lister data={centers} listfor="centers" />
      </div>
    </section>
  );
}

export default Centers;
