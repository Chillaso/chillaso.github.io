---
layout: post
title:  "RESTful API with Spring and Kotlin"
author: chillaso
categories: [ project ]
tags: [kotlin, spring, restful]
image: assets/images/kotlin-spring-restful/kotlin.jpg
featured: true
hidden: false
---

Hi there! Chillaso here. Today we are going to see how to build a RESTful API with Kotlin and Spring Boot. This is a project I did for a Spring course in [atSistemas](https://www.atsistemas.com) I think could be useful for everyone who want to learn something about this irruptive language and its application out of Android projects.

I was writting this article before trying to explain all difference between Kotlin and Java but I realized that it sucks cause of explaining Kotlin features/differences step by step was unuseful, the most important thing when learning Kotlin is not language features itself, is learning and understanding concepts under the hood. Hence, I'll write a post for that concepts deep dive.

So... what We're going to learn here in this post? Well, I'll show you good features that help us writting fast RESTful services and problems We can face up when coding Spring service with Kotlin.

>All the code in this post can be found [here](https://github.com/Chillaso/Curso-Spring)

## An introduction
We're gonna build a rent car API, so let's start with one of my simple but favourite feature in Kotlin that allow write code like a thunder, I'm talking about how Kotlin construct classes. 

<img src="/assets/images/kotlin-spring-restful/data-class.png"/>

> Disclaimer: Since 2017, **Spring Framework 5.x and Spring Boot 2.x allow Kotlin support.** This might be a problem for legacy services, but I think updating and upgrading must be a constant in our days, so if we obvious this point, I think Java community should adapt Kotlin little by little so this is why I decided use Kotlin for this project which was Java based originally.