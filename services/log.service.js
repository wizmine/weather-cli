import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent(`

      ${chalk.bgCyan(" HELP ")}
      No parameters - weather output
      -s [CITY] to set the city
      -h to display help
      -t [API_KEY] to save the token
      
    `)
  );
};

const printWeather = (res) => {
  console.log(
    dedent(`

      ${chalk.bgMagentaBright(" WEATHER ")} Weather in ${res.name}, ${res.sys.country}
      ${res.weather[0].description}
      Temperature today: ${res.main.temp} (feels like ${res.main.feels_like})
      Minimum: ${res.main.temp_min}
      Maximum: ${res.main.temp_max}
      Humidity: ${res.main.humidity}%
      Wind speed: ${res.wind.speed}
      
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
