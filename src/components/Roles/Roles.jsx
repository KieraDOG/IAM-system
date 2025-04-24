import { useIAM } from "../IAM";
import Role from "./components/Role";
import styles from "./Roles.module.css";

const Roles = ({ placeholder, onDragRole, onDragIdentity }) => {
  const { authorizations, setAuthorizations } = useIAM();

  return (
    <div className={styles.container}>
      {authorizations.map(({ name, child, identities }) => (
        <Role
          placeholder={placeholder}
          onDragStart={() => onDragRole(name, { name, child, identities })}
          // onDrop={() => onDropRole(name)}
          onDragIdentity={(identity) => onDragIdentity(name, identity)}
          // onDropIdentity={() => onDropIdentity(name)}
          key={name}
          name={name}
          child={child}
          identities={identities}
        />
      ))}
    </div>
  );
};

export default Roles;
