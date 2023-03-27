import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>hungry<span style={{color: 'green'}}>B</span>ook</div>
      <nav>
        <ul>
          <li>
            <a href='/'>All Recipes</a>
          </li>
          <li>
            <a href='/'>Add New Recipe</a>
          </li>
          <li>
            <a href='/'>Give Me Inspiration!</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
