# // console.log('123')

# // import{fetch} from "node-fetch"

# // fetch("https://query1.finance.yahoo.com/v1/finance/search?q=''").then(res => console.log(res));

# // const http = require('http')
# // const fs = require('fs')
# // const port = 3000

# // const server = http.createServer(function (req, res) {
# //     res.writeHead(200, { 'Content-Type': 'text.html' })
# //     fs.readFile('index.html', function(error, data){
# //         if(error){
# //             res.writeHead(404)
# //             res.write('Error 404: Not Found')
# //         } else {
# //             res.write(data)
# //         }
# //         res.end()
# //     })
# // })

# // server.listen(port, function (error) {
# //     if (error) {
# //         console.log('Something went wrong', error)
# //     } else {
# //         console.log('Server is listening on Port ' + port)
# //     }
# // })

import requests
import json
from datetime import datetime,timedelta

API_KEY = "39da9e709585467687096cee3d2a59ba"

relevantTimeDate = datetime.now() - timedelta(days=7)
relevantTime = relevantTimeDate.strftime('%Y-%m-%d')
print(relevantTime)

keywords = list()
essential_keywords = list()
key_comb = ""

essential_keywords = [
    "blockchain",
    "crypto",
    "web3"
]

keywords = [
    "scam",
    "scamming",
    "investments",
    "start-up"
]

first = True
for ess in essential_keywords:
    for key in keywords:
        if first:
            first = False
            key_comb = key_comb + "(" + ess + " AND " + key +  ")"
        else:
            key_comb = key_comb +  " OR (" + ess + " AND " + key +  ")"

# print(key_comb)

# abc = "blockchain+scamcrypto+investments"

url = "https://newsapi.org/v2/everything?q="+ key_comb +"&from=" + relevantTime + "&sortBy=popularity&apiKey=" + API_KEY

print(url)
r = requests.get(url)
news = dict()
data = r.json()

news["articles"] = data["articles"]

# print(news)

with open('../db/news.json', 'w') as f:
    news = json.dumps(news)
    f.write(news)
    f.close()
