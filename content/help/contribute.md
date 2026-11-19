---
title: How to contribute?
---

For direct contribution to the documentation, you need first a GitHub account.
Once you have it, you need to be registered to the GitHub repository.
Please contact [SUD Crew](mailto:Bruno.Guillaume@loria.fr) if you want to get access.

> [!Note]
> If you don't already have access, you can also use the **pull request** mechanism of GitHub if you want to suggest modification.

There are two main ways to contribute:
 - using GitHub web interface: fine for editing existing pages or to add nex examples for instance.
 - using a local clone of the repository on your computer: much more convenient if you plan major contribution

## Editing with GitHub web interface

On each page of the documentation, there is and orange button **Edit this page** that drives you directly to the GitHub editing functionality.
You can mofify the page and save your changes with the green button **Commit changes…**.
The only version of the documentation will be update a few minutes later.

> [!Warning]
> Please respect the page format as described [here](./page_formatting).

You can also add new pages from the GitHub web interface, but this is not recommended as you will not be able to check the page output locally.

## Editing with a clone on your computer

Please follow some online documentation for the basic operations when using git and GitHub.

The main adavantage with local editing is that you can have a local version of the SUD documentation on which you can check your modifications before sending them to GitHub.

### First time

See [Prerequisites](https://quartz.jzhao.xyz/getting-started/#prerequisites) related to the Quartz system on which SUD documentation id built. 

The first time you start working on the guidelines, you have to run in a terminal:

```shell
git clone git@github.com:surfacesyntacticud/docs.git # this will create a repository `docs` where you can work
cd docs
npm i # to install some node related stuff
cd external-plugins && npm run build && cd - # For installation of specific plugings
npx quartz build --serve # starting the local SUD documentation
```

The documentation is then available on http://localhost:8081 and is updated dynamically each time you save a file.

### Next editions
If the repo is already cloned, you just have to go again in the same folder `docs` and run

```shell
git pull # get modification by other users
npx quartz build --serve # starting the local SUD documentation
```

If you observe that something is broken, you can try to run again 

```shell
npm i # to install some node related stuff
cd external-plugins && npm run build && cd - # For installation of specific plugings
```
