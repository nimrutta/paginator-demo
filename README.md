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

Run the server:

```console
$ npm run start
```

Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

## Props

| Name                     | Type       | Description                                                                                  |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- |
| `Data`              | `Array`   | **Required.** All items to be displayed.                                                     |
| `currentPage`     | `Number`   |  Number rpesenting page that is currentlly displayed.                                                  |
| `totalCount`   | `Number`   | The number of all items to be displayed.                                    |
| `asTable`          | `Boolean`     | Indicates whether data should be displayed in a table or not.                                                             |
| `renderCustomRow`              | `Function`     | The method to call when custom rendering rows.                                                                 |

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
