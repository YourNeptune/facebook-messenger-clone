import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const ExitButton = ({ onClick }) => {
  return (
    <div className="exit_btn">
      <IconButton onClick={onClick}>
        <ExitToAppIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default ExitButton;
