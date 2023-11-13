import { Link, Outlet } from 'react-router-dom';
import classes from './Categories.module.css';

function Categories() {
  return (
    <>
      <Outlet />
      <main>
        <ul className={classes.categories}>
          <li className={classes.category}>
            <Link to={'/guitar'} className={classes.catLink}>
              <p className={classes.name}>
                Guitar
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={''} className={classes.catLink}>
              <p className={classes.name}>
                Panion
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={''} className={classes.catLink}>
              <p className={classes.name}>
                Violin
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={''} className={classes.catLink}>
              <p className={classes.name}>
                Drum
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={''} className={classes.catLink}>
              <p className={classes.name}>
                Guitar
              </p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Categories;
