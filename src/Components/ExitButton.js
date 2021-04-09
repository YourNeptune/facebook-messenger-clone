import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const ExitButton = ({ onClick }) => {
  return (
    <div>
      <IconButton onClick={onClick}>
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
};

export default ExitButton;
