# Kirby Panel Button

<img width="100%" height="auto" alt="Kirby CMS button field to open URLs in a new tab or trigger webhooks" src="screenshot.png" />

Custom Kirby Panel field, that displays a button that can be used to either open a URL in a new tab or to trigger some url or webhook and wait for success or error.

## 🚧 Work in progress

This plugin is work in progress and will propably change in the near future. Please use only at own risk. If you have ideas for improvement or encountered any problems, please let me know.

**To Do**

- [ ] Refresh page data after successfull trigger
- [ ] Add all field properties that make sense, e.g. `help`, ...
- [ ] Add multilang support

**Ideas for version 2**

- [ ] Add a buttons section that allows to add some text and multiple buttons

## Usage

```yml
myLinkButton:
  type: button
  label: Open URL in new tab
  text: Open
  url: https://example.com
  icon: edit
  open: true # open URL in new tab

myWebhookButton:
  type: button
  label: Refresh data
  text: Refresh
  url: /fetch-data
```

## Development

```
npm run dev
```

## License

MIT