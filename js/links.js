//Creates links to individual modals, such that open using the link with the modal name
//the website will open with the modal already open

$(document).ready(function() {

  if(window.location.href.indexOf('#IvaniModal') != -1) {
    $('#IvaniModal').modal('show');
  }

});
