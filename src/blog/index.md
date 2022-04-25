---
title: Blog
layout: base.njk
tags: navItem
pageClass: blog
---
## {{title}}

This page shows all pages with the 'blog' tag.

### Blog Posts

<ul class="blog-posts">
{%- for post in collections.blog %}
   <li><a href="{{post.url}}">{{ post.data.title }}</a></li>
{%- endfor %}
</ul>