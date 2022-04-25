---
title: Home
layout: base.njk
tags: navItem
pageClass: home
---
## {{title}}

My Home Page!
This is the home page. Replace this with your text.

### Sass
[Sass](https://sass-lang.com/) is used for the CSS in this site. Follow that Sass link for more documentation on how it works. Everything has been set up in

* __.eleventy.js__
* __package.json__: adding Sass node module and the scripts needed for sass to work.
* __sass folder__: in style.scss all of the partial files (everthing that starts with _) are used with _@use_ so they all get combined into one styles.css file. You can add more partials, just make sure to also add an @use in styles.scss.


### Collections

This example site uses two kinds of [Eleventy Collections](https://www.11ty.dev/docs/collections/). 

1. In nav-collection.njk (inside of src/_includes folders), all pages tagged with navItem will show up in the nav. 
2. In the src/blog folder the index.md file uses a collection of all pages tagged with blog.

If you want to use the nav as is, make sure to add a navItem tag to any page you want to appear in the main navigation (there is no second level navigation).

```
tags: navItem
```

The blog example doesn't have to be in a separate folder. It was placed there to help it be visually separated. To add a page to the blog, create a Markdown page and give it a blog tag. 

```
tags: blog
```

You may want to have more than one tag for your posts so in that case use one of these syntaxes for multiple tags

```
tags: 
    - blog
    - cats
```

OR

```
tags: ["blog", "cats"]
```
