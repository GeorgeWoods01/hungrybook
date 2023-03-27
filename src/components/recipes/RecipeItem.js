import classes from "./RecipeItem.module.css";


function RecipeItem(props) {
  return (
  <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Show Details</button>
      </div>
  </li>
  );
}

export default RecipeItem;
