"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7082],{7259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"task-types/video-extract-audio","title":"Video / Extract Audio","description":"Workflow task type to extract the audio from a video.","source":"@site/docs/task-types/video-extract-audio.md","sourceDirName":"task-types","slug":"/task-types/video-extract-audio","permalink":"/docs/task-types/video-extract-audio","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Video / Extract Audio","slug":"video-extract-audio"},"sidebar":"documentationSidebar","previous":{"title":"OpenAI / Completion","permalink":"/docs/task-types/openai-completion"},"next":{"title":"Youtube / Download","permalink":"/docs/task-types/youtube-download"}}');var i=n(4848),a=n(8453);const d={title:"Video / Extract Audio",slug:"video-extract-audio"},s="Extract Audio from Video",r={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"extract-audio-from-video",children:"Extract Audio from Video"})}),"\n",(0,i.jsx)(t.p,{children:"Workflow task type to extract the audio from a video."}),"\n",(0,i.jsx)(t.h2,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"video"}),": The video content to extract the audio from (",(0,i.jsx)(t.strong,{children:"required input"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"outputs",children:"Outputs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"audio"}),": The extracted audio content (",(0,i.jsx)(t.strong,{children:"default output"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "extract_audio",\n  "type": "video.extract_audio",\n  "inputs": {\n    "video": "{{inputs.video}}"\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This example assumes that the workflow has an input named ",(0,i.jsx)(t.code,{children:"video"})," that contains a video file."]}),"\n",(0,i.jsx)(t.h1,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "specification": {\n    "type": "video.extract_audio",\n    "category": "video",\n    "description": "Extract the audio from a video",\n    "inputs": [\n      {\n        "name": "video",\n        "type": "file",\n        "required": true,\n        "description": "The video content to extract the audio from",\n        "example": "<<video file>>"\n      }\n    ],\n    "outputs": [\n      {\n        "name": "audio",\n        "type": "file",\n        "default": true,\n        "description": "The extracted audio content.",\n        "example": "<<audio file>>"\n      }\n    ]\n  }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function d(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);