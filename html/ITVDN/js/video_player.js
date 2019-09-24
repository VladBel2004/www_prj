video = document.getElementById('my_video_1');
can = true;
can_fullscreen = true;

document.addEventListener('keydown', function(a){
				
	if(a.keyCode == '83')
	{
		switch(can){
			case false:
				can = true;
				video.play();
				break;
			case true:
				can = false;
				video.pause();
				break;
		}
	}

});

$(document).ready(function(){

	$("#back").click(function(){

		$.ajax({
			type: "POST",
			data: "arg=default_page",
			url: "set_page.php",
			error: function(data){
				alert("Error: " +  data);
      },
      success: function(a){
        location.reload();
      }
		})
	});
});




cookie = get_cookie()
text = get_text(cookie)
number = get_number(cookie)

if(text == "html_and_css_")
{
  deactivate(number, 9);
}
else if(text == "jss_")
{
  deactivate(number, 7);
}
else if(text == "jse_")
{
  deactivate(number, 11);
}
else if(text == "asps_")
{
  deactivate(number, 10);
}
else if(text == "aspe_")
{
  deactivate(number, 9);
}
else if(text == "aspmvc_")
{
  deactivate(number, 7);
}
else if(text == "aspcore_")
{
  deactivate(number, 11);
}
else if(text == "phps_")
{
  deactivate(number, 16);
}
else if(text == "phpe_")
{
  deactivate(number, 13);
}
else if(text == "laravel_")
{
  deactivate(number, 10);
}






document.getElementById('right').addEventListener('click', function(a){

  set_cookie('+');

});

document.getElementById('left').addEventListener('click', function(a){

  set_cookie('-');

});


function searchValue(value, array)
{
  for(i = 0; i < array.length; i++)
  {
    if(array[0][0] == value)
    {
      return i;
    }
  }
  return false;
}

function getArray(arg)
{
  array = arg.split('; ');
  for(i = 0; i < array.length; i++)
  {
    array[i] = array[i].split('=');
  }
  return array;
}

function set_cookie(arg)
{
  ckval = get_cookie();

  if(/[0-9]+/.test(ckval))
  { 
    number = get_number(ckval);
    text = get_text(ckval);
    new_cookie = "";

    if(arg == '+')
    {
      ++number;
    }
    else if(arg == '-')
    {
      --number;
    }
    else
    {
      alert('argument uncurrent');
    }


    if(number >= 1)
    {
      new_cookie = text + number;

      $.ajax({
        data: "cookie=" + new_cookie,
        type: "POST",
        url: "setcookie.php",
        success: function(a){
          location.reload();
        }
      });
    }
  }
  else
  {
    alert('cookie\'s value is not currect.');
  }
}

function get_number(string)
{
  numbes_array = string.match(/[0-9]/g);
  number = "";

  for(i = 0; i < numbes_array.length; i++)
  {
    number += numbes_array[i];
  }

  return number;
}

function get_cookie()
{
  cookie = getArray(document.cookie);
  ckval = cookie[searchValue('cookie_itvdn', cookie)][1];

  return ckval;
}

function get_text(string)
{
  array_number_of_end_text = ckval.search(/[0-9]+/);
  text = "";

  for(i = 0; i < array_number_of_end_text; i++)
  {
    text += string[i];
  }

  return text;
}

function deactivate(number, deact_number)
{
  if(number <= 1)
  {
    $('#left').hide();
  }
  else if(number >= deact_number)
  {
    $('#right').hide();
  }
}
