# Agrilinks-Backend

## to start the server
npm run dev



## TO Post report 

example:
POST http://localhost:4000/api/v1/register HTTP/1.1
Content-Type: application/json

{
         "userID": "user-5",
      "marketID": "market-4",
      "marketName": " Mumbai",
      "cmdtyID": "cmdty-1",
      "cmdtyName": "apple",
      "priceUnit": "Quintal",
      "convFctr": 100,
      "price": 1600


}

## To Get the particular report
request on API
GET http://localhost:4000/api/v1/reports?reportID={enterReportID} HTTP/1.1


example
GET http://localhost:4000/api/v1/reports?reportID=626910b5b7667b3ee16ada87 HTTP/1.1






