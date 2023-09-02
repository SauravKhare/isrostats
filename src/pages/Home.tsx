import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
    const [spacecrafts, setSpacrcrafts] = useState(0);
    const [launchers, setLaunchers] = useState(0);
    const [centers, setCenters] = useState(0);
    const [customerLaunches, setCustomerLaunches] = useState(0);

    function dataFetcher() {
        async function fetchSpacecrafts() {
            const req = await fetch('https://isro.vercel.app/api/spacecrafts');
            const res = await req.json();
            setSpacrcrafts(res.spacecrafts.length);
        }
    
        async function fetchLaunchers() {
            const req = await fetch('https://isro.vercel.app/api/launchers');
            const res = await req.json();
            setLaunchers(res.launchers.length);
        }
    
        async function fetchCenters() {
            const req = await fetch('https://isro.vercel.app/api/centres');
            const res = await req.json();
            setCenters(res.centres.length);
        }
    
        async function fetchCustomerLaunches() {
            const req = await fetch('https://isro.vercel.app/api/customer_satellites');
            const res = await req.json();
            setCustomerLaunches(res.customer_satellites.length);
        }

        fetchSpacecrafts();
        fetchLaunchers();
        fetchCenters();
        fetchCustomerLaunches();
    }

    
    useEffect(() => {
        dataFetcher();
    },[])

    return(
        <section className="grid place-items-center bg-zinc-900 min-h-screen text-white">
            <div className="grid grid-cols-3 grid-rows-2 gap-6">
                <Card link="/spacecrafts" bg="card-blue" pad="py-14 px-16" colspan="col-span-2" rowspan="col-span-1"><><span className="text-6xl font-bold">{spacecrafts}</span>Spacecrafts</></Card>
                <Card link="/launchers" bg="card-orange" pad="py-14 px-16" colspan="col-span-1" rowspan="row-span-2"><><span className="text-6xl font-bold">{launchers}</span> Launchers</></Card>
                <Card link="/customer-launches" bg="card-pink" pad="py-14 px-16" colspan="col-span-1" rowspan="row-span-1"><><span className="text-6xl font-bold">{customerLaunches}</span> Customer<br/>Launches</></Card>
                <Card link="/centers" bg="card-dark-pink" pad="py-14 px-16" colspan="col-span-1" rowspan="row-span-1"><><span className="text-6xl font-bold">{centers}</span> Centers</></Card>
            </div>
        </section>
    );
}

export default Home;