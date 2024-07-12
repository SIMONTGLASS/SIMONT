import { ElfsightWidget } from "react-elfsight-widget";
import GoogleReviews from "./reviewCarousell";

function Socials() {
  const flexContainer = {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const widget1 = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={flexContainer}>
      <div>
        <GoogleReviews />
      </div>

      <div style={{border: "0.5px solid lightgray", marginTop: "10%"}}>
        <ElfsightWidget widgetId="85f882e3-2660-4675-b069-0ab29ba97f91" />
      </div>
    </div>
  );
}

export default Socials;
