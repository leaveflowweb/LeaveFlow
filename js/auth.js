const USERS_KEY="leaveflow_users",SESSION_KEY="leaveflow_current",REQUESTS_KEY="leaveflow_requests";
function getUsers(){return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}
function getCurrentUser(){const id=localStorage.getItem(SESSION_KEY);return getUsers().find(u=>u.id===id)||null}
function getRequests(){return JSON.parse(localStorage.getItem(REQUESTS_KEY)||"[]")}
function saveUsers(users){localStorage.setItem(USERS_KEY,JSON.stringify(users))}
function seedDemo(){let users=getUsers();if(!users.some(u=>u.username==="demo")){users.push({id:"demo-user",fullName:"Sarah Ahmed",employeeId:"DEMO-001",department:"IT",email:"sarah@example.com",username:"demo",password:"demo123"});saveUsers(users)}}
function alertBox(message,type="danger"){const box=document.getElementById("formAlert");if(box)box.innerHTML=`<div class="alert alert-${type}" role="alert">${message}</div>`}
function requireLogin(){seedDemo();if(!getCurrentUser()){location.href="login.html";return false}return true}
function logout(){localStorage.removeItem(SESSION_KEY);location.href="login.html"}
document.addEventListener("DOMContentLoaded",()=>{
 seedDemo();
 document.querySelectorAll("[data-logout]").forEach(b=>b.addEventListener("click",logout));
 const user=getCurrentUser();const name=document.getElementById("topUserName"),avatar=document.getElementById("topAvatar");
 if(user&&name){name.textContent=user.fullName;if(avatar)avatar.textContent=user.fullName.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}
 const login=document.getElementById("loginForm");if(login)login.addEventListener("submit",e=>{e.preventDefault();const username=document.getElementById("username").value.trim().toLowerCase(),password=document.getElementById("password").value;const u=getUsers().find(x=>x.username.toLowerCase()===username&&x.password===password);if(!u){alertBox(t("loginError"));return}localStorage.setItem(SESSION_KEY,u.id);location.href="dashboard.html"});
 const reg=document.getElementById("registerForm");if(reg)reg.addEventListener("submit",e=>{e.preventDefault();const user={id:"u-"+Date.now(),fullName:document.getElementById("fullName").value.trim(),employeeId:document.getElementById("employeeId").value.trim(),department:document.getElementById("department").value,email:document.getElementById("email").value.trim(),username:document.getElementById("username").value.trim(),password:document.getElementById("password").value};if(!user.fullName||!user.employeeId||!user.department||!user.email||!user.username||!user.password){alertBox(t("requiredFields"));return}const users=getUsers();if(users.some(x=>x.username.toLowerCase()===user.username.toLowerCase())){alertBox(t("duplicateUser"));return}if(users.some(x=>x.employeeId.toLowerCase()===user.employeeId.toLowerCase())){alertBox(t("duplicateId"));return}users.push(user);saveUsers(users);alertBox(t("registerSuccess"),"success");reg.reset()});
 const menu=document.getElementById("menuToggle");if(menu)menu.addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("mobile-open"));
});