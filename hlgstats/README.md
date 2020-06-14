# HLG Stats

Currently available for mobile devices at [HLGSTATS](https://stats.highlandergaming.org)

This web application show cases the esports team's statistics. The application showcases an individual player's stats or a team's stats. Using React and SwipeJS, the site was made for mobile first.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Image Size Requirements

When the Media Team at HLG presents new esports portraits for each team there will be certain needs in order to properly integrate said
images into the stats page. 

First thing is first, when the images are taken make sure there is no excess lighting hitting the subject in the image. This prevents
beams of light from hitting the subject which are difficult to deal with if you want to use photoshop on a team member. If possible maybe
add an option for students to take images with a solid background. This makes photoshop cropping a player into other backgrounds much easier. You could maybe even use automated cropping tools if the background is simple enough. 

There are two image sizes you're going to want to get post the images being captured. For banners you're going to want to crop and resize images to 1920x1080 this is standard HD size and fits banners nicely. The other size you'll want is for portraits at 1080x1350 these are for the cards.

You can resize images in batches using this [Smart Resize](https://www.smartresize.com/) website.

For more information and tips on image sizes checkout [canva](https://www.canva.com/sizes/instagram/).


# For CS Majors

Everything below is technical jargon that is mean for CS majors. API needs to be plugged into APP.js, MatchHistory, and Cards.JS.

# Riot API

The project works with the Riot API. Known for one of the most popular video games on the planet, Riot offers access to the data behind League of Legends. In order to use the API several major hurdles need to be solved. The API can't be used on the front end because of CORS issues. I solve the issue by using AWS Lambda functions and AWS API Gateway Management.

Along with an official API, two open API's were also used. Ddragon and Cdragon. Ddragon is usefule for getting champion information such as their key, id, and background information. Cdragon is a community driven API that gives access to game assets. While useful, because of its community built resources it may not be as reliable as an offical API by Riot

Champion Info:

http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json

Champion Portraits:

https://cdn.communitydragon.org/latest/champion/ahri/square

Raw League Assets:
http://raw.communitydragon.org/10.1/game/assets/characters/

# Hurdles

Because this was the first site I built using a mobile first approach it was interesting to use media queries. An unforeseen issue was realizing phone keyboards reduce the viewport height meaning any styles made using percentages or the viewport can be affected. 




