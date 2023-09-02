import { useEffect, useState } from "react";
import Lister from "../components/Lister";

function CustomerLaunches() {
  const [customerLaunches, setCustomerLaunches] = useState([]);

  async function getCustomerLaunches() {
    const req = await fetch("https://isro.vercel.app/api/customer_satellites");
    const res = await req.json();
    setCustomerLaunches(res.customer_satellites);
  }

  useEffect(() => {
    getCustomerLaunches();
  }, []);

  return (
    <section className="bg-zinc-900 min-h-screen text-white">
      <div className="px-40 pt-10">
        <h1 className="font-bold text-5xl">Customer Launches</h1>
        <p className="text-sm mt-4">
          All the spacecrafts, satellite launched by ISRO for other countries &
          companies.
        </p>
      </div>
      <div className="container mx-auto px-40 py-10">
        <Lister data={customerLaunches} listfor="customer-launches" />
      </div>
    </section>
  );
}

export default CustomerLaunches;
