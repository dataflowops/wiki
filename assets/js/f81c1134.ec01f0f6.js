"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"workflow-to-download-and-transcribe-youtube-videos-via-api","metadata":{"permalink":"/blog/workflow-to-download-and-transcribe-youtube-videos-via-api","source":"@site/blog/workflow-download-transcribe-youtube-video-api/index.md","title":"Get YouTube Video Transcription with an API call","description":"In this blog post, we will create an automated workflow to download and transcribe YouTube videos via DataFlow Platform\'s API. This tutorial demonstrates building and executing a workflow as standalone automation process accessible via API or web interface.","date":"2025-01-01T21:34:50.000Z","tags":[{"inline":false,"label":"Workflows","permalink":"/blog/tags/workflows","description":"Articles about building, managing, and optimizing workflows"},{"inline":false,"label":"AI Integration","permalink":"/blog/tags/ai-integration","description":"Connecting artificial intelligence with your applications and workflows"},{"inline":false,"label":"Data Flow","permalink":"/blog/tags/data-flow","description":"Articles about the movement and transformation of data within a system or between systems."},{"inline":false,"label":"ETL Processes","permalink":"/blog/tags/etl-processes","description":"Posts related to Extract, Transform, Load processes"},{"inline":false,"label":"App Integration","permalink":"/blog/tags/app-integration","description":"Seamlessly connecting different applications to share data and automate tasks"},{"inline":false,"label":"No-Code AI","permalink":"/blog/tags/no-code-ai","description":"Building AI-powered solutions without writing code"},{"inline":false,"label":"AI Agents","permalink":"/blog/tags/ai-agents","description":"Creating and deploying autonomous AI agents for various tasks"},{"inline":false,"label":"Integrations","permalink":"/blog/tags/integrations","description":"Articles about building, managing, and optimizing integrations"},{"inline":false,"label":"Use Cases","permalink":"/blog/tags/use-cases","description":"Real-world examples of how the Data Flow Platform is used"}],"readingTime":2.43,"hasTruncateMarker":true,"authors":[{"name":"Kanan Rahimov","title":"AppBaza","url":"https://github.com/KenanBek","page":{"permalink":"/blog/authors/kenanbek"},"socials":{"github":"https://github.com/KenanBek","newsletter":"https://codervlogger.com","x":"https://x.com/KenanBekk"},"imageURL":"https://github.com/KenanBek.png","key":"kenanbek"}],"frontMatter":{"slug":"workflow-to-download-and-transcribe-youtube-videos-via-api","title":"Get YouTube Video Transcription with an API call","authors":["kenanbek"],"tags":["workflows","ai-integration","data-flow","etl-processes","app-integration","no-code-ai","ai-agents","integrations","use-cases"]},"unlisted":false,"nextItem":{"title":"Building AI-Powered Workflows with Data Flow Platform","permalink":"/blog/build-ai-workflows-with-data-flow-platform"}},"content":"In this blog post, we will create an automated workflow to download and transcribe YouTube videos via DataFlow Platform\'s API. This tutorial demonstrates building and executing a workflow as standalone automation process accessible via API or web interface.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Workflow\\n\\nThe main execution unit of the DataFlow Platform is a workflow. A workflow is a sequence of tasks that are executed in order.\\n\\nFor this workflow, we need to have the following automation steps:\\n\\n1. Receive a YouTube video URL as input\\n2. Download a YouTube video by its URL\\n3. Extract the video\'s audio\\n4. Use a cloud AI service to transcribe the audio\\n5. Return the transcription as a response\\n\\nUnit of work in DataFlow Platform is a task. A task is a single unit of work that can be executed in a workflow. With the task types, we can implement the automation steps.\\n\\nWe need the following task types to implement this workflow:\\n\\n- **Youtube Downloader**: To download the YouTube video\\n- **Extract Audio from Video**: To extract the video\'s audio\\n- **Call AI Service**: To transcribe the video (OpenAI Whisper)\\n\\nTo have this automation via the platform, we need first to create a workflow unit with all the tasks, and connect these tasks.\\n\\n## Workflow to Automate the Process\\n\\nHere is the initial version of the workflow defined in JSON format:\\n\\n```json\\n{\\n  \\"name\\": \\"YouTube Video Transcription Workflow using Speech-to-Text AI model\\",\\n  \\"description\\": \\"Downloads a YouTube video, extracts audio, transcribes it using OpenAI\'s Whisper model, and returns the transcription text.\\",\\n  \\"input\\": [\\n    {\\n      \\"name\\": \\"youtube_url\\",\\n      \\"type\\": \\"string\\",\\n      \\"description\\": \\"The URL of the YouTube video to transcribe.\\"\\n    }\\n  ],\\n  \\"tasks\\": [\\n    {\\n      \\"ref\\": \\"download_video\\",\\n      \\"type\\": \\"YouTube.Download\\",\\n      \\"input\\": {\\n        \\"video_url\\": \\"{{input.youtube_url}}\\"\\n      }\\n    },\\n    {\\n      \\"ref\\": \\"extract_audio\\",\\n      \\"type\\": \\"Video.ExtractAudio\\",\\n      \\"input\\": {\\n        \\"video\\": \\"{{refs.download_video.output.video}}\\"\\n      }\\n    },\\n    {\\n      \\"ref\\": \\"transcribe_audio\\",\\n      \\"type\\": \\"OpenAI.Audio.Transcribe\\",\\n      \\"input\\": {\\n        \\"file\\": \\"{{refs.extract_audio.output.audio}}\\",\\n        \\"model\\": \\"whisper-1\\"\\n      }\\n    }\\n  ],\\n  \\"output\\": [\\n    {\\n      \\"name\\": \\"transcription_text\\",\\n      \\"type\\": \\"string\\",\\n      \\"value\\": \\"{{refs.transcribe_audio.output.text}}\\",\\n      \\"description\\": \\"The transcribed text of the YouTube video\'s audio.\\"\\n    }\\n  ]\\n}\\n```\\n\\nTask\\n\\n## Create a Workflow\\n\\nTo create a workflow, you can use the following command:\\n\\n```bash\\ncurl -X POST \\\\\\n  -H \\"Content-Type: application/json\\" \\\\\\n  -d @workflow.json \\\\\\n  https://api.dataflow.wiki/workflows\\n```\\n\\nSave the workflow ID, we will need it to execute the workflow.\\n\\n## Execute the Workflow\\n\\nTo execute the workflow, you need to send a POST request to the `/workflows/execute` endpoint with the workflow ID and the input for the workflow. Since this workflow uses OpenAI\'s Whisper model, you must include your OpenAI API key in the request header.\\n\\n```json\\n{\\n  \\"workflowId\\": \\"<WORKFLOW_ID>\\",\\n  \\"input\\": {\\n    \\"youtube_url\\": \\"https://www.youtube.com/watch?v=00000000000\\"\\n  }\\n}\\n```\\n\\nExecute the workflow by sending a POST request to the `/workflows/execute` endpoint:\\n\\n```bash\\ncurl -X POST \\\\\\n  -H \\"Content-Type: application/json\\" \\\\\\n  -H \\"X-OpenAI-Key: your_openai_api_key\\" \\\\\\n  -d @execute_workflow.json \\\\\\n  https://api.dataflow.wiki/workflows/execute\\n```\\n\\n## Extend\\n\\n- Provide input and output language options\\n- Provide a way to save the transcription to a remote file storage"},{"id":"build-ai-workflows-with-data-flow-platform","metadata":{"permalink":"/blog/build-ai-workflows-with-data-flow-platform","source":"@site/blog/orchestrate-ai-app-integrations-workflows/index.md","title":"Building AI-Powered Workflows with Data Flow Platform","description":"Learn how to create automated workflows that combine AI models, application integrations, and ETL processes using the Data Flow Platform. This tutorial demonstrates how to build and deploy intelligent workflows as standalone AI agents accessible via API or web interface.","date":"2024-12-18T22:24:24.000Z","tags":[{"inline":false,"label":"Workflows","permalink":"/blog/tags/workflows","description":"Articles about building, managing, and optimizing workflows"},{"inline":false,"label":"AI Integration","permalink":"/blog/tags/ai-integration","description":"Connecting artificial intelligence with your applications and workflows"},{"inline":false,"label":"Data Flow","permalink":"/blog/tags/data-flow","description":"Articles about the movement and transformation of data within a system or between systems."},{"inline":false,"label":"ETL Processes","permalink":"/blog/tags/etl-processes","description":"Posts related to Extract, Transform, Load processes"},{"inline":false,"label":"App Integration","permalink":"/blog/tags/app-integration","description":"Seamlessly connecting different applications to share data and automate tasks"},{"inline":false,"label":"No-Code AI","permalink":"/blog/tags/no-code-ai","description":"Building AI-powered solutions without writing code"},{"inline":false,"label":"AI Agents","permalink":"/blog/tags/ai-agents","description":"Creating and deploying autonomous AI agents for various tasks"},{"inline":false,"label":"Integrations","permalink":"/blog/tags/integrations","description":"Articles about building, managing, and optimizing integrations"}],"readingTime":2.83,"hasTruncateMarker":true,"authors":[{"name":"Kanan Rahimov","title":"AppBaza","url":"https://github.com/KenanBek","page":{"permalink":"/blog/authors/kenanbek"},"socials":{"github":"https://github.com/KenanBek","newsletter":"https://codervlogger.com","x":"https://x.com/KenanBekk"},"imageURL":"https://github.com/KenanBek.png","key":"kenanbek"}],"frontMatter":{"slug":"build-ai-workflows-with-data-flow-platform","title":"Building AI-Powered Workflows with Data Flow Platform","authors":["kenanbek"],"tags":["workflows","ai-integration","data-flow","etl-processes","app-integration","no-code-ai","ai-agents","integrations"]},"unlisted":false,"prevItem":{"title":"Get YouTube Video Transcription with an API call","permalink":"/blog/workflow-to-download-and-transcribe-youtube-videos-via-api"}},"content":"Learn how to create automated workflows that combine AI models, application integrations, and ETL processes using the Data Flow Platform. This tutorial demonstrates how to build and deploy intelligent workflows as standalone AI agents accessible via API or web interface.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Understanding Data Flow Platform Components\\n\\nBefore diving into workflow creation, let\'s understand the key components:\\n\\n1. **Workflow Engine**: Based on Directed Acyclic Graphs (DAGs), similar to Apache Airflow\\n2. **Node Executors**: Runtime environment for processing workflow steps\\n3. **Data Converters**: Handlers for data transformation between different formats\\n4. **Integration Layer**: Connectors for AI models and external applications\\n5. **Agent Publisher**: System for exposing workflows as AI agents\\n\\n## Creating Your First Workflow\\n\\n### Step 1: Design the Workflow Structure\\n\\nAccess the Workflow Management Dashboard and create a new workflow:\\n\\n1. Navigate to `Workflows > Create New`\\n2. Define workflow metadata: `json\\n\\n```json\\n{\\n  \\"name\\": \\"customer_data_processor\\",\\n  \\"description\\": \\"Process customer data with AI analysis\\",\\n  \\"schedule\\": \\"0 0 * * *\\" // Daily execution\\n}\\n```\\n\\n### Step 2: Add Data Source Integration\\n\\nConfigure your data source node:\\n\\n1. Drag a Source node from the toolbox\\n2. Configure the connection: `json\\n\\n```json\\n{\\n  \\"type\\": \\"postgres\\",\\n  \\"connection\\": {\\n    \\"host\\": \\"db.example.com\\",\\n    \\"port\\": 5432,\\n    \\"database\\": \\"customers\\"\\n  },\\n  \\"query\\": \\"SELECT * FROM customer_interactions\\"\\n}\\n```\\n\\n### Step 3: Implement ETL Process\\n\\nAdd transformation nodes to clean and prepare your data:\\n\\n```python\\ndef transform_customer_data(data):\\n    return {\\n        \'customer_id\': data[\'id\'],\\n        \'sentiment_input\': f\\"{data[\'subject\']} {data[\'message\']}\\",\\n        \'interaction_date\': data[\'created_at\'].isoformat()\\n    }\\n```\\n\\n### Step 4: Integrate AI Processing\\n\\nAdd an AI node for sentiment analysis:\\n\\n```json\\n{\\n  \\"node_type\\": \\"ai_processor\\",\\n  \\"model\\": \\"sentiment_analyzer\\",\\n  \\"input_mapping\\": {\\n    \\"text\\": \\"sentiment_input\\"\\n  },\\n  \\"output_mapping\\": {\\n    \\"sentiment_score\\": \\"customer_sentiment\\",\\n    \\"sentiment_label\\": \\"sentiment_category\\"\\n  }\\n}\\n```\\n\\n### Step 5: Configure Output Integration\\n\\nSet up the destination for processed data:\\n\\n```json\\n{\\n  \\"node_type\\": \\"api_destination\\",\\n  \\"endpoint\\": \\"https://crm.example.com/api/v1/customers\\",\\n  \\"method\\": \\"POST\\",\\n  \\"headers\\": {\\n    \\"Authorization\\": \\"Bearer ${CRM_API_KEY}\\"\\n  }\\n}\\n```\\n\\n## Publishing as an AI Agent\\n\\nOnce your workflow is tested, you can publish it as an AI agent:\\n\\n1. Navigate to `Workflows > [Your Workflow] > Publish`\\n2. Configure agent settings:\\n\\n```json\\n{\\n  \\"agent_name\\": \\"CustomerInsightBot\\",\\n  \\"description\\": \\"AI-powered customer interaction analyzer\\",\\n  \\"access_type\\": \\"api\\", // or \\"web_form\\"\\n  \\"input_schema\\": {\\n    \\"customer_id\\": \\"string\\",\\n    \\"interaction_text\\": \\"string\\"\\n  }\\n}\\n```\\n\\n### Accessing Your AI Agent\\n\\n#### Via API\\n\\n```bash\\ncurl -X POST https://api.dataflow.example.com/agents/CustomerInsightBot \\\\\\n  -H \\"Authorization: Bearer ${API_KEY}\\" \\\\\\n  -d \'{\\n    \\"customer_id\\": \\"12345\\",\\n    \\"interaction_text\\": \\"Great service, very satisfied!\\"\\n  }\'\\n```\\n\\n#### Via Web Form\\n\\nAccess your agent through the provided web interface at:\\n\\n```\\nhttps://dataflow.example.com/agents/CustomerInsightBot/form\\n```\\n\\n## Monitoring and Maintenance\\n\\nMonitor your workflow\'s performance through:\\n\\n1. Real-time execution logs\\n2. Performance metrics dashboard\\n3. Error tracking and alerting\\n4. Data quality monitoring\\n\\n### Monitoring Dashboard\\n\\n```json\\n{\\n  \\"metrics\\": {\\n    \\"execution_time\\": \\"avg_ms\\",\\n    \\"success_rate\\": \\"percentage\\",\\n    \\"error_rate\\": \\"percentage\\",\\n    \\"data_processed\\": \\"records_count\\"\\n  },\\n  \\"alerts\\": {\\n    \\"error_threshold\\": 0.05,\\n    \\"latency_threshold_ms\\": 1000,\\n    \\"notification_channels\\": [\\"email\\", \\"slack\\"]\\n  }\\n}\\n```\\n\\n## Best Practices\\n\\n- Use environment variables for sensitive configuration\\n- Implement error handling at each node\\n- Set up monitoring and alerting\\n- Document data schemas and transformations\\n- Version control your workflow configurations\\n\\n### Error Handling Example\\n\\n```python\\ndef process_node(input_data):\\n    try:\\n        # Process data\\n        result = transform_data(input_data)\\n\\n        # Validate output\\n        if not validate_output(result):\\n            raise ValueError(\\"Output validation failed\\")\\n\\n        return result\\n    except Exception as e:\\n        log_error(e)\\n        send_alert(\\"Node processing failed\\", str(e))\\n        raise\\n```\\n\\n## Next Steps\\n\\n- Explore advanced workflow patterns\\n- Implement custom data transformations\\n- Integrate additional AI models\\n- Set up workflow testing\\n- Configure advanced scheduling\\n\\nFor detailed documentation and examples, visit our [Documentation Portal](/docs)."}]}}')}}]);