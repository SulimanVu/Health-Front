import React from "react";

import { Link, Outlet } from "react-router-dom";

const Calc = () => {
  return (
      <div>
        <div>
          <Link to={'calconday'}>Расчитать каллорийность съеденной еды за сегодня</Link>
          <Link to={'calcweight'}>Расчитать каллорийность для поддержания веса</Link>
          <Outlet />
        </div>
      </div>
  );
};

export default Calc;
