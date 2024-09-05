require("colors");
const readlineSync = require("readline-sync");

const {
  getToken,
  getUsername,
  getBalance,
  getGameId,
  claimGamePoints,
} = require("./third_party/api.js");
const { displayScreen } = require("./utility/display.js");
const { delay } = require("./utility/delay.js");
const param = require("./obj/param.json");

(async () => {
  displayScreen();

  console.log("Please Wait ...".yellow);
  try {
    let index = 0;
    while (index < param.length) {
      const value = param[index];
      const token = await getToken(value.query_id);
      const username = await getUsername(token);
      const balance = await getBalance(token);

      try {
        console.log(`Hi , ${username}!`.green);
        console.log(`Your Blum Point is: ${balance.availableBalance}`.green);
        console.log(`Ticket Balance: ${balance.playPasses}`);
        console.log("");
        if (balance.playPasses > 0) {
          console.log("Play game...".yellow);
          let countTicket = balance.playPasses;
          while (countTicket > 0) {
            console.log("Try to play game ...".blue);
            await delay(5000);
            const Game = await getGameId(token);
            await delay(30000);
            const randPoints =
              Math.floor(Math.random() * (240 - 160 + 1)) + 160;
            const letsPlay = await claimGamePoints(
              token,
              Game.gameId,
              randPoints
            );

            if (letsPlay === "OK") {
              const balance = await getBalance(token);
              console.log(
                `🎮 Game success! Your balance now: ${balance.availableBalance} BLUM`
                  .green
              );
            }
            countTicket--;
            console.log(`Ticket Balance : ${countTicket}`.yellow);
          }
        }
      } catch (error) {
        console.log(error);
      }
      index++;
    }
  } catch (error) {
    console.log(error);
  }
})();
