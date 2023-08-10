export const Task = (props) => {
  return (
    <div
      className="objectsList"
      style={{
        backgroundColor: props.status === true ? "lightgreen" : "white",
      }}
    >
      <h1 className="displayItems">{props.objectName}</h1>
      <div className="buttonContainer">
        <input type="checkBox" className="checkbox" />
        <button
          onClick={() => props.delTask(props.objectId)}
          className="delBtn"
        >
          X
        </button>
      </div>
    </div>
  );
};
