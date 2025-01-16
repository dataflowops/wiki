---
sidebar_position: 1
---

# Data Flow Platform

Documentation for Data Flow Platform.

- [Workflows](/docs/workflows)
- [Tasks](/docs/tasks)
- [Task Types](/docs/task-types)

## Getting Started

The Data Flow Platform helps you build automated workflows that combine AI models, application integrations, and data processing tasks. Here's how to get started:

### 1. Create Your First Workflow

Create a simple workflow by making a POST request to our API:

```bash
curl -X POST https://api.dataflow.wiki/workflows \
  -H "Content-Type: application/json" \
  -d '{
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
  }'
```

### 2. Execute Your Workflow

Execute your workflow using the workflow ID returned from the creation step:

```bash
curl -X POST https://api.dataflow.wiki/workflows/{workflow-id}/executions \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": {
      "text": "Hello from Data Flow Platform!"
    }
  }'
```

### 3. Next Steps

- Learn more about [Workflows](/docs/workflows) and how to create complex automation
- Read our [Tasks](/docs/tasks) documentation to understand task configuration
- Explore available [Task Types](/docs/task-types) to build your solutions
- Check out example workflows in our [Blog](/blog) section
