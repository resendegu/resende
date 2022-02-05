import { Button, TextField } from "@material-ui/core";
import { Call, VideoCall } from "@material-ui/icons";

let friendId


const MainWindowContainer = (props) => {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const { startCall } = props;
    const config = { audio: true, video };
    return () => startCall(true, friendId, config);
  };

  return (
    <div className="container main-window">
      <div>
        <h3>
          Hi, your ID is
          <TextField
            type="text"
            className="txt-clientId"
            defaultValue={props.clientId}
            
          />
        </h3>
        <h4>Get started by calling a friend below</h4>
      </div>
      <div>
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Your friend ID"
          // onChange={event => (friendId = event.target.value)}
        />
        <div>
          <Button
            variant="contained"
            startIcon={<VideoCall />}
            onClick={() => callWithVideo(true)}
          />
          <Button
            variant="contained"
            startIcon={<Call />}
            onClick={() => callWithVideo(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainWindowContainer;
