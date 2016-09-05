---
layout: page
title: About
permalink: /about/
iconclass: "glyphicon glyphicon-envelope"
menu: 4
menu_position: 2
---
<h2>{{ site.title }}</h2>
<h2>Authors</h2>
{% for author in site.authors %}
<div class="meta">
	<img src="http://www.gravatar.com/avatar/{{ author.gravatar }}?s=40">
	<span class="author">{{ author.display_name }}</span>
</div>
{% endfor %}
