interface listData {
  id: string;
  name: string;
  country: string;
  launch_date: string;
  mass: string;
  launcher: string;
  Place: string;
  State: string;
}

function Lister({ data, listfor }: { data: listData[]; listfor: string }) {
  console.log(data);
  return (
    <>
      <ul className="grid md:grid-cols-2 gap-5 auto-cols-fr">
        {data.map((item: listData) => {
          if (listfor === "spacecrafts") {
            return (
              <li
                className="flex flex-col justify-center items-center px-2 py-5 rounded-xl border border-gray-500 font-inter text-xl hover:scale-105 shadow-2xl duration-100"
                key={item.id}
              >
                <span className="font-bold">{item.name}</span>
              </li>
            );
          } else if (listfor === "launchers") {
            return (
              <li
                className="flex flex-col justify-center items-center px-2 py-5 rounded-xl border border-gray-500 font-inter text-xl hover:scale-105 shadow-2xl duration-100"
                key={item.id}
              >
                <span className="font-bold">{item.id}</span>
              </li>
            );
          } else if (listfor === "customer-launches") {
            return (
              <li
                className="flex flex-col justify-center items-center px-2 py-5 rounded-xl border border-gray-500 font-inter text-xl hover:scale-105 shadow-2xl duration-100"
                key={item.id}
              >
                <span className="font-bold">{item.id}</span>
                <span className="text-sm mt-5">
                  Country: {item.country}, Launch Date: {item.launch_date},
                  Launcher: {item.launcher}, Mass: {item.mass}
                </span>
              </li>
            );
          } else if (listfor === "centers") {
            return (
              <li
                className="flex flex-col justify-center items-center px-2 py-5 rounded-xl border border-gray-500 font-inter text-xl hover:scale-105 shadow-2xl duration-100"
                key={item.id}
              >
                <span className="font-bold">{item.name}</span>
                <span className="text-sm mt-5">
                  Place: {item.Place}, State: {item.State}
                </span>
              </li>
            );
          } else {
            return <h1>No Data Received</h1>;
          }
        })}
      </ul>
    </>
  );
}

export default Lister;
