# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at <https://github.com/spezifisch/svelte-template>.

It uses:

* typescript
* svelte
* vite
* tailwind + postcss
* jest
* eslint
* prettier
* pnpm

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit spezifisch/svelte-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/installation) installed.*

## Get started

Install the dependencies...

```bash
cd svelte-app
pnpm install
```

...then start [vite](https://vitejs.dev/):

```bash
pnpm dev
```

Navigate to [localhost:5173](http://localhost:5173). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `dev` command in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
pnpm build
```

You can run the newly built app with `pnpm preview`.