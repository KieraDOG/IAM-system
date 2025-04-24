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

  const handleDragDropIdentity = (target) => {
    const addOrRemove = (authorization) => {
      if (authorization.name === target) {
        return {
          ...authorization,
          identities: [...authorization.identities, draggingIAM.value],
        };
      }

      if (authorization.name === draggingIAM.source) {
        return {
          ...authorization,
          identities: authorization.identities.filter(
            (identity) => identity !== draggingIAM.value
          ),
        };
      }

      return {
        ...authorization,
        child: authorization.child ? addOrRemove(authorization.child) : null,
      };
    };

    setAuthorizations((prevState) =>
      prevState.map((authorization) => addOrRemove(authorization))
    );

    setIdentities((prevState) => {
      if (draggingIAM.source === "unassigned") {
        return prevState.filter((identity) => identity !== draggingIAM.value);
      }

      if (target === "unassigned") {
        return [...prevState, draggingIAM.value];
      }

      return prevState;
    });

    setDraggingIAM(null);
  };

  return (
    <IAMContext.Provider
      value={{
        authorizations,
        setAuthorizations,
        handleDragDropIdentity,
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
