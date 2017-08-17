# Web components

My first steps in learning Web-components

**Attention!** Now web-components work only in Chrome and Opera (look at [can i use](http://caniuse.com/#feat=custom-elements)).


### Installation

1. Download source code.
2. Run `npm install` in catalog with source code (to get the project's dependencies).


### Getting started

1. Run local-server with client-side part of service.
*Run `npm run dev` in catalog with source code (to produce development version and run a watcher at localhost:8080)*.
2. Open url `http://localhost:8080` in your browser.


### Build

- `npm run build` - produces production version (with minification).


### Updating npm-packages

- `npm run update:packages` - to update all npm-packages from package.json.


### Components list

#### 1. `<x-navigation>`

`<x-navigation>` is a custom element that contains list of navigation items - `<x-navigation-item>` (another custom elements).

`<x-navigation-item>` has 2 attributes:

- `value` - anchor to navigation item. *For example, if `value = 'contacts'`, than `<a href='#contacts'>`*.
- `selected` - is showing, which item is chosen now.

***Example usage:***
```
<x-navigation>
  <x-navigation-item value='navigation' selected>About</x-navigation-item>
  <x-navigation-item value='accordion'>Services</x-navigation-item>
  <x-navigation-item value='carousel'>Contacts</x-navigation-item>
</x-navigation>
```

#### 2. `<x-accordion>`

`<x-accordion>` is a custom element that contains list of accordion items - `<x-accordion-item>` (another custom elements).

`<x-accordion-item>` has:

- attribute `selected` - is showing, which item is chosen (open) now.
- nested elements, that contains info about accordion item:

    - `img` - icon. Has required attributes `src` (path to image file - like for common tag `<img>`) and `slot='img`.
    - `h5` - title. Has required attribute `slot='title'`.
    - `p` - text. Has required attribute `slot='text'`.

--accordion-border-color
--accordion-arrow-color
--accordion-arrow-size
--accordion-img-size
--accordion-text-max-height
--accordion-scrollbar-padding-right
--accordion-scrollbar-width
--accordion-scrollbar-track-color
--accordion-scrollbar-thumb-color
--accordion-scrollbar-thumb-color

***Example usage:***
```
<x-accordion>
  <x-accordion-item selected>
    <img src='img/photo.svg' slot='img'>
    <h5 slot='title'>Photography</h5>
    <p slot='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </x-accordion-item>
  <x-accordion-item>
    <img src='img/design.svg' slot='img'>
    <h5 slot='title'>Web Design</h5>
    <p slot='text'>Ut enim ad minim veniam, quis nostrud exercitation.</p>
  </x-accordion-item>
</x-accordion>
```

#### 3. `<x-carousel>`

`<x-carousel>` is a custom element that contains list of accordion items - `<x-carousel-item>` (another custom elements).

`<x-carousel-item>` has:

- attribute `selected` - is showing, which item is chosen (open) now.
- nested elements, that contains info about carousel item:

    - `img` - icon. Has required attributes `src` (path to image file - like for common tag `<img>`) and `slot='img`.
    - `blockquote` - text. Has required attribute `slot='text'`.
    - `cite` - author. Has required attribute `slot='author'`.

***Example usage:***
```
<x-carousel>
  <x-carousel-item selected>
    <img src='img/joshua.png' slot='img'>
    <blockquote slot='text'>Lorem ipsum dolor sit amet.</blockquote>
    <cite slot='author'>John Bin</cite>
  </x-carousel-item>
  <x-carousel-item>
    <img src='img/mike.png' slot='img'>
    <blockquote slot='text'>Lorem ipsum dolor sit amet, consectetur.</blockquote>
    <cite slot='author'>Mike Bin</cite>
  </x-carousel-item>
</x-carousel>
```

#### 3. `<x-chart>`

`<x-chart>` is a custom element, that draw pie chart.

`<x-chart>` has attributes:
- `percent` - percentage of the circle, that must be filled.
- `stroke-width` - thickness of the stroke.

If you want customize this element, you can use css custom properties:
- `--chart-full-color-stroke` - border color, that does not corresponds to the percentage.
- `--chart-color-stroke` - border color, that corresponds to the percentage.
- `--chart-color-fill` - color of area inside circle.
- `--chart-title-color` - color of text under circle.
- `--chart-percent-color` - color of text inside circle.
- `--chart-title-margin-top` - indentation between the text under the circle and bottom of circle.

***Example usage:***
```
<x-chart stroke-width='12' percent='90%'>Graphic design</x-chart>
<x-chart stroke-width='8' percent='75%'></x-chart>
<x-chart percent='5%'></x-chart>
```


### Demo

If you want see, how components look like, click [this link](https://kanastasiya.github.io/Web_components/)
