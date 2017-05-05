function myFunction() {

  $name = document.getElementById('text').value;
  document.getElementById('display').innerHTML = $name;

  if ($name !== '') {
    alert('in if condition');
    document.getElementById('display').innerHTML = $name;
  } else {
    alert('outside else');
    $data = 'Field is empty.please enter the data';
    document.getElementById('display').innerHTML = $data;
  }
  console.log('inside the function');
}
