---
title: OpenAI / Completion
slug: openai-completion
---

# OpenAI GPT

Workflow task type to call OpenAI's GPT model for text completion and summarization tasks.

## Inputs

- `text`: The input text to process (**required input**).
- `prompt`: Prompt to guide the model's output (**required input**).
- `model`: The GPT model to use (e.g. "gpt-4", "gpt-3.5-turbo"). Defaults to "gpt-3.5-turbo".
- `max_tokens`: Maximum number of tokens to generate in the completion.
- `temperature`: Controls randomness in the output (0-2). Higher values make output more random. Defaults to 0.7.
- `top_p`: Controls diversity via nucleus sampling (0-1). Lower values make output more focused. Defaults to 1.0.
- `frequency_penalty`: Reduces repetition of token sequences (-2 to 2). Positive values decrease repetition. Defaults to 0.
- `presence_penalty`: Encourages discussing new topics (-2 to 2). Positive values increase topic diversity. Defaults to 0.

## Outputs

- `completion`: The generated text completion (**default output**).
- `usage`: Token usage statistics for the request.

# Example Usage

```json
{
  "name": "summarize_text",
  "type": "openai.completion",
  "inputs": {
    "text": "{{inputs.article_text}}",
    "prompt": "Summarize this article in 3 bullet points",
    "model": "gpt-4",
    "max_tokens": 300,
    "temperature": 0.5
  }
}
```

This example assumes that the workflow has an input named `article_text` containing the text to summarize.

# Specification

```json
{
  "specification": {
    "type": "openai.completion",
    "category": "ai",
    "description": "Call OpenAI's GPT model to generate text completions",
    "inputs": [
      {
        "name": "text",
        "type": "text",
        "required": true,
        "description": "The input text to process",
        "example": "Analyze the following article..."
      },
      {
        "name": "prompt",
        "type": "text",
        "required": true,
        "description": "Prompt to guide the model's output",
        "example": "Summarize this text in 3 bullet points"
      },
      {
        "name": "model",
        "type": "text",
        "required": false,
        "default": "gpt-3.5-turbo",
        "description": "The GPT model to use",
        "example": "gpt-4"
      },
      {
        "name": "max_tokens",
        "type": "number",
        "required": false,
        "description": "Maximum number of tokens to generate",
        "example": 300
      },
      {
        "name": "temperature",
        "type": "number",
        "required": false,
        "default": 0.7,
        "description": "Controls randomness in the output (0-2)",
        "example": 0.5
      },
      {
        "name": "top_p",
        "type": "number",
        "required": false,
        "default": 1.0,
        "description": "Controls diversity via nucleus sampling (0-1)",
        "example": 0.8
      },
      {
        "name": "frequency_penalty",
        "type": "number",
        "required": false,
        "default": 0.0,
        "description": "Reduces repetition of token sequences (-2 to 2)",
        "example": 0.5
      },
      {
        "name": "presence_penalty",
        "type": "number",
        "required": false,
        "default": 0.0,
        "description": "Encourages discussing new topics (-2 to 2)",
        "example": 0.5
      }
    ],
    "outputs": [
      {
        "name": "completion",
        "type": "text",
        "default": true,
        "description": "The generated text completion",
        "example": "• Key point 1\n• Key point 2\n• Key point 3"
      },
      {
        "name": "usage",
        "type": "object",
        "description": "Token usage statistics for the request",
        "example": {
          "prompt_tokens": 100,
          "completion_tokens": 50,
          "total_tokens": 150
        }
      }
    ]
  }
}
```

This task type requires an OpenAI API key to be provided in the workflow execution request headers as `X-OpenAI-Key`.
