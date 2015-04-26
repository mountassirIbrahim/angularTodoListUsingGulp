"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(function(o){o.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}),angular.module("clientApp").controller("AboutCtrl",function(){}),angular.module("clientApp").controller("MainCtrl",function(o,t,e){o.showEdit=!1,o.todos=[];var n=angular.copy(o.userForm);t.infoTodoService().then(function(t){o.todos=t}),o.showAddForm=function(){o.showEdit=!1},o.addTodo=function(){o.userForm.$valid&&(t.addTodoService(o.user.todo,o.user.todoDetails).then(function(t){o.todos.push(t)}),o.user=angular.copy(n),o.userForm.$setPristine())},o.showDetails=function(){o.showInfo=!0},o.removeTodo=function(o){t.removeTodoService(o).then(function(){e.reload()})},o.showEditForm=function(t,e,n){o.user={todo:e},o.idItem=t,o.index=n,o.showEdit=!0},o.editTodoDetails=function(e,i){o.userForm.$valid&&(t.editTodoService(e,o.user.todoDetails).then(function(t){var e=t;o.todos[i]=e}),o.user=angular.copy(n),o.userForm.$setPristine())}}),angular.module("clientApp").service("Myservice",function(o,t){this.addTodoService=function(o,e){var n={todo:o,todoDetails:e};return t.post("/todoList",n).then(function(o){return o.data})},this.infoTodoService=function(){return t.get("/todoList").then(function(o){return o.data})},this.removeTodoService=function(o){return t["delete"]("/todoList?idTodo="+o).then(function(o){return o.data})},this.editTodoService=function(o,e){var n={id:o,todoDetails:e};return t.put("/todoList",n).then(function(o){return o.data})}});