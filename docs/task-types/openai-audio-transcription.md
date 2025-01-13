---
title: OpenAI / Audio / Transcription
slug: openai-audio-transcription
---

# OpenAI Whisper

Workflow task type to call OpenAI's Audio Transcription API (speech-to-text model).

## Inputs

- `file`: The audio file to transcribe.
- `model`: The model to use for transcription.
- `language`: The language of the audio file. Providing language will improve the accuracy of the transcription. Must be in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.
- `prompt`: Optional prompt to guide the model's style or continue a previous audio segment. Should match the language of the audio file.
- `response_format`: The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json` or `vtt`.
- `temperature`: The temperature to use for the model.

## Outputs

- `text`: The transcribed text.

# Example Usage

```json
{
  "name": "TranscribeAudio",
  "type": "OpenAI.Audio.Transcription",
  "inputs": {
    "file": "{{Inputs.File}}",
    "model": "whisper-1",
    "language": "en",
    "prompt": "The audio is a conversation between two people",
    "response_format": "text",
    "temperature": 0.2
  }
}
```

This example assumes that the workflow has an input named `File` that contains an audio file.

# Specification

```json
{
  "specification": {
    "type": "OpenAI.Audio.Transcription",
    "category": "AI",
    "description": "Call OpenAI's Whisper model to transcribe the audio",
    "inputs": [
      {
        "name": "File",
        "type": "file",
        "required": true,
        "description": "The audio file to transcribe",
        "example": "<<file>>"
      },
      {
        "name": "Model",
        "type": "string",
        "required": true,
        "default": "whisper-1",
        "description": "The model to use for transcription",
        "example": "whisper-1"
      },
      {
        "name": "Language",
        "type": "string",
        "required": false,
        "description": "The language of the audio file. Providing language will improve the accuracy of the transcription",
        "example": "en"
      },
      {
        "name": "Prompt",
        "type": "string",
        "required": false,
        "description": "Optional prompt to guide the model's style or continue a previous audio segment. Should match the language of the audio file",
        "example": "The audio is a conversation between two people"
      },
      {
        "name": "ResponseFormat",
        "type": "string",
        "required": false,
        "description": "The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json` or `vtt`",
        "example": "text"
      },
      {
        "name": "Temperature",
        "type": "number",
        "required": false,
        "default": 0.0,
        "description": "The temperature to use for the model",
        "example": "0.0"
      }
    ],
    "outputs": [
      {
        "name": "Text",
        "type": "string",
        "default": true,
        "description": "The transcribed text",
        "example": "Hello, how are you?"
      }
    ]
  }
}
```
