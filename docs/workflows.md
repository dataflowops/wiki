---
title: Workflows
sidebar_position: 2
---

# Workflows

Workflows API is the core part of the Data Flow Platform. It allows you to create, execute, and manage workflows.

## Workflow Creation

Users can create workflows via the UI or API.

Example request looks like following:

**API Endpoint**:

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

Each request is validated agains the scheme. Steps are validated with respect to the input and output types.

If the workflow is valid, **201 Created** response is returned with the `Workflow ID`.

**Response Body**:

```json
{
  "workflowId": "wf-123"
}
```

:::note
Created workflows are not executed. Returned `Workflow ID` is used to execute the workflow with the separate API call.
:::

## Workflow Execution

To execute the workflow, user needs to send the workflow ID to the execution API.

API: `POST /workflows/{workflowId}/execute`

Request to the execution API will queue the workflow execution and return the execution ID.

Most workflows require some input data. User can provide the input data in the request body.

API: `POST /workflows/{workflowId}/execute`

```json
{
  "input": {
    "text": "Hello, world!"
  }
}
```

Input data is validated against the workflow input schema.

## Workflow Monitoring

## Workflow Outcomes
