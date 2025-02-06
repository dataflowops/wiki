---
slug: workflow-task-to-download-webpage-via-api
title: Workflow Task to Download Webpage via API
authors: [kenanbek]
tags:
  [
    workflows,
    data-integration,
    integrations,
    api-integration,
    automation,
    use-cases,
  ]
---

Learn how to use the Web Download task type to fetch webpage content programmatically through the DataFlow Platform's API. This tutorial demonstrates how to integrate web content downloading capabilities into your automated workflows.

<!-- truncate -->

## Introduction

The Web Download task type (`web.download`) is a fundamental building block in the DataFlow Platform that enables you to fetch content from any webpage using its URL. This capability is essential for various automation scenarios, from content aggregation to data extraction workflows.

## Task Type Overview

The Web Download task is designed to:

- Download webpage content by URL
- Return the complete HTML content
- Handle HTTP requests seamlessly

## Basic Usage

Here's a simple example of how to use the Web Download task:

```json
{
  "name": "download_webpage",
  "type": "web.download",
  "inputs": {
    "url": "https://www.example.com"
  }
}
```

## Creating a Workflow

Let's create a complete workflow that downloads a webpage and stores its content:

```json
{
  "title": "Webpage Content Download Workflow",
  "description": "Downloads a webpage and returns its HTML content",
  "inputs": [
    {
      "name": "webpage_url",
      "type": "text",
      "description": "The URL of the webpage to download"
    }
  ],
  "tasks": [
    {
      "name": "download_webpage",
      "type": "web.download",
      "inputs": {
        "url": "{{inputs.webpage_url}}"
      }
    }
  ],
  "outputs": [
    {
      "name": "html_content",
      "type": "text",
      "value": "{{tasks.download_webpage.outputs.html}}",
      "description": "The HTML content of the downloaded webpage"
    }
  ]
}
```

For more advanced use cases, you can use the Web Download task in combination with other task types. For example, you can use the Web Download task to download the content of a webpage and then use the Text Extraction task to extract the text from the HTML content. See the [Webpage Content Summarization](/blog/workflow-to-summarize-webpage-content-via-api) tutorial for an example.

## API Integration

To execute this workflow via API, use the following steps:

1. First, create the workflow:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d @workflow.json \
  https://api.dataflow.wiki/workflows
```

2. Then execute it with specific inputs:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": {
      "webpage_url": "https://www.example.com"
    }
  }' \
  https://api.dataflow.wiki/workflows/{{workflow-id}}/executions
```

## Use Cases

The Web Download task type can be used in various scenarios:

1. **Content Monitoring**

   - Track changes on websites
   - Monitor product prices
   - Archive webpage content

2. **Data Collection**

   - Gather information for analysis
   - Build content databases
   - Create training datasets

3. **Integration Workflows**
   - Feed content into AI processing pipelines
   - Automate content aggregation
   - Build web scrapers

## Best Practices

When using the Web Download task:

1. **Respect robots.txt**

   - Always check website policies
   - Implement appropriate delays between requests

2. **Error Handling**

   - Plan for connection timeouts
   - Handle HTTP error codes
   - Implement retry logic

3. **Performance**
   - Cache results when appropriate
   - Only download necessary content
   - Consider bandwidth usage

## Next Steps

The Web Download task is often used as the first step in more complex workflows. Consider combining it with:

- Text extraction tasks
- AI processing tasks
- Content analysis workflows
- Data transformation pipelines

For more detailed information about the Web Download task type, refer to our [documentation](/docs/task-types/web-download).

## Conclusion

The Web Download task type provides a robust foundation for building web-based automation workflows. Whether you're building a simple content fetcher or a complex data processing pipeline, this task type offers the flexibility and reliability needed for professional web content retrieval.

For more examples and detailed documentation, visit our [Documentation Portal](/docs).
