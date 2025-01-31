---
sidebar_position: 1
title: Text / Size
slug: text-size
---

# Text Size

Workflow task type to get the size of a text.

## Inputs

- `text`: The text to get the size of (**required input**).

## Outputs

- `size`: The size of the text (**default output**).

# Example Usage

```json
{
  "name": "get_text_size",
  "type": "text.size",
  "inputs": {
    "text": "Hello, World!"
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "text.size",
    "category": "text",
    "description": "Get the size of a text",
    "inputs": [
      {
        "name": "text",
        "type": "text",
        "required": true,
        "description": "The text to get the size of",
        "example": "Hello, World!"
      }
    ],
    "outputs": [
      {
        "name": "size",
        "type": "number",
        "default": true,
        "description": "The size of the text",
        "example": 11
      }
    ]
  }
}
```
