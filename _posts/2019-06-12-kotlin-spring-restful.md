---
layout: post
title:  "RESTful API with Spring and Kotlin"
author: chillaso
categories: [ project ]
tags: [kotlin, spring, restful]
image: assets/images/kotlin.jpg
featured: true
hidden: false
---

Hi! Chillaso here. Today we are going to see how to build a RESTful API with Kotlin and Spring Boot. This is a project I did for a Spring course in [atSistemas](https://www.atsistemas.com) I think could be useful for everybody who want to learn something about this irruptive language and its application out of Android projects.

Since 2017, Spring Framework 5.x and Spring Boot 2.x allow Kotlin support. This might be a problem for legacy services, but I think updating and upgrading must be a constant in our days, so if we obvious this point, I think Java community should adapt Kotlin little by little so this is why I decided use Kotlin for this project which was Java based originally.

We are going to see this next stuffs and in this order:

* Entities and DTOs - [Kotlin Data Class](https://kotlinlang.org/docs/reference/data-classes.html)
* Repository with Spring Data
* Service
* Mapper
* Controller
* DI in Kotlin
* Null-Safety. Optionals vs ?
* Testing

## Kotlin Data Class

Kotlin Data class is basically a shortening of a lot of stuffs if Java you should implement manually. Kotlin always create getters and setter by default (setters only if var is declarated) and default constructor, but with data class we have methods such as equals, hashCode, toString and copy. Okey, this is a little abstract now, but we are going to compare the generated code, you'll see how Kotlin really works, let's see:

Kotlin data class approach:

The previous example creates the next code in Java:

Awesome! just 1 line in Kotlin vs X line in Java. 
