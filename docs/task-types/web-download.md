---
sidebar_position: 1
title: Web / Download
slug: web-download
---

# Download Web Page

Workflow task type to download a web page by its URL.

## Inputs

- `url`: The URL of the web page to download (**required input**).

## Outputs

- `html`: The HTML content of the web page (**default output**).

# Example Usage

```json
{
  "name": "download_web_page",
  "type": "web.download",
  "inputs": {
    "url": "https://www.google.com"
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "web.download",
    "category": "web",
    "description": "Download a web page by its URL",
    "inputs": [
      {
        "name": "url",
        "type": "text",
        "required": true,
        "description": "The URL of the web page to download",
        "example": "https://www.google.com"
      }
    ],
    "outputs": [
      {
        "name": "html",
        "type": "text",
        "default": true,
        "description": "The HTML content of the web page",
        "example": "<html><body><h1>Hello, World!</h1></body></html>"
      }
    ]
  }
}
```
