---
title: Tasks
sidebar_position: 3
---

# Tasks

Tasks are the main unit of work in the Data Flow Platform. They are the smallest units of work that can be executed in a workflow.

## Task Definition

A task definition is a JSON object that defines the task type. It contains the task type name, category, description, inputs, outputs, and other metadata.

An example of a task definition looks like this:

```json
{
  "name": "extract_audio",
  "type": "video.extract_audio",
  "inputs": [
    {
      "name": "video",
      "value": "{{inputs.video}}"
    }
  ]
}
```

This task is used to extract audio from a video. It takes a video as input and outputs the audio. Video input must be provided as part of the workflow execution context.

More explicit task definition for the same task looks like this:

```json
{
  "name": "extract_audio",
  "type": "video.extract_audio",
  "inputs": [
    {
      "name": "video",
      "value": "{{inputs.video}}"
    }
  ],
  "outputs": [
    {
      "name": "audio",
      "value": "{{outputs.audio}}"
    }
  ]
}
```

Here, we have explicitly defined the outputs of the task. But since the name `audio` is exactly the same as the task's **default** output name, we can omit it. It is only necessary if we want to rename the output. We will learn more about **default** output names in the next section.

In addition to the default output name, task definition also have **required** inputs. These are inputs that must be provided as part of the workflow execution context. In the example above, the `video` input is required. If it is not provided, the task will fail.

Every task documentation page contains list of inputs and outputs, as well as required inputs and default outputs.

### Task Specification

Task specification is a JSON object that defines the task type.

It specifies the task type name, category, description, inputs, outputs, and other metadata.

An example of a task specification looks like this:

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

Task specifications are used by the Data Flow Platform to validate the task definition. They also serve as a reference for the task type.

#### Task Input and Output Types

Task inputs and outputs are defined using the following types:

- `text`: A string.
- `number`: A number.
- `boolean`: A boolean value.
- `file`: A file.

#### Required Inputs

Required inputs are inputs that must be provided as part of the workflow execution context.

#### Default Outputs

Default outputs are passed to the next task in the workflow by default. If their name is the same as the task's output name, they can be omitted in the task definition.
