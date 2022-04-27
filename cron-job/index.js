const cron = require('node-cron');
let shell = require('shelljs');

cron.schedule('* * 9 * * *', () => {
  console.log('Time in scheduler that run every 9am of the day.');

  if(shell.exec(`curl --request PUT \
  --url http://localhost:5000/api/v1/employee/6265b6961d57bcca53865ba2 \
  --header 'Content-Type: application/json' \
  --data '{
	"status": "In",
	"time_in": ${Date.now()}
}'`).code !== 0) {
    console.log('Having error');
  }
});

cron.schedule('* * 16 * * *', () => {
  console.log('Time in scheduler that run every 8pm of the day.');

  if(shell.exec(`curl --request PUT \
  --url http://localhost:5000/api/v1/employee/6265b6961d57bcca53865ba2 \
  --header 'Content-Type: application/json' \
  --data '{
	"status": "Out",
	"time_out": ${Date.now()}
}'`).code !== 0) {
    console.log('Having error');
  }
});
