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

Since 2017, **Spring Framework 5.x and Spring Boot 2.x allow Kotlin support.** This might be a problem for legacy services, but I think updating and upgrading must be a constant in our days, so if we obvious this point, I think Java community should adapt Kotlin little by little so this is why I decided use Kotlin for this project which was Java based originally.

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

Kotlin Data class is basically a shortening of a lot of stuffs if Java you should implement manually. Kotlin always create getters and setter by default (setters only if var is declarated) and default constructor, but with `data` class we have methods such as equals, hashCode, toString and copy. Okey, this is a little abstract now, but we are going to compare the generated code, you'll see how Kotlin really works, let's see:

Kotlin data class approach:

IMAGEN KOTLIN DATA CLASS

The previous example creates the next code in Java:

IMAGEN KOTLIN DATA CLASS DECOMPILED

Awesome! just 1 line in Kotlin vs X line in Java. So usually when we create Entities, DTOs or POJOs we'll use `data` class. Just so simple! Notice that Kotlin has some cool things like this:

IMAGEN FINAL KOTLIN DECOMPILED
>Classes in Kotlin are final that means you can't inherit from it, if you wan't to do it, use `open` word. You might want a final class if isn't going to be a parent class, very useful for services or controllers...

IMAGEN VAL KOTLIN DECOMPILED
>Variables are final if you use `val` word this is very useful, because with functional programming we should adapt immutability in order to reduce bugs and create consistent objects and logic. Create new objects every time has cost of course, but our compute power is not a problem nowadays. BTW final objects are removed first when garbage collector recolect unused stuffs.

DEFAULT CONSTRUCTOR
>Free default constructor in all Kotlin objects, but what happen if I want more than default one?

CONSTRUCTOR WITH DEFAULT VALUES
>If we initialize a variable in constructor we'll have default constructor, and then a constructor with N initialized variables before declarated. Let's see...

N CONSTRUCTOR VARIABLES

## Repository with Spring Data

Here we are going to win less verbosity, just that. Interfaces in Kotlin are very similar to Java 8, so here we don't have nothing new, but take a look how we write them:

IMAGEN DE LA INTERFAZ

## Service

In a very, very simple service we can take advantage of Kotlin verbosity to create **service methods in one line!**

IMAGEN DEL SERVICIO

## Mapper

Mapper is even simplier, because there are a map method which you can use to reduce verbosity again, let's see:

IMAGEN DEL MAPPER

## Controller
p
Has you can guess, controller is easy too, nothing new from Kotlin:

IMAGEN DEL CONTROLADOR

## DI in Kotlin

We are going to stop a bit more here. Dependency injection has some different stuffs if we compare with Java. First at all, we need to know that all variables in Kotlin are final by default, oh mamma!, this is very contradictory with DI concepts, so how Kotlin manage this situation? Easy, `lateinit` is a special keyword which allow us init later. Actually we're removing `final` from Java Bytecode
>Dependency Injection let us init object when they are going to be used (very close with IoC concept), so we don't need to use new clause in order to create new objects.

Let's see an example:

IMAGEN COMPARANDO CODIGO DE KOTLIN Y JAVA BYTECODE CON EL LATE INIT
>Here 