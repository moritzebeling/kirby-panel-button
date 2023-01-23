# Kirby Panel Button

<img width="100%" height="auto" alt="Kirby CMS button field to open URLs in a new tab or trigger webhooks" src="screenshot.png" />

Custom Kirby Panel field, that displays a button that can be used to either open a URL in a new tab or to trigger some url or webhook and wait for success or error. This can be very helpful, when the you have content that can be viewed or edited on some external service or domain.

## Installation

```
composer require moritzebeling/kirby-panel-button
composer update moritzebeling/kirby-panel-button
```

```
git clone https://github.com/moritzebeling/kirby-panel-button site/plugins/kirby-panel-button
```

If your plugin requires this plugin:
```bash
cd site/plugins/your-plugin
composer require moritzebeling/kirby-panel-button
# if you’re in an existing kirby installation
cd ../../..
composer update
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

## Development

```
npm run dev
```

## 🚧 Work in progress
This plugin comes without any warranty and was not widely tested. Use it at your own risk. If you encounter any problems or have ideas for future development, please submit an issue or pull request.

**Ideas for future development**

- [ ] Add multilang support
- [ ] Refactor and simplify yml field configuration
- [ ] Add a buttons section that allows to add some text and multiple buttons
- [ ] Option to display result in dialog popup