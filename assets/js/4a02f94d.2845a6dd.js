"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5571],{3715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var i=t(8331),s=t(4848),a=t(8453);const o={slug:"workflow-task-to-extract-text-from-webpage-via-api",title:"Workflow Task to Extract Text from Webpage via API",authors:["kenanbek"],tags:["workflows","data-integration","data-flow","integrations","api","automation","use-cases","web-tasks","content-processing"]},l=void 0,r={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Task Type Overview",id:"task-type-overview",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Creating a Workflow",id:"creating-a-workflow",level:2},{value:"API Integration",id:"api-integration",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Common Combinations",id:"common-combinations",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Learn how to use the Web Extract Text task type to extract clean, readable text from webpage HTML content through the DataFlow Platform's API. This tutorial demonstrates how to integrate text extraction capabilities into your automated workflows."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The Web Extract Text task type (",(0,s.jsx)(n.code,{children:"web.extract_text"}),") is a powerful component in the DataFlow Platform that enables you to extract readable text from HTML content. This capability is crucial for content analysis, data mining, and text processing workflows."]}),"\n",(0,s.jsx)(n.h2,{id:"task-type-overview",children:"Task Type Overview"}),"\n",(0,s.jsx)(n.p,{children:"The Web Extract Text task is designed to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Extract readable text from HTML content"}),"\n",(0,s.jsx)(n.li,{children:"Remove HTML tags and formatting"}),"\n",(0,s.jsx)(n.li,{children:"Preserve meaningful text structure"}),"\n",(0,s.jsx)(n.li,{children:"Clean up whitespace and formatting"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.p,{children:"Here's a simple example of how to use the Web Extract Text task:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "extract_text",\n  "type": "web.extract_text",\n  "inputs": {\n    "html": "<html><body><h1>Welcome</h1><p>This is sample content.</p></body></html>"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-workflow",children:"Creating a Workflow"}),"\n",(0,s.jsx)(n.p,{children:"Let's create a complete workflow that combines downloading a webpage and extracting its text:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Webpage Text Extraction Workflow",\n  "description": "Downloads a webpage and extracts its readable text content",\n  "inputs": [\n    {\n      "name": "webpage_url",\n      "type": "text",\n      "description": "The URL of the webpage to process"\n    }\n  ],\n  "tasks": [\n    {\n      "name": "download_webpage",\n      "type": "web.download",\n      "inputs": {\n        "url": "{{inputs.webpage_url}}"\n      }\n    },\n    {\n      "name": "extract_text",\n      "type": "web.extract_text",\n      "inputs": {\n        "html": "{{tasks.download_webpage.outputs.html}}"\n      }\n    }\n  ],\n  "outputs": [\n    {\n      "name": "extracted_text",\n      "type": "text",\n      "value": "{{tasks.extract_text.outputs.text}}",\n      "description": "The extracted text content from the webpage"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-integration",children:"API Integration"}),"\n",(0,s.jsx)(n.p,{children:"To execute this workflow via API, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create the workflow:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d @workflow.json \\\n  https://api.dataflow.wiki/workflows\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Execute it with specific inputs:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "inputs": {\n      "webpage_url": "https://www.example.com"\n    }\n  }\' \\\n  https://api.dataflow.wiki/workflows/{{workflow-id}}/executions\n'})}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(n.p,{children:"The Web Extract Text task type is valuable in various scenarios:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Content Analysis"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Text mining and analysis"}),"\n",(0,s.jsx)(n.li,{children:"Content classification"}),"\n",(0,s.jsx)(n.li,{children:"Keyword extraction"}),"\n",(0,s.jsx)(n.li,{children:"Sentiment analysis"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data Processing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating clean text datasets"}),"\n",(0,s.jsx)(n.li,{children:"Preparing content for AI processing"}),"\n",(0,s.jsx)(n.li,{children:"Building search indexes"}),"\n",(0,s.jsx)(n.li,{children:"Content summarization"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Content Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Content migration"}),"\n",(0,s.jsx)(n.li,{children:"Text archival"}),"\n",(0,s.jsx)(n.li,{children:"Document processing"}),"\n",(0,s.jsx)(n.li,{children:"Content repurposing"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.p,{children:"When using the Web Extract Text task:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input Quality"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure HTML input is well-formed"}),"\n",(0,s.jsx)(n.li,{children:"Handle encoding issues properly"}),"\n",(0,s.jsx)(n.li,{children:"Pre-clean HTML if necessary"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output Processing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Validate extracted text"}),"\n",(0,s.jsx)(n.li,{children:"Handle empty or invalid results"}),"\n",(0,s.jsx)(n.li,{children:"Consider text length limits"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Integration Tips"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Chain with other text processing tasks"}),"\n",(0,s.jsx)(n.li,{children:"Implement error handling"}),"\n",(0,s.jsx)(n.li,{children:"Consider caching strategies"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"common-combinations",children:"Common Combinations"}),"\n",(0,s.jsx)(n.p,{children:"The Web Extract Text task works well with other task types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"web.download"})," for fetching content"]}),"\n",(0,s.jsx)(n.li,{children:"Text analysis tasks"}),"\n",(0,s.jsx)(n.li,{children:"AI processing tasks"}),"\n",(0,s.jsx)(n.li,{children:"Content transformation tasks"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For an example of combining tasks, see our ",(0,s.jsx)(n.a,{href:"/blog/workflow-to-summarize-webpage-content-via-api",children:"Webpage Content Summarization"})," tutorial."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Consider enhancing your text extraction workflows by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adding text analysis capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Implementing content filtering"}),"\n",(0,s.jsx)(n.li,{children:"Creating custom text processing pipelines"}),"\n",(0,s.jsx)(n.li,{children:"Integrating with AI services"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information about the Web Extract Text task type, refer to our ",(0,s.jsx)(n.a,{href:"/docs/task-types/web-extract-text",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"The Web Extract Text task type is an essential tool for converting HTML content into clean, processable text. Whether you're building content analysis tools, data mining systems, or text processing pipelines, this task type provides the foundation for effective text extraction and processing."}),"\n",(0,s.jsxs)(n.p,{children:["For more examples and detailed documentation, visit our ",(0,s.jsx)(n.a,{href:"/docs",children:"Documentation Portal"}),"."]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}},8331:e=>{e.exports=JSON.parse('{"permalink":"/blog/workflow-task-to-extract-text-from-webpage-via-api","source":"@site/blog/workflow-task-to-extract-text-from-webpage-via-api/index.md","title":"Workflow Task to Extract Text from Webpage via API","description":"Learn how to use the Web Extract Text task type to extract clean, readable text from webpage HTML content through the DataFlow Platform\'s API. This tutorial demonstrates how to integrate text extraction capabilities into your automated workflows.","date":"2025-02-08T21:56:40.000Z","tags":[{"inline":false,"label":"Workflows","permalink":"/blog/tags/workflows","description":"Articles about building, managing, and optimizing workflows"},{"inline":false,"label":"Data Integration","permalink":"/blog/tags/data-integration","description":"Content focusing on connecting different data sources"},{"inline":false,"label":"Data Flow","permalink":"/blog/tags/data-flow","description":"Articles about the movement and transformation of data within a system or between systems."},{"inline":false,"label":"Integrations","permalink":"/blog/tags/integrations","description":"Articles about building, managing, and optimizing integrations"},{"inline":false,"label":"API","permalink":"/blog/tags/api","description":"Content related to API usage and integrations"},{"inline":false,"label":"Automation","permalink":"/blog/tags/automation","description":"Content about automating data processes"},{"inline":false,"label":"Use Cases","permalink":"/blog/tags/use-cases","description":"Real-world examples of how the Data Flow Platform is used"},{"inline":false,"label":"Web Tasks","permalink":"/blog/tags/web-tasks","description":"Articles about web tasks and how to use them in workflows"},{"inline":false,"label":"Content Processing","permalink":"/blog/tags/content-processing","description":"Articles about processing and transforming content"}],"readingTime":2.885,"hasTruncateMarker":true,"authors":[{"name":"Kanan Rahimov","title":"AppBaza","url":"https://github.com/KenanBek","page":{"permalink":"/blog/authors/kenanbek"},"socials":{"github":"https://github.com/KenanBek","newsletter":"https://codervlogger.com","x":"https://x.com/KenanBekk"},"imageURL":"https://github.com/KenanBek.png","key":"kenanbek"}],"frontMatter":{"slug":"workflow-task-to-extract-text-from-webpage-via-api","title":"Workflow Task to Extract Text from Webpage via API","authors":["kenanbek"],"tags":["workflows","data-integration","data-flow","integrations","api","automation","use-cases","web-tasks","content-processing"]},"unlisted":false,"nextItem":{"title":"Workflow Task to Download Webpage via API","permalink":"/blog/workflow-task-to-download-webpage-via-api"}}')}}]);