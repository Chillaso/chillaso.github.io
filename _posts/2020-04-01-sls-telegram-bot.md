---
layout: post
title:  "Serverless Telegram bot"
author: chillaso
categories: [ project ]
tags: [telegram, serverless, cloud,tutorial]
image: assets/images/sls-telegram-bot/sls-telegram.jpeg
featured: true
hidden: false
---

*You don't even think to call me Godfather. Instead, you come into my house on the day my daughter is to be married, and you uh ask me to do murder, for money.*

Hello everybody, Chillaso is back! In this difficult days we're living during COVID-19 I feel information necessity, but I was bored searching for graphs, news and so on... so I decided to fetch that information automatically, or as I'm going to show you, semiautomatically. Let's see how create a [Telegram bot](https://telegram.org/blog/bot-revolution) using [Serverless Framework](https://github.com/mikeal/bent), and some good libraries as [Bent](https://github.com/mikeal/bent) or [Cheerio](https://cheerio.js.org/) for NodeJS, the language we've decided to use for AWS Lambdas(the cloud environment).

## Index
* Environment installation
* Coding our function
* Serverless configuration
* Creating a Telegram bot
* Deploying and linking back-end
* Conclusions and resources
