---
title: Video / Extract Audio
slug: video-extract-audio
---

# Extract Audio from Video

Workflow task type to extract the audio from a video.

## Inputs

- `Video`: The video content to extract the audio from.

## Outputs

- `Audio`: The extracted audio content.

# Example Usage

```json
{
  "name": "ExtractAudio",
  "type": "Video.ExtractAudio",
  "inputs": {
    "Video": "{{Inputs.Video}}"
  }
}
```

This example assumes that the workflow has an input named `Video` that contains a video file.

# Specification

```json
{
  "specification": {
    "type": "Video.ExtractAudio",
    "category": "Video",
    "description": "Extract the audio from a video",
    "inputs": [
      {
        "name": "Video",
        "type": "file",
        "required": true,
        "description": "The video content to extract the audio from",
        "example": "<<video file>>"
      }
    ],
    "outputs": [
      {
        "name": "Audio",
        "type": "file",
        "default": true,
        "description": "The extracted audio content.",
        "example": "<<audio file>>"
      }
    ]
  }
}
```
