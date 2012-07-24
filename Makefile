node-test:
	./node_modules/.bin/tap --stderr ./test

test:
	./node_modules/.bin/testem \
		--file testem.json \
		--debuglog testem.log \
		--debug 2> testem.err

build-example:
	browserify example/example.js -o example/bundle.js

example:
	google-chrome example/index.html

.PHONY: test example