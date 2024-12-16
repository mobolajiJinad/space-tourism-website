# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

![](/public/thumbnail.png)
![](/public/thumbnailDestination.png)
![](/public/thumbnailCrew.png)
![](/public/thumbnailTechnology.png)

### Links

- [Solution URL](https://github.com/mobolajiJinad/space-tourism-website)
- [Live Site URL: ](https://space-tourism-omobolaji.vercel.app/)

## My process

### Built with

- ReactJS
- TailwindCSS
- Mobile-first workflow

### What I learned

One of the major learnings from this project was how to implement swipe left or right animations for a carousel or slider component. This involved understanding touch events, calculating swipe direction, and updating the UI based on user gestures. Below is a breakdown of what I learned:

1. **Handling Touch Events**:

   - I used React's `onTouchStart` and `onTouchEnd` event handlers to capture the starting and ending positions of a touch gesture.

2. **Determining Swipe Direction**:

   - By comparing the starting and ending touch positions (`touchStartX` and `touchEndX`), I was able to determine whether the user swiped left or right.

3. **Updating State**:

   - Based on the swipe direction, I updated the active index of the carousel to show the next or previous item.

4. **Adding Swipe Animations**:
   - I used CSS transitions to add smooth animations for the left and right swipe actions.

Here’s a code snippet that demonstrates the implementation:

```js
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX; // Capture the starting X position
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].clientX; // Capture the ending X position
  handleSwipe();
};

const handleSwipe = () => {
  if (touchStartX - touchEndX > 50) {
    // Swipe left
    setActiveIndex((prev) => (prev === crews.length - 1 ? 0 : prev + 1));
  } else if (touchStartX - touchEndX < -50) {
    // Swipe right
    setActiveIndex((prev) => (prev === 0 ? crews.length - 1 : prev - 1));
  }
};
```

### Swipe Animations (CSS)

To make the swipe transitions smooth, I applied CSS transitions to the carousel container or individual items:

```css
.carousel-item {
  transition: transform 0.3s ease-in-out;
}

.carousel-item.active {
  transform: translateX(0);
}

.carousel-item.previous {
  transform: translateX(-100%);
}

.carousel-item.next {
  transform: translateX(100%);
}
```

---

### Why This Was Valuable

Learning how to implement swipe gestures taught me the importance of:

- Handling mobile-first interactions.
- Using event listeners efficiently.
- Creating a smooth and responsive user experience with CSS animations.

This knowledge is transferable to other projects that involve touch gestures, carousels, or sliders. It also reinforced the importance of combining JavaScript logic with CSS for seamless UI/UX design. 🎉

## Author

- Website - [Abdulquadri Jinad](https://omobolaji.vercel.app/)
- Frontend Mentor - [@mobolajiJinad](https://www.frontendmentor.io/profile/mobolajiJinad)
- Twitter - [@Qmobolaji\_](https://x.com/Qmobolaji_)
