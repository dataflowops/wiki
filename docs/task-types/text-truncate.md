---
sidebar_position: 1
title: Text / Truncate
slug: text-truncate
---

# Text Truncate

Workflow task type to truncate a text.

## Inputs

- `text`: The text to truncate (**required input**).
- `length`: The length to truncate the text to (**required input**).

## Outputs

- `truncated_text`: The truncated text (**default output**).

# Example Usage

```json
{
  "name": "truncate_text",
  "type": "text.truncate",
  "inputs": {
    "text": "Hello, World!",
    "length": 5
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "text.truncate",
    "category": "text",
    "description": "Truncate a text",
    "inputs": [
      {
        "name": "text",
        "type": "text",
        "required": true,
        "description": "The text to truncate",
        "example": "Hello, World!"
      },
      {
        "name": "length",
        "type": "number",
        "required": true,
        "description": "The length to truncate the text to",
        "example": 5
      }
    ],
    "outputs": [
      {
        "name": "truncated_text",
        "type": "text",
        "default": true,
        "description": "The truncated text",
        "example": "Hello..."
      }
    ]
  }
}
```
