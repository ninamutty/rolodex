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
  email: 'mdsne@msn.com',
  phone: '(206) 384-1249'
}];



$(document).ready(function() {
  var contactList = new Rolodex(contactData);

  var application = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  application.render();
});
