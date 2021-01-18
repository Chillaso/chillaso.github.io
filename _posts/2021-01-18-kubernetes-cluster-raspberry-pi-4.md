---
layout: post
title:  "Kubernetes cluster in Raspberry pi 4"
author: chillaso
categories: [ project ]
tags: [kubernetes, cloud, cloud, tutorial, raspberry]
image: assets/images/k8s-pi4/header.png
featured: true
hidden: false
---

Hello everybody, Chillaso here! This time I'm here to show you my next project, build a [Kubernetes](https://kubernetes.io/) cluster in two [Raspberry pi 4](https://www.raspberrypi.org/). The best suitable way to do this would be with another extra Pi, cause we're going to use [MicroK8S]() to set up Kubernetes and it needs a node (Raspberry pi) to place master node and the other ones to workers, but is not the case.

## Setup
First at all, I'm going to give you my hardware setup:
* x2 [Raspberry Pi 4 - 4GB](https://www.amazon.es/RASPBERRY-Placa-Modelo-SDRAM-1822096/dp/B07TC2BK1X/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HLZ6AKDH70AH&dchild=1&keywords=raspberry+pi+4+4gb&qid=1610995813&sprefix=raspberry+pi+4%2Caps%2C250&sr=8-4) (if you want a powerfull cluster should buy the 8GB version)
* x2 [MicroSD 128GB SD XC V30 Serie I U3 A2](https://es.aliexpress.com/item/1005002022720807.html?spm=a2g0o.productlist.0.0.461c31daZ9EcH9&algo_pvid=8c10e98f-24de-4c06-b6fa-01ce02a6ad91&algo_expid=8c10e98f-24de-4c06-b6fa-01ce02a6ad91-6&btsid=2100bdd816109957463943617ef11d&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_)
* x2 [Power adapter](https://es.aliexpress.com/item/32805797998.html?spm=a2g0o.productlist.0.0.43b55675pga2ak&algo_pvid=c1735fcf-1570-4f01-b0b2-f852ed8ec2dd&algo_expid=c1735fcf-1570-4f01-b0b2-f852ed8ec2dd-6&btsid=2100bdf116109960208693233ec423&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_)
* [Cluster rack](https://www.amazon.es/Raspberry-Ventilador-refrigeraci%C3%B3n-disipador-acr%C3%ADlico/dp/B07J9VMNBL/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A1KTHGWAS8O0&dchild=1&keywords=cluster+raspberry+pi&qid=1610996148&sprefix=cluster+rasp%2Caps%2C229&sr=8-2)
* x2 Ethernet cable

I think, a good microSD is a very important point here, is our hard drive, the better SD is the better performance we have. The other important part are fans, which are included in the cluster ruck, I've test it without fans and the temperature was more or less 50-60º, with them temperature average is 30º, very important if you don't want to fire your house.

About software, we're going to use the [official Ubuntu server for Raspberry pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=20.04.1&architecture=server-arm64+raspi) version 64-bit, cause MicroK8s doesn't work with 32-bit arch. We're going to install with [Raspberry Pi Imager](https://www.raspberrypi.org/software/). 

Okay, you've bought everything, your Aliexpress packages finally have arrive one month later. It's time to build, It's quite simple and intuitive, and I think could be good if you just discover how to build it, so just follow the instructions! Anyway, here you have some tips:
1. Set up first the microSD, before build anything else. If you are lost follow [this tutorial](https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#1-overview)
2. Building your cluster, notice about which plate is the first and which is the latest. 
3. When connecting fans check first how to do it, you've a schema [here](https://miro.medium.com/max/700/1*pcfeGQr_mUJrXDFDrdKMww.png). Pins goes in number 4 and 6