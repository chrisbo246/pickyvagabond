---
layout: page
title: About
permalink: /about/
iconclass: "glyphicon glyphicon-envelope"
menu: 4
menu-position: 2
---

<h2>Authors</h2>
{% for author in site.data.authors %}
<div class="meta">
	<img src="http://www.gravatar.com/avatar/{{ author.gravatar }}?s=40">
	<span class="author">{{ author.display_name }}</span>
</div>
{% endfor %}

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.github.url }}">via RSS</a></p>
