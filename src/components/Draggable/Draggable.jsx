const Draggable = ({ className, children, onDragStart }) => (
  <div
    className={className}
    draggable
    onDragStart={(event) => {
      event.stopPropagation();
      onDragStart();
    }}
  >
    {children}
  </div>
);

export default Draggable;
