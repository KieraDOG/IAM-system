import Users from "../Users";
import { useIAM } from "../IAM";

const UnassignedUsers = ({ onDragIdentity, placeholder }) => {
  const { identities } = useIAM();

  return (
    <div className="bg-gray-100 p-6 h-full">
      <div className="mb-6">Unassigned Users</div>
      <Users
        role="unassigned"
        placeholder={placeholder}
        onDragIdentity={onDragIdentity}
        identities={identities}
      />
    </div>
  );
};

export default UnassignedUsers;
