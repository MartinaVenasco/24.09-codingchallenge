import "./index.css";
import { memo } from "react";
import { useDispatch } from "react-redux";

const Name = ({ text, id}) => {
  const dispatch = useDispatch();

  const handleOnClose = (e) => {
    dispatch({ type: "DeleteName", payload: e.target.id });
  };

  return (
    <div className="namesurname">
      <p>{text}</p>
      <button className="delete-btn"
        id={id}
        onClick={(e) => handleOnClose(e)}
      >
        x
      </button>
    </div>
  );
}
export default memo(Name);
