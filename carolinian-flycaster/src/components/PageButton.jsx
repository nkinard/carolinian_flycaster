import "./css/PageButton.css";
import {Link} from "react-router-dom";

function PageButton(props) {

  return (
    <>
          <div className="page-button-block">
            <Link to={props.link}>
              <img src={process.env.PUBLIC_URL + "/" + props.image} alt="button" />
              <h3>{props.name}</h3>
            </Link>
          </div>
    </>
  );
}

export default PageButton;
