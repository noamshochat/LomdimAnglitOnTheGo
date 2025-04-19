# English-Hebrew Word Cards

A simple and interactive web application that displays English words on cards and reveals their Hebrew translations when clicked.

## How to Use

1. Start the application:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Click on any card to reveal its Hebrew translation. Click again to show the English word.

## Modifying Word Pairs

To add, remove, or modify word pairs:

1. Open `src/data/words.json`
2. Edit the `wordPairs` array. Each word pair should follow this format:
```json
{
  "english": "Your English Word",
  "hebrew": "המילה בעברית"
}
```
3. Save the file - the website will automatically update with your changes.

Example:
```json
{
  "wordPairs": [
    { "english": "Hello", "hebrew": "שלום" },
    { "english": "New Word", "hebrew": "מילה חדשה" }
  ]
}
```

## Features

- Responsive design that works on all devices
- Smooth card flip animations
- RTL support for Hebrew text
- Easy word pair customization through JSON file
- Modern UI with hover effects 