# [PORTFOLIO](https://mineshkothari.github.io/portfolio/) | developed by Minesh Kothari

<br />
<br />

## Overview

### About The Portfolio

This project consists of a single page portfolio website. Visitors can keep up to date with my most illustrious projects as well as my vast array of skills. Visitors of the portfolio website can also get in touch either via social media links on the website or using the contact form at the bottom of the page.

### What is it for?

This portfolio has been developed as part of my Stream 1 project for [Code Institute](https://codeinstitute.net/)'s Full Stack Web Development course. Upon completion of the course, I will gain a diploma in Software Development.

### Who is it targeted at?

This project will stand as my main portfolio (brand) and be presented to prospective employers and clients.

Having said this, the portfolio is also something that is aimed at any visitor who would like to keep up-to-date with my latest web projects and skills or even for those simply looking to keep in touch. 

Here, you will learn a little bit about me, my skills and experience as well as diving into projects showcased on the site.

<br />
<br />

## User Experience

The key focus of this project is to showcase my portfolio website whilst finding the right balance between a clean and minimalistic look and feel as well as utilising the best techniques to present content in spectacular ways.

The project's design is something that has been inspired from Google's [Material Design](https://material.io/design/). With great admiration for Material Design, it was a great opportunity to take inspiration from techniques which work well and showcase my knowledge through the portfolio.

More focus was drawn to the colour palette for this portfolio. It was imperative to use 'soft' contrasting colours, ones which also complement each other.

<br />
<br />

## Features

### Features Implemented

1. Hamburger Toggle Menu - allowing users to navigate effectively on mobile devices
2. TypeWriter effect - allowing visitors to see my specialist skills
3. CSS Grid portfolio - giving visitors an illustrious experience when viewing projects
4. Tiles (Skills) - A neat and elegant way to present my skills
5. Tiles (Timeline) - A neat and elegant way to present my education and experience
6. Tiles (Social Media) - A neat and elegant way to present my active social media accounts
7. Parallax Summary Div's - Allowing visitors to glance at a quick summary
8. Contact Form (Firebase) - Allowing visitors to get in touch by filling out the form

### Features yet to be implemented

1. TypeWriter effect on IE - allowing visitors to see my specialist skills 
2. Implement CSS Grid for IE 10 and 11
3. Portfolio Modals (Instead of just linking to external site)

<br />
<br />

## Technologies Implemented

- HTML5

As with every website or web based app, the use of Hypertext Markup Language is paramount. HTML5 has been used as the markup for this project as this would enable use of many of the new semantics to keep the structure of this project clear and in keeping with the latest industry standards.

- CSS

As with markup, Cascading Style Sheets are essential when controlling the layout of the website. Custom CSS was used for this project with Media Queries to control responsiveness enhancing user interaction and delivering exceptional user experience.

(For projects using Bootstrap please see my other repositories: [Top Six Dashboard](https://github.com/mineshkothari/premierleague), [Fullstack](https://github.com/mineshkothari/fullstack)).

- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

CSS Grid is a 2-dimensional gird system which can handle both rows and columns. This layout system has been the main focus for the 'Portfolio' section of this project offering an elegant mosaic-esque design.

- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

Flexbox is designed as a one-dimensional layout model unlike the two-dimensional counterpart CSS Grid. However, this is still one of the most powerful tools when it comes to positioning elements on the page.

- JavaScript

Custom JavaScript (Vanilla and JQuery) was used for this project to enhance the user experience using parallaxing effects and a navigation toggle button.

- JQuery

JQuery was used as part of my JavaScript functionality. One of many perks for using JQuery is its simplicity in manipulating DOM elements using the syntax ```$('.myClass')``` as oppose to writing out ```document.querySelector('.myClass')``` each time.

- [Firebase Realtime Database](https://firebase.google.com/docs/database/)

Google's Firebase offers a quick and easy solution to integrate back-end database to web applications. Firebase Realtime Database is used in this project to store contact form entries to Google's NoSQL cloud database which is a perfect addition to this front-end project.

<br />
<br />

## Testing

This project has undergone rigorous testing with each new implementation to ensure every aspect of this site works robustly.

*All tests were done on a Windows 10 64-bit PC unless otherwise stated*

**Desktop Browsers Tested:**
```
Google Chrome
Firefox
Microsoft Edge
Internet Explorer 11
```

**Mobile Browsers Tested:**
```
Chrome iOS
Chrome Android
Samsung Internet
Safari
```

### console.log

Using ```console.log()``` to test new JavaScript functionality has helped me understand the behaviour of certain ```.click``` or ```.scroll``` events. Once the tests passed, I was confident of using JQuery to manipulate certain DOM elements to improve the UX/UI of the site.

This included events such as toggling the navigation menu on mobile devices, parallaxing divs, smooth scrolling and validating form entries to name a few.

Some of the commits where ```console.log()``` had been used:

- [test toggle click event using console.log - passed](https://github.com/mineshkothari/portfolio/commit/e789ef038418a2264fc861ebecda1a5a5d1e02ab)
- [test form input hover state using javascript](https://github.com/mineshkothari/portfolio/commit/9c62b76c2420baae007f81e637d91500cdbc2083)
- [test nav-link click event using jQuery](https://github.com/mineshkothari/portfolio/commit/b0cb4a91a38e959b0848eb4b595c9b7fb73aa6b5)
- [test new click event on scroll class](https://github.com/mineshkothari/portfolio/commit/b02d684d2082f96510aa9cf335b590b8c726d267)

### UX/UI Testing

Manual tests were carried out at every stage to ensure the user experience standards remained at consistently high levels with each new implementation, no matter how big or small. This proved an excellent way of identifying and thwarting any issues, reducing the time spent on bug fixes to a small fraction.

### Responsive Design

Further manual tests were conducted to ensure the portfolio was as responsive as possible. Similar to the UX/UI testing approach, these tests were carried out after every implementation to minimise time spend debugging responsive issues.

Responsive tests were carried out using Chrome DevTools' device emulator.

Some of the use cases includes:
1. Ensure the navbar was behaving as I envisioned it
2. CSS Grid breakpoints were set correctly for optimal experience across all screen size
3. The floating summary ```<div>``` elements 

See the **Report > Responsive Design** section for more details.

### Cross-Browser Testing

Cross-browser testing was undertaken after each major implementation of the project. This included the implementation of the navbar, CSS Grid, and Flexbox items amongst many others.

The purpose of conducting these test was to ensure the behaviour of the site remained optimal across four of the biggest browsers available on Windows 10, noting down any issues which need resolving.

[Can I Use](https://caniuse.com/) has also helped distinguish which features are likely to be supported by the most modern browsers - and those features which may prove a little more challenging, namely CSS Grid.

The most stand-out and challenging issue was to decide how I would present the portfolio items. Although CSS Grid is a fantastic feature - maybe even the most powerful layout system CSS has to offer, the browser support is restrictive, at least as far as Internet Explorer is concerned.

See the **Report > CSS Grid** section for more details.

The website was again tested right before the project was deployed to ensure any issues were rectified or listed before the site went live.

### Testing the Contact Form

**Defensive Design**

As with the rest of this site, the contact form was implemented using a defensive design approach. This ensures the user is given constructive feedback in the event something goes wrong, this is particularly important when users are interacting with contact forms.

I wanted to prevent users submitting an empty form. HTML5 makes it really simple to ensure the form is valid before the user clicks on the submit button. In order to ensure an empty form wasn't being submitted, I set the input and textarea fields to ```required```. In the event a user attempted to submit an empty form then they would receive a constructive error message to fill out the empty fields.

To ensure the email syntax inside the form is valid before the user clicks on the submit button, I used ```type="email"``` on the input field. This ensures correct email syntax will be required. If this condition is not met, then the user will receive a constructive error message to enter the email address in the correct format.

**label for**

When developing the contact form, I'd created ```<label>``` and ```<input>``` tags for the 'Name' field, which I later copied across for the 'Email' and 'Message' fields making changes to the content where necessary.

However, during testing - I soon realised that I'd forgotten to change the ```for="form-name"``` attribute on the labels as clicking on the Email or Message label would result the cursor going back to the Name input field.

This was later resolved and followed with a git commit: [fixed issue with form labels](https://github.com/mineshkothari/portfolio/commit/4691aa8c74645b994d64862fce2d78e0ae8aa57a)

**type email**

As per above, another issue became apparent as a result of copying and pasting code from the 'Name' field where I'd forgotten to amend the ```type="text"``` to ```type="email"```.

When testing the form validation after implementation of the Submit button, it was clear users can enter any text into email field not necessarily including an '@' symbol and the form would validate perfectly fine.

Following this test, the issue was resolved as seen in this commit: [code and style submit button](https://github.com/mineshkothari/portfolio/commit/256f92804b42b22273f28407520787501efcd96d).

**Linear Gradients**

The contact form fields boast a subtle linear gradient background colour to improve its appearance. This inadvertently created a bug where a 1px solid white line was visible at the end of the gradient.

In order to remedy this, I applied ```no-repeat``` to the background property.

### Mobile Devices

Chrome's DevTool's was heavily used during production. Once the portfolio was deployed to Github Pages, the site was physically tested on mobile phones. Although the site looked similar (if not the same) as it did during development, to my surprise, I felt as though the font size should be reduced on smaller screens as 16px seemed too big.

I also made a change to the size of the tiles on smaller screen sizes following the physical tests as 200px by 200px looked very disproportionate on smaller screens and needed to be a lot smaller.

However, making the tiles smaller did come with its challenges. As the title 'Data Visualisation' was too long to fit into one line, the split forced the parent element down 8px. Which I needed to pull back up using css.

See the **Report > Skills Tile** section for more details.

### After Deployment

Once the Portfolio was deployed on Github Pages, I was able to test the website on various environments and devices. Although the website was tested thoroughly on the local machine during the development phase, it was always my intention to test the website on different environments and devices I had available at my disposable.

This paid dividends when testing the website on smaller devices such as mobile phones running iOS and Android operating systems. A few problems I found were: 

1. The default font size on ```<p>``` tags were too large in my opinion
2. The skills tiles were too large in my opinion

Once the tests concluded, I tweaked the CSS to remedy these issues and offer a better User Experience as a result.

<br />
<br />

## Known-bugs

### Parallax Divs

### CSS Grid project-four tile

<br />
<br />

## Deployment

This project has been deployed to Github Pages from the master branch. A link to the deployed version of the site can be found [here](https://mineshkothari.github.io/portfolio/).

Once the project was deployed, I was not only able to test the live site on desktop web browsers on other environments, but also able to test the portfolio on various mobile devices. See **Testing > After Deployment** for more information. 

<br />
<br />

## Report

Want to learn about some of the known issues/bugs/limitations with this project? Continue reading to find out more. Perhaps, you will find a solution, or a better solution and if so - feel free to create a pull request with your changes.

### Responsive Design

Having a robust website which works well on all platforms is paramount. As mobile devices become increasingly popular, powerful and smarter - more people are beginning to use this as their primary source of surfing the web. This increases the level of importance when designing responsive websites.

This project has been developed using mobile-first approach. When using a mobile-first approach, designing websites which work well on smaller devices becomes easier as the primary focus is drawn to how elements are displayed on devices with smaller 'real-estate'. As the screen size increases, so does the functionality.

Before embarking on the project, I had a clear vision outlining how I wanted elements to be displayed both on mobile screens as well as larger devices.

Due to the lack of space available on mobile devices, having a togglable icon to view the navigation bar made sense. To add to this, as the 'real-estate' becomes larger (desktop screen sizes), there is more space available to fit content which we can use to enhance the user's interaction and experience. As a result, it felt to have a button to toggle the navigation on larger displays would have negative experience on users by adding an extra element to their interaction. For this reason it made sense to have a fixed navigation menu to the top of the viewport reducing the level of interaction thus increasing the experience.

In addition, utilising a bootstrap-like row and column structure using Flexbox also helped in positioning elements which would look great on all screen sizes. This is most notable under the 'About' section.

Systems such as CSS Grid is also used to achieve a beautifully thought out responsive 'Portfolio' section. Although CSS Grid itself is responsive, using the same grid/column setup across all screen sizes would be difficult as mobile screens would be too small for the mosaic effect. As a result, I used various breakpoints to change the grid column setup which works well across each browser.

### Flexbox

Flexbox is a great way for aligning DOM elements and a system which has been adopted by the likes of Bootstrap. It's really taking off as an ingenious way to alignment content replacing the need for using the good old fashioned ```left: 50%; transform: translateX(-50%);``` to center objects.

The following snippet of CSS was used to align the main title centrally, initially:

 ```css
.title-container {
    width: 100vw;	   
    position: absolute;
    top: 50%;	    
    left: 50%;	    
    transform: translate(-50%);
    text-align: center;	
}
 ```
This worked well - to a degree. After a series of 'stress tests' as I'd like to call it, I noticed an evident side scroll on narrower screen sizes, something which surprisingly would not be replicated on Chrome DevTools' mobile emulator (thus the importance of testing code).

The ```width:100vw;``` and ```left:50%;``` were causing side scroll. This meant I needed to come up with a better solution to centrally align the title. In comes Flexbox:

```css
.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
```

### CSS Grid

**Browser Support**
CSS Grid has been one of my biggest challenges for this project due to its browser support in IE. At time of implementation, [Can I Use](https://caniuse.com/#feat=css-grid) states CSS Grid has partial support in IE 10 and 11 using ```-ms-``` prefix. Having said that, various CSS Grid properties were not available / or only available using third party [Autoprefixer](https://github.com/postcss/autoprefixer) tool.

As I wanted this project to have no (or very little) dependencies, I've been reluctant to use the Autoprefixer tool to implement CSS Grid for IE on this portfolio.

Instead, I opted to stacked them one on top of another, adding margin to each ```.project-tile``` element for a visually appealing fall-back option.

```css
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .project-tile {
        margin: 1em auto;
        min-height: 200px;
        max-width: 750px;
    }  
}
```

I did stumble upon an insightful 3-part series: [CSS Grid in IE](https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/) explaining CSS Grid support in IE extremely well with some fantastic workarounds.

As a long term solution, outside the scope of this project, I will test the Autoprefixer tool using concepts outlined in the 3-part series on smaller side projects, eventually helping me in transferring the concept onto this project.

### TypeWriter in IE

The TypeWriter effect is something which I learnt watching one of Brad Traversy's YouTube tutorials (please see credit section below). This effect was created using JavaScript's ES6 and arrow functions, embedding this inside my ```main.js``` file. 

It soon became apparent that arrow functions are not readily supported in IE and other older browsers which caused underlying issues executing the other JavaScript functions inside the ```main.js``` file.

I tried using Babel to convert the JavaScript code to ES2015, however, this caused further complications on all other major browsers such as Chrome and Firefox.

As a result, I opted to disable the TypeWriter effect on IE altogether by moving the JavaScript code to a separate file called ```TypeWriter.js```. This allowed all other functions in ```main.js``` to continue working in IE.

### Parallax effect

For this project, I wanted to use JavaScript in a way that would enhance the user's experience when visiting the portfolio website. One really intriguing way to do this was to implement parallax effects on three separate elements where they would scroll at a slower speed to the rest of the page.

However, I wanted to ensure that each element would parallax independently from each other and would only trigger when the item was in the viewport. This is to prevent the element from scrolling too far down once the user scrolled to that section on the page.

In order to achieve this, I used a JavaScript function to trigger on each of the `summary--parallax` class when the element position was offset from the top by 450px.

### Skills Tiles

The 'Skills Tiles' are a fun and interactive way of learning about my skillset and works really well with good hover effects bringing in the element of good user interaction.

It is imperative that I kept all the tiles an equal size, irrespective of the content inside. The best way I feel this can be achieved is by setting absolute width and height on the property. This became challenging when I added padding the tiles, where "Data Visualisation" would no longer fit on one line causing that tile to offset from the top by about 8px.

As this was the only tile affected, I opted to remove the padding from the tiles altogether to avoid any positioning issues. However, it wasn't until I realised that the tiles were too big for mobile devices where I needed to decrease the size of the tiles, and again "Data Visualisation" was too big to fit onto one line causing the tile to offset. 

To remedy this, I added the following CSS to combat this issue when "Data Visualisation" fell onto two lines on smaller screen sizes.

```css 
.data--tile {
    position: relative;
    top: -8px;
}

```

<br />
<br />

## Contributing

This portfolio is a personal project created as part of my Full Stack Web Development course for [Code Institute](https://www.codeinstitute.net/). With that being said, it would be amazing to see the community getting involved by making or suggesting some really interesting changes. Or simply using this project as inspiration to create something yourself.

**Things to consider:**

This portfolio has very few dependencies making it really simple to set up on your own environment. You can use this for your own portfolio or make changes and submit pull requests if you think you have cool ideas.  

**Prerequisites:**
```
This portfolio has no prerequisites
```

### Forking The Repo

1. In order to make changes, you will need to fork the repository. Click on the **Fork** button in the top-right corner of this page.
2. You will now need a copy of these files on your computer to make changes. To do this, you will need to clone or download the repo you forked in the previous step onto your local computer:
    - Click on the green **Clone or download** button
    - Under **Clone with HTTPS**, copy the clone URL for the repository
    - Open your Git terminal
    - Type ```git clone``` followed by the URL copied in the second step. This should look something like the following:
```console
$ git clone https://github.com/YOUR-USERNAME/portfolio.git
```
3. Once you have the file path all written down, go and hit Enter on your keyboard to request the clone.

### Making Changes

Now you're all set to make changes. You can open the project on you preferred text editor or IDE and begin making changes.

### Submitting Pull Requests

Now that you've made changes to the portfolio, you can submit a pull request to the master branch to await approval. To do this:
1. Navigate to the [original repository](https://github.com/mineshkothari/portfolio "https://github.com/mineshkothari/portfolio")
2. Click on **New pull request** on the right of the Branch menu
3. On the compare page, click **compare across forks**
4. Confirm that the *base fork* is the repository you'd like to merge into
5. Use the *head fork* drop-down menu to select your fork, then use the compare branch drop-down menu to select the branch you made your changes in
6. Type a little description for your pull request
7. If you do not want to allow anyone with push access to the upstream repository to make changes to your PR, unselect **Allow edits from maintainers**
8. Click **Create pull request**

For further information about forking a repository, please click [here](https://help.github.com/articles/fork-a-repo/).

For further information about creating pull requests, please click [here](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

<br />
<br />

## Credits

### Media

Many of the images from this site have been sourced from Unsplash. I created a [collection](https://unsplash.com/collections) which I then integrated with this project using their API whilst the project was under development. This worked particularly well as it's quick and lightweight. An example of how it was used can be seen below.

```css
section.intro {
    background: linear-gradient(rgba(245,245,245,1),rgba(204,204,204,0.6)), url("https://source.unsplash.com/collection/3320800/") no-repeat center center / cover;
}
```

Once the project was nearing completion, the images were compressed and saved within the project folder.

### Acknowledgements

- TypeWriter - This effect is something I learnt from [Brad Traversy](https://www.youtube.com/watch?v=POX3dT-pB4E)'s YouTube channel. This neat little effect, has given my portfolio flair which I think works well with the rest of the site.

- Parallax Summary Boxes - This implementation is something I admired when learning about Parallax effects through one of [Kevin Powell](https://www.youtube.com/watch?v=SmolT-tV5Lw)'s videos.

- Firebase integration - Connecting the contact form to a back-end server is something I felt keen to have implemented into this project. Brad Traversy has a great [video](https://www.youtube.com/watch?v=PP4Tr0l08NE) explaining how to set up a contact form with Firebase.