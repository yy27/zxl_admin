$(function(){
	$('#login').click(function(){
		back_login();
	})
});
function back_login(){
	var name = $('#name').val();
	var password = $('#password').val();
	if(name.length == 0){
		$('#msg').text('你的用户名是丢了吗！');
	} else {
		$.ajax({
			type:'POST',
			url:'./function/login.php',
			data:{'name':name,'password':password},
			dataType:'json',
			success:function(data){
				switch (data.result){
					case 1:
						$('#msg').empty().text('登录成功！');
						break;
					case 0:
						$('#msg').empty().text('密码不对！');
						break;
					case -1:
						$('#msg').empty().text('用户不存在！');
						break;

				}
			},
			error:function(){
				$('#msg').empty().text('登录失败！请联系管理员');
			}
		})
	}
	
}