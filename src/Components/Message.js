import { Card, CardContent, Typography } from "@material-ui/core";
import { forwardRef } from "react";

const Message = forwardRef(({ username, data }, ref) => {
  const isUser = username === data.username;

  return (
    <div ref={ref} className={`msg ${isUser && "msg_user"}`}>
      <Card className={isUser ? "msg_userCard" : "msg_guestCard"}>
        <CardContent>
          <Typography variant="h5">
            {data.username}: {data.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
