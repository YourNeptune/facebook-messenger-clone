import { Button, TextField } from "@material-ui/core";

const UsernameForm = ({username, onChange, onSend}) => {
    return (
      <form className="form_container">
        <TextField
          label="Enter your username"
          variant="outlined"
          value={username}
          onChange={onChange}
        />
        <Button type='submit' variant="contained" color="primary" onClick={onSend}>
          Chat Now
        </Button>
      </form>
    );
}

export default UsernameForm
