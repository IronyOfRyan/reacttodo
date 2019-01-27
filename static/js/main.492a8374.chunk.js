(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5401:function(e,t,n){e.exports=n(5530)},5412:function(e,t,n){},5526:function(e,t,n){},5530:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(35),i=n.n(r),l=n(29),c=n(22),d=n(97),s=n(16),u=n(96),p=n.n(u),m={items:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=p()(),a={task:t.task,id:n,isCompleted:!1};return Object(s.a)({},e,{items:[].concat(Object(d.a)(e.items),[a])});case"DELETE_TODO":var o=e.items.filter(function(e){return e.id!==t.id});return Object(s.a)({},e,{items:o});case"TOGGLE_TODO":var r=e.items.map(function(e){return e.id===t.id&&(e.isCompleted=!e.isCompleted),e});return Object(s.a)({},e,{items:r});case"EDIT_TODO":var i=e.items.find(function(e){return e.id===t.id});return Object(s.a)({},e,{editingTodo:i});case"SAVE_EDITED_TODO":var l=e.items.map(function(e){return e.id===t.modifiedTodo.id&&(e.task=t.modifiedTodo.task),e});return Object(s.a)({},e,{items:l,editingTodo:{}});case"CANCEL_EDIT_TODO":return e.items.length?Object(s.a)({},e,{editingTodo:{}}):Object(s.a)({},e);case"CLEAR_COMPLETED":var c=e.items.filter(function(e){return e.isCompleted!==t.checked});return Object(s.a)({},e,{items:c});default:return e}},E="SHOW_ALL",f="SHOW_COMPLETED",g="SHOW_ACTIVE",O=E,T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},b=Object(l.b)({todos:h,visibilityFilter:T}),y=n(11),v=n(12),C=n(14),k=n(13),S=n(15),D=(n(5412),n(5)),j=n(44),_=n.n(j),A=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).state={task:""},n.handleChange=function(e){n.setState({task:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.task.length>=50?n.state.task.slice(0,50)+"...":n.state.task;n.props.handleAddTodo(t),n.setState({task:""})},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"formContent"},o.a.createElement("div",null,o.a.createElement(D.f,null,o.a.createElement("label",{htmlFor:"task"}),o.a.createElement(D.e,{style:{width:"450px",margin:"0 auto",backgroundColor:"grey"},value:this.state.task,onChange:this.handleChange,id:"newTaskInput",placeholder:"...Enter A Todo",required:!0})),o.a.createElement("div",null,o.a.createElement(D.c,{type:"submit",margin:"normal",id:"submitButton",color:"inherit"},o.a.createElement(_.a,{style:{marginRight:"4px"}})," ","Add Todo"))))}}]),t}(a.Component),w=n(30),x=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).state={todoVal:n.props.item.task},n.componentDidMount=function(){return window.addEventListener("keyup",n.handleKeyUp)},n.handleKeyUp=function(e){"Escape"===e.code&&n.props.handleEditCancel(e)},n.handleChange=function(e){n.setState({todoVal:e.target.value})},n.handleEditAndResetForm=function(e){e.preventDefault();var t=n.state.todoVal.length>=55?n.state.todoVal.slice(0,55)+"...":n.state.todoVal;return n.props.handleSaveEdit(Object(s.a)({},n.props.item,{task:t})),n.setState({todoVal:""})},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(D.j,{key:this.state.todoVal,className:"todoForm",style:{margin:"10px",backgroundColor:"lightgrey",borderRadius:"5px"}},o.a.createElement("form",{onSubmit:this.handleEditAndResetForm},o.a.createElement("div",{className:"form-row",style:{marginLeft:"10px"}},o.a.createElement(D.f,{className:"col"},o.a.createElement(D.g,null,"Edit Todo or Cancel"),o.a.createElement(D.h,{style:{marginBottom:"5px",width:"600px"},name:"edit-item",value:this.state.todoVal,onChange:this.handleChange,id:"editedTodo",autoFocus:!0,required:!0}))," ",o.a.createElement("div",{style:{},className:"col-auto"},o.a.createElement(D.c,{style:{marginRight:"10px"},variant:"contained",type:"submit",className:"todoFomSubmit",disabled:!this.state.todoVal},o.a.createElement(w.b,{style:{marginLeft:"0",fontSize:25},color:"inherit"})),o.a.createElement(D.c,{variant:"contained",className:"todoFormCancel",onClick:this.props.handleEditCancel},o.a.createElement(w.a,{style:{marginLeft:"0",fontSize:25},color:"inherit"}))))))}}]),t}(a.Component),L=function(e){return o.a.createElement("div",{className:"todoButtons"},o.a.createElement(D.c,{variant:"contained",style:{marginRight:"10px"}},o.a.createElement(w.d,{className:"editButton",onClick:function(){return e.handleSelectEditTodo(e.id)},style:{fontSize:25}})),o.a.createElement(D.c,{variant:"contained"},o.a.createElement(w.c,{className:"deleteButton",style:{marginLeft:"0",fontSize:25},variant:"contained",color:"inherit",onClick:function(){return e.handleDeleteTodo(e.id)}})))},I=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).state={displayButtons:!1},n.setDisplayButtons=function(e){n.state.displayButtons!==e&&n.setState({displayButtons:e})},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(D.j,{onMouseEnter:function(){return e.setDisplayButtons(!0)},onMouseLeave:function(){return e.setDisplayButtons(!1)},id:this.props.item.id,key:this.props.item.id,style:{margin:"10px",backgroundColor:"lightgrey",borderRadius:"5px"},className:"item-li"},o.a.createElement(D.d,{onChange:function(){return e.props.handleTodoToggle(e.props.item.id)},id:"todoCheckbox",style:{backgroundColor:"rgb(141, 44, 44)"},color:"default",checked:this.props.item.isCompleted})," ",o.a.createElement(D.k,{primary:this.props.item.task,style:{textDecoration:this.props.item.isCompleted?"line-through":"none",opacity:this.props.item.isCompleted?".3":"1"}})," ",!0===this.state.displayButtons?o.a.createElement(L,{id:this.props.item.id,handleDeleteTodo:this.props.handleDeleteTodo,handleSelectEditTodo:this.props.handleSelectEditTodo}):null)}}]),t}(a.Component),N=n(28),B=n.n(N),V=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).someOrAll=function(){return n.props.items.filter(function(e){return!0===e.isCompleted}).length>=1?o.a.createElement(B.a,{className:"clearButton",style:{marginLeft:"10px",backgroundColor:"lightgrey"},variant:"contained",color:"inherit",onClick:function(){return n.props.handleClearChecked(!0)},id:"clearButton"},"Delete Selected items"):void 0},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{}},this.someOrAll())}}]),t}(a.Component),R=function(e){var t=e.active,n=e.children,a=e.onClick;return o.a.createElement(B.a,{variant:"contained",onClick:a,disabled:t,style:{marginLeft:"10px"}},n)},F=Object(c.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(R),M=function(){return o.a.createElement("div",{style:{margin:"10px"}},o.a.createElement("span",null,"Show: "),o.a.createElement(F,{filter:E},"All"),o.a.createElement(F,{filter:g},"Active"),o.a.createElement(F,{filter:f},"Completed"))},H=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todoApp",style:{marginBottom:"55px"}},o.a.createElement("div",null,o.a.createElement(A,{handleAddTodo:this.props.handleAddTodo})),o.a.createElement(D.i,{style:{width:"800px",margin:"0 auto"}},o.a.createElement("div",{style:{height:"75px"}},o.a.createElement(M,null),o.a.createElement(V,{handleClearChecked:this.props.handleClearChecked,items:this.props.items})),o.a.createElement("div",{className:"todoList"},this.props.items.map(function(t){return o.a.createElement("div",{key:t.id},e.props.editingTodo.id===t.id?o.a.createElement(x,{item:e.props.editingTodo,handleSaveEdit:e.props.handleSaveEdit,handleEditCancel:e.props.handleEditCancel}):o.a.createElement(I,{item:t,handleDeleteTodo:e.props.handleDeleteTodo,handleSelectEditTodo:e.props.handleSelectEditTodo,handleTodoToggle:e.props.handleTodoToggle}))}))))}}]),t}(a.Component);H.defaultProps={editingTodo:{}};var W=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.isCompleted});case"SHOW_ACTIVE":return e.filter(function(e){return!e.isCompleted});default:throw new Error("Unknown filter: "+t)}},z=Object(c.b)(function(e){return{items:W(e.todos.items,e.visibilityFilter)}})(H),P={textAlign:"center",backgroundColor:"grey",color:"black",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",borderTop:"1px solid #E7E7E7",padding:"10px",position:"fixed",left:"0",bottom:"0",height:"50px",width:"100%"},U=function(){return o.a.createElement(D.b,{style:P},o.a.createElement(D.k,{style:{fontSize:"20px"}},"Created with React, Redux and material-ui"))},G=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(D.a,{className:"appBar",style:{backgroundColor:"grey",color:"black"}}," TodoApp "),o.a.createElement(z,e),o.a.createElement(U,null))},J=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).handleAddTodo=function(e){return n.props.handleAddTodo(e)},n.handleDeleteTodo=function(e){return n.props.handleDeleteTodo(e)},n.handleTodoToggle=function(e){return n.props.handleTodoToggle(e)},n.handleSelectEditTodo=function(e){return n.props.handleSelectEditTodo(e)},n.handleSaveEdit=function(e){return n.props.handleSaveEdit(e)},n.handleEditCancel=function(e){return n.props.handleEditCancel(e)},n.handleClearChecked=function(e){return n.props.handleClearChecked(e)},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(G,this.props)}}]),t}(a.Component),X={handleAddTodo:function(e){return{type:"ADD_TODO",task:e}},handleDeleteTodo:function(e){return{type:"DELETE_TODO",id:e}},handleTodoToggle:function(e){return{type:"TOGGLE_TODO",id:e}},handleSelectEditTodo:function(e){return{type:"EDIT_TODO",id:e}},handleSaveEdit:function(e){return{type:"SAVE_EDITED_TODO",modifiedTodo:e}},handleEditCancel:function(){return{type:"CANCEL_EDIT_TODO",payload:{}}},handleClearChecked:function(e){return{type:"CLEAR_COMPLETED",checked:e}}},q=Object(c.b)(function(e){return{items:e.todos.items,editingTodo:e.todos.editingTodo}},X)(J),K=(n(5526),n(5528),function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}()),Y=Object(l.c)(b,K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Y.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}({todos:Y.getState().todos})}),i.a.render(o.a.createElement(c.a,{store:Y},o.a.createElement(q,null)),document.getElementById("root"))}},[[5401,2,1]]]);
//# sourceMappingURL=main.492a8374.chunk.js.map