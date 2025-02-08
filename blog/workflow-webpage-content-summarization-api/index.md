---
slug: workflow-to-summarize-webpage-content-via-api
title: Summarize Webpage Content with an API call
authors: [kenanbek]
tags:
  [
    workflows,
    ai-integration,
    integration,
    api,
    data-flow,
    etl-processes,
    app-integration,
    no-code-ai,
    ai-agents,
    integrations,
    use-cases,
    web-tasks,
    content-processing,
  ]
---

In this blog post, we will create an automated workflow to download and summarize webpage content via DataFlow Platform's API. This tutorial demonstrates building and executing a workflow as a standalone automation process accessible via API or web interface.

<!-- truncate -->

## Workflow

The main execution unit of the DataFlow Platform is a [workflow](/docs/workflows). A workflow is a sequence of tasks that are executed in order.

For this workflow, we need to have the following automation steps:

1. Receive a webpage URL and summarization parameters as input
2. Download the webpage content by its URL
3. Extract the main text content from the HTML
4. Truncate and summarize the text based on given parameters
5. Return the summary as a response

Unit of work in DataFlow Platform is a [task](/docs/tasks). A task is a single unit of work that can be executed in a workflow. With the task types, we can implement the automation steps.

We need the following task types to implement this workflow:

- [**Web Downloader**](/docs/task-types/web-download): To download the webpage content (`web.download`)
- [**Web Text Extractor**](/docs/task-types/web-extract-text): To extract main text from HTML (`web.extract_text`)
- [**OpenAI Completion**](/docs/task-types/openai-completion): To summarize the text using GPT model (`openai.completion`)

To have this automation via the platform, we need first to create a workflow unit with all the tasks, and connect these tasks.

## Workflow to Automate the Process

Here is the initial version of the workflow defined in JSON format:

```json
{
  "title": "Webpage Content Summarization Workflow using GPT AI model",
  "description": "Downloads a webpage, extracts main content, summarizes it using OpenAI's GPT model, and returns the summary text.",
  "inputs": [
    {
      "name": "webpage_url",
      "type": "text",
      "description": "The URL of the webpage to summarize."
    },
    {
      "name": "summarize_instructions",
      "type": "text",
      "description": "The instructions for the summarization."
    },
    {
      "name": "max_length",
      "type": "number",
      "description": "The maximum length of the summary text."
    }
  ],
  "tasks": [
    {
      "name": "download_webpage",
      "type": "web.download",
      "inputs": {
        "url": "{{inputs.webpage_url}}"
      }
    },
    {
      "name": "extract_text",
      "type": "web.extract_text",
      "inputs": {
        "html": "{{tasks.download_webpage.outputs.html}}"
      }
    },
    {
      "name": "summarize_text",
      "type": "openai.completion",
      "inputs": {
        "text": "{{tasks.extract_text.outputs.text}}",
        "instructions": "{{inputs.summarize_instructions}}",
        "max_tokens": "{{inputs.max_length}}"
      }
    }
  ],
  "outputs": [
    {
      "name": "summary_text",
      "type": "text",
      "value": "{{tasks.summarize_text.outputs.completion}}",
      "description": "The summarized text of the webpage content."
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

If the workflow is created successfully, you will receive a response with the Workflow ID.

```json
{
  "workflow_id": "wf-5h8j9k0l"
}
```

Save the Workflow ID, we will need it to execute the workflow.

## Execute the Workflow

To execute the workflow, you need to send a POST request to the `/workflows/{{workflow-id}}/executions` endpoint with the input data for the workflow.

**API Request**:

```bash
POST /workflows/{{workflow-id}}/executions

Headers:
- Content-Type: application/json
```

**Request Body**:

```json
{
  "inputs": {
    "webpage_url": "https://kenanbek.github.io/about/",
    "summarize_instructions": "Include bullet points with highlights",
    "max_length": 100
  },
  "monitoring": {
    "webhook_url": "https://webhook.example.com/wf-5h8j9k0l"
  }
}
```

The CURL version of the request would look like this:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"inputs": {"webpage_url": "https://kenanbek.github.io/about/", "summarize_instructions": "Include bullet points with highlights", "max_length": 100}, "monitoring": {"webhook_url": "https://webhook.example.com/wf-5h8j9k0l"}}' \
  https://api.dataflow.wiki/workflows/{{workflow-id}}/executions
```

## New Task Types

This workflow introduces several new task types for web content processing:

### Web Download Task

The `web.download` task type allows downloading webpage content from any URL. It handles various HTTP methods and headers, returning the raw HTML content.

Learn more about the [Web Download](/docs/task-types/web-download) task type.

### Web Text Extraction

The `web.extract_text` task processes HTML content to extract meaningful text, removing navigation elements, ads, and other non-content elements. It uses advanced algorithms to identify and extract the main content.

Learn more about the [Web Text Extraction](/docs/task-types/web-extract-text) task type.

### OpenAI Completion

The `openai.completion` task uses OpenAI's GPT model to generate summaries based on input text and instructions. It supports various parameters like max tokens, temperature, and specific prompting instructions.

Learn more about the [OpenAI Completion](/docs/task-types/openai-completion) task type.

## Extend

Here are some ways to extend this workflow:

- Add language translation capabilities
- Implement different summarization strategies
- Add support for multiple webpage URLs
- Include metadata extraction
- Add content classification

For detailed documentation and examples, visit our [Documentation Portal](/docs).
