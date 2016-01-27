function Paint()
{
  var dotColor = "";
  dotColor = dotColor.concat("rgba(0,0,0,", 1 / _d_op, ")");
  var rectangle = canvas.display.rectangle({
	x: _d_x * _dot_size,
	y: _d_y * _dot_size,
	width: _dot_size,
	height: _dot_size,
	fill: dotColor
  });

  canvas.addChild(rectangle);


}

function goRight()
{
  if(_d_x + 1 <= _max_x)
    _d_x += 1;
}

function goLeft()
{
  if(_d_x - 1 >= 0)
    _d_x -= 1;
}

function goDown()
{
  if(_d_y + 1 <= _max_y)
    _d_y += 1;
}

function goUp()
{
  if(_d_y - 1 >= 0)
    _d_y -= 1;
}

function goToOrigin()
{
  _d_x = 0;
  _d_y = 0;
}

function nextColor()
{
  if(_d_op +1 > 4)
    _d_op = 1;
  else
    _d_op += 1;
}
