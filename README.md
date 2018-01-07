# Wordulp
Simple Gulp environment for Wordpress!

## Features
- Scss
- Autoprefixer
- BrowserSync
- Bower dependencies installation (Bootstrap or Foundation Zurb 6 - Font Awesome - Swiper - Masonry - Magnific Popup)

## Get started
Clone this repo on your folder. Run inside of it:

`npm install`

or if you prefer Yarn

`yarn install`

## Installing a package
To install a dependency in Wordulp just run

`bower install <package-name> --save`

or

`yarn add <package-name>`

then you need to run

`gulp inject`

and launch the webserver with

`gulp serve`

you will now have your dependencies in vendor.js and/or vendor.css

## Move "assets" folder
For correct operation, move the folder inside the folder of your custom theme.
The correct path is:

`wp-content/themes/name-custom-theme/assets`

## Change the name of the custom theme
In the gulpfile change `name-theme` with the name of your custom theme

## Build for production
When done with coding remember not to upload "node_modules", "bower_components" and "wp-content/themes/name-custom-theme/assets" folders on your FTP

