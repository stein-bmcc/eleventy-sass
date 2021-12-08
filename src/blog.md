---
title: Blog
layout: base.njk
tags: navItem
---
## Simple List based on Tag

This shows how to do a list of pages based on a tag that is in their front-matter. Remember that 11ty automatically creates a collection for each tag.

The below lists all files with a "post" tag in their tags.
<ul>
  {%- for post in collections.post %}
  <li>
  <a href="{{ post.url }}">
  {{ post.data.title }}
  </a>
  </li>
  {%- endfor %}
</ul>

## Custom Collectoins
Custom collections allow you to make your own collections based on things other than tags. The custom collections are made in the .eleventy.js file. Look there for examples of how these are done. They first filter only .md files in the posts folder and then use some custom ordering.

By doing a custom collection on a folder, you don't have to add the same tag to each file as above.

### All Blog Posts by Date Custom Collection
<ul>
  {%- for post in collections.postsByDate %}
  <li>
  <a href="{{ post.url }}">
  {{ post.data.title }}
  </a>
  </li>
  {%- endfor %}
</ul>

### All Blog Posts by FileName Custom Collection
<ul>
  {%- for post in collections.postsByFileName %}
  <li>
  <a href="{{ post.url }}">
  {{ post.data.title }}
  </a>
  </li>
  {%- endfor %}
</ul>