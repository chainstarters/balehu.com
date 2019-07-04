# balehu.com product website

This project uses [Blendid](https://github.com/topmonks/blendid) stack.

## Local development

Checkout repository

```
git clone git@github.com:balehu/balehu.com.git
cd balehu.com
nvm use
```

Install dependencies

```
yarn install
```

Start local development with following command:

```
yarn blendid
```

## Production build

Build website to `/public` folder:

```
yarn blendid build
```