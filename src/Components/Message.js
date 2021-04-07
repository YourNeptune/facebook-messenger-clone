import { Card, CardContent, Typography } from "@material-ui/core";

const Message = ({ username, msg }) => {
  const isUser = username === msg.username;

  return (
    <div className={`msg ${isUser && "msg_user"}`}>
      <Card className={isUser ? "msg_userCard" : "msg_guestCard"}>
        <CardContent>
          <Typography variant="h5">
            {msg.username}: {msg.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
