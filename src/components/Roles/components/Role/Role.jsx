import Draggable from "../../../Draggable";
import Dropzone from "../../../Dropzone";
import Users from "../../../Users";
import styles from "./Role.module.css";

const Role = ({
  child,
  name,
  placeholder,
  onDropIdentity,
  onDrop,
  identities,
  onDragStart,
  onDragIdentity,
}) => (
  <Draggable onDragStart={onDragStart} className={styles.container}>
    <div className={styles.name}>{name}</div>
    <Dropzone
      className="flex gap-4"
      isDroppable={placeholder?.type === "role"}
      onDrop={onDrop}
      preview={
        placeholder?.type === "role" &&
        placeholder.source !== name && (
          <Role
            isPlaceholder
            name={placeholder.value.name}
            identities={placeholder.value.identities}
            child={placeholder.value.child}
          />
        )
      }
    >
      <Users
        role={name}
        onDragIdentity={onDragIdentity}
        placeholder={placeholder}
        onDrop={onDropIdentity}
        identities={identities}
      />
      {child && (
        <Role
          child={child.child}
          name={child.name}
          identities={child.identities}
          placeholder={placeholder}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragIdentity={onDragIdentity}
          onDropIdentity={onDropIdentity}
        />
      )}
    </Dropzone>
  </Draggable>
);

export default Role;
