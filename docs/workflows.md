---
title: Workflows
sidebar_position: 2
---

# Workflows

Workflows are the main execution unit of the Data Flow Platform. They are sequences of tasks that are executed in order to achieve a specific automation goal.

## Workflow Definition

A workflow definition is a JSON object that specifies:

- Basic workflow metadata (title, description)
- Input parameters
- Sequence of tasks to execute
- Output mappings

Here's an example workflow definition:

```json
{
  "title": "YouTube Video Transcription",
  "description": "Downloads a YouTube video and transcribes its audio content",
  "inputs": [
    {
      "name": "video_url",
      "type": "text",
      "description": "YouTube video URL to process"
    }
  ],
  "tasks": [
    {
      "name": "download_video",
      "type": "youtube.download",
      "inputs": {
        "url": "{{inputs.video_url}}"
      }
    },
    {
      "name": "extract_audio",
      "type": "video.extract_audio",
      "inputs": {
        "video": "{{tasks.download_video.outputs.video}}"
      }
    },
    {
      "name": "transcribe",
      "type": "openai.audio.transcription",
      "inputs": {
        "audio": "{{tasks.extract_audio.outputs.audio}}"
      }
    }
  ],
  "outputs": [
    {
      "name": "transcription",
      "type": "text",
      "value": "{{tasks.transcribe.outputs.text}}"
    }
  ]
}
```

### Workflow Components

#### Inputs

The `inputs` section defines the parameters that must be provided when executing the workflow. Each input has:

- `name`: Unique identifier for the input
- `type`: Data type (`text`, `number`, `boolean`, or `file`)
- `description`: Human-readable description
- `required`: Boolean indicating if the input is mandatory (defaults to `true`)
- `default`: Optional default value if none is provided

#### Tasks

The `tasks` array defines the sequence of operations to perform. Each task has:

- `name`: Unique identifier for the task within the workflow
- `type`: The task type to execute (must be a supported task type)
- `inputs`: Mapping of task input parameters
- `outputs`: Optional mapping of task outputs (defaults can be used)
- `condition`: Optional expression determining if task should execute
- `retry`: Optional retry configuration for failed tasks

Tasks are executed sequentially by default. The platform ensures each task's dependencies (inputs) are available before execution.

#### Outputs

The `outputs` section maps internal workflow values to the final workflow outputs. Each output has:

- `name`: Identifier for the output value
- `type`: Data type of the output
- `value`: Expression referencing internal workflow values
- `description`: Optional human-readable description

### Variable References

Workflows use a templating syntax to reference values:

- `{{inputs.NAME}}` - Reference workflow input
- `{{tasks.TASK_NAME.outputs.OUTPUT_NAME}}` - Reference task output
- `{{outputs.NAME}}` - Reference workflow output

## Workflow Execution

Workflows are executed by making a POST request to the execution API endpoint with the required input parameters. The platform:

1. Validates the input parameters
2. Creates an execution snapshot
3. Executes tasks sequentially
4. Maps outputs
5. Returns execution results

### Execution States

A workflow execution can be in one of these states:

- `PENDING`: Execution is queued
- `RUNNING`: Tasks are being executed
- `COMPLETED`: All tasks completed successfully
- `FAILED`: One or more tasks failed
- `CANCELLED`: Execution was cancelled by user

### Error Handling

Tasks can be configured with retry policies:

```json
{
  "name": "risky_task",
  "type": "some.task",
  "retry": {
    "attempts": 3,
    "delay": 5,
    "multiplier": 2
  }
}
```

This will retry failed tasks up to 3 times with exponential backoff.

### Conditional Execution

Tasks can include conditions to control their execution:

```json
{
  "name": "optional_task",
  "type": "some.task",
  "condition": "{{tasks.previous_task.outputs.should_continue}}"
}
```

The task will only execute if the condition evaluates to true.

## Workflow Management

### Versioning

Each workflow modification creates a new version. The version history is preserved and can be accessed via the API. Executions always use the workflow version that was current when the execution started.

### Monitoring

Workflow execution can be monitored through:

- API polling
- Webhooks
- Web UI dashboard

The monitoring data includes:

- Overall execution status
- Individual task statuses
- Execution time and resource usage
- Error messages and stack traces
- Output values

## Best Practices

1. **Input Validation**: Define clear input parameters with appropriate types and validation rules

2. **Error Handling**: Configure retry policies for unreliable tasks

3. **Modularity**: Break complex workflows into smaller, reusable components

4. **Monitoring**: Set up appropriate monitoring and alerting for critical workflows

5. **Documentation**: Include clear descriptions for inputs, outputs, and expected behavior

6. **Testing**: Test workflows with various input combinations before production use

## Next Steps

- Learn about [Tasks](/docs/tasks) configuration
- Explore available [Task Types](/docs/task-types)
- Check out example workflows in our [Blog](/blog)
