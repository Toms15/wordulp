# Wordulp
Simple Gulp environment for Wordpress!

## Features
- Scss
- Autoprefixer
- BrowserSync
- Bower dependencies installation (Bootstrap or Foundation Zurb 6 - Font Awesome - Swiper - Masonry - Magnific Popup)

## Get started
Clone this repo on your folder. Run inside of it:

	npm install

or if you prefer Yarn

	yarn install

## Installing a package
To install a dependency in Wordulp just run

	bower install <package-name> --save

or

	yarn add <package-name>

then you need to run

	gulp inject

and launch the webserver with

	gulp serve

you will now have your dependencies in vendor.js and/or vendor.css

## Build for production
When done with coding remember not to upload "node_modules", "bower_components" and "themes/name-theme/assets" folders on your FTP

