# Kirby Panel Button Plugin

<img width="100%" height="auto" alt="Kirby CMS button field to open URLs in a new tab or trigger webhooks" src="screenshot.png" />

Custom Kirby Panel field, that displays a button that can be used to either open a URL in a new tab or to trigger some url or webhook and wait for success or error. This can be very helpful, when you have content that can be viewed or edited on some external service or domain.

## Installation

```bash
composer require moritzebeling/kirby-panel-button
composer update moritzebeling/kirby-panel-button
```

Or download/clone this repo into `site/plugins` of your Kirby project.

If you’re working on a plugin which requires this plugin:

```bash
cd site/plugins/your-plugin
composer require moritzebeling/kirby-panel-button
```

## Usage

```yml
myLinkButton:
  type: button
  label: Open URL in new tab
  text: Open # Button text
  url: "https://example.com/{{ page.slug }}"
  icon: edit
  open: true # open URL in new tab

myWebhookButton:
  type: button
  label: Refresh data
  text: Refresh
  url: /fetch-data
  theme: positive
  reload: true # trigger a page refresh on success to display updated data
```

## 🚧 Development

1. Install yourself a fresh Kirby StarterKit
2. `cd site/plugins`
3. `git clone` this repo
4. `cd` into this plugin folder

```
npm run dev
```

Roadmap
- [ ] Add multilang support
- [ ] Refactor and simplify yml field configuration
- [ ] Add a buttons section that allows to add some text and multiple buttons
- [ ] Option to display result in dialog popup

## ☕️ Support

If you like this plugin, I would be glad if you would invite me for a coffee: [PayPal](https://www.paypal.com/paypalme/cryptomunich)

If you have any ideas for further development or stumble upon any problems, please open an issue or PR. Thank you!

## Warranty

This plugin is work in progress and comes without any warranty. Use at your own risk.