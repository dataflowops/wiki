---
title: Youtube / Download
slug: youtube-download
---

# Download YouTube Video

Workflow task type to download a YouTube video by its URL.

## Inputs

- `Url`: The URL of the YouTube video to download.

## Outputs

- `Video`: The video object.

# Example Usage

```json
{
  "name": "DownloadVideo",
  "type": "YouTube.Download",
  "inputs": {
    "Url": "https://www.youtube.com/watch?v=00000000000"
  }
}
```

# Specification

```json
{
  "specification": {
    "type": "YouTube.Download",
    "category": "YouTube",
    "description": "Download a video from YouTube by its URL",
    "inputs": [
      {
        "name": "Url",
        "type": "string",
        "required": true,
        "description": "The URL of the YouTube video to download",
        "example": "https://www.youtube.com/watch?v=00000000000"
      }
    ],
    "outputs": [
      {
        "name": "Video",
        "type": "file",
        "default": true,
        "description": "The downloaded video content",
        "example": "<<file>>"
      }
    ]
  }
}
```
