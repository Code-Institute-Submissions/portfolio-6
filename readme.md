# PORTFOLIO | developed by Minesh Kothari

<br />
<br />

## Overview

### About The Portfolio

This project consists of a single page portfolio website. Visitors can keep up to date with my most illustrious projects as well as my vast array of skills. Visitors of the portfolio website can also get in touch either via social media outlined on the website or using the contact form at the bottom of the page.

### What is it for?

This portfolio has been developed as part of my Stream 1 project for [Code Institute](https://codeinstitute.net/)'s Full Stack Web Development course. Upon complettion of the course, I will gain a diploma in Software Development.

### Who is it targeted at?

This project will stand as my main portfolio (brand) and be presented to prospective employers and clients.

Having said this, the portfolio is also something that is aimed at any visitor who would like to keep up-to-date with my latest web projects and skills or even for those simply looking to keep in touch. 

Here, you will learn a little bit about me, my skills and experience as well as diving into projects showcased on the site.

<br />
<br />

## User Experience

The key focus of this project is to showcase my portfolio website whilst finding the right balance between a clean and minimalistic look and feel as well as utilising the best techniques to present content in spectacular ways.

The project's design is something that has been derived from Google's [Material Desgin](https://material.io/design/). With great admiration for Material Design, it was a great opportunity to take inspiration from techniques which work well and showcase my knowledge through the portfolio.

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

### Features yet to be implemented

1. Parallax Summary Div's - Allowing visitors to glance at a quick summary
2. TypeWriter effect on IE - allowing visitors to see my specialist skills
3. Contact Form (Firebase) - Allowing visitors to get in touch by filling out the form

<br />
<br />

## Technologies Implemented

- HTML5

As with every website or web based app, the use of Hypertext Markup Language is paramount. HTML5 has been used as the markup for this project as this would enable use of many of the new semantics to keep the structure of this project clear and in keeping with the latest industry standards.

- CSS

As with markup, Cascading Style Sheets are essential when controlling the layout of the website. Custom CSS was used for this project with Media Queries to control responsiveness enhancing user interaction and delivering exceptional user experience.

For projects using Bootstrap please see my other repositories:

    - [**TOP**SIX**DASHBOARD**](https://github.com/mineshkothari/premierleague)
    - [Fullstack](https://github.com/mineshkothari/fullstack)

- CSS Grid

CSS Grid is a 2-dimensional gird system which can handle both rows and columns. This layout system has been the main focus for the 'Portfolio' section of this project offering an elegant mosaic-esque design.

- Flexbox

Flexbox is designed as a one-dimensional layout model unlike the two-dimensional counterpart CSS Grid. However, this is still one of the most powerful tools when it comes to positioning elements on the page.

- JavaScript

Custom JavaScript (Vanilla and JQuery) was used for this project to enhance the user experience using parallaxing effects and a navigation toggle button.

- JQuery

JQuery was used as part of my JavaScript functionaility. One of many perks for using JQuery is its simplicity in manipulating DOM elements using the syntax ```$('.myClass')``` as oppose to writing out ```document.querySelector('.myClass')``` each time.

- Firebase


<br />
<br />

## Contributing

This portfolio is a personal project created as part of my Full Stack Web Development course for [Code Institute](https://www.codeinstitute.net/). With that being said, it would be amazing to see the community getting involved by making or suggesting some really interesting changes. Or simply using this project as inspiration to create something yourself.

**Things to consider:**

This portfolio has very few dependencies making it really simple to set up on your own environment. You can use this for your own portfolio or make changes and submit pull requests if you think you have cool ideas.  

**Prerequisites:**
```
This portfoilio has no prerequisites
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
1. Navigate to the [origianl repository](https://github.com/mineshkothari/portfolio "https://github.com/mineshkothari/portfolio")
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
None yet
```

### console.log

Using ```console.log()``` to test new JavaScript functionality has helped me understand the behaviour of certain ```.click``` or ```.scroll``` events. Once the tests passed, I was confident of using JQuery to manipulate certain DOM elements to improve the UX/UI of the site.

Some of the commits where ```console.log()``` had been used:

- [test toggle click event using console.log - passed](https://github.com/mineshkothari/portfolio/commit/e789ef038418a2264fc861ebecda1a5a5d1e02ab)
- [test form input hover state using javascript](https://github.com/mineshkothari/portfolio/commit/9c62b76c2420baae007f81e637d91500cdbc2083)
- [test nav-link click event using jQuery](https://github.com/mineshkothari/portfolio/commit/b0cb4a91a38e959b0848eb4b595c9b7fb73aa6b5)
- [test new click event on scroll class](https://github.com/mineshkothari/portfolio/commit/b02d684d2082f96510aa9cf335b590b8c726d267)

### UX/UI Testing

Manual tests were carried out at every stage to ensure the user experience standards remained at consistently high levels with each new implementation, no matter how big or small. This proved an excellent way of identifying and thwarting any issues, reducing the time spent on bug fixes to a small fraction.

### Responsive Design

Further manual tests were conducted to ensure the portfolio was as responsive as possible. Similar to the UX/UI testing appraoch, these tests were carried out after every implementation to minimise time spend debugging responsive issues.

Responsive tests were carried out using Chrome DevTools' device emulator.

Some of the use cases includes:
1. Ensure the navbar was behaving as I envisioned it
2. CSS Grid breakpoints were set correctly for optimal experience across all screen size
3. The floating summary ```<div>``` elements 

See the **Report > Responsive Design** section for more details.

### Cross-Browser Testing

Cross-browser testing was undertaken after each major implementation of the project. This included the implmentation of the navbar, CSS Grid, and Flexbox items amoungst many others.

The purpose of conducting these test was to ensure the behaviour of the site remained optimal across four of the biggest browsers available on Windows 10, noting down any issues which need resolving.

[Can I Use](https://caniuse.com/) has also helped distinguish which features are likely to be supported by the most modern browsers - and those features which may prove a little more challenging, namely CSS Grid.

The most stand-out and challenging issue was to decide how I would present the portfolio items. Although CSS Grid is a fantastic feature - maybe even the most powerful layout system CSS has to offer, the browser support is restrictive, at least as far as Internet Explorer is concerned.

See the **Report > CSS Grid** section for more details.

The website was again tested right before the project was deployed to ensure any issues were rectified or listed before the site went live.

### Testing the Contact Form

Tests were also carried out to ensure the contact form was behaving correctly. Monitoring various use cases and user behaviour.

**label for**

When developing the contact form, I'd created ```<label>``` and ```<input>``` tags for the 'Name' field, which I later copied across for the 'Email' and 'Message' fields making changes to the content where necessary.

However, during testng - I soon realised that I'd forgotton to change the ```for="form-name"``` attribute on the labels as clicking on the Email or Message label would result the cursor going back to the Name input field.

This was later resolved and followed with a git commit: [fixed issue with form labels](https://github.com/mineshkothari/portfolio/commit/4691aa8c74645b994d64862fce2d78e0ae8aa57a)

**type email**

As per above, another issue became apparent as a result of copying and pasting code from the 'Name' field where I'd forgotton to amend the ```type="text"``` to ```type="email"```.

When testing the form validation after implementation of the Submit button, it was clear user's can enter any text into email field not necessarily including an '@' symbol and the form would validate perfectly fine.

Following this test, the issue was resolved as seen in this commit: [code and style submit button](https://github.com/mineshkothari/portfolio/commit/256f92804b42b22273f28407520787501efcd96d).

<br />
<br />

## Deployment

This portfolio will be deployed to Github Pages. - *in testing*

<br />
<br />

## Report

Want to learn about some of the known issues/bugs/limitations with this project? Continue reading to find out more. Perhaps, you will find a solution, or a better solution and if so - feel free to create a pull request with your changes.

### Responsive Design

### Flexbox

Flexbox is a great way for aligning DOM elements and a system which has been adoptod by the likes of Bootstrap. It's really taking off as an ingenious way to alignment content replacing the need for using the good old fashioned ```left: 50%; transform: translateX(-50%);``` to center objects.

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

### TypeWriter in IE

### Parallax effect

### Webkit Autofill

### Textarea bottom margins

<br />
<br />

## Credits

### Media

Large amount of images taken from Unsplash.
Created a collection (link to it here).
Used for testing purposes (quick and easy)

Once project ready to submit, will change to image on local folder

### Acknowledgements

- TypeWriter - This effect is something I learnt from [Brad Traversy](https://www.youtube.com/watch?v=POX3dT-pB4E)'s YouTube channnel. This neat little effect, has given my portfolio flair which I think works well with the rest of the site.

- Parallax Summary Boxes - This implementation is something I admired when learning about Parallax effects through one of [Kevin Powell](https://www.youtube.com/watch?v=SmolT-tV5Lw)'s videos.

