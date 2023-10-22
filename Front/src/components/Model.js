import { useNavigate } from 'react-router-dom';
import classes from './Model.module.css';

function Model(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('/')
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open={true} className={classes.model}>
        {props.children}
      </dialog>
    </>
  );
}

export default Model;