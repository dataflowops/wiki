---
sidebar_position: 1
---

# Data Flow Platform

## Overview

Documentation for Data Flow Platform.

- [Workflows](/docs/workflows)
- [Tasks](/docs/tasks)
- [Task Types](/docs/task-types)

## Getting Started

Data Flow Platform helps you build automated workflows that combine AI models, application integrations, and data processing tasks. Here's how to get started:

### 1. Create Your First Workflow

Workflows are the main execution unit of Data Flow Platform. They are the sequences of tasks that are executed in order.

For this example, we will create a simple workflow that takes a text input and converts it to speech.

Create a simple workflow by making a POST request to Data Flow Platform API:

**API Request**:

```bash
POST https://api.dataflow.wiki/workflows
```

**Request Body**:

```json
{
  "title": "Hello World Workflow",
  "description": "A simple text-to-speech workflow",
  "inputs": [
    {
      "name": "text",
      "type": "text",
      "description": "Text to convert to speech"
    }
  ],
  "tasks": [
    {
      "name": "text_to_speech",
      "type": "openai.audio.tts",
      "inputs": {
        "text": "{{inputs.text}}",
        "voice": "alloy"
      }
    }
  ],
  "outputs": [
    {
      "name": "audio",
      "type": "file",
      "value": "{{tasks.text_to_speech.outputs.audio}}"
    }
  ]
}
```

Each request is validated against the scheme. Tasks are validated with respect to the input and output types.

If the workflow is valid, `201 Created` response is returned with the `Workflow ID`.

**Response Body**:

```json
{
  "workflow_id": "wf-4g7h8j9k"
}
```

:::info

Created workflows are not executed. Returned `Workflow ID` is used to execute the workflow via the Workflow Execution API.

:::

### 2. Execute Your Workflow

Users can start the workflow execution using `Workflow ID`. One workflow can be executed multiple times and each execution will be assigned a unique `Workflow Execution ID`.

To start the workflow execution, users need to send a request to the following API endpoint:

**API Request**:

```bash
POST /workflows/{{workflow-id}}/executions
```

**Request Body**:

Most workflows require some input data. Users can provide the input data in the request body.

```json
{
  "inputs": {
    "webpage_url": "https://example.com"
  }
}
```

Before the workflow execution starts, the input data is validated against the workflow input schema. If the input data is invalid, the execution will be rejected with the `400 Bad Request` response.

Request to the execution API will queue the workflow execution and return a `Workflow Execution ID`.

**Response Body**:

```json
{
  "workflow_execution_id": "we-1a2b3c4d",
  "workflow_id": "wf-4g7h8j9k",
  "workflow_version": 1,
  "status": "PENDING"
}
```

:::info

Each execution request creates a new snapshot of the workflow. This snapshot is used to execute the workflow. This prevents the workflow from being modified while it is being executed. Workflow Version is included in the response to indicate the version of the workflow that is being executed.

:::

### 3. Get Execution Status

Users can get the execution status using the following API endpoint:

**API Request**:

```
GET /workflows/{{workflow-id}}/executions/{{workflow-execution-id}}
```

**Response Body**:

```json
{
  "workflow_execution_id": "we-1a2b3c4d",
  "workflow_id": "wf-4g7h8j9k",
  "workflow_version": 1,
  "status": "RUNNING",
  "tasks": [
    {
      "name": "download_webpage",
      "status": "RUNNING"
    },
    {
      "name": "extract_text",
      "status": "PENDING"
    },
    {
      "name": "summarize_text",
      "status": "PENDING"
    }
  ]
}
```

### 4. List Executions

Users can list all executions for a workflow using the following API endpoint:

**API Request**:

```bash
GET /workflows/{{workflow-id}}/executions
```

**Response Body**:

```json
{
  "executions": [
    {
      "workflow_execution_id": "we-1a2b3c4d",
      "status": "RUNNING",
      "created_at": "2024-01-01T00:00:00Z",
      "started_at": "2024-01-01T00:00:00Z",
      "completed_at": "2024-01-01T00:00:00Z"
    },
    {
      "workflow_execution_id": "we-7p8q9r0s",
      "status": "COMPLETED",
      "created_at": "2024-01-01T00:00:00Z",
      "started_at": "2024-01-01T00:00:00Z",
      "completed_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 5. Monitor Workflow Execution

It is possible to monitor the workflow execution using the `Workflow Execution ID`. Currently, we support monitoring via the `Workflow Execution ID` in the UI and via the webhook. In the future, we plan to provide more advanced monitoring capabilities such as monitoring the execution progress, monitoring the execution logs, and monitoring the execution metrics.

#### Webhook

Users can subscribe to the webhook to get the execution status updates.

**API Request**:

```bash
POST /workflows/{{workflow-id}}/executions
```

**Request Body**:

```json
{
  "inputs": {
    "webpage_url": "https://example.com"
  },
  "monitoring": {
    "webhook": "https://example.com/webhook"
  }
}
```

Data Flow Platform will send the execution status updates to the provided webhook URL.

## Next Steps

- Learn more about [Workflows](/docs/workflows) and how to create complex automation
- Read our [Tasks](/docs/tasks) documentation to understand task configuration
- Explore available [Task Types](/docs/task-types) to build your solutions
- Check out example workflows in our [Blog](/blog) section
