
## View this page using this link https://vin-dictive.github.io/myProfile/

## In case you are getting localhost:3000 on running npm start:-
### Make the following change:- 

In package.json replace 
```
"homepage": "https://vin-dictive.github.io/myProfile/"
```
with 
```
"homepage": "/"
```
then try 
```
npm start
```

## To deploy as GitHub pages:-

In package.json replace 
```
"homepage": "/"
```
with
```
"homepage": "https://vin-dictive.github.io/myProfile/" or with your GitHub Pages URL
```
then try
```
npm run deploy
```
This will create a separate branch on gh-pages.
**Note:** In GitHub Pages options please choose gh-pages branch otherwise it will not show up on the provided URL. You can automate this process using github workflows. The files for that are present in the .github folder in the repo.
