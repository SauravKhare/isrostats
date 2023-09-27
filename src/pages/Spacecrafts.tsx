import { useQuery } from "react-query";
import Lister from "../components/Lister";
import axios from "axios";

function Spacecrafts() {
  async function fetcher() {
    const res = await axios.get("https://isro.vercel.app/api/spacecrafts");
    return res?.data?.spacecrafts;
  }

  const { isLoading, data } = useQuery("spacecrft", fetcher, {staleTime: 86400});

  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-10 md:px-40 pt-10">
        <h1 className="font-space-mono font-bold text-4xl md:text-5xl">
          Spacecrafts
        </h1>
        <p className="font-space-mono text-sm mt-4">
          All the spacecrafts, satellite launched by ISRO.
        </p>
      </div>
      <div className="container mx-auto px-10 md:px-40 py-10">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <Lister data={data} listfor="spacecrafts" />
        )}
      </div>
    </section>
  );
}

export default Spacecrafts;
