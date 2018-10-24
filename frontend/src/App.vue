<template>
  <div class="page" id="app">
    <div class="sidebar">
      <div class="sidebar-head"><img src="./assets/portal.png" class="portal-img"/> Portal</div>
      <div class="sidebar-item"><router-link to="/">Home</router-link></div>
      <div class="sidebar-item"><router-link to="/uninstall">Uninstall Rates</router-link></div>
      <div class="sidebar-item"><router-link to="/retention">Retention Rates</router-link></div>
      <div class="sidebar-item"><router-link to="/installs">Installs</router-link></div>
      <div class="sidebar-item"><router-link to="/revenue">Revenue</router-link></div>
      <div class="sidebar-item"><router-link to="/stats">Live Daily Stats</router-link></div>
    </div>
    <div class="header">
      <div class="header-left">
      </div>
      <div class="header-right">
        <span>Share</span>
        &nbsp; | &nbsp;
        <span>Export</span>
        &nbsp; | &nbsp;
        <span>Login</span>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
}

.page {
  display: grid;
  grid-template-rows: 45px auto;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #f3f3f3;
  color: #383838;
  outline: 1px solid #000000;
}

.sidebar-head {
  padding: 10px;
  text-align: left;
  font-size: 22pt;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.portal-img {
  vertical-align: -10px;
  width: 40px;
  height: 40px;
  padding-right: -5px;
}

.sidebar-item {
  padding: 5px;
  padding-top: 15px;
}

.sidebar-item a {
  font-weight: bold;
  color: #383838;
}

.sidebar-item a.router-link-exact-active {
  color: #383838;
  text-decoration: none;
}

.header {
  display: grid;
  background-color: #1e2851;
  grid-template-columns: 50% 50%;
  color: #ffffff;
  font-size: 11pt;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.header-left {
  text-align: left;
  vertical-align: middle;
  margin-top: 11px;
  margin-left: 10px;
}

.header-right {
  text-align: right;
  vertical-align: middle;
  margin-top: 11px;
  margin-right: 10px;
}

.content {
  overflow: auto;
}
</style>
