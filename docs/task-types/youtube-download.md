---
title: Youtube / Download
slug: youtube-download
---

# Download YouTube Video

Workflow task type to download a YouTube video by its URL.

# Definition

```json
{
  "specification": {
    "type": "YouTube.Download",
    "category": "YouTube",
    "description": "Download a video from YouTube by its URL",
    "input": [
      {
        "name": "youtube_url",
        "type": "string",
        "required": true,
        "description": "The URL of the YouTube video to download",
        "example": "https://www.youtube.com/watch?v=00000000000"
      }
    ],
    "output": [
      {
        "name": "video",
        "type": "file",
        "default": true,
        "description": "The downloaded video content",
        "example": "{file}"
      }
    ]
  }
}
```

## Inputs

- `url`: The URL of the YouTube video to download.

## Outputs

- `video`: The video object.

# Example Usage

```json
{
  "id": "download_video",
  "type": "YouTube.Downloader",
  "input": {
    "youtube_url": "{{workflow.input.youtube_url}}"
  }
}
```
