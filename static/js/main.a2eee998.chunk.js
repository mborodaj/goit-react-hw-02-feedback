(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={statisticsList:"Statistics_statisticsList__1BQbH",statisticsListItem:"Statistics_statisticsListItem__2uN3M",textOrange:"Statistics_textOrange__39n7C"}},15:function(t,e,a){},16:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),n=a(4),i=a.n(n),r=(a(15),a(5)),o=a(6),l=a(7),d=a(10),b=a(9),j=(a(16),a(0)),u=function(t){var e=t.title,a=t.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:e}),a]})},h=a(1),O=a.n(h),x=function(t){var e=t.good,a=t.neutral,s=t.bad,c=t.total,n=t.positivePercentage;return console.log(c),Object(j.jsxs)("ul",{className:O.a.statisticsList,children:[Object(j.jsxs)("li",{className:O.a.statisticsListItem,children:["Good: ",Object(j.jsx)("span",{className:O.a.textOrange,children:e})]}),Object(j.jsxs)("li",{className:O.a.statisticsListItem,children:["Neutral: ",Object(j.jsx)("span",{className:O.a.textOrange,children:a})]}),Object(j.jsxs)("li",{className:O.a.statisticsListItem,children:["Bad: ",Object(j.jsx)("span",{className:O.a.textOrange,children:s})]}),Object(j.jsxs)("li",{className:O.a.statisticsListItem,children:["Total: ",Object(j.jsx)("span",{className:O.a.textOrange,children:c})]}),Object(j.jsxs)("li",{className:O.a.statisticsListItem,children:["Positive feedback:"," ",Object(j.jsxs)("span",{className:O.a.textOrange,children:[n,"%"]})]})]})},g=a(8),f=a.n(g),m=function(t){var e=t.options,a=t.onLeaveFeedback,s=Object.keys(e);return Object(j.jsx)(j.Fragment,{children:s.map((function(t){return Object(j.jsx)("button",{type:"button",className:f.a.feedbackButton,onClick:a,children:t},t)}))})},k=function(t){var e=t.text;return Object(j.jsx)("p",{children:e})},p=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.hendleFeedback=function(e){var a=e.target.textContent;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good/(t.state.good+t.state.bad)*100;return"".concat(Math.round(e))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad,c=this.countTotalFeedback();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Please leave feedback",children:Object(j.jsx)(m,{options:this.state,onLeaveFeedback:this.hendleFeedback})}),Object(j.jsx)(u,{title:"Statistics",children:c>0?Object(j.jsx)(x,{good:e,neutral:a,bad:s,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(k,{text:"Please give your feedback"})})]})}}]),a}(s.Component);a(18);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={feedbackButton:"FeedbackOptions_feedbackButton__30qEP"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a2eee998.chunk.js.map