var input1='<span style="font-size:25px;">y=</span><select name="a" style="width:60px;height:40px;font-size:20px;">';
for(var i=1;i<=10;i++) input1=input1+'<option value="'+i+'">'+i+'</option>';
input1=input1+'</select>';
$('.input').html(input1);
$('.input').append('<span style="font-size:25px;">sin</span>');
var input2='<select name="b" style="width:60px;height:40px;font-size:20px;">';
for(var i=1;i<=10;i++) input2=input2+'<option value="'+i+'">'+i+'</option>';
input2=input2+'</select>';
$('.input').append(input2);
$('.input').append('<span style="font-size:25px;">(x-</span>');
var input3='<select name="c" style="width:60px;height:40px;font-size:20px;">';
for(var i=0;i<=10;i++) input3=input3+'<option value="'+i+'">'+i+'</option>';
input3=input3+'</select>';
$('.input').append(input3);
$('.input').append('<span style="font-size:25px;">)+</span>');
var input4='<select name="d" style="width:70px;height:40px;font-size:20px;">';
for(var i=-10;i<=10;i++) input4=input4+'<option value="'+i+'">'+i+'</option>';
input4=input4+'</select>';
$('.input').append(input4);


////////////////////////////////////////////////////////////////////////////////////////


$('#a').click(function(){
	var input1='<span style="font-size:25px;">y=</span><select name="a" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input1=input1+'<option value="'+i+'">'+i+'</option>';
	input1=input1+'</select>';
	$('.input').html(input1);
	$('.input').append('<span style="font-size:25px;">sin</span>');
	var input2='<select name="b" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input2=input2+'<option value="'+i+'">'+i+'</option>';
	input2=input2+'</select>';
	$('.input').append(input2);
	$('.input').append('<span style="font-size:25px;">(x-</span>');
	var input3='<select name="c" style="width:60px;height:40px;font-size:20px;">';
	for(var i=0;i<=10;i++) input3=input3+'<option value="'+i+'">'+i+'</option>';
	input3=input3+'</select>';
	$('.input').append(input3);
	$('.input').append('<span style="font-size:25px;">)+</span>');
	var input4='<select name="d" style="width:70px;height:40px;font-size:20px;">';
	for(var i=-10;i<=10;i++) input4=input4+'<option value="'+i+'">'+i+'</option>';
	input4=input4+'</select>';
	$('.input').append(input4);
	$('.type_check').val('sin');
});
$('#b').click(function(){
	var input1='<span style="font-size:25px;">y=</span><select name="a" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input1=input1+'<option value="'+i+'">'+i+'</option>';
	input1=input1+'</select>';
	$('.input').html(input1);
	$('.input').append('<span style="font-size:25px;">cos</span>');
	var input2='<select name="b" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input2=input2+'<option value="'+i+'">'+i+'</option>';
	input2=input2+'</select>';
	$('.input').append(input2);
	$('.input').append('<span style="font-size:25px;">(x-</span>');
	var input3='<select name="c" style="width:60px;height:40px;font-size:20px;">';
	for(var i=0;i<=10;i++) input3=input3+'<option value="'+i+'">'+i+'</option>';
	input3=input3+'</select>';
	$('.input').append(input3);
	$('.input').append('<span style="font-size:25px;">)+</span>');
	var input4='<select name="d" style="width:70px;height:40px;font-size:20px;">';
	for(var i=-10;i<=10;i++) input4=input4+'<option value="'+i+'">'+i+'</option>';
	input4=input4+'</select>';
	$('.input').append(input4);
	$('.type_check').val('cos');
});
$('#c').click(function(){
	var input1='<span style="font-size:25px;">y=</span><select name="a" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input1=input1+'<option value="'+i+'">'+i+'</option>';
	input1=input1+'</select>';
	$('.input').html(input1);
	$('.input').append('<span style="font-size:25px;">tan</span>');
	var input2='<select name="b" style="width:60px;height:40px;font-size:20px;">';
	for(var i=1;i<=10;i++) input2=input2+'<option value="'+i+'">'+i+'</option>';
	input2=input2+'</select>';
	$('.input').append(input2);
	$('.input').append('<span style="font-size:25px;">(x-</span>');
	var input3='<select name="c" style="width:60px;height:40px;font-size:20px;">';
	for(var i=0;i<=10;i++) input3=input3+'<option value="'+i+'">'+i+'</option>';
	input3=input3+'</select>';
	$('.input').append(input3);
	$('.input').append('<span style="font-size:25px;">)+</span>');
	var input4='<select name="d" style="width:70px;height:40px;font-size:20px;">';
	for(var i=-10;i<=10;i++) input4=input4+'<option value="'+i+'">'+i+'</option>';
	input4=input4+'</select>';
	$('.input').append(input4);
	$('.type_check').val('tan');
});