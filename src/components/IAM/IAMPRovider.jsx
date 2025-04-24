import { useState } from "react";
import IAMContext from "./IAMContext";

const IAMProvider = ({ children }) => {
  const [draggingIAM, setDraggingIAM] = useState(null);

  const [identities, setIdentities] = useState(["Alice"]);

  const [authorizations, setAuthorizations] = useState([
    {
      name: "User",
      identities: [],
    },
    {
      name: "Admin",
      identities: [],
    },
  ]);

  const handleDragIdentity = (target) => {
    console.log("handleDragIdentity");

    const addOrRemove = (authorization) => {
      if (authorization.name === target) {
        authorization.identities.push(draggingIAM.value);
      }

      if (authorization.name === draggingIAM.source) {
        authorization.identities = authorization.identities.filter(
          (identity) => identity !== draggingIAM.value
        );
      }

      if (authorization.child) {
        authorization.child = addOrRemove(authorization.child);
      }

      return authorization;
    };

    const newAuthorization = authorizations.map((authorization) =>
      addOrRemove(authorization)
    );

    setAuthorizations(newAuthorization);

    if (draggingIAM.source === "unassigned") {
      setIdentities((prevState) =>
        prevState.filter((identity) => identity !== draggingIAM.value)
      );
    }

    setDraggingIAM(null);
  };

  return (
    <IAMContext.Provider
      value={{
        authorizations,
        setAuthorizations,
        handleDragIdentity,
        identities,
        setIdentities,
        draggingIAM,
        setDraggingIAM,
      }}
    >
      {children}
    </IAMContext.Provider>
  );
};

export default IAMProvider;
