import React from "react";
import Countries from "../components/Countries";
// import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";

const HomePage = () => {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");

  return (
    <div className="bg-dark-blue text-color-white">
      {loading && <Loading/>}
      {!loading && (
        <div>
          {/* <Search /> */}
          <Countries Countries={data} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
