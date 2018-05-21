# @zendeskgarden/react-tags [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tags.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tags) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/tags&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/tags) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to tags in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tags

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tag, Avatar, Close } from '@zendeskgarden/react-tags';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tag pill>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Default tag with avatar
    <Close onClick={() => alert('remove tag')} />
  </Tag>
</ThemeProvider>;
```