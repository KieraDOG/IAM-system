import Dropzone from "../Dropzone";
import { useIAM } from "../IAM";
import User from "./components/User";

const Users = ({ role, identities }) => {
  const { draggingIAM, setDraggingIAM, handleDragIdentity } = useIAM();

  return (
    <Dropzone
      className="flex gap-2 flex-wrap align-content-start items-start min-h-[50px] min-w-[200px]"
      isDroppable={draggingIAM?.type === "user"}
      preview={draggingIAM?.type === "user" && <User>{draggingIAM.value}</User>}
      onDrop={() => {
        console.log("onDrop");
        handleDragIdentity(role);
        console.log("HERE");

        setDraggingIAM(null);
      }}
    >
      {identities.map((identity) => (
        <User role={role} key={identity}>
          {identity}
        </User>
      ))}
    </Dropzone>
  );
};

export default Users;
