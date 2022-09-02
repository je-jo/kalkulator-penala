//this is for the public version

# README - Early Cancellation Fee Calculator

A calculator of early cancellation fee for a broadband. Built with vanilla javaScript and used in real world. :)

This repo features dummy rate plans, silly product packages and ridiculous prices. It's super easy to add your own products, should you wish to use this calculator for your purposes.

## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [The process](#the-process)
  - [Built with](#built-with)
  - [Observations](#observations)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Description

Cancelling service while still within the minimum contractual term may result in early cancellation fee (sometimes also called early termination fee). Companies usually calculate this fee by multiplying monthly charge with the remaining number of months, but things are a bit more complicated where I live. Here we do the following:

- Add up all the benefits that customer got by signing the contract. These may include price reduction, extra channels, free device etc.
- Multiply monthly subscription with the remaining number of months.

This gives us two different ammounts. The lesser number is the actual fee the customer has to pay in case of early cancellation. If a customer hasn't received any benefits by signing the contract (so the first number is zero), the contract can be cancelled without any penalties.

Things can get quite complicated when calculating all the benefits..
..which is why I've built this app.

### Screenshot

![](screenshot.png)

### Links

- [Repo](https://github.com/je-jo/early-cancellation-fee-calculator)
- [Live Site](https://je-jo.github.io/early-cancellation-fee-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### Observations

Building this calculator helped me learn a lot about 

This might be a good candidate for a multi-step form.


### Useful resources

- [Colors from Paraiso theme](https://github.com/idleberg/Paraiso-Color-Palettes);

## Author

- [Github](https://github.com/je-jo)
- [Frontend Mentor](https://www.frontendmentor.io/profile/je-jo)
- [Codepen](https://codepen.io/je-jo)
- [Twitter](https://twitter.com/jelena_jo_)