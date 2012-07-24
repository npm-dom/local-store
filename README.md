# local-store [![build status][1]][2]

A localStorage based store with namespacing

## Example

    var store = require("local-store")
        , assert = require("assert")

    store.set("foo", "bar")

    assert.equal(store.get("foo"), "bar")

    // cleanup
    store.delete("foo")

## Example name spaced

    var createStore = require("local-store").createStore
        , store = createStore("my-unique-namespace")

    store.set("foo", {
        json: "works too"
    })

    assert.deepEqual(store.get("foo"), {
        json: "works too"
    })

## Installation

`npm install local-store`

## Tests

`make test`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/local-store.png
  [2]: http://travis-ci.org/Colingo/local-store