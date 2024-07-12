// Import necessary libraries and components
import { Outlet, useLoaderData } from "react-router-dom";
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";
import { fetchData } from "../helpers";

// Loader function to fetch user data
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// Main component to display the layout with navigation and content
const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="Decorative wave" />
    </div>
  );
};

export default Main;
