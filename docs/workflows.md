---
title: Workflows
sidebar_position: 2
---

# Workflows

Workflows API is the core part of the Data Flow Platform. It allows you to create, execute, and manage workflows.

## Workflow Creation

Users can create workflows via the UI or API.

Example request looks like following:

**API Request**:

```
POST /workflows
```

**Request Body**:

```json
{
  "name": "Dummy Workflow",
  "steps": [
    { "type": "StaticTextInput", "input": "Hello, world!" },
    { "type": "TextOperation.Reverse" },
    { "type": "Echo" }
  ]
}
```

Each request is validated against the scheme. Steps are validated with respect to the input and output types.

If the workflow is valid, `201 Created` response is returned with the `Workflow ID`.

**Response Body**:

```json
{
  "workflow_id": "wf-4g7h8j9k"
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

Request to the execution API will queue the workflow execution and return the `Execution ID`.

**Response Body**:

```json
{
  "execution_id": "ex-1a2b3c4d"
}
```

### Input Data

Most workflows require some input data. Users can provide the input data in the request body.

**API Request**:

```
POST /workflows/{workflow_id}/execute
```

**Request Body**:

```json
{
  "input": {
    "text": "Hello, world!"
  }
}
```

Before the workflow execution starts, the input data is validated against the workflow input schema. If the input data is invalid, the execution will be rejected with the `400 Bad Request` response.

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
  "status": "RUNNING",
  "tasks": [
    {
      "task_id": "task-5e6f7g8h",
      "type": "StaticTextInput",
      "status": "COMPLETED",
      "input": {
        "text": "Hello, world!"
      },
      "output": {
        "text": "Hello, world!"
      }
    },
    {
      "task_id": "task-9i0j1k2l",
      "type": "TextOperation.Reverse",
      "status": "RUNNING",
      "input": {
        "text": "Hello, world!"
      }
    },
    {
      "task_id": "task-3m4n5o6p",
      "type": "Echo",
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
    "text": "Hello, world!"
  },
  "webhook_url": "https://example.com/webhook"
}
```

Data Flow Platform will send the execution status updates to the provided webhook URL.
