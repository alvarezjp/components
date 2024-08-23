import { useEffect, useState } from "react";
import { FetchList } from "./FetchList";

export const UsersApp = () => {
  const [endpoint, setEndpoint] = useState("users");
  return (
    <>
      <h1 className="red"> Lista: </h1>
      <FetchList endpoint={endpoint} />
      <button onClick={() => setEndpoint("comments")}>
        Cambiar el endpoint a comments
      </button>
      <button onClick={() => setEndpoint("users")}>
        Cambiar el endpoint a users
      </button>
    </>
  );
};
