## Infos
[![](https://tokei.rs/b1/github/baramex/flashes-messages-js)]()<br/>
[![](https://img.shields.io/github/languages/top/baramex/flashes-messages-js?style=for-the-badge)]()

[![](https://img.shields.io/github/downloads/baramex/flashes-messages-js/total.svg?style=for-the-badge)](https://github.com/baramex/flashes-messages-js/releases/)
[![](https://img.shields.io/github/v/release/baramex/flashes-messages-js.svg?style=for-the-badge&label=last%20release)](https://github.com/baramex/flashes-messages-js/releases/latest/)
[![](https://img.shields.io/github/release-date/baramex/flashes-messages-js.svg?style=for-the-badge&label=last%20release%20date)](https://github.com/baramex/flashes-messages-js/releases/latest/)

[![](https://img.shields.io/github/license/baramex/flashes-messages-js.svg?style=for-the-badge)](https://choosealicense.com/licenses/lgpl-3.0/)
[![](https://img.shields.io/badge/author-baramex-red?style=for-the-badge)](https://github.com/baramex/)

![img](https://user-images.githubusercontent.com/47333747/131180968-900589a9-69ea-4850-9839-a10cc130eb9d.PNG)

# TUTO

## Requirements
- [jQuery](https://code.jquery.com/)

## Installation
- <a href='#cdn'>Use CDN</a> or [download in local](https://github.com/baramex/flashes-messages-js/releases/latest/)

## Append Flash
<i>append flash function append the flash automatically to body!</i>
- function: appendFlash(type, message, time?, parent?)
- types: 
  - `success-flash` <img width='70%' src='https://user-images.githubusercontent.com/47333747/130810606-c2b6d990-d224-41aa-a70a-d647a283f000.PNG'>
  - `error-flash` <img width='70%' src='https://user-images.githubusercontent.com/47333747/130810630-6f26c84b-37fe-46fd-bf3f-88ef63ca1da1.PNG'>
  - `info-flash` <img width='70%' src='https://user-images.githubusercontent.com/47333747/130810660-0cc2aa75-329d-42ac-9bd7-37ed6aca08bc.PNG'>
  - `not-allowed-flash` <img src='https://user-images.githubusercontent.com/47333747/130810671-8124093c-14fa-405c-82f2-ae46e9237736.PNG' width='70%'>
- message: string
- time: the default is 2500 ms, 0 is infinite
- parent: the default is flashDiv element (auto generate by the script), this is the parent to which the flash will be added, it must be an element
- <i>exemple: appendFlash("success-flash", "You understood!", 0)</i>

## Generate Flash
<i>generate flash function returns flash as one element</i>
- function: generateFlash(type, message)

<h2 id='cdn'>CDN</h2>

```html
<link rel="stylesheet" href="https://cdn.baramex.me/libs/js/flashes-messages/flashs.css">
<script src="https://cdn.baramex.me/libs/js/flashes-messages/flashs.js"></script>
```

## Exemple
Head:
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<link rel="stylesheet" href="https://cdn.baramex.me/libs/js/flashes-messages/flashs.css">
<script src="https://cdn.baramex.me/libs/js/flashes-messages/flashs.js"></script>
```

Body:
```html
<body onload="appendFlash('info-flash', 'loaded!');">
  
</body>
```

## Credits
The icons come from [paomedia](https://github.com/paomedia)
