import { FormControl, IconButton, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Form = ({ input, onChange, onSend }) => {
  return (
    <div className="form_container">
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="formControl__input"
            value={input}
            onChange={onChange}
            placeholder="Aa"
          />
          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={onSend}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
