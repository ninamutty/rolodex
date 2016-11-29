import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';


const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.model = options.contact;
    this.template = options.template;
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.delegateEvents();
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }

});

export default ContactView;
