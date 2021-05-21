import { Button, TextField } from "@material-ui/core";

const UsernameForm = ({username, onChange, onSend}) => {
    return (
      <div>
        <form className="form_container tooltip">
          <span className="tooltiptext">
            Please enter a username to start chatting or chat as an unknown user
            without an username.
          </span>
          <TextField
            label="Enter your username"
            variant="outlined"
            value={username}
            onChange={onChange}
            className="username__input"
          />
          <Button
            className="username__btn "
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSend}
          >
            Chat Now
          </Button>
        </form>
      </div>
    );
}

export default UsernameForm
