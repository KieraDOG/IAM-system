import { useState } from "react";

const Dropzone = ({ className, children, preview, isDroppable, onDrop }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  return (
    <div
      className={className}
      onDragOver={(event) => {
        if (!isDroppable) {
          return;
        }

        event.preventDefault();

        setIsDraggingOver(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();

        setIsDraggingOver(false);
      }}
      onDrop={(event) => {
        if (!isDroppable) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        setIsDraggingOver(false);

        onDrop();
      }}
    >
      {children}
      {isDraggingOver && preview}
    </div>
  );
};

export default Dropzone;
