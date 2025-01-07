---
slug: workflow-to-download-and-transcribe-youtube-videos-via-api
title: Get YouTube Video Transcription with an API call
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

In this blog post, we will create an automated workflow to download and transcribe YouTube videos via DataFlow Platform's API. This tutorial demonstrates building and executing a workflow as standalone automation process accessible via API or web interface.

<!-- truncate -->

## Workflow

The main execution unit of the DataFlow Platform is a workflow. A workflow is a sequence of tasks that are executed in order.

For this workflow, we need to have the following automation steps:

1. Receive a YouTube video URL as an input.
2. Download a YouTube video by its URL.
3. Extract the video's audio.
4. Use a cloud AI service to transcribe the audio.
5. Return the transcription as a response.

Unit of work in DataFlow Platform is a task. A task is a single unit of work that can be executed in a workflow. With the task types, we can implement the automation steps.

We need the following task types to implement this workflow:

- **Youtube Downloader**: To download the YouTube video
- **Extract Audio from Video**: To extract the video's audio
- **Call AI Service**: To transcribe the video (OpenAI Whisper)

To have this automation via the platform, we need first to create a workflow unit with all the tasks, and connect these tasks.

## Workflow to Automate the Process

Here is the initial version of the workflow defined in JSON format:

```json
{
  "name": "YouTube Video Transcription Workflow using Speech-to-Text AI model",
  "description": "Downloads a YouTube video, extracts audio, transcribes it using OpenAI's Whisper model, and returns the transcription text.",
  "inputs": [
    {
      "name": "youtube_url",
      "type": "string",
      "description": "The URL of the YouTube video to transcribe."
    }
  ],
  "tasks": [
    {
      "name": "download_video",
      "type": "YouTube.Download",
      "inputs": {
        "video_url": "{{inputs.youtube_url}}"
      }
    },
    {
      "name": "extract_audio",
      "type": "Video.ExtractAudio",
      "inputs": {
        "video": "{{tasks.download_video.outputs.video}}"
      }
    },
    {
      "name": "transcribe_audio",
      "type": "OpenAI.Audio.Transcribe",
      "inputs": {
        "file": "{{tasks.extract_audio.outputs.audio}}",
        "model": "whisper-1"
      }
    }
  ],
  "outputs": [
    {
      "name": "transcription_text",
      "type": "string",
      "value": "{{tasks.transcribe_audio.outputs.text}}",
      "description": "The transcribed text of the YouTube video's audio."
    }
  ]
}
```

Task

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

To execute the workflow, you need to send a POST request to the `/workflows/{workflow_id}/execute` endpoint with the input data for the workflow.

**API Request**:

```
POST /workflows/{workflow_id}/execute

Headers:
- Content-Type: application/json
- X-OpenAI-Key: your_openai_api_key
```

**Request Body**:

```json
{
  "inputs": {
    "youtube_url": "https://www.youtube.com/watch?v=00000000000"
  }
}
```

The CURL version of the request would look like this:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-OpenAI-Key: your_openai_api_key" \
  -d '{"inputs": {"youtube_url": "https://www.youtube.com/watch?v=00000000000"}, "monitoring": {"webhook_url": "https://example.com/webhook"}}' \
  https://api.dataflow.wiki/workflows/execute
```

Since this workflow uses OpenAI's Whisper model, you must also include your OpenAI API key in the request header.

:::info

Data Flow Platform uses provided API keys only for the tasks that require them and does not store them.

:::

## Extend

- Provide input and output language options
- Provide a way to save the transcription to a remote file storage
