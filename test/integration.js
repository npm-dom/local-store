var test = require("testling")
    , localStore = require("..")
    , createStore = localStore.createStore
    , LocalStorage = typeof window !== "undefined" && window.localStorage

if (LocalStorage) {
    LocalStorage.clear()
}

test("can set / get on store", function (t) {
    var store = createStore("test one")

    store.set("foobar", "baz")

    t.equal(store.get("foobar"), "baz")

    t.end()
})

test("can delete", function (t) {
    var store = createStore("test two")

    store.set("foobar", "baz")

    store.delete("foobar")

    t.equal(store.get("foobar"), null)

    t.end()
})

test("prefixes are different store", function (t) {
    var storeOne = createStore("prefix one")
        , storeTwo = createStore("prefix two")

    storeOne.set("foo", "bar")
    storeTwo.set("foo", "baz")

    t.equal(storeOne.get("foo"), "bar")

    t.end()
})

test("prefixes persist", function (t) {
    var store = createStore("prefix one")

    t.equal(store.get("foo"), "bar")

    t.end()
})