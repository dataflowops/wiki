---
slug: workflow-task-to-extract-text-from-webpage-via-api
title: Workflow Task to Extract Text from Webpage via API
authors: [kenanbek]
tags:
  [
    workflows,
    data-integration,
    text-extraction,
    content-processing,
    automation,
    use-cases,
  ]
---

Learn how to use the Web Extract Text task type to extract clean, readable text from webpage HTML content through the DataFlow Platform's API. This tutorial demonstrates how to integrate text extraction capabilities into your automated workflows.

<!-- truncate -->

## Introduction

The Web Extract Text task type (`web.extract_text`) is a powerful component in the DataFlow Platform that enables you to extract readable text from HTML content. This capability is crucial for content analysis, data mining, and text processing workflows.

## Task Type Overview

The Web Extract Text task is designed to:

- Extract readable text from HTML content
- Remove HTML tags and formatting
- Preserve meaningful text structure
- Clean up whitespace and formatting

## Basic Usage

Here's a simple example of how to use the Web Extract Text task:

```json
{
  "name": "extract_text",
  "type": "web.extract_text",
  "inputs": {
    "html": "<html><body><h1>Welcome</h1><p>This is sample content.</p></body></html>"
  }
}
```

## Creating a Workflow

Let's create a complete workflow that combines downloading a webpage and extracting its text:

```json
{
  "title": "Webpage Text Extraction Workflow",
  "description": "Downloads a webpage and extracts its readable text content",
  "inputs": [
    {
      "name": "webpage_url",
      "type": "text",
      "description": "The URL of the webpage to process"
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
    }
  ],
  "outputs": [
    {
      "name": "extracted_text",
      "type": "text",
      "value": "{{tasks.extract_text.outputs.text}}",
      "description": "The extracted text content from the webpage"
    }
  ]
}
```

## API Integration

To execute this workflow via API, follow these steps:

1. Create the workflow:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d @workflow.json \
  https://api.dataflow.wiki/workflows
```

2. Execute it with specific inputs:

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

The Web Extract Text task type is valuable in various scenarios:

1. **Content Analysis**

   - Text mining and analysis
   - Content classification
   - Keyword extraction
   - Sentiment analysis

2. **Data Processing**

   - Creating clean text datasets
   - Preparing content for AI processing
   - Building search indexes
   - Content summarization

3. **Content Management**
   - Content migration
   - Text archival
   - Document processing
   - Content repurposing

## Best Practices

When using the Web Extract Text task:

1. **Input Quality**

   - Ensure HTML input is well-formed
   - Handle encoding issues properly
   - Pre-clean HTML if necessary

2. **Output Processing**

   - Validate extracted text
   - Handle empty or invalid results
   - Consider text length limits

3. **Integration Tips**
   - Chain with other text processing tasks
   - Implement error handling
   - Consider caching strategies

## Common Combinations

The Web Extract Text task works well with other task types:

- `web.download` for fetching content
- Text analysis tasks
- AI processing tasks
- Content transformation tasks

For an example of combining tasks, see our [Webpage Content Summarization](/blog/workflow-webpage-content-summarization-api) tutorial.

## Next Steps

Consider enhancing your text extraction workflows by:

- Adding text analysis capabilities
- Implementing content filtering
- Creating custom text processing pipelines
- Integrating with AI services

For more detailed information about the Web Extract Text task type, refer to our [documentation](/docs/task-types/web-extract-text).

## Conclusion

The Web Extract Text task type is an essential tool for converting HTML content into clean, processable text. Whether you're building content analysis tools, data mining systems, or text processing pipelines, this task type provides the foundation for effective text extraction and processing.

For more examples and detailed documentation, visit our [Documentation Portal](/docs).
