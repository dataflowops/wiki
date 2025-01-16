---
title: Video / Extract Audio
slug: video-extract-audio
---

# Extract Audio from Video

Workflow task type to extract the audio from a video.

## Inputs

- `video`: The video content to extract the audio from (**required input**).

## Outputs

- `audio`: The extracted audio content (**default output**).

# Example Usage

```json
{
  "name": "extract_audio",
  "type": "video.extract_audio",
  "inputs": {
    "video": "{{inputs.video}}"
  }
}
```

This example assumes that the workflow has an input named `video` that contains a video file.

# Specification

```json
{
  "specification": {
    "type": "video.extract_audio",
    "category": "video",
    "description": "Extract the audio from a video",
    "inputs": [
      {
        "name": "video",
        "type": "file",
        "required": true,
        "description": "The video content to extract the audio from",
        "example": "<<video file>>"
      }
    ],
    "outputs": [
      {
        "name": "audio",
        "type": "file",
        "default": true,
        "description": "The extracted audio content.",
        "example": "<<audio file>>"
      }
    ]
  }
}
```
