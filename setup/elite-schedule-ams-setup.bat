REM First set up the tables
REM azure mobile table list es-demo

call azure account import c:\temp\bptestn1.azurewebsites.net.PUBLISHSETTINGS

call azure mobile table create es-demo leagues

call azure mobile table create es-demo locations

call azure mobile table create es-demo teams

call azure mobile table create es-demo games


REM Now populate tables with data

node elite-schedule-ams-seed-data.js
