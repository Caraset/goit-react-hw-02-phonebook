(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={contacts:"Contacts_contacts__2YkNQ",contacts__list:"Contacts_contacts__list__2L1J4",contacts__nothingText:"Contacts_contacts__nothingText__2MwUn",contacts__item:"Contacts_contacts__item__JeiIS",contacts__text:"Contacts_contacts__text__nzj_Y",contacts__btn:"Contacts_contacts__btn__iy-Fd"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(18),n(13)),i=n(4),l=n(5),_=n(7),u=n(6),m=n(12),b=n(22),d=n(3),f=n.n(d),p=n(0),h=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.onFormSubmit=function(e){e.preventDefault();var n=e.currentTarget.name.value,a=e.currentTarget.number.value;t.props.onSubmit({name:n,number:a,id:Object(b.a)()}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.onFormSubmit,children:[Object(p.jsxs)("label",{className:f.a.form__label,children:["Name",Object(p.jsx)("input",{className:f.a.form__input,onChange:this.onInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e}),Object(p.jsxs)("label",{className:f.a.form__label,children:["Number",Object(p.jsx)("input",{className:f.a.form__input,onChange:this.onInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n})]})]}),Object(p.jsx)("button",{className:f.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),j=h,v=n(8),x=n.n(v);var O=function(t){var e=t.onInputChange,n=t.filterValue;return Object(p.jsxs)("div",{className:x.a.filter,children:[Object(p.jsx)("p",{className:x.a.filter__title,children:"Find contacts by name"}),Object(p.jsx)("input",{className:x.a.filter__input,type:"text",name:"filter",onChange:e,value:n})]})},C=n(2),g=n.n(C);var N=function(t){var e=t.contacts,n=t.filteredContacts,a=t.removeHandler;return Object(p.jsx)("div",{className:g.a.contacts,children:0===e.length?Object(p.jsx)("p",{className:g.a.contacts__nothingText,children:"No contacts added"}):Object(p.jsx)("ul",{className:g.a.contacts__list,children:0===n.length?Object(p.jsx)("p",{className:g.a.contacts__nothingText,children:"Nothing found"}):n.map((function(t){return Object(p.jsxs)("li",{className:g.a.contacts__item,children:[Object(p.jsxs)("p",{className:g.a.contacts__text,children:[t.name,": ",t.number]}),Object(p.jsx)("button",{className:g.a.contacts__btn,type:"button",onClick:function(){return a(t.id)},children:"Delete"})]},t.id)}))})})},S=n(9),y=n.n(S),F=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onSubmit=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.removeContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t.onFilterChangeHandle=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(p.jsxs)("div",{className:y.a.app,children:[Object(p.jsx)("h1",{className:y.a.app__title,children:"Phonebook"}),Object(p.jsx)(j,{onSubmit:this.onSubmit}),Object(p.jsx)("h2",{className:y.a.app__title,children:"Contacts"}),Object(p.jsx)(O,{filterValue:this.state.filter,onInputChange:this.onFilterChangeHandle}),Object(p.jsx)(N,{contacts:this.state.contacts,filteredContacts:t,removeHandler:this.removeContact})]})}}]),n}(a.Component),A=F;o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"Form_form__1GUa2",form__label:"Form_form__label__4cMWS",form__input:"Form_form__input__SmXL-",form__button:"Form_form__button__2A0NJ"}},8:function(t,e,n){t.exports={filter:"Filter_filter__25OPe",filter__title:"Filter_filter__title__3ejv1",filter__input:"Filter_filter__input__2oRI9"}},9:function(t,e,n){t.exports={app:"App_app__3MI5J",app__title:"App_app__title__1OaYU"}}},[[20,1,2]]]);
//# sourceMappingURL=main.5db37d70.chunk.js.map