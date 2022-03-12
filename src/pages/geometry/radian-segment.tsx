import { NextPage } from "next";
import { Input } from "dragontail-experimental";

const RadianSegment: NextPage = () => {
  return (
    <>
      <Input placeholder="numerator"></Input>
      <Input placeholder="denominator"></Input>
    </>
  );
};

export default RadianSegment;
