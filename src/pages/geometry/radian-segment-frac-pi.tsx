import { NextPage } from "next";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";
import { FractionInput } from "../../components/Fraction";
import { Input } from "dragontail-experimental";
import { useState } from "react";

const RadianSegment: NextPage = () => {
  const { asPath } = useRouter();
  const [answer, setAnswer] = useState<number>();

  return (
    <>
      {getHeadForPage({
        description:
          "Calculate segment area given the angle subtended in radians and the radius",
        path: asPath,
        title: "Radian & Radius Segment Area Calculator",
      })}
      <div className="p-10 gap-5 flex justify-center items-center">
        <FractionInput /> <span className="text-3xl">π</span>{" "}
        <Input placeholder="radius" /> =
      </div>
    </>
  );
};

export default RadianSegment;
