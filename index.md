---
layout: 'layouts/structure.md'
title: 'A Simple Story'
---
{%- for post in collections.posts -%}
<a href="/pages/post/{{post.data.path}}">
    <main class="row post row-post">
        <aside style="background-image: url(src/img/{{post.data.path}}/{{post.data.path}}.jpg)" class="container-xxl post-banner"></aside>
        <h1 class="container-md post-title">{{post.data.title}}</h1>
    </main>
</a>
{%- endfor -%}