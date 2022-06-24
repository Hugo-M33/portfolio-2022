import {useEffect, useState} from "react";
import Head from "next/head";
import WorkInProgress from "../components/WorkInProgress";

const MAINTENANCE = process.env.MAINTENANCE === "true";
const Home = (props: {children: any}) => {
  return (
    <WorkInProgress/>
  )
}

export default Home
