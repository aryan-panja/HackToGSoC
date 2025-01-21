"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import OrganizationCard from "@/components/main/OrganizationCard";
import { RoughNotation } from "react-rough-notation";
import { Technologies } from "@/utils/technologies";

interface Organization {
  "Image URL": string;
  Name: string;
  Description: string;
  Technologies?: string; // Changed Languages to Technologies
  Topics: string;
  "GitHub URL": string;
  URL: string;
  years: string
}

const Organizations = () => {
  const [data, setData] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/orgs-data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <PacmanLoader
        size={20}
        loading={loading}
        color="black"
      />
    </div>
  ) : (
    <main className="max-w-[95%] mx-auto  ">
      <div>
        <h1 className="text-7xl font-extrabold text-left mt-4 ">
          Organizations
        </h1>
        <p className=" mt-3 text-lg font-mono">
          Find the best{" "}
          <RoughNotation type="underline" show={true}>
            organizations
          </RoughNotation>{" "}
          to work on.
        </p>
      </div>
      <div className="mt-5 w-full flex justify-start gap-3 ">
        <select name="Technologies" id="" className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]">
          <option value="All">Select Technology</option>
          (
          {Technologies.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))})
        </select>
        <select name="years" id="" className="p-2 border border-[#dbbb84] rounded-md bg-[#FEE8C2]">
          <option value="All">Select year</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2016">2016</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div className=" py-10 flex flex-wrap gap-7 h-fit justify-center">
        {data &&
          data?.map((item, idx) => <OrganizationCard key={idx} item={item} />)}
      </div>
    </main>
  );
};

export default Organizations;
