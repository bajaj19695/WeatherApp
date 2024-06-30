import "./current-weather.css";

const CurrentWeather = ({ currentWeather }) => {
  const city = currentWeather?.city;
  const description = currentWeather?.weather[0]?.description;
  const icon = currentWeather?.weather[0]?.icon;
  const temperature = currentWeather?.main?.temp;
  const feelsLike = currentWeather?.main?.feels_like;
  const wind = currentWeather?.wind?.speed;
  const humidity = currentWeather?.main?.humidity;
  const pressure = currentWeather?.main?.pressure;
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(temperature)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">DETAILS</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like:</span>
            <span className="parameter-value">{Math.round(feelsLike)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">{wind} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure} hPs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
