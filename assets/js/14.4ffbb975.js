(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{450:function(e,s,r){"use strict";r.r(s);var t=r(2),n=Object(t.a)({},(function(){var e=this._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h4",{attrs:{id:"_1-rest-ful-风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-rest-ful-风格"}},[this._v("#")]),this._v(" 1 REST FUL 风格")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1. 获取单个用户：GET /users/getUser?id=123\n2. 创建用户：POST /users/createUser\n3. 更新用户：PUT /users/updateUser\n4. 删除用户：DELETE /users/{id}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('@RestController\n@RequestMapping("/users")\npublic class UserController {\n\n    @Autowired\n    private UserService userService;\n\n\n    // 获取用户\n    @GetMapping("/getUser")\n    public User getUser(@RequestParam("id") Long id) {\n        return userService.getUser(id);\n    }\n\n    // 创建用户\n    @PostMapping\n    public User createUser(@RequestBody User user) {\n        return userService.createUser(user);\n    }\n\n    // 更新用户\n    @PutMapping("/updateUser)\n    public User updateUser(@RequestBody User user) {\n        return userService.updateUser(user);\n    }\n    \n    // 更新单个用户\n    @PutMapping("/{id}")\n    public User updateUser(@PathVariable("id") Long id) {\n        return userService.updateUser(id);\n    }\n\n\n    // 删除用户\n    @DeleteMapping("/{id}")\n    public void deleteUser(@PathVariable("id") Long id) {\n        userService.deleteUser(id);\n    }\n}\n\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);