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
  $('#form_reg').on('submit', function(e) {
    e.preventDefault()
    let data = {
      username: $('#form_reg input[name="username"]').val(),
      password: $('#form_reg input[name="password"]')[1].value
    }
    $.post('/api/reguser', data, function(res) {
      if(res.status !== 0) return alert(res.message)
      console.log(layer)
      layer.msg('注册成功，请登录！')
      $('#link_login').click()
    })
  })
})

// 监听登录表单的提交事件
$('#form_login').on('submit', function(e) {
  e.preventDefault()
  $.ajax({
    url: '/api/login',
    method: 'POST',
    data: $(this).serialize(),
    success: function(res) {
      console.log(res.status)
      if(res.status !== 0) return layer.msg('登录失败！')
      layer.msg('登录成功')
      localStorage.setItem('token', res.token)
      location.href = '/index.html'
    }
  })
})