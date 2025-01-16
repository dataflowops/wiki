---
title: OpenAI / Audio / Transcription
slug: openai-audio-transcription
---

# OpenAI Whisper

Workflow task type to call OpenAI's Audio Transcription API (speech-to-text model).

## Inputs

- `file`: The audio file to transcribe (**required input**).
- `model`: The model to use for transcription (**required input**).
- `language`: The language of the audio file. Providing language will improve the accuracy of the transcription. Must be in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.
- `prompt`: Optional prompt to guide the model's style or continue a previous audio segment. Should match the language of the audio file.
- `response_format`: The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json` or `vtt`.
- `temperature`: The temperature to use for the model.

## Outputs

- `text`: The transcribed text (**default output**).

# Example Usage

```json
{
  "name": "transcribe_audio",
  "type": "openai.audio.transcription",
  "inputs": {
    "file": "{{inputs.file}}",
    "model": "whisper-1",
    "language": "en",
    "prompt": "The audio is a conversation between two people",
    "response_format": "text",
    "temperature": 0.2
  }
}
```

This example assumes that the workflow has an input named `file` that contains an audio file.

# Specification

```json
{
  "specification": {
    "type": "openai.audio.transcription",
    "category": "ai",
    "description": "Call OpenAI's Whisper model to transcribe the audio",
    "inputs": [
      {
        "name": "file",
        "type": "file",
        "required": true,
        "description": "The audio file to transcribe",
        "example": "<<file>>"
      },
      {
        "name": "model",
        "type": "text",
        "required": true,
        "default": "whisper-1",
        "description": "The model to use for transcription",
        "example": "whisper-1"
      },
      {
        "name": "language",
        "type": "text",
        "required": false,
        "description": "The language of the audio file. Providing language will improve the accuracy of the transcription",
        "example": "en"
      },
      {
        "name": "prompt",
        "type": "text",
        "required": false,
        "description": "Optional prompt to guide the model's style or continue a previous audio segment. Should match the language of the audio file",
        "example": "The audio is a conversation between two people"
      },
      {
        "name": "response_format",
        "type": "text",
        "required": false,
        "description": "The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json` or `vtt`",
        "example": "text"
      },
      {
        "name": "temperature",
        "type": "number",
        "required": false,
        "default": 0.0,
        "description": "The temperature to use for the model",
        "example": "0.0"
      }
    ],
    "outputs": [
      {
        "name": "text",
        "type": "text",
        "default": true,
        "description": "The transcribed text",
        "example": "Hello, how are you?"
      }
    ]
  }
}
```
