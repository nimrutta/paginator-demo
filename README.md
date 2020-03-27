# ipf-paginator

**A ReactJS component to render a pagination.**

By installing this component and writing only a little bit of CSS you can obtain this:

<img src="https://cloud.githubusercontent.com/assets/2084833/24840230/594e4ea4-1d1e-11e7-8b34-bde943b4793d.png" alt="Pagination demo 1" />

## Installation

Install `ipf-react-paginator` with [npm](https://www.npmjs.com/):

```
$ npm install ipf-react-paginator --save
```

## Demo

Clone the repository and move into:

```console
$ git clone git@github.com:jestrux/ipf-react-paginator.git
$ cd react-paginate
```

Install dependencies:

```console
$ npm install
```

Prepare the demo:

```console
$ make demo
```

Run the server:

```console
$ make serve
```

Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

## Props

| Name                     | Type       | Description                                                                                  |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- |
| `Data`              | `Array`   | **Required.** The total number of pages.                                                     |
| `pageRangeDisplayed`     | `Number`   | **Required.** The range of pages displayed.                                                  |
| `marginPagesDisplayed`   | `Number`   | **Required.** The number of pages to display for margins.                                    |
| `previousLabel`          | `Node`     | Label for the `previous` button.                                                             |
| `nextLabel`              | `Node`     | Label for the `next` button.                                                                 |
| `breakLabel`             | `Node`     | Label for ellipsis.                                                                          |
| `breakClassName`         | `String`   | The classname on tag `li` of the ellipsis element.                                           |
91
​
92
[1]: https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js
| `breakLinkClassName`     | `String`   | The classname on tag `a` of the ellipsis element.                                            |
| `onPageChange`           | `Function` | The method to call when a page is clicked. Exposes the current page object as an argument.   |
| `initialPage`            | `Number`   | The initial page selected.                                                                   |
| `forcePage`              | `Number`   | To override selected page with parent prop.                                                  |
| `disableInitialCallback` | `boolean`  | Disable `onPageChange` callback with initial page. Default: `false`                          |
| `containerClassName`     | `String`   | The classname of the pagination container.                                                   |
| `pageClassName`          | `String`   | The classname on tag `li` of each page element.                                              |
| `pageLinkClassName`      | `String`   | The classname on tag `a` of each page element.                                               |
| `activeClassName`        | `String`   | The classname for the active page.                                                           |
| `activeLinkClassName`    | `String`   | The classname on the active tag `a`.                                                         |
| `previousClassName`      | `String`   | The classname on tag `li` of the `previous` button.                                          |
| `nextClassName`          | `String`   | The classname on tag `li` of the `next` button.                                              |
| `previousLinkClassName`  | `String`   | The classname on tag `a` of the `previous` button.                                           |
| `nextLinkClassName`      | `String`   | The classname on tag `a` of the `next` button.                                               |
| `disabledClassName`      | `String`   | The classname for disabled `previous` and `next` buttons.                                    |
| `hrefBuilder`            | `Function` | The method is called to generate the `href` attribute value on tag `a` of each page element. |
| `extraAriaContext`       | `String`   | DEPRECATED: Extra context to add to the `aria-label` HTML attribute.                         |
| `ariaLabelBuilder`       | `Function` | The method is called to generate the `aria-label` attribute value on each page link          |

## Contribute

1. [Submit an issue](https://github.com/jestrux/ipf-react-paginator/issues)
2. Fork the repository
3. Create a dedicated branch (never ever work in `master`)
4. The first time, run command: `webpack` into the directory
5. Run `npm start`
6. Fix bugs or implement features
7. Always write tests

Run tests:

```console
$ make test
```
