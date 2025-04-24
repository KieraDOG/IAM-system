import Dropzone from "../Dropzone";
import { useIAM } from "../IAM";
import User from "./components/User";

const Users = ({ role, identities }) => {
  const { draggingIAM, handleDragDropIdentity } = useIAM();

  return (
    <Dropzone
      className="flex gap-2 flex-wrap align-content-start items-start min-h-[50px] min-w-[200px]"
      isDroppable={draggingIAM?.type === "user"}
      preview={<User>{draggingIAM?.value}</User>}
      onDrop={() => handleDragDropIdentity(role)}
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
