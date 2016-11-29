import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore'; // underscore library - works a lot like erb

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactModelList = [];

    this.contactViewList = [];

    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    // options.taskData.forEach(function(task) {
    //   this.addTask(task);
    // }, this);
  },


  render: function() {
    // Make sure the list in the DOM is empty before appending items (to keep from doubling)
    this.listElement.empty();

    this.contactViewList.forEach(function(contact) {
      contact.render();
      this.listElement.append(contact.$el);
    }, this)

    return this;
  },


  // addContact: function(rawContact) {
  //   var contact = new Contact(rawContact);
  //   this.contactModelList.push(contact);
  //   var card = new ContactView({
  //     model: contact,
  //     template: this.contactTemplate
  //   });
  //   // console.log(card.template);
  //   this.contactViewList.push(card);
  // }

  addContact: function(contact) {
    var contact = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.contactViewList.push(contact);
  }


});

export default RolodexView;
