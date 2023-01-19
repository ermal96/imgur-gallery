# Imgur Gallery

## Getting started

You can view a live demo over at [https://imgur.ermal.dev/](https://imgur.ermal.dev/)

To get the frontend running locally:

* Clone this repo
* `npm install` to install all required dependencies
* `npm run dev` to start the local server (this project uses [https://vitejs.dev/](https://vitejs.dev))
* `npm run build` to build the project/output folder is `/dist`

Local web server will use port 5173 instead of standard React's port 3000

Since this project is just an test the client id required from Imgur API is hardcoded inside /src/api/index.ts

## Packages used

* React
* Redux(toolkit)
* Tailwind
* Tabler icons
* Es lint
* React router

## Functionality overview

This app uses Imgur API to consume gallery data

**General functionality:**

* View all images or videos in a grid
* When clicking to a card(image|video) you will go to detail page
* Detail page include [title, comments count, ups, downs, tags]
* Some filters are also included like [sorting, section, window(only when section is set to top), show viral, show mature]
