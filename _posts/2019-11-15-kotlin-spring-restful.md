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

I was writting this article before, trying to explain all difference between Kotlin and Java, but I realized that it sucks cause of explaining Kotlin features/differences step by step was unuseful, the most important thing when learning Kotlin is not language features itself, is learning and understanding concepts under the hood. Hence, I'll write a post for that concepts deep dive.

So... what we're going to learn here in this post? Well, I'll show you good features that help us writting fast RESTful services and problems we can face up when coding Spring service with Kotlin.

>All the code in this post can be found [here](https://github.com/Chillaso/Curso-Spring)

## Kotlin constructors
We're gonna build a rent car API, so let's start with one of my simple but favourite feature in Kotlin that allow write code like a thunder, I'm talking about Kotlin classes. 

<img src="/assets/images/kotlin-spring-restful/data-class.png"/>

> Disclaimer: Since 2017, **Spring Framework 5.x and Spring Boot 2.x allow Kotlin support.** This might be a problem for legacy services, but I think updating and upgrading must be a constant in our days, so if we obvious this point, I think Java community should adapt Kotlin little by little so this is why I decided use Kotlin for this project which was Java based originally.

As you can see, there aren't almost templating when creating a class. If you are familiar with [Project Lombok](https://projectlombok.org/) this is very similar to `@Data`, but much better. Kotlin create a final class (which means you can't inherit from it) with getters, setters, equals, toString... and that autogenerated stuffs we usually create with our IDE, but now we have this feature free with Kotlin. If you set all the attributes as val you are just setting an attribute final, and if you define a default value for it, Kotlin will create a constructor with all of your fields and one constructor for each `val` attribute with default falue. So, it's mean you have a constructor with optional params, let's see an example:

<img src="/assets/images/kotlin-spring-restful/constructor-example.png" style="width: 100%"/>

## Functional style
Another good stuff in Kotlin is functional programming style, which let us code cleaner. Java 8 did a nice try to get closer to functional style, but... you know, it's fine, but sucks. Kotlin gives us different methods who can be applied to any object. Let's see an example in a rest controller, it's a very very basic example, but it's fine to undertand the concept.

```kotlin
override fun findById(@PathVariable("id") id: Int): CarDTO =
service.findById(id).let { mapper.mapToDto(it.get()) }
```

This is cool, we have different methods for each semantic meaning, run, let, map, also... You could think that this is a better approach than Optionals in Java, and you'll right in my opinion, but there is a *big deal with Spring and Kotlin: Repository.*

If you use Spring Data, when you are implementing your DAO, you'll have something like:
```java
@Repository
Interface CarRepository : JpaRepository<Car, Int>
```
And when you call your repository in your service layer, you expect something like: 
```kotlin
val car: Optional<Car> = repository.findById(id);
```
As you can see, we're tight to Java Optionals, and this is totally oposite to `let`, `map`, `run`... So, Spring it's cool because let us implement our services with Kotlin, but is not thinked in a Kotlin way, hence, if we want to use Kotlin features we should parse our Optional to an object than can be nullable, that's an additional step we have to implement, and Kotlin nature is be less verbose and cleaner than Java, so...

## Conclusions
To me, this things are the best parts of developing Spring MVC with Kotlin, in balance I think we win more than loss, even with that misunderstanding between Java and Kotlin, the last one piss off in Java's mouth, clean code, more readability, less verbosity, better concepts... This is a very very very brief explanation about Kotlin and Spring, if you develop a real project you'll be able to realize that  Kotlin has good features like `object` keyword, inmutability, functional programming, better OOP... I hope you want to check it out by yourself.

If you like this brief introduction to RESTful API with Spring check the project on GitHub and study the difference between Java, and try to implement your API with Kotlin, after one or two projects later, you'll realize that Kotlin is the new black and is the better alternative to Java.

In other post I'm writting now, I'll explain Kotlin concepts that could change your mind in order to adapt Kotlin in your codebase, after that we'll be able to see and study other cool things around Kotlin ecosystem like [Arrow](https://arrow-kt.io/), [coroutines](https://kotlinlang.org/docs/reference/coroutines-overview.html), [http4k](https://www.http4k.org/) and much more.

Thanks for reading!