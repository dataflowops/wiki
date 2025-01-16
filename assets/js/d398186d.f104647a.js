"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2694],{6134:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var t=n(6053),i=n(4848),a=n(8453);const s={slug:"workflow-to-download-and-transcribe-youtube-videos-via-api",title:"Get YouTube Video Transcription with an API call",authors:["kenanbek"],tags:["workflows","ai-integration","data-flow","etl-processes","app-integration","no-code-ai","ai-agents","integrations","use-cases"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Workflow",id:"workflow",level:2},{value:"Workflow to Automate the Process",id:"workflow-to-automate-the-process",level:2},{value:"Create a Workflow",id:"create-a-workflow",level:2},{value:"Execute the Workflow",id:"execute-the-workflow",level:2},{value:"Extend",id:"extend",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"In this blog post, we will create an automated workflow to download and transcribe YouTube videos via DataFlow Platform's API. This tutorial demonstrates building and executing a workflow as standalone automation process accessible via API or web interface."}),"\n",(0,i.jsx)(o.h2,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsx)(o.p,{children:"The main execution unit of the DataFlow Platform is a workflow. A workflow is a sequence of tasks that are executed in order."}),"\n",(0,i.jsx)(o.p,{children:"For this workflow, we need to have the following automation steps:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Receive a YouTube video URL as an input."}),"\n",(0,i.jsx)(o.li,{children:"Download a YouTube video by its URL."}),"\n",(0,i.jsx)(o.li,{children:"Extract the video's audio."}),"\n",(0,i.jsx)(o.li,{children:"Use a cloud AI service to transcribe the audio."}),"\n",(0,i.jsx)(o.li,{children:"Return the transcription as a response."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Unit of work in DataFlow Platform is a task. A task is a single unit of work that can be executed in a workflow. With the task types, we can implement the automation steps."}),"\n",(0,i.jsx)(o.p,{children:"We need the following task types to implement this workflow:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Youtube Downloader"}),": To download the YouTube video"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Extract Audio from Video"}),": To extract the video's audio"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Call AI Service"}),": To transcribe the video (OpenAI Whisper)"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"To have this automation via the platform, we need first to create a workflow unit with all the tasks, and connect these tasks."}),"\n",(0,i.jsx)(o.h2,{id:"workflow-to-automate-the-process",children:"Workflow to Automate the Process"}),"\n",(0,i.jsx)(o.p,{children:"Here is the initial version of the workflow defined in JSON format:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "title": "YouTube Video Transcription Workflow using Speech-to-Text AI model",\n  "description": "Downloads a YouTube video, extracts audio, transcribes it using OpenAI\'s Whisper model, and returns the transcription text",\n  "inputs": [\n    {\n      "name": "youtube_url",\n      "type": "text",\n      "description": "The URL of the YouTube video to transcribe"\n    }\n  ],\n  "tasks": [\n    {\n      "name": "download_video",\n      "type": "youtube.download",\n      "inputs": {\n        "youtube_url": "{{inputs.youtube_url}}"\n      }\n    },\n    {\n      "name": "extract_audio",\n      "type": "video.extract_audio",\n      "inputs": {\n        "video": "{{tasks.download_video.outputs.video}}"\n      }\n    },\n    {\n      "name": "transcribe_audio",\n      "type": "openai.audio.transcribe",\n      "inputs": {\n        "file": "{{tasks.extract_audio.outputs.audio}}",\n        "model": "whisper-1"\n      }\n    }\n  ],\n  "outputs": [\n    {\n      "name": "transcription_text",\n      "type": "text",\n      "value": "{{tasks.transcribe_audio.outputs.text}}",\n      "description": "The transcribed text of the YouTube video\'s audio"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(o.h2,{id:"create-a-workflow",children:"Create a Workflow"}),"\n",(0,i.jsx)(o.p,{children:"To create a workflow, you can use the following command:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d @workflow.json \\\n  https://api.dataflow.wiki/workflows\n'})}),"\n",(0,i.jsx)(o.p,{children:"If the workflow is created successfully, you will receive a response with the Workflow ID."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "workflow_id": "wf-4g7h8j9k"\n}\n'})}),"\n",(0,i.jsx)(o.p,{children:"Save the Workflow ID, we will need it to execute the workflow."}),"\n",(0,i.jsx)(o.h2,{id:"execute-the-workflow",children:"Execute the Workflow"}),"\n",(0,i.jsxs)(o.p,{children:["To execute the workflow, you need to send a POST request to the ",(0,i.jsx)(o.code,{children:"/workflows/{{workflow-id}}/executions"})," endpoint with the input data for the workflow."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"API Request"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"POST /workflows/{{workflow-id}}/executions\n\nHeaders:\n- Content-Type: application/json\n- X-OpenAI-Key: your_openai_api_key\n"})}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Request Body"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "inputs": {\n    "youtube_url": "https://www.youtube.com/watch?v=00000000000"\n  }\n}\n'})}),"\n",(0,i.jsx)(o.p,{children:"The CURL version of the request would look like this:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "X-OpenAI-Key: your_openai_api_key" \\\n  -d \'{"inputs": {"youtube_url": "https://www.youtube.com/watch?v=00000000000"}, "monitoring": {"webhook": "https://example.com/webhook"}}\' \\\n  https://api.dataflow.wiki/workflows/{{workflow-id}}/executions\n'})}),"\n",(0,i.jsx)(o.p,{children:"Since this workflow uses OpenAI's Whisper model, you must also include your OpenAI API key in the request header."}),"\n",(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsx)(o.p,{children:"Data Flow Platform uses provided API keys only for the tasks that require them and does not store them for future use."})}),"\n",(0,i.jsx)(o.h2,{id:"extend",children:"Extend"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Provide input and output language options"}),"\n",(0,i.jsx)(o.li,{children:"Provide a way to save the transcription to a remote file storage"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["For detailed documentation and examples, visit our ",(0,i.jsx)(o.a,{href:"/docs",children:"Documentation Portal"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>r});var t=n(6540);const i={},a=t.createContext(i);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:o},e.children)}},6053:e=>{e.exports=JSON.parse('{"permalink":"/blog/workflow-to-download-and-transcribe-youtube-videos-via-api","source":"@site/blog/workflow-download-transcribe-youtube-video-api/index.md","title":"Get YouTube Video Transcription with an API call","description":"In this blog post, we will create an automated workflow to download and transcribe YouTube videos via DataFlow Platform\'s API. This tutorial demonstrates building and executing a workflow as standalone automation process accessible via API or web interface.","date":"2025-01-01T21:34:50.000Z","tags":[{"inline":false,"label":"Workflows","permalink":"/blog/tags/workflows","description":"Articles about building, managing, and optimizing workflows"},{"inline":false,"label":"AI Integration","permalink":"/blog/tags/ai-integration","description":"Connecting artificial intelligence with your applications and workflows"},{"inline":false,"label":"Data Flow","permalink":"/blog/tags/data-flow","description":"Articles about the movement and transformation of data within a system or between systems."},{"inline":false,"label":"ETL Processes","permalink":"/blog/tags/etl-processes","description":"Posts related to Extract, Transform, Load processes"},{"inline":false,"label":"App Integration","permalink":"/blog/tags/app-integration","description":"Seamlessly connecting different applications to share data and automate tasks"},{"inline":false,"label":"No-Code AI","permalink":"/blog/tags/no-code-ai","description":"Building AI-powered solutions without writing code"},{"inline":false,"label":"AI Agents","permalink":"/blog/tags/ai-agents","description":"Creating and deploying autonomous AI agents for various tasks"},{"inline":false,"label":"Integrations","permalink":"/blog/tags/integrations","description":"Articles about building, managing, and optimizing integrations"},{"inline":false,"label":"Use Cases","permalink":"/blog/tags/use-cases","description":"Real-world examples of how the Data Flow Platform is used"}],"readingTime":2.77,"hasTruncateMarker":true,"authors":[{"name":"Kanan Rahimov","title":"AppBaza","url":"https://github.com/KenanBek","page":{"permalink":"/blog/authors/kenanbek"},"socials":{"github":"https://github.com/KenanBek","newsletter":"https://codervlogger.com","x":"https://x.com/KenanBekk"},"imageURL":"https://github.com/KenanBek.png","key":"kenanbek"}],"frontMatter":{"slug":"workflow-to-download-and-transcribe-youtube-videos-via-api","title":"Get YouTube Video Transcription with an API call","authors":["kenanbek"],"tags":["workflows","ai-integration","data-flow","etl-processes","app-integration","no-code-ai","ai-agents","integrations","use-cases"]},"unlisted":false,"nextItem":{"title":"Building AI-Powered Workflows with Data Flow Platform","permalink":"/blog/build-ai-workflows-with-data-flow-platform"}}')}}]);