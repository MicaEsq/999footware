import { cx } from "../utils/utils";
//une el classname de esta clase con las que le vienen de props y se la manda a los hijos
export default function Container(props) {
  return (
    <div
      className={cx(
        "container max-w-full",
        props.className
      )}>
      {props.children}
    </div>
  );
}