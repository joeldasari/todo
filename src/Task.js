export const Task = (props) => {
  return (
    <div className="objectsList">
      <div className="irritated">
        <input type="checkBox" className="checkbox" />
        <h1 className="displayItems">{props.objectName}</h1>
      </div>
      <div className="buttonContainer">
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
