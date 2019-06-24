---
layout: post
title:  "How to build this web"
author: chillaso
categories: [ post, tutorial ]
tags: [html, github, tutorial]
image: assets/images/bricks.jpeg
featured: true
hidden: false
---

Hello everybody! I think the best first post I can do is how to build this website, step by step. Probably this post will change in the future in order to reflect all changes in web. Hope you enjoy and learn!

## Github Pages
First at all, we need to know something called [GitHub Pages](https://pages.github.com/) there is where magic occurs. Github pages host our pages and use CI/CD to mantain the page updated. We have one page per user and the free domain is like this web, chillaso.github.io. With Github Pages we have CD, so every time we push to master, a new release is created and deployed in production.

Let's start creating a **new repo named as: nameyouwant.github.io** 

<img src="/assets/images/repo1.png"/>
<p>
	<em>Actually the name could be chillaso.github.io, but I have just one created. Notice we are choosing a public repository, only if you have pro version of github you can choose it as private</em>
</p>

Then we can check it out our repository settings, if we scroll down will see a section like this

<img src="/assets/images/repo2.png"/>

After this, we simply clone the repo, create an index.html and push it to master. After this we'll be able to see our new incredible page! Let's try it.

```console
git clone https://github.com/Chillaso/chillaso.github.io.git
cd chillaso.github.io/
echo "Hello world" >> index.html
git commit -am "Hello world"
git push --set-upstream origin master
```
Simply like this! with this little configuration we have a static website deployed on Github. With this little approach you can do whatever you think, but edit a whole site from scratch is so tedious, so let's roll in something better, Jekyll.

## Jekyll Themes

Actually Github Pages uses under the hood Jekyll to render your website, and even you can choose some ~~ugly~~ predefined themes. But I recommend visit [this website](https://jekyllthemes.io/) or [this one](http://jekyllthemes.org/]) and search some cool theme. These themes have predefined plugins like Disqus, sharing, Search Lunr... This has a lot of facilities, because we have an out-of-box website with cool CSS.