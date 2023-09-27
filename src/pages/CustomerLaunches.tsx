import axios from "axios";
import { useQuery } from "react-query";
import Lister from "../components/Lister";

function CustomerLaunches() {
  async function fetcher() {
    const res = await axios.get("https://isro.vercel.app/api/customer_satellites");
    return res.data.customer_satellites;
  }

  const { isLoading, data } = useQuery("customerslaunches", fetcher, {staleTime: 86400});

  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-10 md:px-40 pt-10">
        <h1 className="font-space-mono font-bold text-4xl md:text-5xl">Customer Launches</h1>
        <p className="font-space-mono text-sm mt-4">
          All the spacecrafts, satellite launched by ISRO for other countries &
          companies.
        </p>
      </div>
      <div className="container mx-auto px-10 md:px-40 py-10">
      {isLoading ? (
          <p>Loading....</p>
        ) : (
          <Lister data={data} listfor="customer-launches" />
        )}
      </div>
    </section>
  );
}

export default CustomerLaunches;
