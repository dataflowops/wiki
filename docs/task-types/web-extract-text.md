---
sidebar_position: 1
title: Web / Extract Text
slug: web-extract-text
---

# Extract Text from Web Page

Workflow task type to extract text from a web page.

## Inputs

- `html`: The HTML content of the web page (**required input**).

## Outputs

- `text`: The extracted text from the web page (**default output**).

# Example Usage

```json
{
  "name": "extract_text_from_web_page",
  "type": "web.extract_text",
  "inputs": {
    "html": "<html><body><h1>Hello, World!</h1></body></html>"
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "web.extract_text",
    "category": "web",
    "description": "Extract text from an HTML document",
    "inputs": [
      {
        "name": "html",
        "type": "text",
        "required": true,
        "description": "The HTML content of the web page",
        "example": "<html><body><h1>Hello, World!</h1></body></html>"
      }
    ],
    "outputs": [
      {
        "name": "text",
        "type": "text",
        "default": true,
        "description": "The extracted text from the HTML document",
        "example": "Hello, World!"
      }
    ]
  }
}
```
