import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./body.module.scss";
import { Outlet } from "react-router-dom";

const Body = () => {
  const [gender, setGender] = useState("male");

  return (
    <div className={styles.main}>
        <Link to={"/body/boy"}>male</Link><br/>
        <Link to={"girl"}>female</Link>
        <Outlet />
    </div>
  );
};

export default Body;
