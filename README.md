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

We are serving two sites in this monorepo.

To start local development for www.balehu.com use:

```
yarn start:www.balehu.com
```
To start local development for www.gump.com use:

```
yarn start:www.gump.com
```

## Production build

To build www.balehu.com website to `/public` folder:

```
yarn build:www.balehu.com
```

To build www.gump.com website to `/public` folder:

```
yarn build:www.gump.com
```