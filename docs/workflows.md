---
title: Workflows
sidebar_position: 2
---

# Workflows

Workflows are the main execution unit of the Data Flow Platform. They are the sequences of tasks that are executed in order.

## Workflow

Users can create workflows via the UI or API.

Workflow creation and execution are two separate steps. Workflows can be created and modified independently.

:::info
For this documentation, we will use the following use-case:

We want to create a workflow to download a webpage, extract the main content, summarize it using OpenAI's GPT model, and return the summary text.
:::

Example request looks like this:

**API Request**:

```
POST /workflows
```

**Request Body**:

```json
{
  "name": "Webpage Content Summarization Workflow using GPT AI model",
  "description": "Downloads a webpage, extracts main content, summarizes it using OpenAI's GPT model, and returns the summary text.",
  "input": [
    {
      "name": "webpage_url",
      "type": "string",
      "description": "The URL of the webpage to summarize."
    }
  ],
  "tasks": [
    {
      "ref": "download_webpage",
      "type": "Web.Download",
      "input": {
        "url": "{{input.webpage_url}}"
      }
    },
    {
      "ref": "extract_text",
      "type": "Web.ExtractText",
      "input": {
        "html_content": "{{refs.download_webpage.output.html_content}}"
      }
    },
    {
      "ref": "summarize_text",
      "type": "OpenAI.Text.Summarize",
      "input": {
        "text": "{{refs.extract_text.output.text}}",
        "model": "gpt-3.5-turbo",
        "parameters": {
          "max_tokens": 150,
          "temperature": 0.7
        }
      }
    }
  ],
  "output": [
    {
      "name": "summary_text",
      "type": "string",
      "value": "{{refs.summarize_text.output.summary}}",
      "description": "The summarized text of the webpage content."
    }
  ]
}
```

Each request is validated against the scheme. Tasks are validated with respect to the input and output types.

If the workflow is valid, `201 Created` response is returned with the `Workflow ID`.

**Response Body**:

```json
{
  "workflow_id": "wf-4g7h8j9k",
  "workflow_version": 1
}
```

:::info
Created workflows are not executed. Returned `Workflow ID` is used to execute the workflow with the separate API call.
:::

## Workflow Execution

Users can start the workflow execution using `Workflow ID`. One workflow can be executed multiple times and each execution will be assigned a unique `Execution ID`.

To start the workflow execution, users need to send the request to the following API endpoint:

**API Request**:

```
POST /workflows/{workflow_id}/execute
```

**Request Body**:

Most workflows require some input data. Users can provide the input data in the request body.

```json
{
  "input": {
    "webpage_url": "https://example.com"
  }
}
```

Before the workflow execution starts, the input data is validated against the workflow input schema. If the input data is invalid, the execution will be rejected with the `400 Bad Request` response.

Request to the execution API will queue the workflow execution and return the `Execution ID`.

**Response Body**:

```json
{
  "workflow_id": "wf-4g7h8j9k",
  "workflow_version": 1,
  "execution_id": "ex-1a2b3c4d",
  "status": "PENDING"
}
```

### Execution Status

Users can get the execution status using the following API endpoint:

**API Request**:

```
GET /workflows/{workflow_id}/executions/{execution_id}
```

**Response Body**:

```json
{
  "execution_id": "ex-1a2b3c4d",
  "workflow_id": "wf-4g7h8j9k",
  "workflow_version": 1,
  "status": "RUNNING",
  "tasks": [
    {
      "ref": "download_webpage",
      "status": "RUNNING"
    },
    {
      "ref": "extract_text",
      "status": "PENDING"
    },
    {
      "ref": "summarize_text",
      "status": "PENDING"
    }
  ]
}
```

### List Executions

Users can list all executions of a workflow using the following API endpoint:

**API Request**:

```
GET /workflows/{workflow_id}/executions
```

**Response Body**:

```json
{
  "executions": [
    {
      "execution_id": "ex-1a2b3c4d",
      "status": "RUNNING",
      "created_at": "2024-01-01T00:00:00Z",
      "started_at": "2024-01-01T00:00:00Z",
      "completed_at": "2024-01-01T00:00:00Z"
    },
    {
      "execution_id": "ex-7p8q9r0s",
      "status": "COMPLETED",
      "created_at": "2024-01-01T00:00:00Z",
      "started_at": "2024-01-01T00:00:00Z",
      "completed_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

## Workflow Monitoring

It is possible to monitor the workflow execution using the `Execution ID`. Currently, we support monitoring via the `Execution ID` in the UI and via the webhook. In the future, we plan to provide more advanced monitoring capabilities such as monitoring the execution progress, monitoring the execution logs, and monitoring the execution metrics.

### Webhook

Users can subscribe to the webhook to get the execution status updates.

**API Request**:

```
POST /workflows/{workflow_id}/execute
```

**Request Body**:

```json
{
  "input": {
    "webpage_url": "https://example.com"
  },
  "webhook_url": "https://example.com/webhook"
}
```

Data Flow Platform will send the execution status updates to the provided webhook URL.
