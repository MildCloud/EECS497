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
                <figure>
                  <img src="guitar" alt="Guitar" className={classes.image} />
                </figure>
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={'/piano'} className={classes.catLink}>
              <p className={classes.name}>
                Piano
                <figure>
                  <img src="piano" alt="Piano" className={classes.image} />
                </figure>
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={'/violin'} className={classes.catLink}>
              <p className={classes.name}>
                Violin
              </p>
              <figure>
                <img src="violin" alt="Violin" className={classes.image} />
              </figure>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={'/drum'} className={classes.catLink}>
              <p className={classes.name}>
                Drum
                <figure>
                  <img src="drum.jpeg" alt="Drum" className={classes.image} />
                </figure>
              </p>
            </Link>
          </li>
          <li className={classes.category}>
            <Link to={'saxophone'} className={classes.catLink}>
              <p className={classes.name}>
                Saxophone
                <figure>
                  <img src="saxophone" alt="Saxophone" className={classes.image} />
                </figure>
              </p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Categories;
