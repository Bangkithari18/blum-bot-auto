const axios = require("axios");
async function getToken(query_id) {
  const { data } = await axios({
    url: "https://user-domain.blum.codes/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP",
    method: "POST",
    data: {
      query: query_id,
      // referralToken: "pgNiFOzMIx", // changeable
      referralToken: "5IbwQZSbUE", // changeable
    },
  });

  return `Bearer ${data.token.access}`;
}
async function getUsername(token) {
  const response = await axios({
    url: "https://gateway.blum.codes/v1/user/me",
    method: "GET",
    headers: { Authorization: token },
  });
  return response.data.username;
}

async function getBalance(token) {
  const response = await axios({
    url: "https://game-domain.blum.codes/api/v1/user/balance",
    method: "GET",
    headers: { Authorization: token },
  });
  return response.data;
}

async function getGameId(token) {
  const { data } = await axios({
    url: "https://game-domain.blum.codes/api/v1/game/play",
    method: "POST",
    headers: { Authorization: token },
    data: null,
  });
  return data;
}

async function claimGamePoints(token, gameId, points) {
  const { data } = await axios({
    url: `https://game-domain.blum.codes/api/v1/game/claim`,
    method: "POST",
    headers: { Authorization: token },
    data: {
      gameId,
      points,
    },
  });
  return data;
}

module.exports = {
  getToken,
  getUsername,
  getBalance,
  getGameId,
  claimGamePoints,
};
