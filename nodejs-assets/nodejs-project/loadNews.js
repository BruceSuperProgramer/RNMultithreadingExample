// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.
const fetch = require('node-fetch');

var rn_bridge = require('rn-bridge');

const TOTAL_PAGE = 1;
const take = 100;
// Echo every message received from react-native.
rn_bridge.channel.on('message', async msg => {
  try {
    for (let i = 0; i < TOTAL_PAGE; i++) {
      const response = await fetch(
        `https://us-staging-api.hammertechonline.com/api/v1/inspections?skip=${
          i * take
        }&take=100`,
        {
          method: 'get',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2IiwidHlwIjoiSldUIn0.eyJFbWFpbCI6ImJydWNlLmhlQGhhbW1lcnRlY2guY29tLmF1IiwiVGVuYW50IjoibW9iaWxlZGV2dXNhIiwiQXV0aFNlc3Npb25JZCI6IjU4MTMwYmU0LTA1ODEtNDYyNC04ODI1LTA4ZDkyMGUxNTE0NSIsIkF1dGhlbnRpY2F0ZWRPbiI6IjA2LzE5LzIwMjEgMTE6Mjk6MDIiLCJSZWZyZXNoVG9rZW4iOiJxaXM2MWhFR3pOcCtWS3BEUmtESkpJMTZNNVY1RWRYL2NwSFhyM3pacGNrPSIsIm5iZiI6MTYyNDEwMjE0MiwiZXhwIjoxNjI0MjgyMTQyLCJpc3MiOiJodHRwczovL2h0LWxvZ2luLWFwaS5oYW1tZXJ0ZWNob25saW5lLmNvbS8iLCJhdWQiOiJodHRwczovL2h0LWFwaS5oYW1tZXJ0ZWNob25saW5lLmNvbS8ifQ.ThT4RTO0ndEohjnuZl5ScvAa7td4-t0uVpvM1HcjZ_OBrIOQk3qhpSH2q7gHLTmvTka5gXpq9ON2cQj3IjzmdqtrPRQqEmlP2XQ9BWXpS5zG6QOsaPrE1_4gOP2d0kEJ7uedqRU1ylghcw2AH2D3kKfl1ElWgSJ5d7NJHHri78HOdqLpSmzmurjU_F7LkTDqV51QJ5g2y7edCRln8oTSgAzb7FYSog4lPzt9Knm0fz-jDiAvwR5Mht6r653U7KpfEVgSa0stpGtAbTQFFt7ntrtgP-rj1LY2Jv3qtooaA513-gACcL3Zj1n8_R1DfjInOMjhKWVURfUDNbifjEK5Eg',
          },
        },
      );
      const jsonResponse = await response.json();
      console.log({jsonResponse});
    }

    rn_bridge.channel.send(`API finished`);
  } catch (e) {
    console.log(e);
  }
});
