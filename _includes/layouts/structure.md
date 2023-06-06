<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="{{myProject.host}}/src/img/Icon.png">
    <link rel="stylesheet" href="{{myProject.host}}/src/css/style.css">
    <title>Lorelei - {{title}}</title>
    <meta name="description" content="{{description}}">
<body>
    <a href="index.html"><div class="header-img">
        <img class="dino" src="{{myProject.host}}/src/img/nav-dino.png">
        <img class="logo" src="{{myProject.host}}/src/img/nav-logo-1.png" width="35" height="35">
    </div></a>
    <header>
        <div class="container">
            <div class="row">
                <nav class="nav justify-content-center">
                  <a class="nav-link" href="/">Home</a>
                  <a class="nav-link" href="/pages/about">About</a>
                  <a class="nav-link" href="#">Misc</a>
                </nav>
            </div>
        </div>
    </header>{%- if tags != null %}<ul class="nav nav-pills flex-column mb-auto sidebar">
        {% assign t = topics | split: "," %}{% for topic in t %}<li class="nav-item">
                <a href="#{{ topic }}" class="nav-link" aria-current="page">{{ topic }}</a>   
            </li>{% endfor %}</ul>{%- endif -%}
    <article class="container post-container">{{ content }}</article>
</body>

</html>