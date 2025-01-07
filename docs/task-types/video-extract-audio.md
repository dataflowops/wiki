---
title: Video / Extract Audio
slug: video-extract-audio
---

# Extract Audio from Video

Workflow task type to extract the audio from a video.

# Definition

```json
{
  "specification": {
    "type": "Video.ExtractAudio",
    "category": "Video",
    "description": "Extract the audio from a video",
    "inputs": [
      {
        "name": "video",
        "type": "file",
        "required": true,
        "description": "The video content to extract the audio from",
        "example": "<file>"
      }
    ],
    "outputs": [
      {
        "name": "audio",
        "type": "file",
        "default": true,
        "description": "The extracted audio content.",
        "example": "<file>"
      }
    ]
  }
}
```

## Inputs

- `video`: The video content to extract the audio from.

## Outputs

- `audio`: The extracted audio content.

# Example Usage

```json
{
  "id": "extract_audio",
  "type": "Video.ExtractAudio",
  "inputs": {
    "video": "{{inputs.video}}"
  }
}
```
