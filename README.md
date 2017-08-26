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

`<x-navigation-item>` has 3 attributes:

- `slot` - required helper, that always must be equal `item`.
- `value` - anchor name to navigation item (without `#`). *For example, if `value = 'contacts'`, than `<a href='#contacts'>`*.
- `selected` - is showing, which item is chosen now. If this attribute is not specified for any item, the first item will be selected.

If you want customize this element, you can use CSS Custom Properties:
1. `x-navigation`:

- `--nav-mobile-top` -         (default = 0)
- `--nav-mobile-right` -       (default = initial)
- `--nav-mobile-bottom` -      (default = initial)
- `--nav-mobile-left` -        (default = 0)
- `--nav-toggle-margins` -     (default = 0 auto 0 0)
- `--nav-mobile-min-width` -   (default = 0)
- `--nav-mobile-bg` -          (default = #fff)
- `--nav-toggle-width` -       (default = 30px)
- `--nav-toggle-color` -       (default = #95e1d3)
- `--nav-toggle-focus-color` - (default = #95e1d3)
- `--nav-toggle-line-height` - (default = 3px)

2. `x-navigation-item`:

- `--nav-font-color` -           (default = #000)
- `--nav-current-color` -        (default = #95e1d3)
- `--nav-current-border-width` - (default = 3px)
- `--nav-hover-color` -          (default = #95e1d3)
- `--nav-mobile-font-color` -    (default = #000)
- `--nav-mobile-hover-color` -   (default = #95e1d3)
- `--nav-mobile-current-color` - (default = #95e1d3)

***Example usage:***
```
<x-navigation>
  <x-navigation-item value='navigation' selected>About</x-navigation-item>
  <x-navigation-item value='accordion'>Services</x-navigation-item>
  <x-navigation-item value='carousel'>Contacts</x-navigation-item>
</x-navigation>
```

#### 2. `<x-accordion>`

`<x-accordion>` is a custom element that contains list of accordion items - `<x-accordion-item>` (another custom elements). Only one items in list can be opened at the same time.

`<x-accordion-item>` 4 attributes:

- `slot` - helper, that always must be equal `item` (required).
- `title` - title of the accordions item (required).
- `icon` - icon of the accordions item (optional).
- `selected` - is showing, which item is chosen (open) now. Optional, if this attribute is not specified for any item, the first item will be selected.

Text of accordions item you must enter as a value of tag <x-accordion-item> (between opening and closing tags).

If you want customize this element, you can use CSS Custom Properties for `x-accordion-item`:

- `--accordion-header-bg` -              (default = #fff)
- `--accordion-header-open-bg -          (default = #fff)
- `--accordion-details-bg -              (default = #fff)
- `--accordion-header-color -            (default = inherit)
- `--accordion-header-open-color -       (default = inherit)
- `--accordion-text-color -              (default = #999)
- `--accordion-text-max-height -         (default = 100px)
- `--accordion-img-size -                (default = 30px)
- `--accordion-arrow-color -             (default = #ccc)
- `--accordion-arrow-size -              (default = 10px)
- `--accordion-border-color -            (default = #e5e5e5)
- `--accordion-scrollbar-width -         (default = 10px)
- `--accordion-scrollbar-thumb-color -   (default = #999)
- `--accordion-scrollbar-track-color -   (default = #eee)
- `--accordion-scrollbar-padding-right - (default = 8px)
- `--accordion-header-margin-bottom -    (default = 10px)

***Example usage:***
```
 x-accordion
  x-accordion-item(
    slot='item',
    title='Photography',
    icon='img/photo.svg',
    selected
  ) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  x-accordion-item(
    slot='item',
    title='Web Design',
    icon='img/design.svg'
  ) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```

#### 3. `<x-carousel>`

`<x-carousel>` is a custom element that contains list of accordion items - `<x-carousel-item>` (another custom elements).

`<x-carousel-item>` 4 attributes:

- `slot` - helper, that always must be equal `item` (required).
- `author` - author of the text, that contains at carousels item (required).
- `icon` - icon, that contains at carousels item (optional).
- `selected` - is showing, which item is chosen (open) now. Optionsl, if this attribute is not specified for any item, the first item will be selected.

Text of carousels item you must enter as a value of tag <x-carousel-item> (between opening and closing tags).

If you want customize this element, you can use CSS Custom Properties:
1. `x-carousel`:

- `--carousel-bg -                  (default = transparent)
- `--carousel-arrow-size -          (default = 15px)
- `--carousel-arrow-color -         (default = #ccc)
- `--carousel-arrow-outline-color - (default = #95e1d3)

2. `x-carousel-item`:

- `--carousel-padding-vertical` -        (default = 0)
- `--carousel-img-size -                 (default = 120px)
- `--carousel-blockquote-color -         (default = inherit)
- `--carousel-blockquote-style -         (default = italic)
- `--carousel-blockquote-min-height -    (default = 60px)
- `--carousel-blockquote-max-height -    (default = 100px)
- `--carousel-blockquote-margin-bottom - (default = 20px)
- `--carousel-cite-font-family -         (default = inherit)
- `--carousel-cite-color -               (default = inherit)
- `--carousel-cite-line-width -          (default = 3em)
- `--carousel-cite-line-color -          (default = #95e1d3)
- `--carousel-cite-text-align -          (default = left)
- `--carousel-margin-horizontal -        (default = 75px)
- `--carousel-scrollbar-width -          (default = 5px)
- `--carousel-scrollbar-thumb-color -    (default = #999)
- `--carousel-scrollbar-track-color -    (default = #eee)
- `--carousel-scrollbar-padding-right -  (default = 8px)


***Example usage:***
```
x-carousel
  x-carousel-item(
    slot='item',
    author='Joshua Earle',
    icon='img/joshua.png'
  ) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
  x-carousel-item(
    slot='item',
    author='Mike Bin',
    icon='img/mike.png',
    selected
  ) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
```

#### 3. `<x-chart>`

`<x-chart>` is a custom element, that draw pie chart.

`<x-chart>` has attributes:
- `percent` - percentage of the circle, that must be filled (required).
- `stroke-width` - thickness of the stroke. Optional, if this attribute is not specified, strokes width will be equal `10px`.

If you want customize this element, you can use CSS Custom Properties:
- `--chart-min-size`          - min charts width and height (default = 10em)
- `--chart-max-size`          - max charts width and height (default = 20em)
- `--chart-color-fill`        - color of area inside chart (default = transparent)
- `--chart-full-color-stroke` - border color, that does not corresponds to the percentage (default = #eee)
- `--chart-color-stroke`      - border color, that corresponds to the percentage (default = #95e1d3)
- `--chart-percent-color`     - color of text inside circle (default = #666)
- `--chart-title-color`       - color of text under circle (default = #95e1d3)
- `--chart-title-margin-top`  - indentation between the text under the circle (default = 0)

***Example usage:***
```
x-chart(percent='9%') Web design
x-chart(percent='21%')
x-chart(stroke-width='12',percent='35%') HTML / CSS
```


### Demo

If you want see, how components look like, click [this link](https://kanastasiya.github.io/Web_components/)
