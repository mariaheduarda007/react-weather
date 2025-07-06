import { Component } from "react";
import { WEATHERAPI } from '../../api';
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      load: true,
      error: null
    }
  }


  componentDidMount() {
    this.loadWeather();
  }


  async loadWeather() {
    alert(WEATHERAPI)
    try {
      const apiResponse = await fetch(WEATHERAPI + "?key=bab6411a")
      if (!apiResponse.ok) {
        throw new Error('Error on response')
      }
      
      const json = await apiResponse.json()
      this.setState({ weather: json.results })

    }
    catch (e) {
      this.setState({ error: e })
    }
    finally {
      this.setState({ load: false })
    }

  }


  render() {
    return (
      <div className="card">
        {this.state.load ?
          <p> Carregando... </p>
          :
          this.state.error ?
            <p> ERROR: {this.state.error.message} </p>
            :
            <p> DADOS: {this.state.weather.temp}</p>
        }
      </div>
    )
  }
}

