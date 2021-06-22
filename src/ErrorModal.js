import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import { useDispatch, useSelector } from "react-redux";

const ErrorModal = (props) => {
  const error = useSelector((state) => state.error);
  console.log(error);
  const dispatch = useDispatch();
  const cancelHandler = () => {
    dispatch({
      type: "cancel",
    });
  };
  return (
    <div className={classes.backdrop} onClick={props.cancel}>
      <Card className={classes.modal}>
        <header>
          <h2>{error.title}</h2>
        </header>
        <div>
          <p>{error.message}</p>
        </div>
        <footer>
          <Button onClick={cancelHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
