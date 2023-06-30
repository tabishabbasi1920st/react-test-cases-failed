const Notification = (props) => {
  const { notificationText, className, imageUrl } = props;
  let notificationElement = (
    <div className={`notification-container ${className}`}>
      <img className="notification-icon" src={imageUrl}></img>
      <p>{notificationText}</p>
    </div>
  );
  return notificationElement;
};

const element = (
  <div className="main-bg-container">
    <div className="content-container">
      <h1 className="main-heading">Notification</h1>
      <Notification
        notificationText="Information Message"
        className="information-message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        notificationText="Success Message"
        className="success-message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        notificationText="Warning Message"
        className="warning-message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        notificationText="Error Message"
        className="error-message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

let imageElement = <img></img>;

ReactDOM.render(element, document.getElementById("root"));
