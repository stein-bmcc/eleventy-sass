---
layout: base.njk
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - navItem
permalink: /tags/{{ tag }}/
---
# Tag Collection

These pages are generated automatically by tag-pages.md. In that file teh Pagination featuer of 11ty is used to create  tag page for each tag that exists on the site. adding navItem to the filter means pages with a navItem tag will be ignored. You could add other filters to ignore or remove the filter to include the tags on those pages. 

You could also change the data variable to be a more specific collection. On this sample page all pages of the site are part of the collections collection. If you put 
"data: collection.post" then it would only get tags for pages with a post tag.

The "permalink" variable sets the link structure for the pages that are created. The example here creates a folder named tags and then puts the tag page in that folder:
"permalink: /tags/\{\{ tag \}\}/"

If you wanted to name the folder to something else like categories you could write
"permalink: /categories/\{\{ tag \}\}/"

To change \{\{tag\}\}, you would change the alias. For example:

pagination:  
  data: collections  
  size: 1  
  alias: __category__  
  filter:  
    - navItem  
permalink: /categories/\{\{ category \}\}/  

## Posts tagged “{{ tag }}”

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>