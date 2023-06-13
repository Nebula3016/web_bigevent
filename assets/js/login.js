$(function() {
  // 点击 跳转注册账号的链接
  $('#link_reg').on('click', function() {
    $('.login_box').hide()
    $('.reg_box').show()
  })

  // 点击 跳转登录账号的链接
  $('#link_login').on('click', function() {
    $('.reg_box').hide()
    $('.login_box').show()
  })

  // 获取 layui中的 form对象
  let form = layui.form
  // 自定义表单正则规则
  form.verify({
    // password: function(value, item) {
    //   if(!new RegExp('/^[\S]{6,12}$/').test(value)) {
    //     return '密码必须为6到12位的非空字符'
    //   }
    // },
    password: [/^[\S]{6,12}$/, '密码必须为6到12位的非空字符'],
    
    // 校验两次密码是否一致的规则
    repassword: function(value) {
      let password = $('.reg_box input[name="password"]').val()
      console.log(password)
      if(value !== password) {
        return '两次密码不一致！'
      }
    }
  })

  // 监听注册表单的提交事件
  
})