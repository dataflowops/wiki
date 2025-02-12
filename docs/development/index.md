# Development

## Dummy Workflow

Dummy workflow is an example workflow to show how the workflow engine works.

The workflow consists of 3 steps:

1. Step 1: Static text input (Hello, world!)
2. Step 2: Text operation, reverse text
3. Step 3: Print text

### Workflow

Flowchart of the workflow:

```mermaid
flowchart LR
  subgraph "Dummy Workflow"
    direction LR
    Step1[StaticTextInput]
    Step2[Text Operation: Reverse]
    Step3[Echo]

    Step1 -->|"Hello, world!"| Step2
    Step2 -->|"!dlrow ,olleH"| Step3
  end
```

### Structure

Here is the JSON structure of the workflow:

```json
{
  "title": "Dummy Workflow",
  "description": "This is a dummy workflow to show how the workflow engine works",
  "tasks": [
    {
      "name": "input_text",
      "type": "static_text_input",
      "inputs": [
        {
          "name": "Text",
          "value": "Hello, world!"
        }
      ]
    },
    {
      "name": "reverse_text",
      "type": "text_operations.reverse",
      "inputs": [
        {
          "name": "text",
          "value": "{{tasks.input_text.outputs.text}}"
        }
      ]
    },
    {
      "name": "echo_text",
      "type": "echo",
      "inputs": [
        {
          "name": "text",
          "value": "{{tasks.reverse_text.outputs.text}}"
        }
      ]
    }
  ]
}
```

### Execution Process

The execution process of the workflow is as follows:

1. The workflow is created via the API or UI.
2. The system queues the workflow.
3. Each step is executed in order.
4. As each step is executed, the system updates the workflow status and the step status.
5. The workflow is marked as completed when all steps are completed.
6. User can be notified via webhook, email, or other means.
