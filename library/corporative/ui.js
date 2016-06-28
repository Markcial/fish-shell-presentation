import React from 'react';
import logo from 'url?limit=10000&mimetype=image/svg+xml!assets/corporative/logo.svg';
import {connect} from "react-redux";

export class Datestamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({date: new Date()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return <span className="datestamp">{this.state.date.toString()}</span>
  }
}

export class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  componentDidMount() {
    this.setState({title: document.title});
  }

  render () {
    return <header>
      <h1>{this.state.title}</h1>
      <span className="slide">#{this.props.children}</span>
    </header>
  }
}
Header.propTypes = {title: React.PropTypes.string}
Header.defaultProps = {title: 'Default title'}

export class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSlide: 1
    };
  }

  render() {
    return <footer>
      <Datestamp />
      <img src={logo} className="logo" />
      <span className="slide">#{this.props.children}</span>
    </footer>
  }
}

export class Asciinema extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.id;
  }
  componentDidMount() {
    let sc = document.createElement("script");
    sc.type = "text/javascript";
    sc.async = true;
    sc.src = `https://asciinema.org/a/${this.id}.js`
    sc.id = `asciicast-${this.id}`
    document.getElementById(`container-${this.id}`).appendChild(sc)
  }

  render () {
    return <div id={`container-${this.id}`} />
  }
}
Asciinema.propTypes = {id: React.PropTypes.string.isRequired}
