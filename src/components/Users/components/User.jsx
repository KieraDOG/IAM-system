import clsx from "clsx";
import Draggable from "../../Draggable";
import { useIAM } from "../../IAM";

const User = ({ role, children }) => {
  const { setDraggingIAM, draggingIAM } = useIAM();

  const isPlaceholder =
    draggingIAM?.type === "user" && draggingIAM.value === children;

  return (
    <Draggable
      className={clsx(
        "cursor-grab bg-white p-2 border border-gray-300 rounded-md",
        "transition duration-300 ease-in-out",
        "hover:bg-gray-200",
        isPlaceholder ? "border-dashed opacity-50" : "border-solid"
      )}
      onDragStart={() =>
        setDraggingIAM({ type: "user", source: role, value: children })
      }
    >
      {children}
    </Draggable>
  );
};

export default User;
