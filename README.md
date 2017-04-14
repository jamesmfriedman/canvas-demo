Canvas Demo
-----------

View on GH Pages [https://jamesmfriedman.github.io/canvas-demo/](https://jamesmfriedman.github.io/canvas-demo/)

This was a fun little assignment. I've been doing card and grid based layouts for a long time, and there are certainly a lot of ways to accomplish it. I'm going to outline some of my thoughts along the way, and why I made the decisions I did.

Tools
=====

I built this demo in AngularJS, SASS, and HTML using Webpack as my build system.

I opted to use AngularJS for a variety of reasons. I have a starter-kit I built that I've kept relatively up to date for the past year which allowed me to immediately jump into coding and not work on the build system. My last major project was in AngularJS, so it's still at the front of mind, and most importantly I knew I could work quickly. While I like TypeScript for its robustness and typesafety, it's not something I would use to hack something together quickly.

I used material-icons because I knew I could get them up and running quickly and that they offered icons that at least had some approximation to the mock. I'm assuming canvas has its own SVG or font-icon library.

In more recent projects I've been pushing more for a completely generated public / static directory leveraging Webpack's file loader to manage versions and place files accordingly. It seemed a bit overkill for this, so static assets are just dropped in the public folder.

Process
========

The directions were relatively straight forward with 3 phases and a statement that said this shouldn't take more than 4 hours. The actual task could and should take significantly longer than that when accounting for accessibility, internationalization, reusability, testability, and overall durability, but given the limitation I decided to use the 4 hours as follows:

1. General Layout, Create Course card
2. Dashboard Layout, Responsive grid handling
3. Canvas API
4. Documenting the process, and using any additional time for cleanup.

Card Layout
===========

I only had the PDF to work off of, but I pulled the card into Sketch and saw it most closely fit a 3x4 aspect ratio. I'm not into using exact pixel sizes for UI like this because of varying screen sizes. Because of this, I decided to base the card size off of viewport units and allow the contents of the card to be flexible to allow for things like long wrapping titles and overflowing content, assuming the base height of the top image being about 33%. I initially thought that the interior of the card might've been based off the golden ratio so I checked it in Sketch. When it wasn't I decided to fall back to the rule of thirds which is how I came to 33% for the top image.

Grid Layout
===========

There are so many ways to do this, and over the years I think I've tried just about all of them. If the cards were fluid height (Pinterest style layout), Isotope / Masonry might've been preferrable. I don't generally like using it because of the extra calculations and depependencies, and I've always felt I should be able to do this with just CSS. CSS columns allow you to achieve a similar kind of view as Isotope, but you have to layout your elements semantically incorrect (top to bottom instead of left to right) and you run into weird issues for endless scrolling lists. CSS Grids could help, but they're bleeding edge, don't have good polyfills, and Canvas' browser support is currently IE 11 and up.

I decided to use good old CSS floats and responsive breaks to make sure the grid is always centered evenly and renders at a size appropriate to the screen. It's setup mobile first, adding styles for larger screens.

Canvas API
==========

AngularJS has a built in lib called Angular Resource which has an idiomatic way to declare RESTful api services. A few lines of code and you get full rest support. If I wasn't using Angular Resource, I would've opted for using the Fetch api, although it would've required a polyfill.

API Authorization wasn't hard to handle but there are a ton of considerations which aren't accounted for. I opted to get the token before I bootstrapped my app since it's likely in a real world scenario they wouldn't be able to do anything in the app without it anyways. Here are some thoughts.

- The response headers have no-cache on them so there is really no way to tell what the TTL is for the token. If there was, I'd cache it in sessionStorage (localStorage if multi-user per tab support isn't necessary).
- I don't have any retry logic in there, right now if the token call fails, the app would never bootstrap.
- You could bootstrap first and then get the token, but you would end up having to have some global api promise that all of your endpoints defer to.
- I sent the token over as a header, it seemed gross to send it as part of the request URL. I had a typo in my code when trying to add the header which wasted about 15 minutes of my time.

The demo api just had enough for the textual content. Some other things that are needed are the course image and course color, or some sort of categorical rule to color them by.

Things I didn't get to
======================
- Cross browser testing. I built this in Chrome. I did a quick check in Safari and Firefox. Firefox had a few flex box issues, and I didn't have time to fire up my vm for IE / Edge.
- internationalization. Usually I would check for the ugliest lengths of headings to see where it breaks.
- accessibility. Other than basic alt tags on images and semantic elements, I didn't dig into any aria labeling.
- button interactions. All of those icons are really icon buttons which need to have some sort of hover / touch effect
- touch interactions. I would add FastClick and have specific touch friendly effects. 
- flare. there are bunch of subtle effects that could be added to enhance the card grid experience. Entry animations would be nice. Gravity could be added to the cards, and some sticky drag interactions to make them feel like they're not just stuck floating there.

Bonus Hour
==========

I wanted to deploy this to gh-pages to share with the team, and of course that came with its own set of gotchas.
- I had to add babel in, because UglifyJS fails on ES6, plus browser support
- I forgot gh-pages has a relative root, so all of my paths were broken. I wanted it to be dynamic, so I messed with the paths and base href, but ultimately I had to put the final public path in the config of the minified version. In a real world scenario, I generally have multiple environment configurations for webpack to build with.
- I finally got it up on gh-pages, but I had to dynamically modify the base href which causes the initial image request in the preloader to break. This would be fixed by injecting the final public path into the ejs template, or just by deploying to a normal static server.
- Overall, had a good time :)
