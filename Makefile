start:
	npm start

# install node modules
i:
	rm -rf node_modules && npm i

# Production build
prod:
	npm run build

# Development build
dev: 
	npm run build:dev


# run unit test
t:
	npm test

# to create tar of node modules
tar:
	rm -rf _nm.tgz && tar -czf _nm.tgz node_modules

# clean node packages
clean:
	rm -rf node_modules
