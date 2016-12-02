import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';



var contactData = [{
  name: 'Lisa Mutty',
  email: 'lisa@email.com',
  phone: '(211) 111-1111'
}, {
  name: 'Paul Mutty',
  email: 'paul@email.com',
  phone: '(222) 222-2222'
}
];

$(document).ready(function() {
  var contactList = new Rolodex(contactData);

  var application = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  application.render();


  $(document).click(function (e){
    // console.log("doc click");
    var container = $("#contact-details");
    var element = $(".contact-card");
    if (!element.children().is(e.target) && !element.is(e.target) && !container.is(e.target) &&  container.has(e.target).length === 0) {
      container.hide();
    } else {
      container.show();
    }
  });

});
