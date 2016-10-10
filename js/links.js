//Creates links to individual modals, such that open using the link with the modal name
//the website will open with the modal already open

$(document).ready(function() {

//Jobs Links to Modals
  if(window.location.href.indexOf('#IvaniModal') != -1) {
    $('#IvaniModal').modal('show');
    window.location.hash = "";
  }
  else if(window.location.href.indexOf('#ConnexinModal') != -1) {
    $('#ConnexinModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#BoxerModal') != -1) {
    $('#BoxerModal').modal('show');
    window.location.hash = "";

  }

//Project Links to Modals
  else if(window.location.href.indexOf('#EdwinModal') != -1) {
    $('#EdwinModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#AquaponicsModal') != -1) {
    $('#AquaponicsModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#CapnChickenModal') != -1) {
    $('#CapnChickenModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#ISIMModal') != -1) {
    $('#ISIMModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#LiteModal') != -1) {
    $('#LiteModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#2048Modal') != -1) {
    $('#2048Modal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#GetRealModal') != -1) {
    $('#GetRealModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#REVOModal') != -1) {
    $('#REVOModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#DesnatModal') != -1) {
    $('#DesnatModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#BikesModal') != -1) {
    $('#BikesModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#MAOModal') != -1) {
    $('#MAOModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#IClubModal') != -1) {
    $('#IClubModal').modal('show');
    window.location.hash = "";

  }
  else if(window.location.href.indexOf('#DebateModal') != -1) {
    $('#DebateModal').modal('show');
    window.location.hash = "";

  }


});
