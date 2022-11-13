import React from "react";
import { useParams } from "react-router-dom";

function Club() {
  const { clubId } = useParams();
  return <div>Club Id : {clubId}</div>;
}

export default Club;
