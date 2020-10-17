# HLG Stats

![Imgur](https://i.imgur.com/RhptgNe.png)

Currently available for mobile devices at [HLGSTATS](https://stats.highlandergaming.org)

HLG Stats is a mobile first React based esports stats app. It highlights the most recent matches held by Highlander Gaming's League of Legends team. In order to get the match stats the app uses the Riot League of Legends API. The API is a RESTful api which is used in conjunction with an AWS Lambda function. The site is hosted using Firebase hosting. 

# Profile Page

![Imgur](https://i.imgur.com/bJmyk7f.png)

The profile page uses a CSS filter for each player and features the last 10 games the player has partaken in detailing information such as their KDA ratio for each game and the champion portrait image. Not some champions do not display properly because of their awkward naming convention. For example Rek' Sai is an awkward name and the third party API that deals with champion portrait data does not follow League conventions therefore sometimes I have to accomodate for that by hardcoding how the API listed below handles the name for the API calls. 

Another issue is that some players may have deleted their account. One in particular no longer loads in the app and doesn't show up in other third party stats app as well. It's safe to say this player may have deleted their account.

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

# Known Issues
Currently there is no catch for when the official league API is down, thus no indication to a user something is wrong. 

The player Peter Nguyen's ign is not valid does selecting him causes the app to crash since the API doesn't know what to do.






