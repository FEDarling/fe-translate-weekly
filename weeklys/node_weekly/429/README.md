---
title: 'Node Weekly #429' # 不可修改
date: '2022-03-18' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

🇺🇦 #​429 — March 17, 2022

[Read on the Web](https://nodeweekly.com/link/121087/web)

Node Weekly

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/gbahe9yapogrzxxuglio.jpg)](https://nodeweekly.com/link/121114/web)

[`peacenotwar`: How an npm Package Protested Russia's Invasion of Ukraine](https://nodeweekly.com/link/121114/web "snyk.io") — Users of a variety of systems (including Vue CLI, [as seen here](https://nodeweekly.com/link/121115/web)) began to notice that the [node-ipc](https://nodeweekly.com/link/121116/web) dependency was doing some _unusual_ (to put it mildly) things, such as (originally) [corrupting files](https://nodeweekly.com/link/121122/web) on systems geolocated to Russia or Belarus, and [sharing messages of protest](https://nodeweekly.com/link/121118/web) via `peacenotwar`. This is a complex story, but well outlined in this post, and yet another reminder of how fragile dependencies can be.

Liran Tal (Snyk)

[![](https://copm.s3.amazonaws.com/3adc1f91.jpg)](https://nodeweekly.com/link/121088/web)

[Build a Fullstack App from Scratch](https://nodeweekly.com/link/121088/web "frontendmasters.com") — Join Scott Moss for this detailed video course on building a fully featured app using a modern stack (React, Next.js, TypeScript, Postgres). You'll cover UI, data modeling, authentication, state management, deployment, testing, and more.

Frontend Masters sponsor

[Node.js Security Releases Due Imminently](https://nodeweekly.com/link/121089/web "nodejs.org") — As of the time of publishing, these releases haven’t dropped yet, but they’re imminent and will incorporate upstream patches from OpenSSL for an as yet undisclosed high severity issue.

Joe Sepi (Node.js Project)

[Faker 6.0: Generate Massive Amounts of Fake Data](https://nodeweekly.com/link/121090/web "github.com") — After some issues with a maintainer going rogue in January, a community team [took over](https://nodeweekly.com/link/121091/web) the popular Faker project and their first major release is now out, complete with ESM support. There are [v5 to v6 migration instructions](https://nodeweekly.com/link/121092/web) if you want to upgrade.

Faker.js Team

**Quick bits:**

*   [Node 17.7.1](https://nodeweekly.com/link/121093/web) has been released to fix a regression in `url.resolve()` when working with URLs that contain the `@` (at) symbol.
    
*   NodeSource has unveiled a free tier of [their N|Solid SaaS offering](https://nodeweekly.com/link/121094/web) for folks who want to explore Node.js metrics, process monitoring, etc.
    
*   📆 [DevOps.js](https://nodeweekly.com/link/121120/web) is a virtual conference on building, deploying, and monitoring JS apps taking place next week (March 24-25). [You can register here](https://nodeweekly.com/link/121120/web).
    

💻 Jobs

[Senior Backend Developer](https://nodeweekly.com/link/121095/web) — Are you looking to level up your skills and work on a wide variety of applications and technologies? Look no further.  
Bitovi

[Senior Node Engineer for Global Health (Remote)](https://nodeweekly.com/link/121096/web) — SystemOne's IoT platform enables infectious disease laboratories to securely transport patient data to where it can be actioned.  
SystemOne

[Find Tech Jobs with Hired](https://nodeweekly.com/link/121097/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

[Why and How to Use HTTPS in Your Local Development Environment](https://nodeweekly.com/link/121098/web "auth0.com") — Learn why you should use HTTPS even for development and how to set things up, including spinning up a simple Node.js server.

Andrea Chiarelli

[Updating Node Dependencies Automatically, Selectively, or Incrementally](https://nodeweekly.com/link/121099/web "elijahmanor.com") — A tour of [npm-check-updates](https://nodeweekly.com/link/121100/web).

Elijah Manor

[How to Build a File Upload Service with Vanilla JavaScript](https://nodeweekly.com/link/121101/web "blog.logrocket.com") — Building a file upload service with vanilla JavaScript, from scratch, with a method that requires _no_ npm packages and _no_ dependencies outside of the standard library.

Pankaj Tanwar

[Write Your Real-Time Apps in Python with This Tutorial for InfluxDB](https://nodeweekly.com/link/121102/web "www.influxdata.com")

InfluxData sponsor

▶  [How Remix Helps Bridge the Network Chasm](https://nodeweekly.com/link/121103/web "changelog.com") — Kent C. Dodds—the Director of Developer Experience at Remix—and the JS Party panelists take a look at the new React framework: what it does today, how it lured Kent away from a lucrative independent teaching career and what’s next.

The JS Party Podcast podcast

[How to Avoid SQL Injection Attacks in Node](https://nodeweekly.com/link/121104/web)  
James Q Quick

[Boost Your Webmaster Skills with the Google Search Console API from Node](https://nodeweekly.com/link/121105/web)  
Shehzad Akbar

[Lessons Learned From Switching to AWS SDK v3 in Node.js Lambda Functions](https://nodeweekly.com/link/121106/web)  
Allen Helton

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/qaublmpmfkvl3rer58fl.jpg)](https://nodeweekly.com/link/121107/web)

[Taiko: A Library and REPL to Automate Browsers](https://nodeweekly.com/link/121107/web "github.com") — This differs from Puppeteer or Playwright by being higher level and more visual. It includes a REPL mode and is more designed to work with a visible, rather than headless, browser instance, with a bigger focus on testing.

Gauge

[Pino 7.9.0: A Fast 'Very Low Overhead' JSON Logger](https://nodeweekly.com/link/121108/web "github.com") — There are code samples for using it with Fastify, Express, Hapi, Koa, and more.

pino

[Build Internal Tools in Minutes with Retool, Where Visual Programming Meets the Power of Real Code](https://nodeweekly.com/link/121109/web "retool.com")

Retool sponsor

[node-json-db: A Simple JSON-Powered File-Based Data Store](https://nodeweekly.com/link/121110/web "github.com") — For when you need a simple database but.. you don’t want a ‘database’, if you know what I mean.

Antoine Aflalo

[Mongoosastic 5.0: Index Mongoose Models into Elasticsearch Automatically](https://nodeweekly.com/link/121111/web) — Now that’s quite the project name.  
James R. Carr

[Awilix 7.0: An Inversion of Control (IoC) Container for Node](https://nodeweekly.com/link/121112/web)  
Jeff Hansen

[Hexo 6.1: A Node-Powered SSG-Style Blog Framework](https://nodeweekly.com/link/121113/web)  
Tommy Chen

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/429)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/429)
> * 译者：
> * 校对者：
