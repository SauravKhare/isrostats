import Lister from "../components/Lister";
import axios from "axios";
import { useQuery } from "react-query";

function Launchers() {
  async function fetcher() {
    const res = await axios.get("https://isro.vercel.app/api/launchers")
    return res.data.launchers;
  }

  const { isLoading, data } = useQuery("launchrs", fetcher, {staleTime: 86400});

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
      {isLoading ? (
          <p>Loading....</p>
        ) : (
          <Lister data={data} listfor="launchers" />
        )}
      </div>
    </section>
  );
}

export default Launchers;
