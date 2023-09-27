import Card from "../components/Card";
import { useQueries } from "react-query";
import axios from "axios";
import Header from "../components/Header";

function Home() {
  const [
    spaceCraftsQuery,
    launchersQuery,
    customerLaunchedQuery,
    centersQuery,
  ] = useQueries([
    {
      queryKey: ["spacecrafts"],
      queryFn: () =>
        axios
          .get("https://isro.vercel.app/api/spacecrafts")
          .then((res) => res.data),
      staleTime: 86400,
    },
    {
      queryKey: ["launchers"],
      queryFn: () =>
        axios
          .get("https://isro.vercel.app/api/launchers")
          .then((res) => res.data),
      staleTime: 86400,
    },
    {
      queryKey: ["customers"],
      queryFn: () =>
        axios
          .get("https://isro.vercel.app/api/customer_satellites")
          .then((res) => res.data),
      staleTime: 86400,
    },
    {
      queryKey: ["centers"],
      queryFn: () =>
        axios
          .get("https://isro.vercel.app/api/centres")
          .then((res) => res.data),
      staleTime: 86400,
    },
  ]);

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-evenly">
      <Header />
      <section className="grid place-items-center text-white">
        <div className="md:grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-6">
          <Card
            link="/spacecrafts"
            bg="bg-card-blue"
            pad="py-6 px-5 mb-4 md:py-10 md:px-11"
            colspan="col-span-2"
            rowspan="row-span-1"
          >
            <>
              {spaceCraftsQuery.isLoading ? (
                <p className="text-xl">Loading..</p>
              ) : (
                <span className="flex justify-center items-center gap-4 text-6xl font-bold">
                  {spaceCraftsQuery?.data?.spacecrafts?.length}{" "}
                  <p className="text-xl font-normal">Spacecrafts</p>
                </span>
              )}
            </>
          </Card>
          <Card
            link="/launchers"
            bg="bg-card-orange"
            pad="py-6 px-5 mb-4 md:py-10 md:px-11"
            colspan="md:col-span-1"
            rowspan="md:row-span-2"
          >
            <>
              {spaceCraftsQuery.isLoading ? (
                <p className="text-xl">Loading..</p>
              ) : (
                <span className="flex justify-center items-center gap-4 text-6xl font-bold">
                  {launchersQuery?.data?.launchers?.length}{" "}
                  <p className="text-xl font-normal">Launchers</p>
                </span>
              )}
            </>
          </Card>
          <Card
            link="/customer-launches"
            bg="bg-card-pink"
            pad="py-6 px-5 mb-4 md:py-10 md:px-11"
            colspan="col-span-1"
            rowspan="row-span-1"
          >
            <>
              {spaceCraftsQuery.isLoading ? (
                <p className="text-xl">Loading..</p>
              ) : (
                <span className="flex justify-center items-center gap-4 text-6xl font-bold">
                  {customerLaunchedQuery?.data?.customer_satellites?.length}{" "}
                  <p className="text-xl font-normal">
                    Customer
                    <br />
                    Launches
                  </p>
                </span>
              )}
            </>
          </Card>
          <Card
            link="/centers"
            bg="bg-card-dark-pink"
            pad="py-6 px-5 mb-4 md:py-10 md:px-11"
            colspan="col-span-1"
            rowspan="row-span-1"
          >
            <>
              {spaceCraftsQuery.isLoading ? (
                <p className="text-xl">Loading..</p>
              ) : (
                <span className="flex justify-center items-center gap-4 text-6xl font-bold">
                  {centersQuery?.data?.centres?.length}{" "}
                  <p className="text-xl font-normal">Centers</p>
                </span>
              )}
            </>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;
