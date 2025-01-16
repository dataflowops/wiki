---
title: Youtube / Download
slug: youtube-download
---

# Download YouTube Video

Workflow task type to download a YouTube video by its URL.

## Inputs

- `url`: The URL of the YouTube video to download (**required input**).

## Outputs

- `video`: The downloaded video content (**default output**).

# Example Usage

```json
{
  "name": "download_video",
  "type": "youtube.download",
  "inputs": {
    "url": "https://www.youtube.com/watch?v=00000000000"
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "youtube.download",
    "category": "youtube",
    "description": "Download a video from YouTube by its URL",
    "inputs": [
      {
        "name": "url",
        "type": "text",
        "required": true,
        "description": "The URL of the YouTube video to download",
        "example": "https://www.youtube.com/watch?v=00000000000"
      }
    ],
    "outputs": [
      {
        "name": "video",
        "type": "file",
        "default": true,
        "description": "The downloaded video content",
        "example": "<<file>>"
      }
    ]
  }
}
```
