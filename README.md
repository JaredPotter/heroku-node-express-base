HEROKU - NODE EXPRESS BASE

1. Set the port with the value from `process.env.PORT`. // This is set on https://dashboard.heroku.com/apps

 => \<app\> => Settings => Config Vars
 If no value is given, Heroku will auto-assign one.

 2. Add `"start": "node index.js",` to your `package.json` file.