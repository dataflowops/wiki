---
slug: workflow-to-download-and-transcribe-youtube-videos-via-api
title: Workflow to Download and Transcribe YouTube Videos via API
authors: [kenanbek]
tags:
  [
    workflows,
    ai-integration,
    data-flow,
    etl-processes,
    app-integration,
    no-code-ai,
    ai-agents,
    integrations,
    use-cases,
  ]
---

Create an automated workflow to download and transcribe YouTube videos via DataFlow Platform's API. This tutorial demonstrates building and executing workflows as standalone AI agents accessible via API or web interface.

<!-- truncate -->

## Workflow

For this workflow, we need to have the following automation steps:

1. Accept a YouTube video URL as input
2. Download a YouTube video by its URL
3. Extract the video's audio
4. Use a cloud AI service to transcribe the audio
5. Return the transcription as a response

DataFlow Platform uses task types to implement workflows. We need the following task types to implement this workflow:

- **Youtube Downloader**: To download the YouTube video
- **Extract Audio from Video**: To extract the video's audio
- **Call AI Service**: To transcribe the video (OpenAI Whisper)

To have this automation via the platform, we need first to create a workflow unit with all the tasks, and connect these tasks.

## Create a Workflow via API

Here is the initial version of the workflow defined in JSON format:

```json
{
  "name": "YouTube Video Transcription Workflow using Speech-to-Text AI model",
  "description": "Downloads a YouTube video, extracts audio, transcribes it using OpenAI's Whisper model, and returns the transcription text.",
  "input": [
    {
      "name": "youtube_url",
      "type": "string",
      "description": "The URL of the YouTube video to transcribe."
    }
  ],
  "tasks": [
    {
      "ref": "download_video",
      "type": "YouTube.Download",
      "input": {
        "video_url": "{{input.youtube_url}}"
      }
    },
    {
      "ref": "extract_audio",
      "type": "Video.ExtractAudio",
      "input": {
        "video": "{{refs.download_video.output.video}}"
      }
    },
    {
      "ref": "transcribe_audio",
      "type": "OpenAI.Audio.Transcribe",
      "input": {
        "file": "{{refs.extract_audio.output.audio}}",
        "model": "whisper-1"
      }
    }
  ],
  "outputs": [
    {
      "name": "transcription_text",
      "type": "string",
      "value": "{{refs.transcribe_audio.output.text}}",
      "description": "The transcribed text of the YouTube video's audio."
    }
  ]
}
```

## Create a Workflow

To create a workflow, you can use the following command:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d @workflow.json \
  https://api.dataflow.wiki/workflows
```

Save the workflow ID, we will need it to execute the workflow.

## Execute the Workflow

To execute the workflow, you need to send a POST request to the `/workflows/execute` endpoint with the workflow ID and the input for the workflow. Since this workflow uses OpenAI's Whisper model, you must include your OpenAI API key in the request header.

```json
{
  "workflowId": "<WORKFLOW_ID>",
  "input": {
    "youtube_url": "https://www.youtube.com/watch?v=00000000000"
  }
}
```

Execute the workflow by sending a POST request to the `/workflows/execute` endpoint:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-OpenAI-Key: your_openai_api_key" \
  -d @execute_workflow.json \
  https://api.dataflow.wiki/workflows/execute
```

## Extend

- Provide input and output language options
- Provide a way to save the transcription to a remote file storage
