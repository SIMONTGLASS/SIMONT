import reviewUs from "./Assets/reviewUs.jpg";
function ContactInfo() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10%",
    marginBottom: "3%",
    overflow: "hidden",
    flexDirection: "column",
  };

  const bodyStyle = {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    color: "white",
    overflow: "hidden",
    gridGap: "4%",
  };

  const subContent = {
    marginTop: "3%",
    background: "black",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const subContent1 = {
    marginTop: "3%",
    background: "black",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };


  const reviewImg = {
    width: "100%",
  }

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div style={subContent} className="subcontent">
          <p className="pstyle">Phone: 9737 1617</p>
          <p className="pstyle">Simon Tay</p>
          <p className="pstyle">Roxy square 1 #01-54</p>
          <p className="pstyle">Opens daily: <br></br> 12.30 - 7:00pm</p>
        </div>

        <a href="https://www.google.com/search?q=simont+silver+and+glass&rlz=1C5CHFA_enSG1030SG1030&oq=simont&aqs=chrome.0.69i59j46i175i199i512j0i512l2j0i10i512j69i60j69i61l2.1299j0j4&sourceid=chrome&ie=UTF-8">
        <div style={subContent1} className="subcontent">
          <img src={reviewUs} style={reviewImg} alt="reviewUs" />
        </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
