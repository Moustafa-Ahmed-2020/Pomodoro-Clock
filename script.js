class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25 * 60,
      break: "",
      pause: "",
      visible: true };

  }

  //Function to give time format

  timeFormat(sec) {
    const mins = Math.floor(sec / 60);
    const secs = sec - mins * 60;

    return `${mins.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false })
    }:${secs.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false })
    }`;
  }

  timer() {
    var label = document.getElementById("timer-label");
    var sound = document.getElementById("beep");
    if (this.state.timeLeft >= 1) {
      this.setState({
        timeLeft: this.state.timeLeft - 1 });

    } else {
      sound.play();
      this.setState({
        break: !this.state.break });


      if (this.state.break) {
        label.innerHTML = "Break";
        this.setState({
          timeLeft: this.state.breakLength * 60 });

      } else {
        label.innerHTML = "Session";
        this.setState({
          timeLeft: this.state.sessionLength * 60 });

      }
    }
  }

  color() {
    this.setState({
      visible: !this.state.visible });

    if (this.state.visible) {
      document.getElementById("time-left").style.color = "#b3ff00";
    } else {
      document.getElementById("time-left").style.color = "#000";
    }
  }

  switch() {
    if (this.state.pause) {
      this.setState({
        pause: false });

      clearInterval(this.myInterval);
      this.colorToggle = setInterval(this.color.bind(this), 500);
      $("#break-decrement").prop("disabled", false);
      $("#session-decrement").prop("disabled", false);
      $("#break-increment").prop("disabled", false);
      $("#session-increment").prop("disabled", false);
    } else {
      this.setState({
        pause: true });

      this.myInterval = setInterval(this.timer.bind(this), 1000);
      clearInterval(this.colorToggle);
      $("#time-left").css("visibility", "visible");
      $("#break-decrement").prop("disabled", true);
      $("#session-decrement").prop("disabled", true);
      $("#break-increment").prop("disabled", true);
      $("#session-increment").prop("disabled", true);
    }
  }

  breakInc() {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1 });

      if (this.state.break) {
        this.setState({
          timeLeft: (this.state.breakLength + 1) * 60 });

      }
    }
  }

  breakDec() {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1 });

      if (this.state.break) {
        this.setState({
          timeLeft: (this.state.breakLength - 1) * 60 });

      }
    }
  }

  sessionInc() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1 });

      if (!this.state.break) {
        this.setState({
          timeLeft: (this.state.sessionLength + 1) * 60 });

      }
    }
  }

  sessionDec() {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1 });

      if (!this.state.break) {
        this.setState({
          timeLeft: (this.state.sessionLength - 1) * 60 });

      }
    }
  }

  reset() {
    var label = document.getElementById("timer-label");
    var sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
    clearInterval(this.myInterval);
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25 * 60,
      break: "",
      pause: "" });

    label.innerHTML = "Session";
    $("#break-decrement").prop("disabled", false);
    $("#session-decrement").prop("disabled", false);
    $("#break-increment").prop("disabled", false);
    $("#session-increment").prop("disabled", false);
  }

  handleChange() {
    if (this.state.break) {
      this.setState({
        timeLeft: this.state.breakLength * 60 });

    } else {
      this.setState({
        timeLeft: this.state.sessionLength * 60 });

    }
  }

  componentDidMount() {
    var sound = document.getElementById("beep");
    sound.load();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid fill" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-center color font-digital-numbers" }, "pomodoro Clock"), /*#__PURE__*/


      React.createElement("div", { className: "center" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "break", className: "panel" }, /*#__PURE__*/
      React.createElement("h5", { id: "break-label", className: "text-center font-digital-numbers" }, "Break Length (mins)"), /*#__PURE__*/


      React.createElement("h3", {
        id: "break-length",
        className: "text-center center font-digital-numbers",
        onChange: this.handleChange.bind(this) },

      this.state.breakLength), /*#__PURE__*/

      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.breakDec.bind(this) }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-minus-circle" })), /*#__PURE__*/

      React.createElement("button", { id: "break-increment", onClick: this.breakInc.bind(this) }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-plus-circle" })))), /*#__PURE__*/



      React.createElement("div", { id: "session", className: "panel" }, /*#__PURE__*/
      React.createElement("h5", {
        id: "session-label",
        className: "text-center font-digital-numbers" }, "Session Length (mins)"), /*#__PURE__*/



      React.createElement("h3", {
        id: "session-length",
        className: "text-center font-digital-numbers",
        onChange: this.handleChange.bind(this) },

      this.state.sessionLength), /*#__PURE__*/

      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("button", {
        id: "session-decrement",
        onClick: this.sessionDec.bind(this) }, /*#__PURE__*/

      React.createElement("i", { class: "fas fa-minus-circle" })), /*#__PURE__*/

      React.createElement("button", {
        id: "session-increment",
        onClick: this.sessionInc.bind(this) }, /*#__PURE__*/

      React.createElement("i", { class: "fas fa-plus-circle" })))))), /*#__PURE__*/





      React.createElement("div", { id: "main-timer", className: "center" }, /*#__PURE__*/
      React.createElement("audio", {
        id: "beep",
        src: "https://assets.mixkit.co/sfx/download/mixkit-alarm-tone-996.wav",
        preload: "auto" }), /*#__PURE__*/

      React.createElement("div", { className: "main" }, /*#__PURE__*/
      React.createElement("h2", { id: "timer-label", className: "text-center font-digital-numbers" }, "Session"), /*#__PURE__*/


      React.createElement("h2", { id: "time-left", className: "text-center font-digital-numbers" },
      this.timeFormat(this.state.timeLeft)), /*#__PURE__*/

      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.switch.bind(this) }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-pause-circle" }), /*#__PURE__*/
      React.createElement("i", { class: "fas fa-play-circle" })), /*#__PURE__*/

      React.createElement("button", { id: "reset", onClick: this.reset.bind(this) }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-power-off" })))))));






  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
    clearInterval(this.colorToggle);
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById("clock"));