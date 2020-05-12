# HLG Stats

Currently available for mobile devices at [HLGSTATS](https://stats.highlandergaming.org)

This web application show cases the esports team's statistics. The application showcases an individual player's stats or a team's stats. Using React and SwipeJS, the site was made for mobile first.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Riot API

The project works with the Riot API. Known for one of the most popular video games on the planet, Riot offers access to the data behind League of Legends. In order to use the API several major hurdles need to be solved. The API can't be used on the front end because of CORS issues. I solve the issue by using AWS Lambda functions and AWS API Gateway Management.


# Hurdles

Because this was the first site I built using a mobile first approach it was interesting to use media queries. An unforeseen issue was realizing phone keyboards reduce the viewport height meaning any styles made using percentages or the viewport can be affected. 




